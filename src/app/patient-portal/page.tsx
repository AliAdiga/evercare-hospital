import type { Metadata } from 'next'
import PageChrome from '@/components/PageChrome'
import PortalLogin from '@/components/PortalLogin'

export const metadata: Metadata = {
  title: 'Patient Portal',
  description: 'Sign in to the Evercare patient portal to view appointments, lab results, prescriptions, secure messages, and billing in one place.',
}

export default function PatientPortalPage() {
  return (
    <PageChrome
      eyebrow="Patient Portal"
      title="Your health, all in one place"
      intro="View upcoming appointments, lab results, prescriptions, and securely message your care team — anytime, from any device."
    >
      <PortalLogin />
    </PageChrome>
  )
}
