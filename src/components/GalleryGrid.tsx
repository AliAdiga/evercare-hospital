'use client'

import { useState } from 'react'

export default function GalleryGrid({ photos, name }: { photos: string[], name: string }) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {photos.map((photo, i) => (
          <div
            key={i}
            onClick={() => setSelected(photo)}
            style={{ borderRadius: '16px', overflow: 'hidden', height: '220px', cursor: 'pointer', position: 'relative' }}
            onMouseEnter={e => {
              const img = e.currentTarget.querySelector('img') as HTMLImageElement
              if (img) img.style.transform = 'scale(1.05)'
              const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '1'
            }}
            onMouseLeave={e => {
              const img = e.currentTarget.querySelector('img') as HTMLImageElement
              if (img) img.style.transform = 'scale(1)'
              const overlay = e.currentTarget.querySelector('.overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '0'
            }}
          >
            <img
              src={photo}
              alt={`${name} ${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
            />
            <div
              className="overlay"
              style={{
                position: 'absolute', inset: 0,
                background: 'rgba(14,58,63,0.45)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity 0.3s',
              }}
            >
              <div style={{ color: 'white', fontSize: '2rem' }}>🔍</div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px',
          }}
        >
          <button
            onClick={() => setSelected(null)}
            style={{
              position: 'absolute', top: '24px', right: '24px',
              background: 'rgba(255,255,255,0.15)', border: 'none',
              color: 'white', width: '44px', height: '44px',
              borderRadius: '50%', cursor: 'pointer', fontSize: '1.2rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
          <img
            src={selected}
            alt="Gallery"
            style={{
              maxWidth: '90vw', maxHeight: '85vh',
              objectFit: 'contain', borderRadius: '12px',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
            }}
            onClick={e => e.stopPropagation()}
          />

          {/* Thumbnails */}
          <div style={{
            position: 'absolute', bottom: '24px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', gap: '10px',
          }}>
            {photos.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt={`thumb ${i}`}
                onClick={e => { e.stopPropagation(); setSelected(photo) }}
                style={{
                  width: '60px', height: '44px', objectFit: 'cover',
                  borderRadius: '8px', cursor: 'pointer',
                  border: selected === photo ? '2px solid #db6a47' : '2px solid transparent',
                  opacity: selected === photo ? 1 : 0.6,
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}