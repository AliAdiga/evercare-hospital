export type Treatment = {
  slug: string
  name: string
  dept: string
  deptSlug: string
  summary: string
  whatItIs: string
  whatToExpect: string[]
  recovery: string
  whyEvercare: string
}

export const treatments: Treatment[] = [
  {
    slug: 'coronary-angioplasty',
    name: 'Coronary Angioplasty',
    dept: 'Cardiology',
    deptSlug: 'cardiology',
    summary: 'A minimally invasive procedure to open narrowed or blocked heart arteries and restore healthy blood flow.',
    whatItIs:
      'Coronary angioplasty (also called PCI) reopens arteries narrowed by plaque. A thin catheter is guided to the blockage, a small balloon is inflated to widen the artery, and a stent is usually placed to keep it open. Most patients are awake under light sedation.',
    whatToExpect: [
      'Pre-procedure: blood tests, an ECG, and imaging to map your arteries.',
      'During: a small catheter is inserted, usually through the wrist. The blockage is opened and a stent placed. Typically 30–90 minutes.',
      'After: a few hours of monitoring; many patients go home the same day or the next morning.',
    ],
    recovery:
      'Most people return to light activity within a week. You’ll start or continue medication to protect the stent, and our cardiac rehab team builds a personalized recovery and prevention plan.',
    whyEvercare:
      'Our cath labs offer radial (wrist) access for faster, more comfortable recovery, and our interventional team performs a high annual volume with published outcomes.',
  },
  {
    slug: 'minimally-invasive-spine-surgery',
    name: 'Minimally Invasive Spine Surgery',
    dept: 'Orthopedics',
    deptSlug: 'orthopedics',
    summary: 'Advanced techniques that relieve nerve and back pain through small incisions — less tissue damage, faster recovery.',
    whatItIs:
      'Minimally invasive spine surgery treats conditions like herniated discs, spinal stenosis, and instability using small incisions, tubular retractors, and microscopic or endoscopic visualization. This spares muscle and reduces blood loss compared to open surgery.',
    whatToExpect: [
      'Pre-surgery: MRI review, a tailored surgical plan, and a clear discussion of risks and alternatives.',
      'During: small incisions and specialized instruments address the affected area precisely. Often 1–3 hours.',
      'After: shorter hospital stay — many procedures are same-day or one night.',
    ],
    recovery:
      'Reduced post-operative pain and quicker mobilization are common. Physical therapy begins early, and most patients resume desk work within 2–4 weeks depending on the procedure.',
    whyEvercare:
      'Our spine team combines fellowship-trained surgeons with intraoperative navigation, and pairs every case with structured rehabilitation.',
  },
  {
    slug: 'pediatric-asthma-care',
    name: 'Pediatric Asthma Care',
    dept: 'Pediatrics',
    deptSlug: 'pediatrics',
    summary: 'A complete, child-friendly program to control asthma, prevent flare-ups, and keep kids active and breathing easy.',
    whatItIs:
      'Our pediatric asthma program diagnoses and manages childhood asthma with a personalized action plan. We identify triggers, optimize inhaler technique, and partner with families and schools so children can play, sleep, and learn without limits.',
    whatToExpect: [
      'Assessment: breathing tests appropriate for your child’s age, allergy evaluation, and trigger review.',
      'Plan: a written asthma action plan with daily controllers and clear rescue steps.',
      'Education: hands-on inhaler and spacer coaching for parents and kids.',
    ],
    recovery:
      'With the right plan, most children dramatically reduce flare-ups and ER visits. We schedule regular reviews to adjust treatment as your child grows.',
    whyEvercare:
      'A dedicated pediatric team, a calm child-friendly environment, and 24/7 access to advice mean families are never managing asthma alone.',
  },
]

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug)
}
