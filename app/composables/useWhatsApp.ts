// composables/useWhatsApp.ts

export const useWhatsApp = () => {
  // Replace with your actual phone number (Ghana: 233 + number without leading 0)
  const phoneNumber = '233270751657' // Example: 233 50 123 4567

  const generateWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  const openWhatsApp = (message: string) => {
    const link = generateWhatsAppLink(message)
    window.open(link, '_blank')
  }

  return {
    phoneNumber,
    generateWhatsAppLink,
    openWhatsApp
  }
}