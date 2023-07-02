import NavBar from '@/components/NavBar'
import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { getPages } from '@/sanity/sanity-utils'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'Jose Centeno Dev Portfolio',
    description:
        'JoseCentenoDev Portfolio with Nextjs 13, Sanity.io, TailwindCSS and TypeScript',
    icons: {
        icon: '/favicon.ico',
    },
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pages = await getPages()
    return (
        <html lang='en'>
            <body className='max-w-3xl mx-auto px-2 lg:px-0 text-center lg:text-left'>
                <NavBar pages={pages} />
                {children}
                <Footer />
            </body>
        </html>
    )
}
