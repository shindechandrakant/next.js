"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.replace("/");
  };

  throw new Error("hello");

  return (
    <>
      <div>OrderProduct</div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
