import './globals.css'

// components
import Navbar from './(shared)/Navbar';

// fonts
import { Open_Sans} from 'next/font/google';

const openSans = Open_Sans({
  subsets: ["latin"],
})


// meta data
export const metadata = {
  title: 'Blog Site',
  description: 'Blog built in Next.js using AI',
}


// app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  )
}
