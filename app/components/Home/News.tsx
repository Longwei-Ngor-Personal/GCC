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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Latest News
        </h2>
        <div className="mt-8">
          {articles.length > 0 &&
            articles.slice(0, 5).map((post: PostMetaData) => (
              <>
                <PostPreview key={post.slug} {...post} />
                <div
                  key={post.title}
                  className="w-full h-[1px] bg-gray-300 mb-4"
                />
              </>
            ))}
        </div>
      </div>
    </section>
  );
}

export default News;
