export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand"><a href="/">CloudPlan</a></div>
      <nav className="navlinks" aria-label="Main">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Programs</a>
        <a href="/works">Impact Stories</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="nav-cta">
        <a href="/contact" className="button" style={{ padding: '10px 24px', fontSize: '0.9rem', borderRadius: '100px' }}>Donate Now</a>
      </div>
    </header>
  );
}
