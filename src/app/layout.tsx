import './globals.css';

 function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text min-h-screen antialiased">
         {children}
      </body>
    </html>
  );
}
export default RootLayout
