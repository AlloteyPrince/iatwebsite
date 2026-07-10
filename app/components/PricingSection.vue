<template>
  <section id="pricing" class="pricing-section">
    <div class="pricing-header" v-reveal>
      <span class="pricing-label">Pricing</span>
      <h2 class="section-title">
        Choose the <span class="gradient-text">Right Plan</span>
        <br />for Your Business
      </h2>
      <p class="section-subtitle">
        No hidden fees. No long contracts. Just great design.
      </p>
    </div>

    <div class="pricing-grid">
      <div
        v-for="(plan, idx) in pricing.plans"
        :key="plan.id"
        class="pricing-card"
        :class="{ popular: plan.popular }"
        v-reveal="{ delay: idx * 100 }"
      >
        <div v-if="plan.popular" class="popular-badge">Most Popular</div>

        <div class="plan-header">
          <h3 class="plan-title">{{ plan.title }}</h3>
          <div class="plan-price">
            <span class="price-amount">{{ plan.price }}</span>
            <span v-if="plan.period" class="price-period">{{ plan.period }}</span>
          </div>
        </div>

        <!-- Plan Features -->
        <ul class="plan-features">
          <li v-for="feature in plan.features" :key="feature" class="feature-item">
            <span class="feature-icon">✓</span>
            {{ feature }}
          </li>
        </ul>

        <!-- Divider -->
        <div class="feature-divider"></div>

        <!-- Included Features - All checkmarks -->
        <ul class="included-features">
          <li v-for="item in pricing.includedItems" :key="item" class="included-item">
            <span class="included-icon">✓</span>
            {{ item }}
          </li>
        </ul>

        <button class="plan-btn" @click="handlePlanClick(plan)">
          {{ plan.buttonText }}
        </button>
      </div>
    </div>

    <div class="pricing-cta">
      <button class="btn-cta" @click="openWhatsApp('Hi IAT, I need help choosing the right plan for my business. Can you advise me?')">
        <span>💬 Need help choosing a plan?</span>
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
  pricing: {
    type: Object,
    required: true
  }
})

const { openWhatsApp } = useWhatsApp()

const handlePlanClick = (plan) => {
  const messages = {
    single: `Hi IAT, I'm interested in your Single Project plan. I need a custom design for my business. Can you tell me more?`,
    monthly: `Hi IAT, I'm interested in your Monthly Retainer plan at GHS 500/month. I need regular designs for my business. Let's talk!`,
    yearly: `Hi IAT, I'm interested in your Yearly Retainer plan at GHS 3,000/year. I want consistent branding for my business. Can we discuss?`
  }
  openWhatsApp(messages[plan.id] || `Hi IAT, I'm interested in your ${plan.title} plan. Can you tell me more?`)
}
</script>

<style scoped>
.pricing-section {
  padding: 7rem 0 6rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.pricing-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.pricing-label {
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
  max-width: 500px;
  margin: 0.5rem auto 0;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 100%;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: 700px;
  }
}

@media (max-width: 640px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}

.pricing-card {
  position: relative;
  background:
    linear-gradient(160deg, rgba(99, 102, 241, 0.08), rgba(255, 255, 255, 0.02) 40%, rgba(139, 92, 246, 0.05)),
    rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 4px 20px rgba(0, 0, 0, 0.25);
}

/* Top highlight sheen */
.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  border-radius: 16px 16px 0 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
}

/* Soft glow that appears on hover */
.pricing-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(160deg, rgba(129, 140, 248, 0.4), transparent 50%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.pricing-card:hover {
  transform: translateY(-6px);
  background:
    linear-gradient(160deg, rgba(99, 102, 241, 0.14), rgba(255, 255, 255, 0.03) 40%, rgba(139, 92, 246, 0.1)),
    rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 12px 40px rgba(99, 102, 241, 0.15);
}

.pricing-card:hover::after {
  opacity: 1;
}

.pricing-card.popular {
  background:
    linear-gradient(160deg, rgba(99, 102, 241, 0.16), rgba(255, 255, 255, 0.02) 45%, rgba(139, 92, 246, 0.1)),
    rgba(255, 255, 255, 0.04);
  border-color: rgba(129, 140, 248, 0.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 8px 40px rgba(99, 102, 241, 0.18);
}

.pricing-card.popular:hover {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    0 16px 50px rgba(99, 102, 241, 0.28);
}

.popular-badge {
  position: absolute;
  top: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.25rem 1rem;
  border-radius: 50px;
  letter-spacing: 0.3px;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
  z-index: 2;
}

.plan-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.plan-price {
  margin-bottom: 1.25rem;
}

.price-amount {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
}

.price-period {
  font-size: 0.85rem;
  color: #94a3b8;
  display: block;
  margin-top: 0.1rem;
}

/* Plan Features */
.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 0.75rem;
  text-align: left;
}

.feature-item {
  color: #cbd5e1;
  font-size: 0.9rem;
  padding: 0.35rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-icon {
  color: #818cf8;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

/* Divider */
.feature-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 0.5rem 0 0.75rem;
}

/* Included Features - All checkmarks */
.included-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  text-align: left;
  flex: 1;
}

.included-item {
  color: #94a3b8;
  font-size: 0.85rem;
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;
}

.included-icon {
  color: #818cf8;
  font-weight: 700;
  font-size: 0.7rem;
  flex-shrink: 0;
}

.plan-btn {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: auto;
}

.plan-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
}

.pricing-card:not(.popular) .plan-btn {
  background: rgba(255, 255, 255, 0.06);
}

.pricing-card:not(.popular) .plan-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.pricing-cta {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
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

@media (max-width: 768px) {
  .pricing-section {
    padding: 4rem 0 3rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .pricing-card {
    padding: 1.5rem 1rem;
  }

  .included-item {
    font-size: 0.8rem;
  }
}
</style>