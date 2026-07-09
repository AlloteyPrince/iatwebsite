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

    <!-- Redesigned Testimonials -->
    <div class="testimonials-section">
      <h3 class="testimonial-heading">
        <span>💬</span> Real Results from Businesses Like Yours
      </h3>

      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
          <div class="testimonial-avatar">
            <div class="avatar-placeholder">{{ testimonial.author.charAt(0) }}</div>
          </div>
          <div class="testimonial-body">
            <div class="testimonial-stars">
              <span v-for="i in 5" :key="i">★</span>
            </div>
            <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
            <div class="testimonial-author-info">
              <span class="testimonial-author">{{ testimonial.author }}</span>
              <span class="testimonial-location">{{ testimonial.location }}</span>
            </div>
          </div>
          <div class="testimonial-quote-mark">"</div>
        </div>
      </div>
    </div>

    <div class="stats-cta">
      <button class="btn-cta" @click="openWhatsApp('Hi IAT, I want to invest in professional design for my business. Can you help me?')">
        <span>🚀 Ready to invest in your business?</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { useWhatsApp } from '~/composables/useWhatsApp'

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

const { openWhatsApp } = useWhatsApp()
</script>

<style scoped>
.stats-section {
  padding: 3rem 0 4rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
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

/* Redesigned Testimonials */
.testimonials-section {
  max-width: 900px;
  margin: 0 auto 3rem;
}

.testimonial-heading {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}

.testimonial-card {
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(99, 102, 241, 0.15);
  box-shadow: 0 8px 40px rgba(99, 102, 241, 0.08);
}

.testimonial-quote-mark {
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  font-size: 4rem;
  color: rgba(99, 102, 241, 0.1);
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonial-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
}

.testimonial-body {
  flex: 1;
}

.testimonial-stars {
  color: #fbbf24;
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}

.testimonial-quote {
  color: #e2e8f0;
  font-size: 1rem;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 1rem;
}

.testimonial-author-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.testimonial-author {
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
}

.testimonial-location {
  color: #94a3b8;
  font-size: 0.8rem;
}

.stats-cta {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cta:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #818cf8;
  transform: translateY(-2px);
}

.btn-cta span {
  color: #e2e8f0;
}
</style>