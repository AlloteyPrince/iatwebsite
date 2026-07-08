<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand">
          <span class="footer-logo">IAT</span>
          <p class="footer-tagline">Design that grows your business.</p>
          <p class="footer-description">
            Professional design services for small businesses in Ghana.
          </p>
        </div>

        <!-- Services Column -->
        <div class="footer-links-group">
          <h4 class="footer-heading">Services</h4>
          <button class="footer-link-btn" @click="openWhatsApp('Hi IAT, I need a logo design for my business. Can you help?')">
            Logo Design
          </button>
          <button class="footer-link-btn" @click="openWhatsApp('Hi IAT, I need a flyer design. Can you help?')">
            Flyer Design
          </button>
          <button class="footer-link-btn" @click="openWhatsApp('Hi IAT, I need social media graphics. Can you help?')">
            Social Media Graphics
          </button>
          <button class="footer-link-btn" @click="openWhatsApp('Hi IAT, I need a full brand identity. Can you help?')">
            Brand Identity
          </button>
        </div>

        <!-- Company Column -->
        <div class="footer-links-group">
          <h4 class="footer-heading">Company</h4>
          <NuxtLink to="/portfolio" class="footer-link">Portfolio</NuxtLink>
          <a href="#pricing" class="footer-link">Pricing</a>
          <button class="footer-link-btn" @click="openWhatsApp('Hi IAT, can you tell me more about your agency?')">
            About
          </button>
          <button class="footer-link-btn" @click="openWhatsApp('Hi IAT, I want to contact you.')">
            Contact
          </button>
        </div>

        <!-- Connect Column -->
        <div class="footer-links-group">
          <h4 class="footer-heading">Connect</h4>
          <button class="footer-link-btn" @click="openWhatsApp('Hi IAT, I found you online and want to connect.')">
            WhatsApp
          </button>
          <a href="#" class="footer-link">Instagram</a>
          <button class="footer-link-btn" @click="openWhatsApp('Hi IAT, I have a question about your services.')">
            Email
          </button>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2025 IAT - Innovation in Arts & Tech. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useWhatsApp } from '~/composables/useWhatsApp'

const { openWhatsApp } = useWhatsApp()
</script>

<style scoped>
.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  padding: 4rem 2rem 2rem;
  margin-top: 4rem;
  background: rgba(10, 10, 10, 0.5);
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
  line-height: 1.6;
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

.footer-link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-link-btn {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;
  padding: 0;
  transition: color 0.3s ease;
  font-family: inherit;
}

.footer-link-btn:hover {
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