'use client'

import { useState } from 'react'

const botResponses: Record<string, string> = {
  default: "Thank you for reaching out to Evercare Hospital. How can I help you today?",
  appointment: "I'd be happy to help you book an appointment! You can use our online booking form or call us at +1 (800) 382-7227. Would you like me to take you to the booking form?",
  emergency: "If this is a medical emergency, please call 911 or our emergency line immediately: +1 (800) 911-CARE. Our emergency department is open 24/7.",
  hours: "Our main hospital is open 24/7. Outpatient clinics are open Monday–Friday 8AM–8PM and Saturday–Sunday 9AM–5PM.",
  doctors: "We have over 240 specialist doctors across 38 departments. You can browse our doctors on the website or I can help you find the right specialist for your needs.",
  insurance: "We accept all major insurance plans including Aetna, BlueCross BlueShield, Cigna, UnitedHealth, and more. Contact us to verify your specific plan.",
  location: "We are located at 4200 Evercare Boulevard, Downtown Medical District, CA 90210. Free parking is available on site.",
  hi: "Hello! Welcome to Evercare Hospital. I'm here to help you with appointments, information about our services, or to connect you with our team.",
  hello: "Hello! Welcome to Evercare Hospital. I'm here to help you with appointments, information about our services, or to connect you with our team.",
}

function getResponse(message: string): string {
  const lower = message.toLowerCase()
  if (lower.includes('appointment') || lower.includes('book') || lower.includes('schedule')) return botResponses.appointment
  if (lower.includes('emergency') || lower.includes('urgent') || lower.includes('911')) return botResponses.emergency
  if (lower.includes('hour') || lower.includes('open') || lower.includes('time')) return botResponses.hours
  if (lower.includes('doctor') || lower.includes('specialist') || lower.includes('physician')) return botResponses.doctors
  if (lower.includes('insurance') || lower.includes('cover') || lower.includes('plan')) return botResponses.insurance
  if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('parking')) return botResponses.location
  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) return botResponses.hi
  return "Thank you for your message. For detailed assistance, please call us at +1 (800) 382-7227 or email contact@evercarehospital.com. Our team is available Mon–Fri 8AM–8PM."
}

interface Message {
  from: 'bot' | 'user'
  text: string
  time: string
}

export default function LiveChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "👋 Hello! Welcome to Evercare Hospital. How can I help you today?", time: 'Just now' }
  ])

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg: Message = { from: 'user', text: input, time: 'Just now' }
    const botMsg: Message = { from: 'bot', text: getResponse(input), time: 'Just now' }
    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage()
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '90px', right: '24px', zIndex: 9998,
          width: '360px', background: 'white', borderRadius: '20px',
          boxShadow: '0 24px 80px rgba(0,0,0,0.18)',
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg, var(--terracotta), var(--terracotta-light))', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🏥</div>
              <div>
                <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>Evercare Support</div>
                <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  Online now
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', cursor: 'pointer', width: '28px', height: '28px', borderRadius: '50%', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '320px', background: '#f5faf9' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '10px 14px', borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.from === 'user' ? 'var(--terracotta)' : 'white',
                  color: msg.from === 'user' ? 'white' : 'var(--charcoal)',
                  fontSize: '0.85rem', lineHeight: 1.5,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick replies */}
          <div style={{ padding: '12px 16px', background: 'white', borderTop: '1px solid var(--border)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Book appointment', 'Emergency', 'Opening hours', 'Find a doctor'].map((q) => (
              <button
                key={q}
                onClick={() => { setInput(q); }}
                style={{ padding: '4px 12px', borderRadius: '100px', border: '1px solid var(--border)', background: 'var(--blush)', color: 'var(--terracotta)', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer' }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '16px', background: 'white', borderTop: '1px solid var(--border)', display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              style={{ flex: 1, padding: '10px 14px', border: '1.5px solid var(--border)', borderRadius: '100px', fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', outline: 'none', background: 'var(--cream)' }}
            />
            <button
              onClick={sendMessage}
              style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--terracotta)', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--terracotta), var(--terracotta-light))',
          border: 'none', cursor: 'pointer', fontSize: '1.6rem',
          boxShadow: '0 8px 30px rgba(21,177,164,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? '✕' : '💬'}
      </button>
    </>
  )
}