import BlogInternalRelationships from "@/components/blog/navigation/BlogInternalRelationships";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BlogInternalRelationships />
    </>
  );
}
