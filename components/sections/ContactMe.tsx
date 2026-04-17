'use client'
import { motion } from 'framer-motion'
import { memo, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  EnvelopeSvg,
  GithubSvg,
  InstagramSvg,
  LinkedInSvg,
  XTwitterSvg,
} from '@/assets/text-svg-icons'
import { PERSONAL_LINKS } from '@/constants'

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
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-20 !min-h-[60dvh]"
    >
      <h2 className="text-primary text-2xl font-bold mb-8 text-center">
        Contact Me
      </h2>
      <div className="flex flex-1 flex-column items-center mt-10 justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-lg"
        >
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              className="rounded-md p-3 text-sm text-[var(--text)] bg-gray-50/10 border border-gray-50/20 outline-none"
              placeholder="Name"
              {...register('name', { required: 'Name is required' })}
            />
            <p className="text-red-400 !text-xs self-end mt-1">
              {errors.name?.message}
            </p>
          </div>

          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              className="rounded-md p-3 text-sm text-[var(--text)] bg-gray-50/10 border border-gray-50/20 outline-none"
              placeholder="Email"
              {...register('email', { required: 'Email is required' })}
            />
            <p className="text-red-400 !text-xs self-end mt-1">
              {errors.email?.message}
            </p>
          </div>

          <div className="flex flex-col">
            <textarea
              id="message"
              placeholder="Message"
              className="rounded-md h-[100px] p-3 text-sm text-[var(--text)] bg-gray-50/10 border border-gray-50/20 outline-none resize-none"
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            <p className="text-red-400 !text-xs self-end mt-1">
              {errors.message?.message}
            </p>
          </div>

          <button
            type="submit"
            className="primary-btn self-center mt-6"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="flex justify-center gap-4 mt-20">
        <a
          className="link-icon-btn"
          href={PERSONAL_LINKS.linkedin}
          target="_blank"
        >
          <LinkedInSvg className="w-5 h-5" fill="currentColor" />
        </a>
        <a
          className="link-icon-btn"
          href={PERSONAL_LINKS.github}
          target="_blank"
        >
          <GithubSvg className="w-5 h-5" fill="currentColor" />
        </a>
        <a
          className="link-icon-btn"
          href={PERSONAL_LINKS.email}
          target="_blank"
        >
          <EnvelopeSvg className="w-5 h-5" fill="currentColor" />
        </a>
        <a
          className="link-icon-btn"
          href={PERSONAL_LINKS.twitter}
          target="_blank"
        >
          <XTwitterSvg className="w-5 h-5" fill="currentColor" />
        </a>
        <a
          className="link-icon-btn"
          href={PERSONAL_LINKS.instagram}
          target="_blank"
        >
          <InstagramSvg className="w-5 h-5" fill="currentColor" />
        </a>
      </div>
    </motion.section>
  )
}

export default memo(ContactMe)
