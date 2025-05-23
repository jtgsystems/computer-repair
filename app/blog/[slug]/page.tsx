import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

// export const metadata: MetadataRoute = {
//   title: "Blog Post",
//   description: "Generated by Next.js",
// }

export default async function PostPage(props: {
    params: Promise<{ slug: string }>;
}) {
    const params = await props.params;
	const slugRaw = params.slug;

    const post = await getPostBySlug(slugRaw);
    if (!post) {
        notFound();
    }

    return (
        <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
                Published on {formatDate(post.date)} in{" "}
                {post.categories.map((category, index) => (
                    <span
                        key={index}
                        className="bg-[#E4EDEF] text-[#1D4D84] inline-block px-2 py-1 rounded-md mr-2"
                    >
                        {category}
                    </span>
                ))}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="mt-8">
                <Link
                    href="/blog"
                    className="text-[#4B6E97] hover:text-[#1D4D84]"
                >
                    Read More
                </Link>
            </div>
            <div className="mt-8 flex justify-between">
                {post.previous && (
                    <Link
                        href={`/blog/${post.previous.slug}`}
                        className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] px-4 py-2 rounded-md"
                    >
                        Previous Post
                    </Link>
                )}
                {post.next && (
                    <Link
                        href={`/blog/${post.next.slug}`}
                        className="bg-[#1D4D84] text-white hover:bg-[#4B6E97] px-4 py-2 rounded-md"
                    >
                        Next Post
                    </Link>
                )}
            </div>
        </article>
    );
}

export async function generateMetadata(props: {
    params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
    const post = await getPostBySlug(params.slug);
    if (!post) {
        return { title: "Not Found" };
    }
    return {
        title: post.title,
        description: post.excerpt,
    };
}

// export async function generateStaticParams() {
//     const posts = await getAllPosts();
//     return posts.map((post) => ({ slug: post.slug }));
// }
