import Link from "next/link";
import React from "react";

function Home() {
  return (
    <html>
      <body>
        <h1>Hello World</h1>
        <Link href="/blog">Blog</Link>
      </body>
    </html>
  );
}

export default Home;
