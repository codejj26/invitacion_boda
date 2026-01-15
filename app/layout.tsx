import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Montserrat, Parisienne, Dancing_Script, Alex_Brush,Pinyon_Script } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
})

const cormorant = Cormorant_Garamond({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-serif-alt',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

const parisienne = Parisienne({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-romantic',
    display: 'swap',
})

const dancing = Dancing_Script({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-dancing',
    display: 'swap',
})
const pinyon = Pinyon_Script({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-pinyon',
    display: 'swap',
})

const alex = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-alex',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Nuestra Boda - Invitación',
    description: 'Te invitamos a celebrar nuestro día especial',
    icons: {
        icon: '/favicon.ico',
    },
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} ${parisienne.variable} ${dancing.variable} ${pinyon.variable}`}>
            <body>{children}</body>
        </html>
    )
}
