type Props = {
    params: { slug: string }
}
import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug)

    return (
        <section>
            <header className='flex items-center justify-between'>
                <h1 className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow'>
                    {page.title}
                </h1>
            </header>
            {/* { content goes here } */}
            <div className='text-lg text-gray-700 mt-5'>
                <PortableText value={page.content} />
            </div>
        </section>
    )
}
