export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Children Header</h1>
        </header>
        <h2>Inner Layout</h2>
        {children}
      </body>
    </html>
  );
}
