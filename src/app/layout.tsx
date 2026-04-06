import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { AIAssistant } from "@/components/AIAssistant";
import { ThemeToggle } from "@/components/ThemeToggle";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aaabad Ahmed - Software Engineer",
  description: "A Software Engineer who has developed countless innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeInitScript = `
    (function () {
      try {
        var savedTheme = localStorage.getItem("theme");
        var theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } catch (e) {
        document.documentElement.classList.add("dark");
      }
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans min-h-screen bg-background flex flex-col text-foreground selection:bg-primary/30">
        <ThemeToggle />
        <FloatingNavbar />
        {children}
        <footer className="mt-1 border-t border-zinc-300/70 bg-zinc-100 transition-colors duration-300 dark:border-white/10 dark:bg-zinc-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between text-xs md:text-sm">
            <p className="tracking-wide text-zinc-700 transition-colors duration-300 dark:text-zinc-200">
              &copy; 2026 Developed with by Rayyan Shaji Ansari
            </p>
            <div className="uppercase tracking-[0.2em] text-xs md:text-sm text-zinc-500 transition-colors duration-300 dark:text-zinc-400">
              <a href="/rss.xml" className="hover:opacity-70 transition-opacity">
                RSS Feed
              </a>
              <span className="mx-3">/</span>
              <a href="/sitemap.xml" className="hover:opacity-70 transition-opacity">
                Site Mapping
              </a>
            </div>
          </div>
        </footer>
        <AIAssistant />
      </body>
    </html>
  );
}
