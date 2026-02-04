export default function ContactCta() {
  return (
    <section className="contact-cta" aria-label="联系我们">
      <div className="contact-cta-inner" style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2))',
        border: '1px solid var(--card-border)',
        borderRadius: '24px',
        textAlign: 'center',
        margin: '0 auto 3rem',
        maxWidth: '800px',
      }}>
        <h2>让我们一起创造</h2>
        <p className="text-secondary" style={{ margin: '1rem auto 2rem', maxWidth: '560px' }}>有想法？我们乐意倾听。请立即联系我们，开启合作之旅。</p>
        <a href="/contact" className="button" style={{ padding: '14px 28px' }}>立即联系</a>
      </div>
    </section>
  );
}