import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}