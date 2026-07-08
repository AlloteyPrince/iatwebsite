<template>
  <div class="portfolio-page">
    <!-- Section 1: Hero -->
    <PortfolioHero />

    <!-- Section 2: Stats -->
    <StatsSection :stats="data.stats" :testimonials="data.testimonials" />

    <!-- Section 3: Show Designs Button -->
    <div v-if="!showDesigns" class="show-designs-wrapper">
      <button class="btn-primary" @click="showDesigns = true">
        See Sample Designs
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>

    <!-- Section 4: Sample Designs -->
    <Transition name="fade" mode="out-in">
      <div v-if="showDesigns" class="designs-section">
        <ThumbnailGrid
          :designs="data.designs"
          @select-design="selectDesign"
        />
        <LargeDisplay
          :design="selectedDesign"
          :designs="data.designs"
          @next="nextDesign"
          @prev="prevDesign"
          @select-design="selectDesign"
        />
      </div>
    </Transition>

    <!-- Section 5: Pricing -->
    <PricingSection :pricing="data.pricing" />

    <!-- Section 6: Partners -->
    <PartnersCarousel :partners="data.partners" />

    <!-- Section 7: CTA -->
    <CtaSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from '~/data/designs.json'

import PortfolioHero from '~/components/PortfolioHero.vue'
import StatsSection from '~/components/StatsSection.vue'
import ThumbnailGrid from '~/components/ThumbnailGrid.vue'
import LargeDisplay from '~/components/LargeDisplay.vue'
import PricingSection from '~/components/PricingSection.vue'
import PartnersCarousel from '~/components/PartnersCarousel.vue'
import CtaSection from '~/components/CtaSection.vue'

const showDesigns = ref(false)
const selectedDesignIndex = ref(0)
const selectedDesign = ref(data.designs[0])

const selectDesign = (index) => {
  selectedDesignIndex.value = index
  selectedDesign.value = data.designs[index]
}

const nextDesign = () => {
  const nextIndex = (selectedDesignIndex.value + 1) % data.designs.length
  selectDesign(nextIndex)
}

const prevDesign = () => {
  const prevIndex = (selectedDesignIndex.value - 1 + data.designs.length) % data.designs.length
  selectDesign(prevIndex)
}

onMounted(() => {
  selectedDesign.value = data.designs[0]
})

useHead({
  title: 'IAT Portfolio - Design That Grows Your Business',
  meta: [
    { name: 'description', content: 'Browse our portfolio of logos, flyers, and social media designs for businesses in Ghana.' }
  ]
})
</script>

<style scoped>
.portfolio-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 1.5rem 4rem;
  background: #0a0a0a;
  color: #ffffff;
}

@media (max-width: 768px) {
  .portfolio-page {
    padding: 5rem 1rem 3rem;
  }
}

.show-designs-wrapper {
  display: flex;
  justify-content: center;
  margin: 3rem 0 4rem;
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

.designs-section {
  margin-top: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>