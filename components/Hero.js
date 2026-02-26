export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
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
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.7)', zIndex: 1 }}></div>
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>CloudPlan 云朵计划</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>为你打造兼具美感与功能的现代数字体验</p>
        <a className="button" href="/contact" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>立即咨询</a>
      </div>
    </section>
  );
}
