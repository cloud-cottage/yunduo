import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>联系 CloudPlan 云朵计划</h1>
        <p>告诉我们你的项目需求，我们会尽快回复。</p>
        <form style={{ maxWidth: 600 }}>
          <div style={{ marginBottom: '0.75rem' }}>
            <label>姓名</label><br/>
            <input type="text" name="name" style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <label>邮箱</label><br/>
            <input type="email" name="email" style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '0.75rem' }}>
            <label>信息</label><br/>
            <textarea name="message" rows="5" style={{ width: '100%', padding: '0.5rem' }}></textarea>
          </div>
          <button type="submit" style={{ padding: '0.6rem 1rem' }}>发送</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
