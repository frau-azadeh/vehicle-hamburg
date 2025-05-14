import { Toaster } from 'react-hot-toast';
import './globals.css';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-text min-h-screen antialiased">
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'hsl(0, 0%, 100%)',
              color: 'hsl(220, 35%, 20%)',
              border: '1px solid hsl(231, 76%, 90%)',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
