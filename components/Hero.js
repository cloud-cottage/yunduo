export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, #A7D2E8 0%, #FADADD 50%, #FFFFFF 100%)', zIndex: 0 }}></div>
      <div className="cloud-shape" style={{ position: 'absolute', top: '10%', left: '5%', width: '200px', height: '100px', background: 'rgba(255,255,255,0.4)', borderRadius: '100px', filter: 'blur(40px)', animation: 'float 6s ease-in-out infinite' }}></div>
      <div className="cloud-shape" style={{ position: 'absolute', top: '30%', right: '10%', width: '300px', height: '150px', background: 'rgba(255,255,255,0.3)', borderRadius: '150px', filter: 'blur(50px)', animation: 'float 8s ease-in-out infinite reverse' }}></div>
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1rem', maxWidth: '900px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.2, color: '#2D3748', textShadow: '0 2px 10px rgba(255,255,255,0.5)' }}>Empowering Young Minds Through Art and Finance</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#4A5568', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>Inspiring creativity and financial literacy in children through engaging workshops and community programs.</p>
        <a className="button" href="/contact" style={{ padding: '16px 40px', fontSize: '1.1rem', borderRadius: '100px', background: '#FADADD', color: '#2D3748', fontWeight: 600 }}>Donate Now</a>
      </div>
    </section>
  );
}
