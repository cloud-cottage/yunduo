export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.8)', zIndex: 1 }}></div>
      <div className="cloud-shape" style={{ position: 'absolute', top: '10%', left: '5%', width: '200px', height: '100px', background: 'rgba(167,210,232,0.4)', borderRadius: '100px', filter: 'blur(40px)', animation: 'float 6s ease-in-out infinite', zIndex: 0 }}></div>
      <div className="cloud-shape" style={{ position: 'absolute', top: '30%', right: '10%', width: '300px', height: '150px', background: 'rgba(250,218,221,0.4)', borderRadius: '150px', filter: 'blur(50px)', animation: 'float 8s ease-in-out infinite reverse', zIndex: 0 }}></div>
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1rem', maxWidth: '900px' }}>
        <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: '#718096', marginBottom: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>云朵计划 CloudPlan</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.3, color: '#2D3748' }}>播种童年梦想，浇灌美和希望</h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#4A5568', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
          在小镇的天空下，每一颗童心都是一粒种子。<br/>
          我们用艺术浇灌美的感知，用财商培育希望的根基。
        </p>
        <a className="button" href="/contact" style={{ padding: '16px 40px', fontSize: '1.1rem', borderRadius: '100px', background: '#FADADD', color: '#2D3748', fontWeight: 600 }}>成为播种人</a>
      </div>
    </section>
  );
}
