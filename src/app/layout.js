import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: {
    default: "Bastien Autem — Développeur front-end orienté produit",
    template: "%s — Bastien Autem",
  },
  description:
    "Portfolio de Bastien Autem, développeur front-end orienté produit, spécialisé en React et Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-[var(--font-inter)] antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
