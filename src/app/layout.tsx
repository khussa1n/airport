import type { Metadata } from 'next';
import '@/app/ui/globals.css';
import NavBar from '@/app/ui/nav-bar';

export const metadata: Metadata = {
  title: 'Airport',
  description: 'Airport',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-slate-50">
        <div className="w-[1920px]">
          <NavBar />
          <div className="min-h-screen">{children}</div>
          <footer className="bottom-0 h-20 bg-black"></footer>
        </div>
      </body>
    </html>
  );
}
