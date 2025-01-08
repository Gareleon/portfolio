import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/main/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/components/main/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dragan Ignjatovic Portfolio",
  description:
    "Discover more about Dragan Ignjatovic, a web developer specializing in creating seamless user experiences.",
  keywords: "Dragan Ignjatovic, web development, portfolio, UI/UX, Next.js",
  openGraph: {
    title: "Dragan Ignjatovic Portfolio",
    description:
      "Explore the portfolio of Dragan Ignjatovic, a web developer skilled in creating sleek designs and robust functionality.",
    url: "https://draganignjatovic.com/",
    type: "website",
    images: [
      {
        url: "https://draganignjatovic.com/_next/image?url=%2Fimages%2Fdragan.jpg&w=640&q=75",
        width: 1200,
        height: 630,
        alt: "Dragan Ignjatovic Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dragan Ignjatovic Portfolio",
    description:
      "Find out more about Dragan Ignjatovic's work, expertise, and projects.",
    site: "@SimplifyProblem",
    images: [
      "https://draganignjatovic.com/_next/image?url=%2Fimages%2Fdragan.jpg&w=640&q=75",
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dragan Ignjatovic Portfolio",
              url: "https://draganignjatovic.com/",
              description:
                "Portfolio website showcasing the work and expertise of Dragan Ignjatovic, a web developer specializing in seamless user experiences.",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
