/* eslint-disable @typescript-eslint/no-explicit-any */
interface StructuredDataProps {
  data: Record<string, any>;
  id?: string;
}

export default function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <script
      id={id || "structured-data"}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
