import '../globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'

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
    // get all of my pages
    const pages = await getPages()
    return (
        <html lang='en'>
            <body className='max-w-3xl mx-auto'>
                <header className='flex items-center justify-between py-10'>
                    <Link
                        href='/'
                        className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent text-lg font-bold'
                    >
                        🏠
                    </Link>

                    <div className='flex items-center gap-5 text-gray-600'>
                        {pages &&
                            pages.map((page) => (
                                <Link
                                    key={page._id}
                                    href={`/${page.slug}`}
                                    className='hover:underline'
                                >
                                    {page.title}
                                </Link>
                            ))}
                    </div>
                </header>
                {children}
            </body>
        </html>
    )
}
