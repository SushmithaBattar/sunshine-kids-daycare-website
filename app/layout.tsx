import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Sunshine Kids Day Care - Premier Child Care in [Your City]",
    template: "%s | Sunshine Day Care",
  },
  description:
    "Premium animal-themed day care center providing exceptional early childhood education and care for infants through pre-K. Licensed, safe, and nurturing environment in [Your City].",
  keywords: [
    "daycare",
    "child care",
    "preschool",
    "early childhood education",
    "infant care",
    "toddler care",
    "pre-k",
    "[Your City] daycare",
    "licensed daycare",
    "animal themed daycare",
  ],
  authors: [{ name: "Sunshine Day Care" }],
  creator: "Sunshine Day Care",
  publisher: "Sunshine Day Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.sunshinekidsdaycare.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sunshinekidsdaycare.com",
    title: "Sunshine Kids Day Care - Premier Child Care",
    description: "Premium animal-themed day care center providing exceptional early childhood education and care.",
    siteName: "Sunshine Kids Day Care",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunshine Day Care - Where Little Animals Learn & Play",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunshine Kids Day Care - Premier Child Care",
    description: "Premium animal-themed day care center providing exceptional early childhood education and care.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "Sunshine Day Care",
              description:
                "Premium animal-themed day care center providing exceptional early childhood education and care for infants through pre-K.",
              url: "https://www.sunshinekidsdaycare.com",
              telephone: "(555) 123-4567",
              email: "info@yourdomain.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Sunshine Avenue",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "12345",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7128",
                longitude: "-74.0060",
              },
              openingHours: ["Mo-Fr 07:00-18:00"],
              priceRange: "$200-$400",
              image: "https://www.sunshinekidsdaycare.com/og-image.png",
              sameAs: ["https://www.facebook.com/sunshinedaycare", "https://www.instagram.com/sunshinedaycare"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
