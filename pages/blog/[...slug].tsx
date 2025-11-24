import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <div>
        <h1>Blog Posts</h1>
        <p>Your blog post</p>
        <p>Slug: {slug}</p>
    </div>
  );
}