import ContactForm from '@/components/shared/ContactForm'
import { Header } from '@/components/shared/Header'

const ContactPage = () => {
  return (
    <>
      <div className="mb-20 space-y-6">
        <Header
          description={"Get in contact with us, we'd love to hear from you"}
          title="Contact Us"
        />
      </div>
      <div className="mx-auto max-w-2xl">
        <ContactForm />
      </div>
    </>
  )
}

export default ContactPage
