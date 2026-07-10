<template>
  <section class="hero">
    <div class="hero-background">
      <div class="hero-glow glow-1"></div>
      <div class="hero-glow glow-2"></div>
    </div>

    <div class="hero-content" v-reveal>
      <h1 class="hero-title">
        Design That <span class="gradient-text">Grows</span>
        <br />Your Business
      </h1>
      <p class="hero-subtitle">
        Professional design isn't just about looking good.
        It's about attracting customers, building trust,
        and increasing sales.
      </p>
      <div class="hero-actions">
        <button class="btn-primary" @click="openWhatsApp('Hi IAT, I want to start a design project for my business. Can you help me?')">
          Work With Us
        </button>
        <NuxtLink to="/about" class="btn-secondary">
          Learn More
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useWhatsApp } from '~/composables/useWhatsApp'

const { openWhatsApp } = useWhatsApp()
</script>

<style scoped>
.hero {
  position: relative;
  text-align: center;
  padding: 7rem 1rem 8rem;
  overflow: hidden;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: linear-gradient(rgba(5, 5, 15, 0.8), rgba(5, 5, 15, 0.8)), url('/images/hero-image.jpg');
  background-size: cover;
  background-position: center;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}

.glow-1 {
  top: -20%;
  left: -10%;
  width: 60%;
  height: 60%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  animation: floatGlow 8s ease-in-out infinite;
}

.glow-2 {
  bottom: -20%;
  right: -10%;
  width: 50%;
  height: 50%;
  background: linear-gradient(135deg, #06b6d4, #3b82f6);
  animation: floatGlow 10s ease-in-out infinite reverse;
}

@keyframes floatGlow {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(20px, -20px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 10px) scale(0.9);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.hero-title .gradient-text {
  background: linear-gradient(135deg, #818cf8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-block;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 25px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 35px rgba(99, 102, 241, 0.45);
}

.btn-secondary {
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.8rem 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem 5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    padding: 0 0.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
}
</style>