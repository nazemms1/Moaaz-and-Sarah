import type { SiteConfig } from "../../types/config";

export const config: SiteConfig = {
  meta: {
    title: "Dr. Sarah & Dr. Muhammad Moaaz Habbab | June 2, 2026",
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
    signature: "بكل محبتنا، الدكتور محمد معاذ والدكتورة سارة",
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
    envelope: "/Moaaz-Habbab-Wedding/wedding.jpeg",
    couple: "/Moaaz-Habbab-Wedding/wedding.jpeg",
    message: "/Moaaz-Habbab-Wedding/message1.jpeg",
    date: "/Moaaz-Habbab-Wedding/date.jpeg",
    venue: "/Moaaz-Habbab-Wedding/venue.jpeg",
    guestbook: "/Moaaz-Habbab-Wedding/guestbook.jpeg",
    engagment: "/Moaaz-Habbab-Wedding/backgroundImage.jpeg",
    backgroundImage: "/Moaaz-Habbab-Wedding/backgroundImage.jpg",
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
