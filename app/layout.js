import './globals.css'
import { Inter, Poppins, Rubik_Mono_One } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'] })
export const rubik_one = Rubik_Mono_One({subsets: ['latin'], weight: ['400']})


export const metadata = {
  title: 'Arnau Canela',
  description: 'Portfolio of Arnau Canela',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
