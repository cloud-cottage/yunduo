export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand"><a href="/">NovaBrand</a></div>
      <nav className="navlinks" aria-label="Main">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
