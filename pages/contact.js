import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>联系 CloudPlan 云朵计划</h1>
          <p className="text-secondary">告诉我们你的项目需求，我们会尽快回复。</p>
        </section>
        <section style={{ display: 'flex', justifyContent: 'center' }}>
          <form style={{ width: '100%', maxWidth: 600, padding: '2rem', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '16px' }} onSubmit={e => { e.preventDefault(); alert('感谢提交！我们会尽快联系你。'); }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>姓名</label>
              <input id="name" type="text" name="name" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>邮箱</label>
              <input id="email" type="email" name="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>信息</label>
              <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--card-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)' }}></textarea>
            </div>
            <button type="submit" className="button" style={{ padding: '14px 28px', borderRadius: '12px', border: 'none', cursor: 'pointer' }}>发送</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
