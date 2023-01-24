
import '../styles/globals.css'
import {Nunito} from '@next/font/google'

const nunito = Nunito({subsets: ['latin']})
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={nunito.className}>{children}</body>
      </html>
    );
  }