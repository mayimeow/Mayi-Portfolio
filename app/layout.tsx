import { Quicksand, Poppins, Space_Mono } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL("https://mayi-portfolio.vercel.app"),
  title: "Mayi Gumafelix — Big Data Analytics",
  description: "Portfolio of Mary Ann 'Mayi' Gumafelix, Computer Engineering student majoring in Big Data Analytics. Dashboards, data pipelines, and full-stack data apps.",
  openGraph: {
    title: "Mayi Gumafelix — Big Data Analytics",
    description: "Computer Engineering student majoring in Big Data Analytics. Dashboards, data pipelines, and full-stack data apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayi Gumafelix — Big Data Analytics",
    description: "Computer Engineering student majoring in Big Data Analytics.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={quicksand.variable + " " + poppins.variable + " " + spaceMono.variable}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
