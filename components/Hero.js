export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-poster.jpg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(5, 5, 10, 0.65)', zIndex: 1 }}></div>
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>CloudPlan 云朵计划</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>为你打造兼具美感与功能的现代数字体验</p>
        <a className="button" href="/contact" style={{ padding: '16px 36px', fontSize: '1.1rem', borderRadius: '100px' }}>立即咨询</a>
      </div>
    </section>
  );
}
