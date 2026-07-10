export default defineNuxtPlugin((nuxtApp) => {
  let observer = null

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding) {
      const delay = binding.value?.delay ?? 0
      return {
        class: 'reveal',
        style: delay ? { transitionDelay: `${delay}ms` } : undefined
      }
    },
    mounted(el, binding) {
      el.classList.add('reveal')
      const delay = binding.value?.delay ?? 0
      if (delay) el.style.transitionDelay = `${delay}ms`
      observer?.observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    }
  })
})
