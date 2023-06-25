import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='flex justify-center items-start pt-10 py-5 text-gray-400'>
            <div className='flex flex-col items-center p-2'>
                <p>🧔🏻Jose Antonio Centeno</p>
                <p>📍Cordoba, Argentina</p>
                <p>📱+543517382518</p>
                <div className='flex items-center justify-center'>
                    <Link
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
                </div>
            </div>
        </footer>
    )
}
