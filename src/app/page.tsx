import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Accreditations from '@/components/Accreditations'
import Insurance from '@/components/Insurance'
import SpecialtyMarquee from '@/components/SpecialtyMarquee'
import Departments from '@/components/Departments'
import Doctors from '@/components/Doctors'
import Facilities from '@/components/Facilities'
import Appointment from '@/components/Appointment'
import Emergency from '@/components/Emergency'
import News from '@/components/News'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LiveChat from '@/components/LiveChat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <WhyUs />
      <Testimonials />
      <Accreditations />
      <Insurance />
      <SpecialtyMarquee />
      <Departments />
      <Doctors />
      <Facilities />
      <Appointment />
      <Emergency />
      <News />
      <Contact />
      <Footer />
      <LiveChat />
    </main>
  )
}