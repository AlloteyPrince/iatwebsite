<template>
  <div class="index-page">
    <!-- Section 1: Hero -->
    <PortfolioHero />

    <!-- Section 2: Stats -->
    <StatsSection :stats="data.stats" :testimonials="data.testimonials" />

    <!-- Section 3: Show Designs Button with Gradient Background -->
    <div class="show-designs-wrapper">
      <div class="show-designs-glow"></div>
      <div class="show-designs-content">
        <div class="show-designs-text">
          <span class="show-designs-badge">✦ Portfolio</span>
          <h2 class="show-designs-title">See What We Can <span class="gradient-text">Create</span> For You</h2>
          <p class="show-designs-subtitle">Browse through our collection of designs crafted for businesses like yours.</p>
        </div>
        <div class="show-designs-3d">
          <div class="design-3d-placeholder">
            <div class="design-3d-icon">🎨</div>
            <div class="design-3d-ring"></div>
          </div>
        </div>
        <NuxtLink to="/designs" class="btn-primary">
          See All Designs
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>
    </div>

    <!-- Section 4: Pricing -->
    <PricingSection :pricing="data.pricing" />

    <!-- Section 5: Partners -->
    <PartnersCarousel :partners="data.partners" />

    <!-- Section 6: CTA -->
    <CtaSection />
  </div>
</template>

<script setup>
import data from '~/data/designs.json'

import PortfolioHero from '~/components/PortfolioHero.vue'
import StatsSection from '~/components/StatsSection.vue'
import PricingSection from '~/components/PricingSection.vue'
import PartnersCarousel from '~/components/PartnersCarousel.vue'
import CtaSection from '~/components/CtaSection.vue'

useHead({
  title: 'IAT - Innovation in Arts & Tech',
  meta: [
    { name: 'description', content: 'Professional design services for small businesses in Ghana. Logos, flyers, social media graphics, and more.' }
  ]
})
</script>

<style scoped>
.index-page {
  max-width: 100%;
  margin: 0 auto;
  background: #0a0a0a;
  color: #ffffff;
}

/* Show Designs Section */
.show-designs-wrapper {
  position: relative;
  padding: 7rem 0;
  margin: 6rem 0;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(10, 10, 10, 0.5);
}

.show-designs-glow {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(99, 102, 241, 0.12), transparent 60%),
              radial-gradient(ellipse at 70% 50%, rgba(139, 92, 246, 0.08), transparent 50%);
  pointer-events: none;
}

.show-designs-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
}

.show-designs-text {
  margin-bottom: 2rem;
}

.show-designs-badge {
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

.show-designs-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.show-designs-title .gradient-text {
  background: linear-gradient(135deg, #818cf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.show-designs-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;
}

.show-designs-3d {
  margin: 1.5rem 0 2rem;
}

.design-3d-placeholder {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.design-3d-icon {
  font-size: 3rem;
  z-index: 2;
  animation: float3D 3s ease-in-out infinite;
}

.design-3d-ring {
  position: absolute;
  inset: -10px;
  border: 2px solid rgba(99, 102, 241, 0.15);
  border-radius: 50%;
  animation: spinRing 8s linear infinite;
}

.design-3d-ring::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
}

@keyframes float3D {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}

@keyframes spinRing {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 25px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 40px rgba(99, 102, 241, 0.45);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary svg {
  transition: transform 0.3s ease;
}

.btn-primary:hover svg {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .show-designs-wrapper {
    padding: 4rem 0;
    margin: 4rem 0;
  }

  .show-designs-title {
    font-size: 1.8rem;
  }

  .show-designs-subtitle {
    font-size: 0.95rem;
  }

  .design-3d-placeholder {
    width: 60px;
    height: 60px;
  }

  .design-3d-icon {
    font-size: 2rem;
  }

  .btn-primary {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>