import ContactForm from '@/components/shared/ContactForm'
import { Header } from '@/components/shared/Header'

const ContactPage = () => {
  return (
    <div className='flex flex-col w-full'>
      <Header
        description={"Get in contact with us, we'd love to hear from you"}
        title="Contact Us"
      />
      <div className='max-w-sm mt-20 flex justify-center'>
      <ContactForm />

      </div>
    </div>
  )
}

export default ContactPage
