import type { SiteConfig } from "../../types/config";

export const config: SiteConfig = {
  meta: {
    title: "Dr. Muhammad Mu'adh & Dr. Sarah | June 2, 2026",
    language: "ar",
  },
  couple: {
    partner1: "محمد معاذ",
    partner2: "سارة",
    partner1Father: "ابن الأستاذ صبحي حباب",
    partner2Father: "ابنة الأستاذ عماد ريحاوي",
    tagline: "نحتفل بزفافنا",
  },

  message: {
    paragraphs: [
      "بقلوب مفعمة بالبهجة والامتنان، ندعوكم لتكونوا جزءاً من أجمل احتفالاتنا.",
      "حضوركم وضحكاتكم ومحبتكم شكّلت من نحن، ولا أحد سوى أنتم يستحق أن يكون بجانبنا ونحن نبدأ هذه الرحلة الجميلة معاً.",
      "انضموا إلينا لتبادل الأيمان والاحتفال بالحب الذي قادنا إلى هذه اللحظة السحرية.",
    ],
    signature: "بكل محبتنا، محمد معاذ وسارة",
  },
  event: {
    weddingDate: "2026-06-02T20:00:00",
    displayDate: "الثلاثاء، ٢ يونيو ٢٠٢٦",
    displayTime: "٨:٠٠ مساءً",
  },
  venue: {
    name: "قاعة الياسمين — البهية",
    address: "دمشق، سوريا",
    googleMapsEmbedUrl:
      "https://maps.google.com/maps?q=33.49735850955281,36.249302772151715&z=16&output=embed",
    googleMapsLink:
      "https://www.google.com/maps?q=33.49735850955281,36.249302772151715",
  },
  closing: {
    message:
      "نتطلع بشوق لمشاركتكم هذه اللحظة الجميلة وصنع ذكريات تدوم مدى الحياة.",
    rsvpLink: "https://forms.google.com",
    hashtag: "#محمد_معاذ_وسارة_2026",
  },
  gallery: {
    images: [
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
        alt: "Couple walking together",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
        alt: "Wedding rings",
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
        alt: "Romantic moment",
      },
      {
        src: "https://images.unsplash.com/photo-1606216794079-73f76fbf9d7f?w=800&q=80",
        alt: "Couple portrait",
      },
    ],
  },
  video: {
    src: "/video/hero.mp4",
    poster:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80",
  },
  sectionImages: {
    envelope: "/wedding/wedding.jpeg",
    couple: "/wedding/wedding.jpeg",
    message: "/wedding/message1.jpeg",
    date: "/wedding/date.jpeg",
    venue: "/wedding/venue.jpeg",
    guestbook: "/wedding/guestbook.jpeg",
    engagment: "/wedding/engagement.jpeg",
    backgroundImage: "/wedding/backgroundImage.jpg",
  },

  guestbook: {
    seedMessages: [
      {
        name: "سارة ومحمد",
        message:
          "نتمنى لكما حياة مليئة بالسعادة والمحبة والمغامرات الجميلة معاً. نحن في غاية السعادة للاحتفال معكما!",
      },
      {
        name: "عائلة الريحاوي",
        message: "ليزداد حبكما قوةً مع كل يوم يمر. ألف مبروك لأجمل عروسين!",
      },
    ],
  },
};
