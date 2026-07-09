<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="about-hero-glow"></div>
      <div class="about-hero-content">
        <span class="about-badge">✦ About Us</span>
        <h1 class="about-title">Innovation in <span class="gradient-text">Arts & Tech</span></h1>
        <p class="about-subtitle">
          We are a design agency based in Ghana, dedicated to helping small businesses
          stand out with professional, high-quality design.
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="about-section">
      <div class="about-grid">
        <div class="about-text">
          <span class="section-label">Our Mission</span>
          <h2 class="section-title">Design That <span class="gradient-text">Empowers</span> Businesses</h2>
          <p class="section-text">
            At IAT, we believe that every business deserves to look professional and credible.
            We help small businesses in Ghana build strong visual identities that attract
            customers, build trust, and drive growth.
          </p>
          <p class="section-text">
            Whether you need a logo, a flyer, social media graphics, or a full brand identity,
            we bring creativity and strategy to every project.
          </p>
          <button class="btn-primary" @click="openWhatsApp('Hi IAT, I want to learn more about your agency.')">
            Let's Work Together
          </button>
        </div>
        <div class="about-visual">
          <div class="about-icon-large">🎨</div>
          <div class="about-ring"></div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="values-header">
        <span class="section-label">What We Stand For</span>
        <h2 class="section-title">Our <span class="gradient-text">Core Values</span></h2>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">💡</div>
          <h3 class="value-title">Creativity</h3>
          <p class="value-text">We bring fresh, innovative ideas to every design project.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🎯</div>
          <h3 class="value-title">Quality</h3>
          <p class="value-text">We deliver professional, high-quality designs that make you stand out.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">🤝</div>
          <h3 class="value-title">Partnership</h3>
          <p class="value-text">We work closely with you to bring your vision to life.</p>
        </div>
        <div class="value-card">
          <div class="value-icon">⚡</div>
          <h3 class="value-title">Reliability</h3>
          <p class="value-text">We deliver on time, every time. No excuses.</p>
        </div>
      </div>
    </section>

    <!-- Back to Home -->
    <div class="back-link">
      <NuxtLink to="/" class="btn-secondary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useWhatsApp } from '~/composables/useWhatsApp'

const { openWhatsApp } = useWhatsApp()

useHead({
  title: 'About IAT - Innovation in Arts & Tech',
  meta: [
    { name: 'description', content: 'Learn about IAT, a design agency based in Ghana helping small businesses stand out with professional design.' }
  ]
})
</script>

<style scoped>
.about-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  background: #0a0a0a;
  color: #ffffff;
}

/* About Hero */
.about-hero {
  position: relative;
  text-align: center;
  padding: 5rem 1rem 4rem;
  overflow: hidden;
}

.about-hero-glow {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.08), transparent 70%);
  pointer-events: none;
}

.about-hero-content {
  position: relative;
  z-index: 1;
  max-width: 750px;
  margin: 0 auto;
}

.about-badge {
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

.about-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #ffffff;
}

.about-title .gradient-text {
  background: linear-gradient(135deg, #818cf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-subtitle {
  font-size: 1.2rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* About Section */
.about-section {
  padding: 4rem 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-label {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #818cf8;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 50px;
  width: fit-content;
}

.section-title {
  font-size: 2.25rem;
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

.section-text {
  color: #94a3b8;
  font-size: 1.05rem;
  line-height: 1.7;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #fff;
  border: none;
  padding: 0.9rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  box-shadow: 0 4px 25px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 35px rgba(99, 102, 241, 0.45);
}

/* About Visual */
.about-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.about-icon-large {
  font-size: 6rem;
  z-index: 2;
  animation: float3D 3s ease-in-out infinite;
}

.about-ring {
  position: absolute;
  inset: -20px;
  border: 2px solid rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  animation: spinRing 12s linear infinite;
}

.about-ring::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 50%;
}

.about-ring::after {
  content: '';
  position: absolute;
  bottom: -6px;
  right: 50%;
  transform: translateX(50%);
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  border-radius: 50%;
}

@keyframes float3D {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes spinRing {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Values Section */
.values-section {
  padding: 4rem 0 2rem;
}

.values-header {
  text-align: center;
  margin-bottom: 3rem;
}

.values-header .section-label {
  margin: 0 auto 0.5rem;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .values-grid {
    grid-template-columns: 1fr;
  }

  .about-title {
    font-size: 2.25rem;
  }

  .section-title {
    font-size: 1.8rem;
  }
}

.value-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(99, 102, 241, 0.15);
  box-shadow: 0 8px 40px rgba(99, 102, 241, 0.08);
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.value-text {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Back Link */
.back-link {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.7rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
</style>