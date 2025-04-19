import React from "react";
import { notFound } from "next/navigation";

export default function Docs({
  params,
}: Readonly<{ params: { slug: string[] } }>) {
  if (params.slug.length === 2) {
    notFound();
  }
  return <div>Docs, {params?.slug?.join("/")}</div>;
}
