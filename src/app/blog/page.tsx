import React from "react";

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, 2000);
  });

  return <div>Blog</div>;
}
