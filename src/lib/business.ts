export const BUSINESS = {
  name: "NJ Enterprises",
  phoneDisplay: "+92 344 4446362",
  phoneTel: "+923444446362",
  whatsapp: "https://wa.me/923444446362",
  addressShort: "Main Pine Avenue, near Valencia, Lahore",
  addressFull:
    "Main Pine Ave, near Valencia, Ameer Pura, Amirpura Jugghian, Lahore, Punjab, Pakistan",
  // Replace with the verified Google Maps listing URL once supplied.
  maps: "https://www.google.com/maps/search/?api=1&query=NJ+Enterprises+Main+Pine+Avenue+Valencia+Lahore",
  rating: 4.8,
  reviews: 9,
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "properties", label: "Properties" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export function whatsappLink(message: string) {
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
