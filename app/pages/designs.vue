<template>
  <div class="designs-page">
    <!-- Page Header -->
    <div class="page-header">
      <span class="page-badge">✦ Our Work</span>
      <h1 class="page-title">Browse Our <span class="gradient-text">Design Portfolio</span></h1>
      <p class="page-subtitle">Explore our collection of designs created for businesses across Ghana.</p>
    </div>

    <!-- Thumbnail Grid -->
    <ThumbnailGrid
      :designs="data.designs"
      @select-design="selectDesign"
    />

    <!-- Large Display with Blur Background -->
    <LargeDisplay
      :design="selectedDesign"
      :designs="data.designs"
      @next="nextDesign"
      @prev="prevDesign"
      @select-design="selectDesign"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from '~/data/designs.json'

import ThumbnailGrid from '~/components/ThumbnailGrid.vue'
import LargeDisplay from '~/components/LargeDisplay.vue'

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
  title: 'IAT Portfolio - Browse Our Designs',
  meta: [
    { name: 'description', content: 'Browse our portfolio of logos, flyers, and social media designs for businesses in Ghana.' }
  ]
})
</script>

<style scoped>
.designs-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  background: #0a0a0a;
  color: #ffffff;
}

/* Page Header */
.page-header {
  text-align: center;
  padding: 3rem 0 2rem;
}

.page-badge {
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

.page-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.page-title .gradient-text {
  background: linear-gradient(135deg, #818cf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .designs-page {
    padding: 1rem 1rem 3rem;
  }

  .page-title {
    font-size: 1.8rem;
  }

  .page-subtitle {
    font-size: 0.95rem;
  }
}
</style>