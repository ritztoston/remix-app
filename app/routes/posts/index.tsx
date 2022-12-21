import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

type LoaderData = {
  posts: {
    slug: string;
    title: string;
  }[];
};

export const loader: LoaderFunction = async () => {
  const posts = [
    { slug: "my-first-post", title: "My First Post!" },
    { slug: "trail-riding-with-onewheel", title: "Trail Riding with Onewheel" },
  ];
  return json<LoaderData>({ posts });
};

export default function PostsRoute() {
  const { posts } = useLoaderData() as LoaderData;

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="text-blue-600 underline">
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
