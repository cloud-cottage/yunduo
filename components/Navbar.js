export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand"><a href="/">云朵计划</a></div>
      <nav className="navlinks" aria-label="Main">
        <a href="/">首页</a>
        <a href="/about">关于我们</a>
        <a href="/services">项目</a>
        <a href="/works">时光花园</a>
        <a href="/contact">联系我们</a>
      </nav>
      <div className="nav-cta">
        <a href="/contact" className="button" style={{ padding: '10px 24px', fontSize: '0.9rem', borderRadius: '100px' }}>成为播种人</a>
      </div>
    </header>
  );
}
