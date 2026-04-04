import { PERSONAL_LINKS } from '@/constants'

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="number" name="phone" id="phone" placeholder="Phone" />
        <textarea name="message" id="message" placeholder="Message"></textarea>
        <button type="submit" className="send-message">
          Send Message
        </button>
      </form>
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
