<template>
  <div class="layout">
    <!-- Header -->
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <div class="header-inner">
        <NuxtLink to="/portfolio" class="logo">
          <span class="logo-text">IAT</span>
          <span class="logo-sub">Innovation in Arts & Tech</span>
        </NuxtLink>

        <nav class="nav">
          <NuxtLink to="/portfolio" class="nav-link active">Portfolio</NuxtLink>
          <a href="#pricing" class="nav-link">Pricing</a>
          <a href="#contact" class="nav-link nav-cta">Start Project</a>
        </nav>

        <button class="mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <Transition name="slide-down">
        <div v-if="mobileMenuOpen" class="mobile-menu">
          <NuxtLink to="/portfolio" class="mobile-link" @click="mobileMenuOpen = false">Portfolio</NuxtLink>
          <a href="#pricing" class="mobile-link" @click="mobileMenuOpen = false">Pricing</a>
          <a href="#contact" class="mobile-link mobile-cta" @click="mobileMenuOpen = false">Start Project</a>
        </div>
      </Transition>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="footer-logo">IAT</span>
            <p class="footer-tagline">Design that grows your business.</p>
            <p class="footer-description">Professional design services for small businesses in Ghana.</p>
          </div>

          <div class="footer-links-group">
            <h4 class="footer-heading">Services</h4>
            <a href="#">Logo Design</a>
            <a href="#">Flyer Design</a>
            <a href="#">Social Media Graphics</a>
            <a href="#">Brand Identity</a>
          </div>

          <div class="footer-links-group">
            <h4 class="footer-heading">Company</h4>
            <a href="/portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div class="footer-links-group">
            <h4 class="footer-heading">Connect</h4>
            <a href="#">WhatsApp</a>
            <a href="#">Instagram</a>
            <a href="#">Email</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 IAT - Innovation in Arts & Tech. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
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
.layout {
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
}

/* Header */
.header {
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

.header.scrolled {
  background: rgba(10, 10, 10, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.9rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .header-inner {
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

/* Navigation */
.nav {
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
  .nav {
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

/* Footer */
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-tagline {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 500;
}

.footer-description {
  color: #64748b;
  font-size: 0.9rem;
  max-width: 300px;
}

.footer-heading {
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
}

.footer-links-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-links-group a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links-group a:hover {
  color: #ffffff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: #64748b;
  font-size: 0.8rem;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a {
  color: #64748b;
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #94a3b8;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1rem 1.5rem;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>