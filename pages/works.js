import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WorksPage() {
  const stories = [
    {
      year: '2023',
      season: '夏',
      location: '青溪镇',
      title: '向日葵集市的第一位"小掌柜"',
      image: '',
      story: '阿朵的摊位上，摆着她画的15块石头。她给每块石头定价：带星星的3元，带小花的2元。收摊时，她数了数——32元。"我要存起来，给奶奶买一副老花镜。"那一天，她不仅学会了记账，更懂得了钱可以变成爱。',
      tags: '#财商启蒙 #2019 #青溪镇',
    },
    {
      year: '2024',
      season: '春',
      location: '云山村',
      title: '那幅画，挂在村口的老槐树上',
      image: '',
      story: '艺术家张老师带来一个想法：把老槐树变成画布。孩子们画下自己的手、自己的梦、自己眼中的春天。三个月过去，画还在。路过的大人会停下来，指给孩子看："这是你姐姐画的太阳，那是你哥哥画的小狗。"艺术，就这样长进了生活里。',
      tags: '#公共艺术 #2024 #云山村',
    },
  ];

  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1>时光花园</h1>
          <p className="text-secondary" style={{ fontSize: '1.2rem' }}>每一朵花开，都值得被记录</p>
        </section>

        <section style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
          {stories.map((story, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ width: '100%', aspectRatio: '16/9', background: 'linear-gradient(135deg, #A7D2E8 0%, #FADADD 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '4rem' }}>🖼️</span>
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ background: '#A7D2E8', color: '#2D3748', padding: '4px 12px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600 }}>{story.year}年·{story.season}·{story.location}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2D3748' }}>{story.title}</h2>
                <p style={{ lineHeight: 1.8, color: '#4A5568', marginBottom: '1.5rem' }}>{story.story}</p>
                <p style={{ color: '#718096', fontSize: '0.9rem' }}>{story.tags}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}