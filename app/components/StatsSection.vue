<template>
  <section class="stats-section">
    <div class="stats-header" v-reveal>
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
      <div class="stat-card" v-for="(stat, key, idx) in stats" :key="key" v-reveal="{ delay: idx * 100 }">
        <div class="stat-number">{{ stat }}</div>
        <div class="stat-label">
          <span v-if="key === 'revenueGrowth'">of small businesses that invest in design see revenue growth within 1 year</span>
          <span v-else-if="key === 'customerRetention'">of small businesses that invest in design see higher customer retention</span>
          <span v-else>More Revenue Growth for brands that invest in design vs. those that don't</span>
        </div>
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Redesigned Testimonials -->
    <div class="testimonials-section">
      <h3 class="testimonial-heading" v-reveal>
        <span>💬</span> Real Results from Businesses Like Yours
      </h3>

      <div class="testimonials-wrapper">
        <div
          class="testimonials-track"
          ref="trackRef"
          @mouseenter="pauseScroll"
          @mouseleave="resumeScroll"
        >
          <div v-for="(testimonial, index) in duplicatedTestimonials" :key="index" class="testimonial-card">
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  stats: {
    type: Object,
    required: true
  },
  testimonials: {
    type: Array,
    required: true
  }
})

const duplicatedTestimonials = computed(() => [...props.testimonials, ...props.testimonials])

// Horizontal infinite scroll
const trackRef = ref(null)
let scrollInterval = null
let isPaused = ref(false)
let position = 0
const speed = 0.4

const startScroll = () => {
  if (scrollInterval) return
  const trackEl = trackRef.value
  if (!trackEl) return

  scrollInterval = setInterval(() => {
    if (isPaused.value) return
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
  isPaused.value = true
}

const resumeScroll = () => {
  isPaused.value = false
}

onMounted(() => {
  startScroll()
})

onBeforeUnmount(() => {
  stopScroll()
})
</script>

<style scoped>
.stats-section {
  padding: 6rem 0 7rem;
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
  .stats-section {
    padding: 4rem 0 5rem;
  }

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

/* Divider between stats and testimonials */
.section-divider {
  height: 1px;
  max-width: 100%;
  margin: 0 0 4rem;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.14), transparent);
}

/* Redesigned Testimonials */
.testimonials-section {
  max-width: 100%;
  margin: 0 auto;
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

.testimonials-wrapper {
  overflow: hidden;
  position: relative;
  width: 100%;
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
}

.testimonials-track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
  will-change: transform;
}

.testimonial-card {
  position: relative;
  flex-shrink: 0;
  width: 280px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 1.25rem;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(99, 102, 241, 0.15);
  box-shadow: 0 8px 40px rgba(99, 102, 241, 0.08);
}

.testimonial-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
}

.testimonial-body {
  flex: 1;
  min-width: 0;
}

.testimonial-stars {
  color: #fbbf24;
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin-bottom: 0.4rem;
}

.testimonial-quote {
  color: #e2e8f0;
  font-size: 0.85rem;
  line-height: 1.55;
  font-style: italic;
  margin-bottom: 0.75rem;
}

.testimonial-author-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.testimonial-author {
  color: #ffffff;
  font-weight: 600;
  font-size: 0.85rem;
}

.testimonial-location {
  color: #94a3b8;
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .testimonial-card {
    width: 240px;
    padding: 1rem;
  }
}
</style>