import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
    const projects = await getProjects()
    return (
        <main className='py-10'>
            <h1 className='text-7xl font-extrabold'>
                Hello I&apos;m{' '}
                <span className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent'>
                    Jose!
                </span>
            </h1>
            <p className='mt-3 text-xl text-gray-600'>Check out my projects!</p>
            <h2 className='mt-24 font-bold text-gray-700 text-3xl'>
                My Projects
            </h2>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects &&
                    projects.map((project) => (
                        <Link
                            key={project._id}
                            className='flex justify-center items-center flex-col border-2 border-gray-100 rounded-lg p-1 hover:scale-105 hover:border-cyan-500'
                            href={`/projects/${project.slug}`}
                        >
                            {project.image && (
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    width={210}
                                    height={70}
                                    className='object-cover rounded-lg'
                                />
                            )}
                            <div className='mt-3 font-extrabold bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent'>
                                {project.name}
                            </div>
                        </Link>
                    ))}
            </div>
        </main>
    )
}
