export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand"><a href="/">CloudPlan 云朵计划</a></div>
      <nav className="navlinks" aria-label="Main">
        <a href="/">首页</a>
        <a href="/about">关于</a>
        <a href="/services">服务</a>
        <a href="/works">作品集</a>
        <a href="/contact">联系</a>
      </nav>
    </header>
  );
}
