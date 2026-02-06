'use client'

import environment from '@/config/environment'
import emailjs from '@emailjs/browser'
import { FormEvent, useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [nameError, setNameError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [subjectWordCount, setSubjectWordCount] = useState<number>(0)
  const [wordCount, setWordCount] = useState<number>(0)

  const validateName = (name: string): boolean => {
    const invalidChars = /[@#$%^&*()+=\[\]{};':"\\|,<>\/?]/
    if (invalidChars.test(name)) {
      setNameError('Name cannot contain special characters like @, #, $, etc.')
      return false
    }
    setNameError('')
    return true
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
      return false
    }
    setEmailError('')
    return true
  }

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    const words = text.trim().split(/\s+/).filter(word => word.length > 0)
    setSubjectWordCount(words.length)
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    const words = text.trim().split(/\s+/).filter(word => word.length > 0)
    setWordCount(words.length)
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    
    if (!formRef.current) return

    // Get form values
    const formData = new FormData(formRef.current)
    const name = formData.get('user_name') as string
    const email = formData.get('user_email') as string

    // Validate before sending
    const isNameValid = validateName(name)
    const isEmailValid = validateEmail(email)

    if (!isNameValid || !isEmailValid) {
      return
    }

    if (subjectWordCount > 20) {
      return
    }

    if (wordCount > 500) {
      return
    }

    setLoading(true)
    setSuccess(false)
    setError(false)

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
          setSubjectWordCount(0)
          setWordCount(0)
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
      <h2 className="text-4xl font-bold mb-12 text-center text-primary tracking-wider">
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
                onBlur={(e) => validateName(e.target.value)}
                className={`bg-gray-800/50 border ${nameError ? 'border-error' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                placeholder="What's your name?"
              />
              {nameError && <span className="text-error text-sm">{nameError}</span>}
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label htmlFor="user_email" className="text-gray-300 font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                required
                onBlur={(e) => validateEmail(e.target.value)}
                className={`bg-gray-800/50 border ${emailError ? 'border-error' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
                placeholder="What's your email?"
              />
              {emailError && <span className="text-error text-sm">{emailError}</span>}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="subject" className="text-gray-300 font-medium">Subject</label>
              <span className={`text-sm ${subjectWordCount > 20 ? 'text-error' : 'text-gray-400'}`}>
                {subjectWordCount}/20
              </span>
            </div>
            <input
              type="text"
              name="subject"
              required
              onChange={handleSubjectChange}
              className={`bg-gray-800/50 border ${subjectWordCount > 20 ? 'border-error' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`}
              placeholder="What's this about?"
            />
            {subjectWordCount > 20 && (
              <span className="text-error text-sm">Subject exceeds 20 words limit</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label htmlFor="message" className="text-gray-300 font-medium">Message</label>
              <span className={`text-sm ${wordCount > 500 ? 'text-error' : 'text-gray-400'}`}>
                {wordCount}/500
              </span>
            </div>
            <textarea
              name="message"
              required
              rows={5}
              onChange={handleMessageChange}
              className={`bg-gray-800/50 border ${wordCount > 500 ? 'border-error' : 'border-gray-700'} rounded-lg p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none`}
              placeholder="Write your message here..."
            />
            {wordCount > 500 && (
              <span className="text-error text-sm">Message exceeds 500 words limit</span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !!nameError || !!emailError || subjectWordCount > 20 || wordCount > 500}
            className="mt-4 py-3 px-8 bg-primary text-black font-bold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto md:self-end shadow-[0_0_15px_rgba(0,255,204,0.3)]"
          >
            {loading ? 'Sending...' : 'Send Email'}
          </button>

          {success && (
            <div className="p-4 bg-success/10 border border-success/50 text-success rounded-lg text-center animate-fade-in">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {error && (
            <div className="p-4 bg-error/10 border border-error/50 text-error rounded-lg text-center animate-fade-in">
              Something went wrong. Please try again later.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
