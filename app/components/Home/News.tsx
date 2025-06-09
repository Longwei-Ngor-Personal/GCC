import Link from "next/link";
import PostPreview from "../PostPreview";

export interface PostMetaData {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

async function News() {
  const data = await fetch("https://gcc-articles.vercel.app/api/articles");
  const articles = await data.json();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Latest News
          </h2>
          <Link
            href="https://gcc-articles.vercel.app/articles"
            className="hover:underline font-semibold text-sm"
            target="_blank"
          >
            View all
          </Link>
        </div>
        <div className="mt-8">
          {articles.length > 0 &&
            articles.slice(0, 5).map((post: PostMetaData) => (
              <>
                <PostPreview key={post.slug} {...post} />
              </>
            ))}
        </div>
      </div>
    </section>
  );
}

export default News;
