/*
  ════════════════════════════════════════════════════════════════
  ALL THE WEBSITE TEXT LIVES HERE  —  English + Telugu, side by side
  ════════════════════════════════════════════════════════════════

  Every sentence is written twice:
      en: "English text"
      te: "తెలుగు వాక్యం"

  To fix any wording later, just edit the text inside the quotes.
  You never have to touch the design or the code to change words.

  👉 THINGS TO REPLACE WITH YOUR REAL DETAILS (search for "REPLACE"):
     - phone number
     - whatsapp number
     - instagram link
  ────────────────────────────────────────────────────────────────
*/

export type Lang = "en" | "te";

// Your real-world business details (used in links, map, SEO).
export const business = {
  phoneDisplay: "+91 87269 99777", // primary phone (shown on screen)
  phoneDial: "+918726999777", // primary phone, no spaces (for the call button)
  phoneDisplay2: "+91 96965 01938", // second phone (shown on screen)
  phoneDial2: "+919696501938", // second phone, no spaces (for the call button)
  whatsapp: "918726999777", // WhatsApp number — booking enquiries go here (country code, no +, no spaces)
  instagram: "https://www.instagram.com/sriumamaheswarayatraniwas", // confirmed handle
  email: "umamaheswarayatraniwas@gmail.com", // REPLACE if you have a different email
  // Full address (from your logo)
  addressLine: "D.No. 28/176, Pandey Haveli, Bengali Tola, Near Bholagiri Ashram, Varanasi – 221001, Uttar Pradesh",
  mapQuery: "Pandey Haveli, Bengali Tola, Varanasi, Uttar Pradesh 221001",
};

export const site = {
  brand: {
    name: { en: "Sri Uma Maheswara Yatra Niwas", te: "శ్రీ ఉమా మహేశ్వర యాత్రా నివాస్" },
    sub: { en: "Nitya Annadana Satram · Kashi", te: "నిత్య అన్నదాన సత్రం · కాశీ" },
  },

  nav: {
    home: { en: "Home", te: "హోమ్" },
    about: { en: "About", te: "మా గురించి" },
    rooms: { en: "Rooms", te: "గదులు" },
    annadanam: { en: "Annadanam", te: "అన్నదానం" },
    services: { en: "Services", te: "సేవలు" },
    packages: { en: "Packages", te: "ప్యాకేజీలు" },
    kashi: { en: "Kashi", te: "కాశీ" },
    contact: { en: "Contact", te: "సంప్రదించండి" },
    book: { en: "Book a Stay", te: "గది బుక్ చేయండి" },
  },

  hero: {
    eyebrow: { en: "🕉 Har Har Mahadev · Kashi", te: "🕉 హర హర మహాదేవ్ · కాశీ" },
    // The big centred line is the business NAME (see site.brand.name).
    // This spiritual caption sits just below it to welcome pilgrims.
    caption: {
      en: "Come as a pilgrim, stay as family — may Kashi Vishwanath bless your journey.",
      te: "యాత్రికునిగా రండి, కుటుంబంగా ఉండండి — కాశీ విశ్వనాథుడు మీ యాత్రను ఆశీర్వదించుగాక.",
    },
    subtitle: {
      en: "Clean rooms, daily free Annadanam, and the holy Ganga just steps away — in the heart of Varanasi.",
      te: "శుభ్రమైన గదులు, ప్రతిరోజూ ఉచిత అన్నదానం, పవిత్ర గంగానది కొద్ది అడుగుల దూరంలో — వారణాసి నడిబొడ్డున.",
    },
    ctaPrimary: { en: "Book a Stay", te: "గది బుక్ చేయండి" },
    ctaSecondary: { en: "Call Now", te: "ఇప్పుడే కాల్ చేయండి" },
  },

  features: {
    title: { en: "Why stay with us", te: "మాతో ఎందుకు బస చేయాలి" },
    items: [
      {
        icon: "🛏️",
        title: { en: "Clean, comfortable rooms", te: "శుభ్రమైన, సౌకర్యవంతమైన గదులు" },
        desc: {
          en: "Tidy rooms for singles, couples and families, with the basics you need for a restful stay.",
          te: "ఒంటరి, దంపతులు, కుటుంబాలకు శుభ్రమైన గదులు — ప్రశాంత బసకు కావలసిన అన్ని సౌకర్యాలతో.",
        },
      },
      {
        icon: "🍲",
        title: { en: "Daily free Annadanam", te: "ప్రతిరోజూ ఉచిత అన్నదానం" },
        desc: {
          en: "Hot, sattvic vegetarian meals served with devotion every day, free of cost.",
          te: "ప్రతిరోజూ భక్తితో వడ్డించే వేడివేడి సాత్విక శాకాహార భోజనం — పూర్తి ఉచితం.",
        },
      },
      {
        icon: "🛕",
        title: { en: "Near the temple & ghats", te: "ఆలయం, ఘాట్‌లకు సమీపం" },
        desc: {
          en: "Walking distance to Kashi Vishwanath and the holy Ganga ghats.",
          te: "కాశీ విశ్వనాథ్, పవిత్ర గంగా ఘాట్‌లకు నడక దూరంలో.",
        },
      },
      {
        icon: "📍",
        title: { en: "Easy to reach", te: "సులభ ప్రయాణం" },
        desc: {
          en: "In Bengali Tola, close to autos, markets and the main temple lanes.",
          te: "బెంగాలీ టోలాలో — ఆటోలు, మార్కెట్లు, ఆలయ వీధులకు దగ్గరగా.",
        },
      },
    ],
  },

  annadanam: {
    eyebrow: { en: "Nitya Annadanam", te: "నిత్య అన్నదానం" },
    title: { en: "Food served as worship", te: "అన్నదానమే మహాదానం" },
    body: {
      en: "At our satram no pilgrim goes hungry. Every day we serve hot, freshly cooked sattvic meals free of cost, as an offering to Lord Vishwanath. Sharing food is the highest form of seva.",
      te: "మా సత్రంలో ఏ యాత్రికుడూ ఆకలితో ఉండడు. ప్రతిరోజూ వేడిగా, తాజాగా వండిన సాత్విక భోజనాన్ని విశ్వనాథునికి నివేదనగా ఉచితంగా వడ్డిస్తాం. అన్నదానం అన్నిటికంటే గొప్ప సేవ.",
    },
    points: [
      { en: "Pure vegetarian", te: "సంపూర్ణ శాకాహారం" },
      { en: "Served daily", te: "ప్రతిరోజూ వడ్డింపు" },
      { en: "Completely free", te: "పూర్తి ఉచితం" },
    ],
    meals: [
      { icon: "🍛", time: { en: "Lunch", te: "మధ్యాహ్నం" }, item: { en: "Andhra Meals", te: "ఆంధ్ర భోజనం" } },
      { icon: "🫓", time: { en: "Night", te: "రాత్రి" }, item: { en: "Tiffin", te: "టిఫిన్" } },
    ],
    sponsorship: {
      en: "Sponsor a special Annadanam on your birthday or anniversary — feed pilgrims in your family's name.",
      te: "మీ పుట్టినరోజు లేదా వార్షికోత్సవం సందర్భంగా ప్రత్యేక అన్నదానాన్ని స్పాన్సర్ చేయండి — మీ కుటుంబ పేరున యాత్రికులకు అన్నదానం పెట్టండి.",
    },
  },

  rooms: {
    eyebrow: { en: "Stay with us", te: "మాతో బస చేయండి" },
    title: { en: "Simple, clean rooms", te: "సరళమైన, శుభ్రమైన గదులు" },
    body: {
      en: "Choose a room that suits your family. All rooms are kept clean and ready for pilgrims.",
      te: "మీ కుటుంబానికి సరిపోయే గదిని ఎంచుకోండి. అన్ని గదులు యాత్రికుల కోసం శుభ్రంగా సిద్ధంగా ఉంటాయి.",
    },
    items: [
      {
        image: "/images/room1.jpeg",
        name: { en: "AC Room", te: "ఏసీ గది" },
        desc: { en: "Comfortable air-conditioned room.", te: "సౌకర్యవంతమైన ఏసీ గది." },
        price: { en: "₹2000 / 3 persons", te: "₹2000 / 3 వ్యక్తులు" },
      },
      {
        image: "/images/room2.jpeg",
        name: { en: "Non-AC Room", te: "నాన్-ఏసీ గది" },
        desc: { en: "Clean, airy room for pilgrims.", te: "యాత్రికులకు శుభ్రమైన, గాలి-వెలుతురు గది." },
        price: { en: "₹350 / person", te: "₹350 / ఒక్కరికి" },
      },
    ],
  },

  services: {
    eyebrow: { en: "What we offer", te: "మేము అందించేవి" },
    title: { en: "Pilgrim services & experiences", te: "యాత్రికుల సేవలు & అనుభవాలు" },
    body: {
      en: "Beyond a room and a meal — everything you need for a complete Kashi yatra.",
      te: "గది, భోజనం మాత్రమే కాదు — సంపూర్ణ కాశీ యాత్రకు కావలసినవన్నీ.",
    },
    items: [
      { icon: "🚣", title: { en: "Boat ride · 64 Ghats", te: "పడవ ప్రయాణం · 64 ఘాట్‌లు" }, desc: { en: "A guided boat ride covering all 64 sacred ghats of Kashi.", te: "కాశీలోని 64 పవిత్ర ఘాట్‌లను చుట్టే గైడెడ్ పడవ ప్రయాణం." } },
      { icon: "🪔", title: { en: "Ganga Aarti experience", te: "గంగా హారతి అనుభవం" }, desc: { en: "Witness the grand evening Ganga Aarti from a prime spot.", te: "ఉత్తమ ప్రదేశం నుండి ఘనమైన సాయంత్ర గంగా హారతిని వీక్షించండి." } },
      { icon: "🛕", title: { en: "Holy bath at Manikarnika", te: "మణికర్ణికలో పుణ్యస్నానం" }, desc: { en: "A holy dip at Manikarnika Ghat with a respectful spiritual explanation.", te: "గౌరవప్రదమైన ఆధ్యాత్మిక వివరణతో మణికర్ణికా ఘాట్‌లో పుణ్యస్నానం." } },
      { icon: "🧭", title: { en: "Telugu & Hindi guide", te: "తెలుగు & హిందీ గైడ్" }, desc: { en: "Local guide assistance in Telugu and Hindi throughout your yatra.", te: "మీ యాత్ర అంతటా తెలుగు, హిందీలో స్థానిక గైడ్ సహాయం." } },
      { icon: "🚗", title: { en: "Vehicle services", te: "వాహన సేవలు" }, desc: { en: "Auto, car and bus arranged for local travel and temple visits.", te: "స్థానిక ప్రయాణం, ఆలయ దర్శనాలకు ఆటో, కారు, బస్సు ఏర్పాటు." } },
      { icon: "🎁", title: { en: "Annadanam sponsorship", te: "అన్నదానం స్పాన్సర్‌షిప్" }, desc: { en: "Sponsor a special Annadanam on your birthday or anniversary.", te: "మీ పుట్టినరోజు / వార్షికోత్సవం సందర్భంగా ప్రత్యేక అన్నదానం స్పాన్సర్ చేయండి." } },
    ],
  },

  packages: {
    eyebrow: { en: "Pilgrimage Packages", te: "యాత్రా ప్యాకేజీలు" },
    title: { en: "Yatras beyond Kashi", te: "కాశీ దాటి యాత్రలు" },
    body: {
      en: "We arrange complete tour packages to nearby holy places. Contact us for dates and pricing.",
      te: "సమీప పుణ్యక్షేత్రాలకు సంపూర్ణ టూర్ ప్యాకేజీలను ఏర్పాటు చేస్తాం. తేదీలు, ధరల కోసం మమ్మల్ని సంప్రదించండి.",
    },
    cta: { en: "Enquire on WhatsApp", te: "వాట్సాప్‌లో అడగండి" },
    items: [
      { image: "/images/packages/ayodhya.jpg", route: { en: "Varanasi → Ayodhya", te: "వారణాసి → అయోధ్య" }, note: { en: "Sri Ram Janmabhoomi", te: "శ్రీ రామ జన్మభూమి" } },
      { image: "/images/packages/prayagraj.jpg", route: { en: "Varanasi → Prayagraj", te: "వారణాసి → ప్రయాగ్‌రాజ్" }, note: { en: "Triveni Sangam", te: "త్రివేణి సంగమం" } },
      { image: "/images/packages/naimisaranyam.jpg", route: { en: "Ayodhya → Naimisaranyam", te: "అయోధ్య → నైమిశారణ్యం" }, note: { en: "Sacred forest of sages", te: "ఋషుల పవిత్ర వనం" } },
      { image: "/images/packages/bodhgaya.jpg", route: { en: "Varanasi → Gaya & Bodh Gaya", te: "వారణాసి → గయా & బోధ్ గయా" }, note: { en: "Pinda pradanam & Mahabodhi", te: "పిండ ప్రదానం & మహాబోధి" } },
      { image: "/images/packages/vaidyanath.jpg", route: { en: "Varanasi → Vaidyanath Dham", te: "వారణాసి → వైద్యనాథ్ ధామ్" }, note: { en: "Jyotirlinga at Deoghar", te: "దేవఘర్ జ్యోతిర్లింగం" } },
      { image: "/images/packages/nepal.jpg", route: { en: "Varanasi → Nepal", te: "వారణాసి → నేపాల్" }, note: { en: "Pashupatinath · 5–10 days", te: "పశుపతినాథ్ · 5–10 రోజులు" } },
    ],
  },

  highlight: {
    eyebrow: { en: "Experience Kashi", te: "కాశీని అనుభవించండి" },
    title: { en: "Evening on the holy Ganga", te: "పవిత్ర గంగానదిపై సాయంసంధ్య" },
    body: {
      en: "Watch the boats glide past the timeless ghats of Varanasi. Tap play to begin.",
      te: "వారణాసి శాశ్వత ఘాట్‌ల పక్కగా సాగే పడవలను చూడండి. ప్లే నొక్కండి.",
    },
    cta: { en: "Play video", te: "వీడియో ప్లే చేయండి" },
  },

  kashi: {
    eyebrow: { en: "Around the Niwas", te: "నివాస్ చుట్టూ" },
    title: { en: "Glimpses of holy Kashi", te: "పవిత్ర కాశీ దృశ్యాలు" },
    body: {
      en: "A short walk from us lies the spiritual heart of Bharat.",
      te: "మా దగ్గర నుండి కొద్ది దూరంలోనే భారత ఆధ్యాత్మిక హృదయం ఉంది.",
    },
    videos: [
      { src: "/videos/ganga-aarti.webm", label: { en: "Ganga Aarti", te: "గంగా హారతి" } },
      { src: "/videos/boats.mp4", label: { en: "Ganga Boats", te: "గంగా పడవలు" } },
      { src: "/videos/streets.mp4", label: { en: "Kashi Streets", te: "కాశీ వీధులు" } },
      { src: "/videos/shivajiii.mp4", label: { en: "Har Har Mahadev", te: "హర హర మహాదేవ్" } },
    ],
    // Extra Kashi photos (free, from Wikimedia Commons). Saved in
    // public/images/kashi/ — add your own photos here the same way.
    photos: [
      { src: "/images/kashi/dashashwamedh.jpg", label: { en: "Dashashwamedh Ghat", te: "దశాశ్వమేధ ఘాట్" } },
      { src: "/images/kashi/ganga-aarti.jpg", label: { en: "Ganga Aarti", te: "గంగా హారతి" } },
      { src: "/images/kashi/vishwanath.jpg", label: { en: "Kashi Vishwanath Temple", te: "కాశీ విశ్వనాథ ఆలయం" } },
      { src: "/images/kashi/boats-sunrise.jpg", label: { en: "Sunrise on the Ganga", te: "గంగానదిపై సూర్యోదయం" } },
      { src: "/images/kashi/assi-ghat.jpg", label: { en: "Assi Ghat", te: "అస్సీ ఘాట్" } },
      { src: "/images/kashi/ghat-sunset.jpg", label: { en: "Sunset by the Ghats", te: "ఘాట్‌ల వద్ద సూర్యాస్తమయం" } },
    ],
    photosNote: { en: "Kashi photos: Wikimedia Commons", te: "కాశీ ఫోటోలు: వికీమీడియా కామన్స్" },
  },

  booking: {
    eyebrow: { en: "Book a Stay", te: "గది బుక్ చేయండి" },
    title: { en: "Reserve your room", te: "మీ గదిని బుక్ చేసుకోండి" },
    body: {
      en: "Fill this short form and we'll confirm your stay on WhatsApp. No payment needed now.",
      te: "ఈ చిన్న ఫారమ్ నింపండి — మేము వాట్సాప్‌లో మీ బసను నిర్ధారిస్తాం. ఇప్పుడు ఎలాంటి చెల్లింపు అవసరం లేదు.",
    },
    fields: {
      name: { en: "Your name", te: "మీ పేరు" },
      phone: { en: "Phone number", te: "ఫోన్ నంబర్" },
      checkin: { en: "Check-in date", te: "రాక తేదీ" },
      checkout: { en: "Check-out date", te: "వెళ్ళే తేదీ" },
      guests: { en: "Number of guests", te: "వ్యక్తుల సంఖ్య" },
      roomType: { en: "Room type", te: "గది రకం" },
      message: { en: "Message (optional)", te: "సందేశం (ఐచ్ఛికం)" },
    },
    roomOptions: [
      { en: "AC Room (₹2000 / 3 persons)", te: "ఏసీ గది (₹2000 / 3 వ్యక్తులు)" },
      { en: "Non-AC Room (₹350 / person)", te: "నాన్-ఏసీ గది (₹350 / ఒక్కరికి)" },
      { en: "Any / Not sure", te: "ఏదైనా / తెలియదు" },
    ],
    submit: { en: "Send enquiry on WhatsApp", te: "వాట్సాప్‌లో విచారణ పంపండి" },
    required: { en: "Please fill your name, phone and check-in date.", te: "దయచేసి మీ పేరు, ఫోన్, రాక తేదీ నింపండి." },
    availabilityNote: {
      en: "This is an enquiry, not a confirmed booking — rooms are subject to availability. We'll reply on WhatsApp to confirm.",
      te: "ఇది ఒక విచారణ మాత్రమే, నిర్ధారిత బుకింగ్ కాదు — గదుల లభ్యతను బట్టి ఉంటుంది. మేము వాట్సాప్‌లో నిర్ధారిస్తాం.",
    },
    sameDay: {
      en: "Need a room today? Please call us directly for the fastest answer.",
      te: "ఈ రోజే గది కావాలా? వెంటనే సమాధానం కోసం నేరుగా కాల్ చేయండి.",
    },
    callNow: { en: "Call now", te: "ఇప్పుడే కాల్ చేయండి" },
  },

  contact: {
    eyebrow: { en: "Visit us", te: "మమ్మల్ని సందర్శించండి" },
    title: { en: "Find us in Varanasi", te: "వారణాసిలో మమ్మల్ని కలవండి" },
    addressLabel: { en: "Address", te: "చిరునామా" },
    phoneLabel: { en: "Phone", te: "ఫోన్" },
    whatsappLabel: { en: "WhatsApp us", te: "వాట్సాప్ చేయండి" },
    instagramLabel: { en: "Follow on Instagram", te: "ఇన్‌స్టాగ్రామ్‌లో అనుసరించండి" },
    hours: { en: "Open all days · Pilgrims welcome anytime", te: "అన్ని రోజులూ తెరిచి ఉంటుంది · యాత్రికులకు ఎల్లప్పుడూ స్వాగతం" },
  },

  footer: {
    tagline: {
      en: "A humble home and free meals for every pilgrim who comes to Kashi.",
      te: "కాశీకి వచ్చే ప్రతి యాత్రికునికీ నమ్రమైన నివాసం, ఉచిత భోజనం.",
    },
    blessing: { en: "Har Har Mahadev 🙏", te: "హర హర మహాదేవ్ 🙏" },
    rights: { en: "All rights reserved.", te: "సర్వ హక్కులు రిజర్వ్." },
  },
};
