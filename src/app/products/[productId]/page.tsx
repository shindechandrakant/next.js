import React from "react";

import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title: string = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Product is ${params.productId}`);
    }, 1000);
  });

  console.log({ title });
  return {
    title: title,
    description: `Detail page for ${params.productId}`,
  };
};

export default function productDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <div>ProductDetail {params.productId}</div>;
}
