import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: {
    default: "WINAfrica Foundation",
    template: "%s | WINAfrica Foundation",
  },
  description:
    "WINAfrica Foundation is an indigenous, not-for-profit health organization working to improve the health and well-being of individuals, families and communities in Northern Uganda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
