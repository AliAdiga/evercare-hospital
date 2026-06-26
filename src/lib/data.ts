export const departments = [
  {
    icon: '❤️',
    color: '#fdeaea',
    name: 'Cardiology',
    desc: 'Advanced heart care including diagnostics, interventional procedures, and cardiac rehabilitation.',
  },
  {
    icon: '🧠',
    color: '#e8f5f0',
    name: 'Neurology',
    desc: 'Comprehensive neurological care for stroke, epilepsy, Parkinson\'s, and brain tumors.',
  },
  {
    icon: '👶',
    color: '#fef3e2',
    name: 'Pediatrics',
    desc: 'Gentle, expert care for children from newborns through adolescence in a comforting environment.',
  },
  {
    icon: '🦴',
    color: '#f0eeff',
    name: 'Orthopedics',
    desc: 'Joint replacement, sports injuries, spine surgery, and physical rehabilitation programs.',
  },
  {
    icon: '🔬',
    color: '#fdeaea',
    name: 'Oncology',
    desc: 'Cutting-edge cancer treatment including immunotherapy, radiation, and surgical oncology.',
  },
  {
    icon: '👁️',
    color: '#e8f5f0',
    name: 'Ophthalmology',
    desc: 'Full-spectrum eye care including cataract surgery, retinal treatment, and LASIK.',
  },
  {
    icon: '🫁',
    color: '#fef3e2',
    name: 'Pulmonology',
    desc: 'Respiratory care for asthma, COPD, sleep apnea, and other lung conditions.',
  },
  {
    icon: '🩻',
    color: '#fdeaea',
    name: 'Radiology',
    desc: 'State-of-the-art imaging including MRI, CT, PET scans, and interventional radiology.',
  },
]

export const doctors = [
  {
    initial: 'S',
    name: 'Dr. Sarah Okonkwo',
    specialty: 'Cardiology',
    credentials: 'MD, FACC · 18 years experience',
    rating: '4.9',
    bgGradient: 'linear-gradient(160deg,#e8d5c4,#c9b5a8)',
    avatarGradient: 'linear-gradient(135deg,#15b1a4,#2ec9bb)',
  },
  {
    initial: 'M',
    name: 'Dr. Marcus Vidal',
    specialty: 'Neurology',
    credentials: 'MD, PhD · 22 years experience',
    rating: '4.8',
    bgGradient: 'linear-gradient(160deg,#c9ddd5,#a8c5b8)',
    avatarGradient: 'linear-gradient(135deg,#16265c,#2a3f7a)',
  },
  {
    initial: 'A',
    name: 'Dr. Aisha Noor',
    specialty: 'Pediatrics',
    credentials: 'MD, FAAP · 14 years experience',
    rating: '5.0',
    bgGradient: 'linear-gradient(160deg,#f5ddd0,#e8c4b0)',
    avatarGradient: 'linear-gradient(135deg,#c9a96e,#e0c090)',
  },
  {
    initial: 'R',
    name: 'Dr. Ravi Sharma',
    specialty: 'Orthopedics',
    credentials: 'MD, FACS · 16 years experience',
    rating: '4.7',
    bgGradient: 'linear-gradient(160deg,#d8d0e8,#c0b5d5)',
    avatarGradient: 'linear-gradient(135deg,#6a5a8e,#8a7ab0)',
  },
]

export const news = [
  {
    emoji: '🏥',
    tag: 'Hospital News',
    date: 'May 28, 2026',
    title: 'Evercare Opens New Cardiac Surgery Wing with Robotic-Assisted Technology',
    excerpt: 'Our new 12-bed cardiac unit brings minimally invasive robotic surgery to our community, cutting recovery time by up to 40% for eligible patients.',
    bg: 'linear-gradient(135deg,#e8d5c4,#c9b5a8)',
    featured: true,
  },
  {
    emoji: '🧬',
    tag: 'Research',
    date: 'May 20, 2026',
    title: 'New Study Links Sleep Quality to Long-Term Heart Health',
    excerpt: 'Our cardiology team joins a landmark national study on sleep and cardiovascular risk.',
    bg: 'linear-gradient(135deg,#c9ddd5,#a8c5b8)',
    featured: false,
  },
  {
    emoji: '👶',
    tag: 'Community',
    date: 'May 12, 2026',
    title: 'Free Children\'s Health Screenings This June',
    excerpt: 'Join us for our annual community outreach event — free vision, hearing, and developmental screenings for kids ages 2–12.',
    bg: 'linear-gradient(135deg,#f5ddd0,#e8c4b0)',
    featured: false,
  },
]

export const emergencyCards = [
  {
    icon: '🚑',
    title: 'Ambulance & Trauma Bay',
    desc: 'Direct ambulance access with pre-notification capability. Level II Trauma Center.',
  },
  {
    icon: '⏱️',
    title: 'Average Wait: < 18 minutes',
    desc: 'Real-time triage — patients are seen based on clinical urgency, not arrival order.',
  },
  {
    icon: '🧬',
    title: 'Rapid Diagnostics On-Site',
    desc: 'Labs, CT, MRI, and X-ray available 24/7 within the ED for fast decisions.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Pediatric Emergency Unit',
    desc: 'A dedicated, child-friendly emergency area with specialized pediatric nurses and physicians.',
  },
]

export const contactInfo = [
  {
    icon: '📍',
    title: 'Main Campus',
    desc: '4200 Evercare Boulevard\nDowntown Medical District, CA 90210',
  },
  {
    icon: '📞',
    title: 'General Inquiries',
    desc: '+1 (800) 382-7227 · Mon–Fri 8AM–8PM\nSat–Sun 9AM–5PM',
  },
  {
    icon: '✉️',
    title: 'Email Us',
    desc: 'contact@evercarehospital.com\nWe respond within 24 hours',
  },
  {
    icon: '🕐',
    title: 'Visiting Hours',
    desc: 'Daily: 10AM – 8PM\nICU & NICU: 11AM–1PM · 5PM–7PM',
  },
]
export const departmentDetails: Record<string, {
  name: string
  tagline: string
  image: string
  overview: string
  services: string[]
  conditions: string[]
  icon: string
  color: string
}> = {
  cardiology: {
    name: 'Cardiology',
    icon: '🫀',
    color: '#fdeaea',
    tagline: 'Advanced heart care for a longer, healthier life.',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200&h=600&fit=crop&q=80',
    overview: 'Our Cardiology department offers comprehensive heart care combining cutting-edge diagnostics, interventional procedures, and long-term cardiac rehabilitation. Our board-certified cardiologists work as a unified team to deliver personalized treatment plans for every patient.',
    services: ['Echocardiography', 'Coronary Angiography', 'Cardiac Catheterization', 'Pacemaker Implantation', 'Heart Failure Management', 'Cardiac Rehabilitation', 'Stress Testing', 'Holter Monitoring'],
    conditions: ['Coronary Artery Disease', 'Heart Failure', 'Arrhythmia', 'Hypertension', 'Valvular Heart Disease', 'Cardiomyopathy'],
  },
  neurology: {
    name: 'Neurology',
    icon: '🧠',
    color: '#e8f5f0',
    tagline: 'Expert neurological care from diagnosis to recovery.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&q=80',
    overview: 'Our Neurology department provides comprehensive care for disorders of the brain, spinal cord, and nervous system. With advanced imaging and a multidisciplinary team, we diagnose and treat even the most complex neurological conditions.',
    services: ['EEG & EMG Testing', 'Brain MRI & CT', 'Stroke Unit Care', 'Epilepsy Monitoring', 'Deep Brain Stimulation', 'Cognitive Assessment', 'Headache Clinic', 'Sleep Studies'],
    conditions: ['Stroke', 'Epilepsy', 'Parkinson\'s Disease', 'Multiple Sclerosis', 'Migraine', 'Alzheimer\'s Disease'],
  },
  pediatrics: {
    name: 'Pediatrics',
    icon: '👶',
    color: '#fef3e2',
    tagline: 'Gentle, expert care for your little ones.',
    image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=1200&h=600&fit=crop&q=80',
    overview: 'Our Pediatrics department provides compassionate, specialized care for children from newborns through adolescence. Our child-friendly environment and expert team ensure every young patient feels safe, comfortable, and well cared for.',
    services: ['Newborn Care', 'Developmental Screening', 'Vaccination Programs', 'Pediatric Surgery', 'NICU', 'Child Nutrition', 'Behavioral Health', 'Allergy Testing'],
    conditions: ['Asthma', 'Diabetes in Children', 'Growth Disorders', 'Congenital Conditions', 'Infections', 'ADHD'],
  },
  orthopedics: {
    name: 'Orthopedics',
    icon: '🦴',
    color: '#f0eeff',
    tagline: 'Restoring movement, restoring life.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&h=600&fit=crop&q=80',
    overview: 'Our Orthopedics department specializes in the diagnosis and treatment of musculoskeletal conditions. From minimally invasive joint replacements to complex spinal surgeries, our surgeons use the latest techniques to get you moving again.',
    services: ['Joint Replacement', 'Arthroscopy', 'Spine Surgery', 'Sports Medicine', 'Fracture Care', 'Physical Therapy', 'Bone Density Testing', 'Limb Reconstruction'],
    conditions: ['Osteoarthritis', 'Sports Injuries', 'Spinal Stenosis', 'Fractures', 'Scoliosis', 'Tendon Injuries'],
  },
  oncology: {
    name: 'Oncology',
    icon: '🔬',
    color: '#fdeaea',
    tagline: 'Comprehensive cancer care with hope at its core.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=600&fit=crop&q=80',
    overview: 'Our Oncology department brings together surgical, medical, and radiation oncologists to provide integrated cancer care. We offer the latest treatments including targeted therapy, immunotherapy, and precision medicine tailored to each patient.',
    services: ['Chemotherapy', 'Radiation Therapy', 'Immunotherapy', 'Surgical Oncology', 'Bone Marrow Transplant', 'Palliative Care', 'Genetic Counseling', 'Clinical Trials'],
    conditions: ['Breast Cancer', 'Lung Cancer', 'Colorectal Cancer', 'Leukemia', 'Lymphoma', 'Prostate Cancer'],
  },
  ophthalmology: {
    name: 'Ophthalmology',
    icon: '👁',
    color: '#e8f5f0',
    tagline: 'Protecting and restoring the gift of sight.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffbb172b2e3?w=1200&h=600&fit=crop&q=80',
    overview: 'Our Ophthalmology department provides full-spectrum eye care using state-of-the-art diagnostic and surgical technology. From routine vision correction to complex retinal surgery, our specialists are dedicated to protecting your vision.',
    services: ['LASIK Surgery', 'Cataract Surgery', 'Retinal Treatment', 'Glaucoma Management', 'Corneal Transplant', 'Pediatric Eye Care', 'Vision Therapy', 'Contact Lens Fitting'],
    conditions: ['Cataracts', 'Glaucoma', 'Macular Degeneration', 'Diabetic Retinopathy', 'Dry Eye', 'Strabismus'],
  },
  pulmonology: {
    name: 'Pulmonology',
    icon: '🫁',
    color: '#fef3e2',
    tagline: 'Breathing easier with expert respiratory care.',
    image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1200&h=600&fit=crop&q=80',
    overview: 'Our Pulmonology department specializes in the diagnosis and treatment of respiratory conditions. Our team uses advanced diagnostics and the latest treatment protocols to help patients breathe better and live fuller lives.',
    services: ['Bronchoscopy', 'Pulmonary Function Testing', 'Sleep Studies', 'Oxygen Therapy', 'Ventilator Management', 'Allergy Testing', 'Smoking Cessation', 'Pulmonary Rehabilitation'],
    conditions: ['Asthma', 'COPD', 'Sleep Apnea', 'Pulmonary Fibrosis', 'Pneumonia', 'Lung Cancer'],
  },
  radiology: {
    name: 'Radiology',
    icon: '🩻',
    color: '#fdeaea',
    tagline: 'Precision imaging for accurate diagnosis.',
    image: 'https://images.unsplash.com/photo-1516069677018-378515003435?w=1200&h=600&fit=crop&q=80',
    overview: 'Our Radiology department offers comprehensive diagnostic imaging services using the most advanced equipment available. Our radiologists provide rapid, accurate interpretations to support your care team in making the best treatment decisions.',
    services: ['MRI Scanning', 'CT Scanning', 'PET Scanning', 'X-Ray', 'Ultrasound', 'Mammography', 'Interventional Radiology', 'Nuclear Medicine'],
    conditions: ['Cancer Detection', 'Vascular Disease', 'Bone Disorders', 'Neurological Conditions', 'Abdominal Issues', 'Cardiac Conditions'],
  },
}
export const doctorDetails: Record<string, {
  name: string
  specialty: string
  credentials: string
  experience: string
  photo: string
  about: string
  education: string[]
  languages: string[]
  services: string[]
  rating: string
  reviews: number
  availability: string[]
}> = {
  'sarah-okonkwo': {
    name: 'Dr. Sarah Okonkwo',
    specialty: 'Cardiology',
    credentials: 'MD, FACC',
    experience: '18 years',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop&q=80',
    about: 'Dr. Sarah Okonkwo is a board-certified cardiologist with over 18 years of experience in interventional cardiology and heart failure management. She completed her fellowship at Johns Hopkins Hospital and has published over 40 peer-reviewed articles. Dr. Okonkwo is passionate about preventive cardiology and patient education.',
    education: ['MD — University of Lagos College of Medicine', 'Residency — Cleveland Clinic', 'Fellowship — Johns Hopkins Hospital', 'Board Certified — American College of Cardiology'],
    languages: ['English', 'Yoruba', 'French'],
    services: ['Echocardiography', 'Coronary Angiography', 'Heart Failure Management', 'Cardiac Rehabilitation', 'Preventive Cardiology', 'Pacemaker Implantation'],
    rating: '4.9',
    reviews: 284,
    availability: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
  },
  'marcus-vidal': {
    name: 'Dr. Marcus Vidal',
    specialty: 'Neurology',
    credentials: 'MD, PhD',
    experience: '22 years',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop&q=80',
    about: 'Dr. Marcus Vidal is a renowned neurologist and researcher specializing in stroke, epilepsy, and movement disorders. With a PhD in Neuroscience from Stanford University, he brings cutting-edge research directly into clinical practice. He has treated thousands of complex neurological cases and leads Evercare\'s stroke response team.',
    education: ['MD — Harvard Medical School', 'PhD Neuroscience — Stanford University', 'Residency — Mayo Clinic', 'Fellowship — UCSF Medical Center'],
    languages: ['English', 'Spanish', 'Portuguese'],
    services: ['Stroke Management', 'Epilepsy Monitoring', 'EEG & EMG Testing', 'Deep Brain Stimulation', 'Cognitive Assessment', 'Headache Clinic'],
    rating: '4.8',
    reviews: 312,
    availability: ['Monday', 'Wednesday', 'Thursday'],
  },
  'aisha-noor': {
    name: 'Dr. Aisha Noor',
    specialty: 'Pediatrics',
    credentials: 'MD, FAAP',
    experience: '14 years',
    photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=700&fit=crop&q=80',
    about: 'Dr. Aisha Noor is a board-certified pediatrician known for her warm, child-friendly approach and exceptional diagnostic skills. She specializes in developmental pediatrics and childhood chronic conditions. Parents consistently praise her ability to make children feel comfortable and her clear communication style.',
    education: ['MD — Aga Khan University', 'Residency — Children\'s Hospital of Philadelphia', 'Fellowship — Boston Children\'s Hospital', 'Board Certified — American Academy of Pediatrics'],
    languages: ['English', 'Urdu', 'Arabic'],
    services: ['Newborn Care', 'Developmental Screening', 'Vaccination Programs', 'Pediatric Asthma', 'Growth Disorders', 'Behavioral Health'],
    rating: '5.0',
    reviews: 421,
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
  },
  'ravi-sharma': {
    name: 'Dr. Ravi Sharma',
    specialty: 'Orthopedics',
    credentials: 'MD, FACS',
    experience: '16 years',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=700&fit=crop&q=80',
    about: 'Dr. Ravi Sharma is a fellowship-trained orthopedic surgeon specializing in minimally invasive joint replacement and sports medicine. He has performed over 3,000 successful surgeries and is known for his precision technique and excellent patient outcomes. He is a team physician for several professional sports organizations.',
    education: ['MD — All India Institute of Medical Sciences', 'Residency — Hospital for Special Surgery NY', 'Fellowship — Andrews Sports Medicine Institute', 'Board Certified — American Academy of Orthopaedic Surgeons'],
    languages: ['English', 'Hindi', 'Punjabi'],
    services: ['Joint Replacement', 'Arthroscopy', 'Sports Medicine', 'Spine Surgery', 'Fracture Care', 'Physical Therapy'],
    rating: '4.7',
    reviews: 198,
    availability: ['Tuesday', 'Wednesday', 'Friday'],
  },
}
export const facilityDetails: Record<string, {
  name: string
  tagline: string
  image: string
  gallery: string[]
  overview: string
  detailedDesc: string
  features: string[]
  stats: { label: string; value: string }[]
  whyItMatters: string
}> = {
  'main-building': {
    name: 'Main Hospital Building',
    tagline: '120,000 sq ft of world-class medical facilities.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop&q=80',
    ],
    overview: 'Our main hospital building spans 120,000 square feet across 8 floors, housing state-of-the-art medical facilities, specialist clinics, and patient care units.',
    detailedDesc: 'Built in 1984 and fully renovated in 2020, Evercare\'s main building was designed by award-winning healthcare architects to balance clinical precision with human warmth. Every corridor, waiting area, and patient room was thoughtfully planned to reduce stress and support healing.\n\nThe building features dedicated floors for inpatient wards, outpatient clinics, diagnostics, and surgical suites. Natural light floods the common areas through floor-to-ceiling windows, and a rooftop garden provides a peaceful retreat for patients and families.\n\nAccessibility is a top priority — all floors are wheelchair accessible, with wide corridors, tactile guidance systems, and elevator access throughout. A dedicated family support center on the ground floor offers counseling, accommodation assistance, and translation services in over 20 languages.',
    features: ['8 floors of clinical space', '240 inpatient beds', 'Private and semi-private rooms', 'Dedicated ICU and HDU', 'Rooftop helipad for air ambulance', 'Patient family lounges on every floor', 'Free on-site parking for 400 vehicles', 'Full wheelchair accessibility', 'Rooftop healing garden', 'Family accommodation on-site', 'Translation services in 20+ languages', '24/7 security and reception'],
    stats: [{ label: 'Total Area', value: '120,000 sq ft' }, { label: 'Floors', value: '8' }, { label: 'Beds', value: '240' }, { label: 'Built', value: '1984' }],
    whyItMatters: 'A hospital\'s environment directly affects patient recovery. Studies show that access to natural light, quiet spaces, and family support reduces anxiety, shortens recovery time, and improves overall outcomes. Every design decision at Evercare was made with this in mind.',
  },
  'operating-theatres': {
    name: 'Operating Theatres',
    tagline: '12 fully-equipped surgical suites for every procedure.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&q=80',
    ],
    overview: 'Our 12 operating theatres are equipped with the latest surgical technology including robotic-assisted surgery systems and intraoperative imaging.',
    detailedDesc: 'Evercare\'s surgical suites represent the pinnacle of modern operative care. Each theatre is designed to the highest international standards, with positive pressure ventilation, laminar airflow systems, and ultra-low particulate air filtration to minimize infection risk.\n\nOur robotic surgery program uses the da Vinci Surgical System, enabling surgeons to perform complex minimally invasive procedures with greater precision, smaller incisions, and faster patient recovery. Patients undergoing robotic procedures typically experience less pain, reduced blood loss, and shorter hospital stays.\n\nA dedicated pre-operative preparation suite and post-anaesthesia care unit (PACU) ensure seamless, monitored transitions before and after every procedure. Our anaesthesiology team is available 24/7 and includes subspecialists in cardiac, paediatric, and obstetric anaesthesia.',
    features: ['12 fully-equipped surgical suites', 'Robotic-assisted surgery (da Vinci)', 'Intraoperative MRI and CT imaging', 'Laminar airflow infection control', 'Advanced anaesthesia monitoring', 'Dedicated paediatric theatre', 'Hybrid endovascular suite', '24/7 emergency surgical capability', 'Pre-operative preparation suite', 'Post-anaesthesia care unit (PACU)', 'Subspecialist anaesthesia team', 'Real-time surgical video recording'],
    stats: [{ label: 'Theatres', value: '12' }, { label: 'Surgeries/Year', value: '8,000+' }, { label: 'Robot Systems', value: '2' }, { label: 'Available', value: '24/7' }],
    whyItMatters: 'Surgical outcomes are directly tied to the quality of equipment and the skill of the team. Our investment in robotic surgery and intraoperative imaging means our surgeons have better information and better tools — leading to safer operations and faster recoveries for our patients.',
  },
  'icu': {
    name: 'Intensive Care Unit',
    tagline: '24/7 critical care monitoring for the most complex cases.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop&q=80',
    ],
    overview: 'Our Intensive Care Unit provides round-the-clock critical care for patients with life-threatening conditions, with 32 beds and a dedicated team.',
    detailedDesc: 'The Evercare ICU is a closed-format unit, meaning every patient is directly managed by a board-certified intensivist — a physician whose specialty is critical care medicine. This model of care consistently produces better outcomes than open ICU formats where responsibility is shared.\n\nOur ICU is divided into specialized zones: a Medical ICU (MICU) for conditions like sepsis, respiratory failure, and multi-organ dysfunction; a Surgical ICU (SICU) for post-operative critical care; a Cardiac Care Unit (CCU) for heart attacks and arrhythmias; and a Neonatal ICU (NICU) for premature and critically ill newborns.\n\nFamily communication is central to our ICU philosophy. Daily family meetings are conducted by the care team, and a dedicated family lounge adjacent to the unit provides a space for rest and support. Visiting hours are flexible and designed around patient need rather than administrative convenience.',
    features: ['32 fully monitored ICU beds', 'Closed-format intensivist model', 'Medical, Surgical, Cardiac, and Neonatal zones', 'Continuous vital signs monitoring', 'Ventilator support for all beds', 'In-unit dialysis capability', 'Daily family meetings', 'Family consultation lounge adjacent', 'Telemedicine intensivist support overnight', 'Infection isolation rooms available', 'Point-of-care ultrasound', 'Rapid response team integration'],
    stats: [{ label: 'ICU Beds', value: '32' }, { label: 'Nurse Ratio', value: '1:2' }, { label: 'Monitoring', value: '24/7' }, { label: 'Survival Rate', value: '94%' }],
    whyItMatters: 'In critical illness, every hour matters. Our closed ICU model with 24/7 intensivist coverage means expert decision-making happens around the clock — not just during daytime rounds. This single factor is associated with a 30% reduction in ICU mortality in peer-reviewed studies.',
  },
  'patient-rooms': {
    name: 'Patient Rooms',
    tagline: 'Comfortable, private spaces designed for healing.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587351021759-3e566b3db4f0?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop&q=80',
    ],
    overview: 'At Evercare, we believe the environment plays a crucial role in healing. Our patient rooms are thoughtfully designed to feel warm and comfortable.',
    detailedDesc: 'Every patient room at Evercare has been designed with input from patients, families, and clinicians to create spaces that genuinely support recovery. We moved away from the institutional feel of traditional hospital rooms towards environments that feel calm, personal, and human.\n\nAll rooms feature large windows with views of either our healing garden or the surrounding landscape. Natural light has been shown to regulate circadian rhythms and improve sleep quality during hospital stays — both critical to recovery. Rooms are climate-controlled individually, allowing patients to set their own temperature.\n\nOur 12 executive suites offer an elevated experience for patients who prefer additional privacy and comfort, featuring a separate sitting area, premium furnishings, and complimentary in-room dining from our therapeutic nutrition menu. Family members can stay overnight in all private rooms on a pull-out bed, ensuring patients are never alone.',
    features: ['180 private rooms', '60 semi-private rooms', '12 executive suites', 'En-suite bathrooms in all rooms', 'Individual climate control', 'Large windows with garden or landscape views', 'Smart TV and entertainment system', 'Family overnight accommodation', 'In-room dining from therapeutic menu', 'Nurse call system with two-way audio', 'Adjustable lighting for day and night', 'WiFi throughout'],
    stats: [{ label: 'Private Rooms', value: '180' }, { label: 'Semi-Private', value: '60' }, { label: 'Suites', value: '12' }, { label: 'Rating', value: '4.9★' }],
    whyItMatters: 'Research consistently shows that private hospital rooms reduce infection rates, improve sleep quality, and lead to shorter stays. At Evercare, 75% of our beds are in private rooms — well above the national average — because we believe every patient deserves a healing environment.',
  },
  'pharmacy': {
    name: 'In-House Pharmacy',
    tagline: 'Open 24/7 with over 4,000 medications in stock.',
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=1200&h=600&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&h=400&fit=crop&q=80',
    ],
    overview: 'Our in-house pharmacy operates around the clock, ensuring patients have immediate access to all prescribed medications with clinical pharmacist support.',
    detailedDesc: 'The Evercare Pharmacy is not a standard hospital dispensary — it is a full clinical pharmacy service staffed by specialist pharmacists who are active members of each patient\'s care team. Our pharmacists attend ward rounds, review prescriptions for safety and interactions, and counsel patients on their medications before discharge.\n\nWith over 4,000 medications in stock, including rare and specialist drugs, we can fill virtually any prescription immediately without the need for external suppliers. Our automated dispensing systems ensure accuracy and traceability for every medication issued.\n\nFor patients managing chronic conditions, we offer a dedicated Medication Management Program. Clinical pharmacists work with patients over time to optimize their medication regimens, reduce polypharmacy, and improve adherence — leading to better long-term health outcomes and fewer hospital readmissions.',
    features: ['Open 24 hours, 7 days a week', '4,000+ medications in stock', 'Specialist clinical pharmacists on ward rounds', 'Automated dispensing for accuracy', 'IV preparation and compounding unit', 'Discharge medication counseling', 'Chronic disease medication management', 'Drug interaction screening', 'Home delivery service available', 'Direct insurance billing', 'Controlled drug secure storage', 'Cold chain medications available'],
    stats: [{ label: 'Medications', value: '4,000+' }, { label: 'Pharmacists', value: '18' }, { label: 'Hours', value: '24/7' }, { label: 'Prescriptions/Day', value: '500+' }],
    whyItMatters: 'Medication errors are one of the most common causes of preventable harm in hospitals. By embedding clinical pharmacists into care teams rather than keeping them behind a counter, we catch errors before they reach patients — our medication error rate is 0.003%, well below the national average.',
  },
}