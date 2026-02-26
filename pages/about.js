import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const team = [
    { id: 1, name: '林溪', role: '创始人', bio: '"我从小镇来，知道那里的孩子有多渴望看见更大的世界。艺术让他们敢于想象，财商让他们能够实现。云朵计划——就是为这种\'敢于\'和\'能够\'，搭一座桥。"' },
    { id: 2, name: '全职公益人', role: '12位', bio: '扎根一线，负责项目执行与运营' },
    { id: 3, name: '常驻艺术家', role: '8位', bio: '带来专业的艺术课程与创作指导' },
    { id: 4, name: '志愿讲师', role: '47位', bio: '财商教育认证讲师' },
  ];

  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <h1>云朵的土壤</h1>
          <p className="text-secondary" style={{ fontSize: '1.2rem' }}>谁在守护这片天空</p>
        </section>

        <section style={{ marginBottom: '4rem', padding: '3rem', background: '#FFFFFF', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>发起人语</h2>
          <blockquote style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#4A5568', textAlign: 'center', fontStyle: 'italic', border: 'none' }}>
            "我从小镇来，知道那里的孩子有多渴望看见更大的世界。<br/>
            艺术让他们敢于想象，财商让他们能够实现。<br/>
            云朵计划——就是为这种'敢于'和'能够'，搭一座桥。"
          </blockquote>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#718096' }}>——创始人 林溪</p>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>团队构成</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {team.map(t => (
              <div key={t.id} style={{ background: '#FFFFFF', borderRadius: '16px', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#2D3748' }}>{t.name}</h3>
                <p style={{ color: '#A7D2E8', fontWeight: 600, marginBottom: '0.5rem' }}>{t.role}</p>
                <p style={{ color: '#718096', fontSize: '0.95rem', margin: 0 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>透明公示</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '12px 24px', background: '#A7D2E8', color: '#2D3748', borderRadius: '100px', fontWeight: 600 }}>2025年度工作报告</a>
            <a href="#" style={{ padding: '12px 24px', background: '#FADADD', color: '#2D3748', borderRadius: '100px', fontWeight: 600 }}>2025财务审计报告</a>
            <a href="#" style={{ padding: '12px 24px', border: '2px solid #A7D2E8', color: '#2D3748', borderRadius: '100px', fontWeight: 600 }}>合作伙伴名单</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}