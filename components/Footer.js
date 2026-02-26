export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" style={{ background: '#2D3748', color: '#A0AEC0', padding: '60px 20px 30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: '1.2rem' }}>云朵计划</h4>
          <p style={{ lineHeight: 1.8 }}>播种童年梦想，浇灌美和希望</p>
        </div>
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: '1rem' }}>联系我们</h4>
          <p style={{ marginBottom: '0.5rem' }}>地址：XX省XX市XX区XX路XX号</p>
          <p style={{ marginBottom: '0.5rem' }}>邮箱：hello@cloudplan.org</p>
          <p>电话：010-XXXX-XXXX</p>
        </div>
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: '1rem' }}>关注我们</h4>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
            <span>💬</span>
            <span>📱</span>
            <span>📕</span>
            <span>📺</span>
          </div>
        </div>
        <div>
          <h4 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: '1rem' }}>订阅云朵月报</h4>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input type="email" placeholder="输入邮箱" style={{ flex: 1, padding: '10px 15px', borderRadius: '8px', border: 'none', outline: 'none' }} />
            <button style={{ padding: '10px 20px', background: '#FADADD', color: '#2D3748', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>订阅</button>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid #4A5568' }}>
        <p>Copyright © {year} 云朵计划公益基金会 ｜ 京ICP备XXXXXX号</p>
      </div>
    </footer>
  );
}
