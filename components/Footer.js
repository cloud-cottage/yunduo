export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>© {year} CloudPlan 云朵计划。保留所有权利。</p>
    </footer>
  );
}
