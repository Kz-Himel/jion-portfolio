import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Md Jion Mia | Graphics Designer Portfolio",

  description:
    "Premium Graphics Designer & Brand Identity Expert",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body className="bg-dark-base text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}