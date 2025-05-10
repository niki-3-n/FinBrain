import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinBrain - Learn Trading and Finance',
  description: 'Master trading and finance with our comprehensive courses and expert-led tutorials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 