<template>
  <div class="layout">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
.layout {
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
}

main {
  padding-top: 4.5rem;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (max-width: 768px) {
  main {
    padding-top: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>