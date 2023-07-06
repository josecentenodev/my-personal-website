'use client'
import { sendContactForm } from '@/lib/sendMail'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { setTimeout } from 'timers'
import { Button } from './ui/button'

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

    const [errorMessage, setErrorMessage] = useState(null)

    const [isDisabled, setIsDisabled] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsDisabled(true)
        // Perform form submission logic here
        // Example: Logging form data to the console
        try {
            await sendContactForm(formData)
            setErrorMessage(null)
            toast.success(
                'Message Sent. Thank you for texting me, I will text you back soon! 🧔🏻',
                { autoClose: 5000 }
            )
            setTimeout(() => setIsDisabled(false), 5000)
        } catch (error: any) {
            setErrorMessage(error.message)
            toast.error(errorMessage, { autoClose: 5000 })
        }
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
            <div className='flex flex-col'>
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
                <Button
                    type='submit'
                    className='bg-pink-500 rounded-lg text-gray-50 font-bold py-3 px-4 mt-4 whitespace-nowrap hover:bg-cyan-500 hover:text-pink-100 transition w-28 self-end disabled:bg-gray-500'
                    disabled={isDisabled}
                >
                    {isDisabled ? '...' : 'Send'}
                </Button>
            </div>
            <ToastContainer draggablePercent={60} />
        </form>
    )
}

export default ContactForm
