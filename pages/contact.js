import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1>联系我们</h1>
          <p className="text-secondary" style={{ fontSize: '1.2rem' }}>有任何问题，欢迎随时与我们联系</p>
        </section>

        <section style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
          <form style={{ padding: '2rem', background: '#FFFFFF', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }} onSubmit={e => { e.preventDefault(); alert('感谢提交！我们会尽快联系你。'); }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2D3748' }}>姓名</label>
              <input id="name" type="text" name="name" required style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #E2E8F0', background: '#F7FAFC', color: '#2D3748', fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2D3748' }}>邮箱</label>
              <input id="email" type="email" name="email" required style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #E2E8F0', background: '#F7FAFC', color: '#2D3748', fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#2D3748' }}>留言</label>
              <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #E2E8F0', background: '#F7FAFC', color: '#2D3748', fontSize: '1rem' }}></textarea>
            </div>
            <button type="submit" className="button" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>发送消息</button>
          </form>
        </section>

        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>其他联系方式</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontWeight: 600, color: '#A7D2E8', marginBottom: '0.5rem' }}>邮箱</p>
              <p style={{ color: '#4A5568' }}>hello@cloudplan.org</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, color: '#A7D2E8', marginBottom: '0.5rem' }}>电话</p>
              <p style={{ color: '#4A5568' }}>010-XXXX-XXXX</p>
            </div>
            <div>
              <p style={{ fontWeight: 600, color: '#A7D2E8', marginBottom: '0.5rem' }}>地址</p>
              <p style={{ color: '#4A5568' }}>XX省XX市XX区XX路XX号</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}