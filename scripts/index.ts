import path from "node:path";

const fromRoot = (p: string) => path.join(import.meta.dir, "../", p);
const config = Bun.file(fromRoot(`leet.config.json`));

const slug = Bun.argv[2];

const questionEditorDataQuery = (s: string) =>
  JSON.stringify({
    query: `
    query questionEditorData($slug: String!) {
      question(titleSlug: $slug) {
        questionId
        codeSnippets {
          lang
          langSlug
          code
        }
      }
    }
  `,
    variables: { slug: s },
  });

function main(slug: string) {
  if (!slug) {
    console.log("No slug provided");
    return;
  }

  fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `LEETCODE_SESSION=${Bun.env.LEETCODE_SESSION}`,
      "x-csrftoken": Bun.env.CSRF_TOKEN ?? "",
    },
    body: questionEditorDataQuery(slug),
  })
    .then((res) => res.json())
    .then(({ data }) => {
      const { question } = data;

      if (!question) throw Error(`Unable to find question ${slug}`);

      const snippet = question.codeSnippets.find(
        (q) => q.langSlug === "typescript",
      );

      if (!snippet) throw Error(`${slug} unavailable in Typescript`);

      Bun.write(fromRoot(`src/${slug}.ts`), `export ${snippet.code}`);
      console.log(`Created src/${slug}.ts with starter snippet`);
    })
    .catch((e) => console.error(e.toString()));
}

main(slug);
