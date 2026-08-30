import '@/styles/globals.css';

export const metadata = {
  title: 'charity_organization-nonprofit-modern',
  description: 'charity_organization-nonprofit-modern',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
