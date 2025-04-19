import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <h2>Feature Productwws</h2>
      </body>
    </html>
  );
}
