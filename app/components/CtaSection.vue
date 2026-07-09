<template>
  <section id="contact" class="cta-section">
    <div class="cta-container">
      <div class="cta-glow"></div>
      <div class="cta-content">
        <span class="cta-badge">Get Started</span>
        <h2 class="cta-title">Ready to Be Our Next Partner?</h2>
        <p class="cta-text">
          Get professional designs for your business starting from GHS 500/month.
          <br />
          Let's create something amazing together.
        </p>
        <div class="cta-actions">
          <button class="cta-btn" @click="openWhatsApp('Hi IAT, I want to start my design project today. Let\'s get started!')">
            Start Your Project
          </button>
          <button class="cta-btn-secondary" @click="openWhatsApp('Hi IAT, I want to discuss a custom design project for my business.')">
            Contact Us
          </button>
        </div>
        <p class="cta-note">
          ⚡ No hidden fees. Free consultation included.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useWhatsApp } from '~/composables/useWhatsApp'

const { openWhatsApp } = useWhatsApp()
</script>

<style scoped>
.cta-section {
  padding: 4rem 1rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.cta-container {
  max-width: 750px;
  margin: 0 auto;
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 24px;
  padding: 4rem 3rem;
  text-align: center;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cta-container:hover {
  border-color: rgba(99, 102, 241, 0.15);
}

.cta-glow {
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.08), transparent 70%);
  pointer-events: none;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-badge {
  display: inline-block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #818cf8;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.cta-text {
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.cta-btn {
  display: inline-block;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.9rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 25px rgba(99, 102, 241, 0.3);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 35px rgba(99, 102, 241, 0.45);
}

.cta-btn-secondary {
  display: inline-block;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.9rem 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.cta-note {
  font-size: 0.85rem;
  color: #64748b;
}

@media (max-width: 768px) {
  .cta-container {
    padding: 2.5rem 1.5rem;
    border-radius: 16px;
  }

  .cta-title {
    font-size: 1.8rem;
  }

  .cta-text {
    font-size: 0.95rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn,
  .cta-btn-secondary {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }
}
</style>