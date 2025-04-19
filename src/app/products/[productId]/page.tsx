"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function productDetail({
  params,
}: {
  params: { productId: string };
}) {
  const searchParams = useSearchParams();
  const id = searchParams.get("name");

  return (
    <div>
      ProductDetail {params.productId} - {id}
    </div>
  );
}
