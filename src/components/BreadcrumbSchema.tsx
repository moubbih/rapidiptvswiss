import StructuredData from "./StructuredData";

interface BreadcrumbItem { name: string; href: string; }

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://rapidiptvswiss.com${item.href}`,
    })),
  };
  return <StructuredData data={schema} id="breadcrumb-schema" />;
}
