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
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  partners: {
    type: Array,
    default: () => ['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5']
  }
})

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
  const speed = 0.5 // pixels per frame

  scrollInterval = setInterval(() => {
    if (isPaused) return
    position -= speed
    trackEl.style.transform = `translateX(${position}px)`
    // Reset when halfway through (duplicated content)
    if (Math.abs(position) >= trackEl.scrollWidth / 2) {
      position = 0
    }
  }, 16) // ~60fps
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
</style>