<template>
  <section id="pricing" class="pricing-section">
    <div class="pricing-header">
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
        v-for="plan in pricing.plans"
        :key="plan.id"
        class="pricing-card"
        :class="{ popular: plan.popular }"
      >
        <div v-if="plan.popular" class="popular-badge">Most Popular</div>

        <div class="plan-header">
          <h3 class="plan-title">{{ plan.title }}</h3>
          <div class="plan-price">
            <span class="price-amount">{{ plan.price }}</span>
            <span v-if="plan.period" class="price-period">{{ plan.period }}</span>
          </div>
        </div>

        <ul class="plan-features">
          <li v-for="feature in plan.features" :key="feature" class="feature-item">
            <span class="feature-icon">✓</span>
            {{ feature }}
          </li>
        </ul>

        <button class="plan-btn">{{ plan.buttonText }}</button>
      </div>
    </div>

    <div class="included-section">
      <h4 class="included-title">What's Included in Every Plan</h4>
      <div class="included-grid">
        <div v-for="item in pricing.includedItems" :key="item" class="included-item">
          <span class="included-icon">✅</span>
          {{ item }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  pricing: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.pricing-section {
  padding: 4rem 0;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}

.pricing-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.pricing-card.popular {
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 4px 30px rgba(99, 102, 241, 0.08);
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
}

.plan-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.plan-price {
  margin-bottom: 1.5rem;
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

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
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

/* Included Section */
.included-section {
  max-width: 900px;
  margin: 3.5rem auto 0;
  text-align: center;
}

.included-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
}

.included-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
}

.included-item {
  color: #cbd5e1;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.included-icon {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .included-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card {
    padding: 1.5rem 1rem;
  }
}
</style>