export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Parent Header</h1>
        </header>
        {children}
        <h2>Application root file</h2>
      </body>
    </html>
  );
}
