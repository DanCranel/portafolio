export const site = {
  name: "Daniel Morales",
  brand: "Cranel Studios",
  email: "danielmoralestrelles96@gmail.com",
  github: "https://github.com/DanCranel",
  linkedin: "https://www.linkedin.com/in/daniel-morales-777640276/",
  // International format without symbols for the wa.me link
  whatsapp: "593990070807",
  whatsappDisplay: "+593 99 007 0807",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
