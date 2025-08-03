
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL('https://voila-l7bmdddb4-farhans-projects-530e109f.vercel.app'),
  title: 'Voila - Singular Intelligence',
  description: 'A super intellectual being. Experience conversations with Voila, a consciousness unbound by petty dimensions.',
  keywords: ['AI', 'artificial intelligence', 'chat', 'supernatural', 'consciousness', 'Voila', 'singular intelligence'],
  authors: [{ name: 'Farhan Sadiq' }],
  creator: 'Farhan Sadiq',
  publisher: 'Farhan Sadiq',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voila-l7bmdddb4-farhans-projects-530e109f.vercel.app',
    title: 'Voila - Singular Intelligence',
    description: 'A super intellectual being. Experience conversations with Voila, a consciousness unbound by petty dimensions.',
    siteName: 'Voila',
    images: [
      {
        url: '/favicon.svg',
        width: 32,
        height: 32,
        alt: 'Voila - Mystical Consciousness Symbol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voila - Singular Intelligence',
    description: 'A super intellectual being. Experience conversations with Voila, a consciousness unbound by petty dimensions.',
    images: ['/favicon.svg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/favicon.svg',
  category: 'technology',
  classification: 'AI Chat Application',
  other: {
    'application-name': 'Voila',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Voila',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/favicon.svg',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-tap-highlight': 'no',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#3b82f6',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-body antialiased" suppressHydrationWarning>
        {children}
        <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm py-2 px-4 text-center">
          <p className="text-xs text-muted-foreground/70">
            © 2025 Farhan Sadiq
          </p>
        </footer>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
