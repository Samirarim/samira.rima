'use client'

import environment from '@/config/environment'
import emailjs from '@emailjs/browser'
import { FormEvent, useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    if (!formRef.current) return

    emailjs
      .sendForm(
        environment?.serviceId!,
        environment?.templateId!,
        formRef.current,
        environment?.publicKey!
      )
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
          formRef.current?.reset()
        },
        (error) => {
          console.error('FAILED...', error)
          setLoading(false)
          setError(true)
        }
      )
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#00ffcc] tracking-wider">
        Get In Touch
      </h2>
      
      <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm border border-gray-800 shadow-xl">
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="user_name" className="text-gray-300 font-medium">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ffcc] focus:ring-1 focus:ring-[#00ffcc] transition-colors"
                placeholder="What's your name?"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="user_email" className="text-gray-300 font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ffcc] focus:ring-1 focus:ring-[#00ffcc] transition-colors"
                placeholder="What's your email?"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-gray-300 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ffcc] focus:ring-1 focus:ring-[#00ffcc] transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-300 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00ffcc] focus:ring-1 focus:ring-[#00ffcc] transition-colors resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 py-3 px-8 bg-[#00ffcc] text-black font-bold rounded-lg hover:bg-[#00ccaa] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto md:self-end shadow-[0_0_15px_rgba(0,255,204,0.3)]"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/50 text-green-400 rounded-lg text-center animate-fade-in">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg text-center animate-fade-in">
              Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
