'use client'
import { useState } from 'react'

interface FormData {
    name: string
    email: string
    message: string
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Perform form submission logic here
        console.log(formData) // Example: Logging form data to the console
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow'
        >
            <div className='flex justify-between'>
                <div className='mx-1'>
                    <label
                        htmlFor='name'
                        className='text-gray-700 px-4'
                    >
                        Name:
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Name'
                        required
                    />
                </div>
                <div className='mx-1'>
                    <label
                        htmlFor='email'
                        className='text-gray-700 px-4'
                    >
                        Email:
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        className='rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent mb-5'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                    />
                </div>
            </div>
            <div>
                <label
                    htmlFor='message'
                    className='text-gray-700 px-4'
                >
                    Message:
                </label>
                <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-2 mt-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                    placeholder='Enter your message'
                    rows={5}
                    cols={40}
                    required
                ></textarea>
            </div>
            <button
                type='submit'
                className='bg-cyan-500 rounded-lg text-gray-50 font-bold py-3 px-4 mt-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition'
            >
                Send
            </button>
        </form>
    )
}

export default ContactForm
