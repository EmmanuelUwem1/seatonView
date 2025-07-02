// app/blogs/[id]/page.tsx
import ClientBlogPage from "./clientBlogPage";

export default function BlogPage({ params }: { params: { id: string } }) {
  return <ClientBlogPage id={decodeURIComponent(params.id)} />;
}
