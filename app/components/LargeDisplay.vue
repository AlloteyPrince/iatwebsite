<template>
  <div v-if="design" class="large-display">
    <div class="display-container">
      <!-- Blurred Background -->
      <div class="blur-background" :style="{ backgroundImage: `url(${design.image})` }"></div>

      <!-- Main Image -->
      <div class="display-image-wrapper">
        <img :src="design.image" :alt="design.client + ' - ' + design.category" class="display-image" />
      </div>

      <!-- Navigation -->
      <button class="nav-arrow nav-left" @click="$emit('prev')" aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button class="nav-arrow nav-right" @click="$emit('next')" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <!-- Pagination Dots -->
      <div class="pagination-dots">
        <span
          v-for="(_, index) in designs"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="$emit('select-design', index)"
        ></span>
      </div>

      <!-- Metadata -->
      <div class="design-metadata">
        <div class="metadata-item">
          <span class="metadata-label">Category</span>
          <span class="metadata-value">{{ design.category }}</span>
        </div>
        <div class="metadata-divider"></div>
        <div class="metadata-item">
          <span class="metadata-label">Client</span>
          <span class="metadata-value">{{ design.client }}</span>
        </div>
        <div class="metadata-divider"></div>
        <div class="metadata-item">
          <span class="metadata-label">Purpose</span>
          <span class="metadata-value">{{ design.purpose }}</span>
        </div>
      </div>
    </div>

    <!-- WhatsApp CTA Below Display -->
    <div class="display-cta">
      <button class="btn-cta" @click="openWhatsApp(`Hi IAT, I love the ${design.category} design you did for ${design.client}. I need something similar for my business. Can you help me?`)">
        <span>💬 I need a design like this!</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useWhatsApp } from '~/composables/useWhatsApp'

const props = defineProps({
  design: {
    type: Object,
    default: null
  },
  designs: {
    type: Array,
    default: () => []
  }
})

defineEmits(['next', 'prev', 'select-design'])

const { openWhatsApp } = useWhatsApp()

const currentIndex = computed(() => {
  if (!props.design || !props.designs.length) return 0
  return props.designs.findIndex(d => d.id === props.design.id)
})
</script>

<style scoped>
.large-display {
  margin: 3rem 0;
  padding: 0 1rem;
}

.display-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}

@media (max-width: 768px) {
  .display-container {
    aspect-ratio: 4 / 3;
    min-height: 300px;
    border-radius: 12px;
  }
}

.blur-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: blur(40px) brightness(0.25);
  transform: scale(1.15);
  z-index: 0;
}

.display-image-wrapper {
  position: relative;
  z-index: 1;
  max-width: 65%;
  max-height: 80%;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

@media (max-width: 768px) {
  .display-image-wrapper {
    max-width: 85%;
    max-height: 70%;
  }
}

.display-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* Navigation Arrows */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-50%) scale(1.05);
}

.nav-left {
  left: 1.5rem;
}

.nav-right {
  right: 1.5rem;
}

@media (max-width: 768px) {
  .nav-arrow {
    width: 36px;
    height: 36px;
  }
  .nav-left {
    left: 0.75rem;
  }
  .nav-right {
    right: 0.75rem;
  }
}

/* Pagination Dots */
.pagination-dots {
  position: absolute;
  bottom: 5.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .pagination-dots {
    bottom: 4.5rem;
  }
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  width: 20px;
  border-radius: 4px;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* Metadata */
.design-metadata {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1rem 2rem;
  border-radius: 14px;
  display: flex;
  gap: 2rem;
  min-width: 50%;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .design-metadata {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    min-width: 90%;
    bottom: 1rem;
    border-radius: 10px;
  }
}

.metadata-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
}

.metadata-label {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #94a3b8;
  font-weight: 600;
}

.metadata-value {
  font-size: 0.85rem;
  color: #f1f5f9;
  font-weight: 500;
  text-align: center;
}

@media (max-width: 768px) {
  .metadata-value {
    font-size: 0.75rem;
  }
}

.metadata-divider {
  width: 1px;
  background: rgba(255, 255, 255, 0.08);
}

@media (max-width: 768px) {
  .metadata-divider {
    display: none;
  }
}

/* Display CTA */
.display-cta {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
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