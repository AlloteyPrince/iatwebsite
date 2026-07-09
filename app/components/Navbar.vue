<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-inner">
      <!-- Logo -->
      <NuxtLink to="/" class="logo">
        <span class="logo-text">IAT</span>
        <span class="logo-sub">Innovation in Arts & Tech</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <NuxtLink to="/" class="nav-link" active-class="active" exact>Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link" active-class="active">About</NuxtLink>
        <a href="/#pricing" class="nav-link">Pricing</a>
        <button class="nav-link nav-cta" @click="openWhatsApp('Hi IAT, I want to start a project with you.')">
          Start Project
        </button>
      </nav>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <NuxtLink to="/" class="mobile-link" @click="mobileMenuOpen = false">Home</NuxtLink>
        <NuxtLink to="/about" class="mobile-link" @click="mobileMenuOpen = false">About</NuxtLink>
        <a href="/#pricing" class="mobile-link" @click="mobileMenuOpen = false">Pricing</a>
        <button class="mobile-link mobile-cta" @click="openWhatsApp('Hi IAT, I want to start a project with you.')">
          Start Project
        </button>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { useWhatsApp } from '~/composables/useWhatsApp'

const { openWhatsApp } = useWhatsApp()

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.9rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .navbar-inner {
    padding: 0.8rem 1rem;
  }
}

/* Logo */
.logo {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-sub {
  font-size: 0.7rem;
  color: #64748b;
  letter-spacing: 0.5px;
  font-weight: 400;
}

@media (max-width: 768px) {
  .logo-sub {
    display: none;
  }
}

/* Desktop Navigation */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link.active {
  color: #ffffff;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 2px;
}

.nav-cta {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff !important;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 2px 15px rgba(99, 102, 241, 0.2);
}

.nav-cta:hover {
  color: #ffffff !important;
  box-shadow: 0 4px 25px rgba(99, 102, 241, 0.35);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.mobile-toggle span {
  width: 26px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 1.5rem 2rem 2rem;
  gap: 1rem;
  background: rgba(10, 10, 10, 0.98);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

@media (max-width: 768px) {
  .mobile-menu {
    display: flex;
  }
}

.mobile-link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
}

.mobile-link:hover {
  color: #ffffff;
}

.mobile-cta {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff !important;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-align: center;
  font-weight: 600;
  margin-top: 0.5rem;
}

.mobile-cta:hover {
  color: #ffffff !important;
}

/* Slide Down Animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>