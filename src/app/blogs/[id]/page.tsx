import ClientBlogPage from "./clientBlogPage";

type PageProps = {
  params: { id: string };
};

export default function Page({ params }: PageProps) {
  return <ClientBlogPage id={params.id} />;
}
