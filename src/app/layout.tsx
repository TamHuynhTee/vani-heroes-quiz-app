import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ProviderTree from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vani Heroes Quiz',
  description: 'Vani Heroes Quiz app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderTree>
        <body className={inter.className}>{children}</body>
      </ProviderTree>
    </html>
  );
}
