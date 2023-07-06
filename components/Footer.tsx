import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='flex justify-center items-start pt-10 py-5 text-gray-400'>
            <div className='flex flex-col items-center pt-2'>
                <p className='p-1'>🧔🏻Jose Antonio Centeno</p>
                <p className='p-1'>📍Cordoba, Argentina</p>
                <p className='p-1'>📱+543517382518</p>
                <div className='pt-1 flex items-center justify-center'>
                    <Link
                        className='mx-1'
                        href='https://www.instagram.com/citodesu/'
                        target='_blank'
                    >
                        <Image
                            src='/assets/icons/instagram.svg'
                            alt='Instagram logo'
                            width={25}
                            height={25}
                        />
                    </Link>
                    <Link
                        className='mx-1'
                        href='https://www.linkedin.com/in/josecentenodev/'
                        target='_blank'
                    >
                        <Image
                            src='/assets/icons/linkedin.svg'
                            alt='Instagram logo'
                            width={25}
                            height={25}
                        />
                    </Link>
                    <Link
                        className='mx-1'
                        href='https://github.com/josecentenodev/'
                        target='_blank'
                    >
                        <Image
                            src='/assets/icons/github.svg'
                            alt='Instagram logo'
                            width={25}
                            height={25}
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
