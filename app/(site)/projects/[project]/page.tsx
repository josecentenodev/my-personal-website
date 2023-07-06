import { Button } from '@/components/ui/button'
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
        <section className='py-10'>
            <header className='flex items-center justify-between'>
                <h1 className='bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow'>
                    {project.name}
                </h1>
                <Button className='bg-pink-500 rounded-lg text-gray-50 font-bold py-3 px-4 mt-4 whitespace-nowrap hover:bg-cyan-500 hover:text-pink-100 transition w-28'>
                    <a
                        href={project.url}
                        title='View Project'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        View Project
                    </a>
                </Button>
            </header>
            {/* { content goes here } */}
            <div className='text-lg text-left text-gray-700 mt-5'>
                <PortableText value={project.content} />
            </div>
            {/* { image goes here } */}
            <Image
                src={project.image}
                alt={project.name}
                width={210}
                height={70}
                className='mt-10 p-2 border-2 border-gray-100 object-cover rounded-xl mx-auto'
            />
        </section>
    )
}
