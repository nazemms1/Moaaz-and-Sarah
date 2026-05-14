export type Lang = "ar";

export const translations = {
  ar: {
    partner1: "محمد معاذ",
    partner2: "سارة",
    partner1Title: "الدكتور",
    partner2Title: "الدكتورة",
    partner1Father: "ابن الأستاذ صبحي حباب",
    partner2Father: "ابنة الأستاذ عماد ريحاوي",
    partner1Relation: "نجل",
    partner1FatherName: "الأستاذ صبحي حباب",
    partner2Relation: "كريمة",
    partner2FatherName: "الأستاذ عماد ريحاوي",
    tagline: "نحتفل بزفافنا",
    displayDate: "الثلاثاء، ٢ يونيو ٢٠٢٦",
    displayTime: "٨:٠٠ مساءً",
    venueName: "قاعة الياسمين — البهية",
    venueAddress: "دمشق، سوريا",

    cordiallyInvited: "يسعدنا دعوتكم",
    tapToOpen: "انقر للفتح",

    scrollDown: "تمرير",

    eyebrow: "رسالة من القلب",
    messageTitle: "نسعد بدعوتكم",
    messageParagraphs: [
      "بقلوب مفعمة بالبهجة والامتنان، ندعوكم لتكونوا جزءاً من أجمل احتفالاتنا.",
      "حضوركم وضحكاتكم ومحبتكم شكّلت من نحن، ولا أحد سوى أنتم يستحق أن يكون بجانبنا ونحن نبدأ هذه الرحلة الجميلة معاً.",
      "انضموا إلينا لتبادل الأيمان والاحتفال بالحب الذي قادنا إلى هذه اللحظة السحرية.",
    ],
    signature: "بكل محبتنا، الدكتور محمد معاذ والدكتورة سارة",

    saveTheDate: "احفظوا الموعد",
    weAreMarried: "أصبحنا زوجين",
    congratsHeading: "مبروك يا الدكتور محمد معاذ والدكتورة سارة",
    congratsSubtitle:
      "بدأت رحلتكما معاً — كلّ عام وأنتما بخير وسعادة وحب لا ينتهي",
    congratsTagline: "شكراً لكم على مشاركتنا هذه اللحظة الجميلة",
    days: "أيام",
    hours: "ساعات",
    minutes: "دقائق",
    seconds: "ثوانٍ",

    locationEyebrow: "مكان الحفل",
    venueTitle: "قاعة الاحتفال",
    getDirections: "احصل على الاتجاهات",

    leaveAWish: "اتركوا أمنية",
    congratsBook: "سجل التهاني",
    shareWishes: "شاركوا محبتكم وتمنياتكم لـ",
    yourName: "اسمكم",
    yourMessage: "رسالتكم",
    namePlaceholder: "مثال: سارة وأحمد",
    messagePlaceholder: "شاركوا تمنياتكم، ذكرياتكم، أو كلمة من القلب…",
    sendWishes: "أرسل التهاني",
    messageSent: "تم الإرسال!",
    wishesShared: "أمنية مشتركة",
    wishesSharedPlural: "أمنيات مشتركة",

    rsvpTitle: "تَأكِيدُ الحُضُور",
    rsvpBody: "في حال الاعتذار، يُرجى إخبارنا قبل تاريخ",
    rsvpDeadline: " ٢٢ مايو ٢٠٢٦",
    rsvpDeadlineEn: "22 / 05 / 2026",
    rsvpContact: "شكراً لتفهّمكم ومراعاتكم",

    timelineEyebrow: "برنامج الحفل",
    timelineTitle: "بَرْنَامَجُ الحَفْلِ",
    timelineSubtitle: "نسعد بمشاركتكم كل لحظة من ليلتنا المميزة",
    timelineEvents: [
      {
        date: "٨:٠٠ مساءً",
        title: "بَدْءُ الاحتِفَال",
        description:
          "تُفتَح أبواب القاعة وتبدأ ليلة العمر، نرحب بضيوفنا الكرام ويبدأ الاحتفال.",
        icon: "✦",
      },
      {
        date: "١١:٠٠ مساءً",
        title: "دُخُولُ العَرِيس",
        description:
          "اللحظة الأهم في الحفل، دخول العريس الدكتور محمد معاذ في مشهد لا يُنسى.",
        icon: "◈",
      },
      {
        date: "١٢:٠٠    ",
        title: "خِتَامُ الحَفْلِ",
        description:
          "نودّع الليلة بأجمل الذكريات وأصدق المشاعر، شكراً لكل من شاركنا هذه اللحظة.",
        icon: "❧",
      },
    ],
  },
} as const;

export type Translations = {
  [K in keyof (typeof translations)["ar"]]: K extends "timelineEvents"
    ? ReadonlyArray<{
        date: string;
        title: string;
        description: string;
        icon: string;
      }>
    : K extends "messageParagraphs"
      ? ReadonlyArray<string>
      : string;
};
