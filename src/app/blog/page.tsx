import Link from 'next/link'

const posts = [
  {
    slug: 'heart-health-tips',
    category: 'Cardiology',
    categoryColor: '#fdeaea',
    categoryText: '#c7735a',
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop&q=80',
    date: 'May 28, 2026',
    readTime: '5 min read',
    title: '10 Daily Habits That Strengthen Your Heart',
    excerpt: 'Small lifestyle changes can make a significant difference in your cardiovascular health. Our cardiologists share the habits that matter most.',
    author: 'Dr. Sarah Okonkwo',
    authorPhoto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&q=80',
  },
  {
    slug: 'sleep-brain-health',
    category: 'Neurology',
    categoryColor: '#e8f5f0',
    categoryText: '#5a8070',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&q=80',
    date: 'May 20, 2026',
    readTime: '4 min read',
    title: 'Why Sleep Is the Most Important Thing for Your Brain',
    excerpt: 'New research confirms what neurologists have long suspected: quality sleep is non-negotiable for long-term cognitive health and disease prevention.',
    author: 'Dr. Marcus Vidal',
    authorPhoto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=60&h=60&fit=crop&q=80',
  },
  {
    slug: 'childrens-vaccines',
    category: 'Pediatrics',
    categoryColor: '#fef3e2',
    categoryText: '#c9a96e',
    image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=600&h=400&fit=crop&q=80',
    date: 'May 12, 2026',
    readTime: '6 min read',
    title: 'The Complete Guide to Childhood Vaccinations',
    excerpt: 'Understanding your child\'s vaccination schedule is one of the most important things you can do as a parent. Here is everything you need to know.',
    author: 'Dr. Aisha Noor',
    authorPhoto: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=60&h=60&fit=crop&q=80',
  },
  {
    slug: 'knee-pain-solutions',
    category: 'Orthopedics',
    categoryColor: '#f0eeff',
    categoryText: '#6a5a8e',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&h=400&fit=crop&q=80',
    date: 'May 5, 2026',
    readTime: '7 min read',
    title: 'Knee Pain: When to See a Doctor and When to Rest',
    excerpt: 'Not all knee pain requires surgery. Our orthopedic specialists explain the difference between pain that heals with rest and pain that needs intervention.',
    author: 'Dr. Ravi Sharma',
    authorPhoto: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=60&h=60&fit=crop&q=80',
  },
  {
    slug: 'cancer-early-detection',
    category: 'Oncology',
    categoryColor: '#fdeaea',
    categoryText: '#c7735a',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop&q=80',
    date: 'April 28, 2026',
    readTime: '8 min read',
    title: 'Early Detection Saves Lives: Cancer Screenings You Need',
    excerpt: 'Regular screenings can detect cancer before symptoms appear, dramatically improving treatment outcomes. Learn which screenings are right for your age.',
    author: 'Dr. Sarah Okonkwo',
    authorPhoto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=60&h=60&fit=crop&q=80',
  },
  {
    slug: 'managing-diabetes',
    category: 'General Health',
    categoryColor: '#e8f5f0',
    categoryText: '#5a8070',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80',
    date: 'April 15, 2026',
    readTime: '5 min read',
    title: 'Living Well With Diabetes: A Practical Guide',
    excerpt: 'Managing diabetes does not have to limit your life. With the right tools and knowledge, patients can live full, healthy, and active lives.',
    author: 'Dr. Aisha Noor',
    authorPhoto: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=60&h=60&fit=crop&q=80',
  },
]

const categories = ['All', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Oncology', 'General Health']

export default function BlogPage() {
  return (
    <div style={{ background: '#fdf8f2', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'rgba(253,248,242,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e8ddd4', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#c7735a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: 700 }}>E</div>
          <span style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', color: '#1e2b2f', fontWeight: 600 }}>Evercare Hospital</span>
        </Link>
        <Link href="/" style={{ fontSize: '0.85rem', color: '#7a8a8f', textDecoration: 'none' }}>Back to Home</Link>
        <a href="/#appointment" style={{ background: '#c7735a', color: 'white', padding: '10px 22px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>Book Appointment</a>
      </nav>

      {/* Hero */}
      <div style={{ paddingTop: '70px', background: 'linear-gradient(135deg, #1e2b2f, #3a4a4f)', padding: '120px 8% 80px' }}>
        <div style={{ maxWidth: '640px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(199,115,90,0.25)', color: '#e8a090', border: '1px solid rgba(199,115,90,0.4)', padding: '6px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Health Blog
          </div>
          <h1 style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>
            Health insights from our specialists
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            Expert advice, latest research, and practical health tips from Evercare physicians — written for real people, not just doctors.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '32px 8%', background: 'white', borderBottom: '1px solid #e8ddd4', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={{
              padding: '8px 20px', borderRadius: '100px',
              border: cat === 'All' ? 'none' : '1px solid #e8ddd4',
              background: cat === 'All' ? '#c7735a' : 'white',
              color: cat === 'All' ? 'white' : '#3a4a4f',
              fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div style={{ padding: '60px 8%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e8ddd4', transition: 'all 0.3s' }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: post.categoryColor, color: post.categoryText, padding: '4px 12px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 700 }}>
                  {post.category}
                </div>
              </div>
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>{post.date}</span>
                  <span style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>·</span>
                  <span style={{ fontSize: '0.75rem', color: '#7a8a8f' }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: 'Lora, serif', fontSize: '1.1rem', color: '#1e2b2f', marginBottom: '10px', lineHeight: 1.4, fontWeight: 600 }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: '0.85rem', color: '#7a8a8f', lineHeight: 1.6, marginBottom: '20px' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={post.authorPhoto} alt={post.author} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
                    <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#3a4a4f' }}>{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} style={{ fontSize: '0.8rem', color: '#c7735a', fontWeight: 600, textDecoration: 'none' }}>
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#1e2b2f', padding: '32px 8%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>2026 Evercare Hospital. All rights reserved.</span>
        <Link href="/" style={{ color: '#e08b72', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Back to Home</Link>
      </div>
    </div>
  )
}