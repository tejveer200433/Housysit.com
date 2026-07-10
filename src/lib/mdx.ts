import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/blog-content");

export function getAllPosts() {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => {
      const fullPath = path.join(BLOG_DIR, file);
      return (
        fs.statSync(fullPath).isFile() &&
        (file.endsWith(".mdx") || file.endsWith(".md"))
      );
    });

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fileContent = fs.readFileSync(
      path.join(BLOG_DIR, filename),
      "utf-8"
    );
    const { data } = matter(fileContent);

    return {
      slug,
      ...data,
    };
  });
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  return matter(fileContent);
}
