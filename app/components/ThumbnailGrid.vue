<template>
  <div class="thumbnail-grid">
    <div class="grid-header">
      <h3 class="grid-title">Browse Our Work</h3>
      <p class="grid-subtitle">Click any design below to view it in full.</p>
    </div>

    <div class="grid">
      <div
        v-for="(design, index) in designs"
        :key="design.id"
        class="thumbnail"
        @click="$emit('select-design', index)"
      >
        <div class="thumbnail-image-wrapper">
          <img :src="design.image" :alt="design.client + ' - ' + design.category" loading="lazy" />
          <div class="thumbnail-overlay">
            <span class="thumbnail-view">View</span>
          </div>
        </div>
        <div class="thumbnail-info">
          <span class="thumbnail-category">{{ design.category }}</span>
          <span class="thumbnail-client">{{ design.client }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  designs: {
    type: Array,
    required: true
  }
})

defineEmits(['select-design'])
</script>

<style scoped>
.thumbnail-grid {
  padding: 2rem 0 3rem;
}

.grid-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.grid-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.grid-subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .grid-title {
    font-size: 1.4rem;
  }
}

.thumbnail {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.thumbnail:hover {
  transform: translateY(-4px);
  border-color: #818cf8;
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.15);
}

.thumbnail-image-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #1a1a2e;
}

.thumbnail-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.thumbnail:hover .thumbnail-image-wrapper img {
  transform: scale(1.05);
}

.thumbnail-overlay {
  position: absolute;
  inset: 0;
  background: rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.thumbnail:hover .thumbnail-overlay {
  opacity: 1;
}

.thumbnail-view {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.thumbnail-info {
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.thumbnail-category {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #a5b4fc;
  font-weight: 600;
}

.thumbnail-client {
  font-size: 0.85rem;
  color: #f1f5f9;
  font-weight: 500;
}
</style>