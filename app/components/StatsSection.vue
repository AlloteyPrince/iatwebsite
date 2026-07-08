<template>
  <section class="stats-section">
    <div class="stats-header">
      <span class="stats-label">Why Design Matters</span>
      <h2 class="section-title">
        Design is an <span class="gradient-text">Investment</span>,
        <br />Not an Expense
      </h2>
      <p class="section-subtitle">
        Data shows that businesses that invest in professional design
        consistently outperform those that don't.
      </p>
    </div>

    <div class="stats-grid">
      <div class="stat-card" v-for="(stat, key) in stats" :key="key">
        <div class="stat-number">{{ stat }}</div>
        <div class="stat-label">
          <span v-if="key === 'revenueGrowth'">of small businesses that invest in design see revenue growth within 1 year</span>
          <span v-else-if="key === 'customerRetention'">of small businesses that invest in design see higher customer retention</span>
          <span v-else>More Revenue Growth for brands that invest in design vs. those that don't</span>
        </div>
      </div>
    </div>

    <div class="testimonials">
      <h3 class="testimonial-heading">
        <span>📊</span> Real Results from Businesses Like Yours
      </h3>

      <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
        <div class="testimonial-quote-icon">"</div>
        <p class="testimonial-quote">{{ testimonial.quote }}</p>
        <p class="testimonial-author">— {{ testimonial.author }}, {{ testimonial.location }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Object,
    required: true
  },
  testimonials: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.stats-section {
  padding: 3rem 0 4rem;
}

.stats-header {
  text-align: center;
  margin-bottom: 4rem;
}

.stats-label {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #818cf8;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #ffffff;
}

.section-title .gradient-text {
  background: linear-gradient(135deg, #818cf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  max-width: 550px;
  margin: 1rem auto 0;
  line-height: 1.6;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(99, 102, 241, 0.15);
  box-shadow: 0 8px 40px rgba(99, 102, 241, 0.08);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #818cf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.75rem;
  line-height: 1;
}

.stat-label {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.5;
}

.testimonials {
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-heading {
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 4px solid #818cf8;
  padding: 1.8rem 2rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  background: rgba(255, 255, 255, 0.05);
}

.testimonial-quote-icon {
  font-size: 2rem;
  color: #818cf8;
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 0.25rem;
  font-family: Georgia, serif;
}

.testimonial-quote {
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 0.75rem;
}

.testimonial-author {
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .testimonial-card {
    padding: 1.5rem;
  }
}
</style>