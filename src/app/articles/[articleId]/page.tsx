import Link from "next/link";
import React from "react";

export default async function Page({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}>) {
  const { articleId } = await params;
  const { lang } = await searchParams;

  return (
    <div>
      <h1>New article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>
    </div>
  );
}
