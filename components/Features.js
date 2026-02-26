export default function Features() {
  return (
    <section className="features" aria-label="双核使命">
      <div className="section-header">
        <h2>双核使命</h2>
        <p className="text-secondary">让每一个孩子，都能在属于自己的季节里，开花</p>
      </div>
      <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '900px', margin: '0 auto' }}>
        <div className="feature" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#A7D2E8' }}>艺术启蒙</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>让眼睛学会看见色彩<br/>让心灵拥有表达的勇气</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontSize: '0.9rem', color: '#718096' }}>
            <div><strong style={{ fontSize: '1.5rem', color: '#2D3748' }}>47位</strong><br/>合作艺术家</div>
            <div><strong style={{ fontSize: '1.5rem', color: '#2D3748' }}>2100+</strong><br/>创作作品</div>
          </div>
        </div>
        <div className="feature" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#FADADD' }}>财商教育</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>让双手懂得管理资源<br/>让梦想拥有实现的路径</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', fontSize: '0.9rem', color: '#718096' }}>
            <div><strong style={{ fontSize: '1.5rem', color: '#2D3748' }}>23位</strong><br/>认证讲师</div>
            <div><strong style={{ fontSize: '1.5rem', color: '#2D3748' }}>38场</strong><br/>模拟集市</div>
          </div>
        </div>
      </div>
    </section>
  );
}
