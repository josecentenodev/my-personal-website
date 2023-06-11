import { getProject } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

type Props = {
    params: { project: string }
}

export default async function Project({ params }: Props) {
    const slug = params.project
    const project = await getProject(slug)
    return (
        <section>
            <header className='flex items-center justify-between'>
                <h1 className='bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow'>
                    {project.name}
                </h1>

                <a
                    href={project.url}
                    title='View Project'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition'
                >
                    View Project
                </a>
            </header>
            {/* { content goes here } */}
            <div className='text-lg text-gray-700 mt-5'>
                <PortableText value={project.content} />
            </div>
            {/* { image goes here } */}
            <Image
                src={project.image}
                alt={project.name}
                width={210}
                height={70}
                className='mt-10 p-2 border-2 border-gray-100 object-cover rounded-xl'
            />
        </section>
    )
}
