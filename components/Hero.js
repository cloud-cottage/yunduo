export default function Hero() {
  return (
    <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
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
          zIndex: -1,
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1>CloudPlan 云朵计划</h1>
        <p>为你打造兼具美感与功能的现代数字体验</p>
        <a className="button" href="/contact">立即咨询</a>
      </div>
    </section>
  );
}
