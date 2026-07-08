<template>
  <section class="partners-section">
    <div class="partners-header">
      <h3 class="partners-title">🤝 Trusted by These Brands</h3>
      <p class="partners-subtitle">
        We work with businesses across Ghana to bring their vision to life.
      </p>
    </div>

    <div class="carousel-wrapper">
      <div class="carousel-track" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
        <div
          v-for="(partner, index) in duplicatedPartners"
          :key="index"
          class="partner-item"
        >
          <div class="partner-placeholder">
            {{ partner }}
          </div>
        </div>
      </div>
    </div>

    <div class="partners-cta">
      <button class="btn-cta" @click="openWhatsApp('Hi IAT, I saw the brands you work with and I want to join them. Can you help my business?')">
        <span>🚀 Join these brands</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useWhatsApp } from '~/composables/useWhatsApp'

const props = defineProps({
  partners: {
    type: Array,
    default: () => ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5']
  }
})

const { openWhatsApp } = useWhatsApp()

const duplicatedPartners = computed(() => [...props.partners, ...props.partners])

// Scroll control
const track = ref(null)
let scrollInterval = null
let isPaused = false

const startScroll = () => {
  if (scrollInterval) return
  const trackEl = track.value
  if (!trackEl) return

  let position = 0
  const speed = 0.5

  scrollInterval = setInterval(() => {
    if (isPaused) return
    position -= speed
    trackEl.style.transform = `translateX(${position}px)`
    if (Math.abs(position) >= trackEl.scrollWidth / 2) {
      position = 0
    }
  }, 16)
}

const stopScroll = () => {
  if (scrollInterval) {
    clearInterval(scrollInterval)
    scrollInterval = null
  }
}

const pauseScroll = () => {
  isPaused = true
}

const resumeScroll = () => {
  isPaused = false
}

onMounted(() => {
  startScroll()
})

onBeforeUnmount(() => {
  stopScroll()
})
</script>

<style scoped>
.partners-section {
  padding: 4rem 0 3rem;
}

.partners-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.partners-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.25rem;
}

.partners-subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
}

.carousel-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.carousel-track {
  display: flex;
  gap: 2.5rem;
  width: max-content;
  will-change: transform;
}

.partner-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 64px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0 1.5rem;
}

.partner-placeholder {
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
}

@media (max-width: 768px) {
  .partner-item {
    min-width: 100px;
    height: 50px;
    padding: 0 1rem;
  }

  .partner-placeholder {
    font-size: 0.8rem;
  }

  .carousel-track {
    gap: 1.5rem;
  }
}

.partners-cta {
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
</style>