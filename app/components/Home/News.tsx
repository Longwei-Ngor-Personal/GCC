import Link from "next/link";
import PostPreview from "../PostPreview";

export interface PostMetaData {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

const recentVideoLinks = [
  "https://www.youtube.com/embed/DyqtIKB6HnU",
  "https://www.youtube.com/embed/YYqrWYdbe10",
  "https://www.youtube.com/embed/6kWMDmHDxXc",
  "https://www.youtube.com/embed/H0HUD6XnUvU",
  "https://www.youtube.com/embed/g832nTTwMfw",
  "https://www.youtube.com/embed/J1-FqMZ0ecE",
];

async function News() {
  const data = await fetch("https://gcc-articles.vercel.app/api/articles");
  const articles = await data.json();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div>
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
              articles
                .slice(0, 5)
                .map((post: PostMetaData) => (
                  <PostPreview key={post.slug} {...post} />
                ))}
          </div>
        </div>
        <div className="mt-16">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Latest Videos
            </h2>
            <Link
              href="https://www.youtube.com/@gcc3090"
              className="hover:underline font-semibold text-sm"
              target="_blank"
            >
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {recentVideoLinks.map((video, idx) => (
              <iframe
                key={idx}
                height="315"
                src={video}
                title={`YouTube video ${idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full"
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
