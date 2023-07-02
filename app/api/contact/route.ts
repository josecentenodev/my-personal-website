import { mailOptions, transporter } from '@/config/nodemailer'

interface ContactFormData {
    name: string
    email: string
    message: string
}

export async function POST(req: any, res: any) {
    if (req.method === 'POST') {
        const { name, email, message }: ContactFormData = await req.json()
        try {
            await transporter.sendMail({
                ...mailOptions,
                text: message,
                html: `<h1>Message from ${name}</h1><p>${message}</p><p>mail: ${email}</p>`,
            })

            return new Response('Email sent successfully', { status: 200 })
        } catch (error) {
            return new Response('An error occurred while sending the email.', {
                status: 500,
            })
        }
    } else {
        return new Response('Only POST requests are allowed.', { status: 405 })
    }
}
