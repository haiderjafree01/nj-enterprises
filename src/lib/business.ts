export const BUSINESS = {
  name: "NJ Developers",
  phoneDisplay: "+92 344 4446362",
  phoneTel: "+923444446362",
  whatsapp: "https://wa.me/923444446362",
  addressShort: "Main Pine Avenue, near Valencia, Lahore",
  addressFull:
    "Main Pine Ave, near Valencia, Ameer Pura, Amirpura Jugghian, Lahore, Punjab, Pakistan",
  maps: "https://www.google.com/maps/place/NJ+Enterprises/@31.4177694,74.1723888,10637m/data=!3m1!1e3!4m10!1m2!2m1!1sNJ+Developers+Main+Pine+Avenue+Valencia+Lahore!3m6!1s0x391901df5d4781b7:0x2e24835746a35a31!8m2!3d31.4177694!4d74.2486065!15sCi5OSiBEZXZlbG9wZXJzIE1haW4gUGluZSBBdmVudWUgVmFsZW5jaWEgTGFob3JlWjAiLm5qIGRldmVsb3BlcnMgbWFpbiBwaW5lIGF2ZW51ZSB2YWxlbmNpYSBsYWhvcmWSARJyZWFsX2VzdGF0ZV9hZ2VuY3maAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVHZFZWWGVGbE9SMVV5VkZVeGMyUkVVWGxrUkZadlZtNUNOVlpIWXhBQuABAPoBBAgAED4!16s%2Fg%2F11mrnymcwl?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  rating: 4.8,
  reviews: 9,
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "properties", label: "Properties" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export function whatsappLink(message: string) {
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
