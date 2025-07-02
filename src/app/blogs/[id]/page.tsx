import ClientBlogPage from "./clientBlogPage";

type PageProps = {
  params: { id: string };
};

export default async function BlogPage({ params }: PageProps) {
  return <ClientBlogPage id={decodeURIComponent(params.id)} />;
}
