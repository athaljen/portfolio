'use client'
import { memo, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import { PERSONAL_LINKS } from '@/constants'
import './contact.module.css'

type FormInputs = {
  name: string
  email: string
  phone: number
  message: string
}

function ContactMe() {
  const [sending, setSending] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  const onSubmit = useCallback(async (data: FormInputs) => {
    try {
      setSending(true)
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => res.json())
    } catch {
      // alert('Failed to send message. Please try again later.')
    } finally {
      setSending(false)
    }
  }, [])

  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              {...register('name', { required: 'Name is required' })}
            />
            <p className="contact-me-error">{errors.name?.message}</p>
          </div>

          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
            />
            <p className="contact-me-error">{errors.email?.message}</p>
          </div>

          <input
            type="number"
            id="phone"
            placeholder="Phone"
            {...register('phone')}
          />

          <div>
            <textarea
              id="message"
              placeholder="Message"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            <p className="contact-me-error">{errors.message?.message}</p>
          </div>

          <button type="submit" className="send-message">
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="contact-icons">
        <a href={PERSONAL_LINKS.linkedin} target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href={PERSONAL_LINKS.github} target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={PERSONAL_LINKS.email} target="_blank">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href={PERSONAL_LINKS.twitter} target="_blank">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href={PERSONAL_LINKS.instagram} target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </section>
  )
}

export default memo(ContactMe)
