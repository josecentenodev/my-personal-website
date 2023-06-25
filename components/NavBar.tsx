import Link from 'next/link'

interface Page {
    _id: string
    slug: string
    title: string
}

interface NavBarProps {
    pages: Page[]
}

const NavBar: React.FC<NavBarProps> = ({ pages }) => {
    return (
        <header className='flex items-center justify-between py-5'>
            <Link
                href='/'
                className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent text-lg font-bold'
            >
                🏠
            </Link>

            <div className='flex items-center gap-5 text-gray-600'>
                <Link
                    href='/about'
                    className='px-2 hover:underline'
                >
                    About
                </Link>
                <Link
                    href='/contact'
                    className='px-2 hover:underline'
                >
                    Contact
                </Link>
                {pages &&
                    pages.map((page) => (
                        <Link
                            key={page._id}
                            href={`/${page.slug}`}
                            className='px-2 hover:underline'
                        >
                            {page.title}
                        </Link>
                    ))}
            </div>
        </header>
    )
}

export default NavBar
