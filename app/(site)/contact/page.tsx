import ContactForm from '@/components/ContactForm'

export default function Page() {
    return (
        <main className='py-10'>
            <header className='flex items-center justify-between'>
                <h1 className='bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow'>
                    Contact Me
                </h1>
            </header>
            <section className='text-lg text-left text-gray-700 mt-5'>
                <p>
                    Have a question, project idea, or just want to say hello?
                    I&apos;d love to hear from you! Send me a message, and
                    let&apos;s start a conversation.
                </p>
                <div className=''>
                    <ContactForm />
                </div>
            </section>
        </main>
    )
}
