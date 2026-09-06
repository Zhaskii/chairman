export interface AwardItem {
  year: string;
  title: string;
  desc: string;
  category?: "National" | "International" | "Industry" | "Leadership";
}

export interface AffiliationItem {
  title: string;
  organization: string;
  category:
    | "Diplomatic"
    | "Chambers"
    | "Government & Academic"
    | "Sports & Culture";
}

export interface VideoItem {
  id: string;
  youtubeUrl: string;
  title: string;
  date?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  year?: string;
}

export interface BrandItem {
  name: string;
  category: string;
  logo?: string;
  href: string;
}

export const CHAIRMAN_DATA = {
  name: "Dr. Rajesh Kazi Shrestha",
  role: "Chairman / Managing Director",
  title: "A Message From Our Chairman",
  experienceYears: 47,
  foundedYear: 1978,
  portrait: "/images/rajesh-kazi-shrestha.jpg",
  homePortrait: "/images/2.jpg",
  organization: "Arksh Group",
  email: "info@arkshgroup.com",
  phonePrimary: "+977 980-2074449",
  phoneSecondary: "+977-1-4002049",
  address: "152 Rani Devi Marg Lazimpat, Kathmandu, Nepal",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7063399626504!2d85.31907747568266!3d27.7263518246527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1918569c8961%3A0x5f43dd27a908ad94!2sArksh%20Group!5e0!3m2!1sen!2snp!4v1773384215008!5m2!1sen!2snp",
  facebookPage: "https://www.facebook.com/Arksh.Group",
  messageIntro: "Dear Valued Partners, Clients, and Team Members",
  messageParagraphs: [
    "It is with great pleasure and pride that I welcome you to Arksh Group. Over the past four decades, our journey has been defined by unwavering perseverance, visionary leadership, and a steadfast commitment to building sustainable economic value for Nepal and beyond.",
    "Since our inception in 1978, we have evolved from a pioneering trading firm into a diversified business conglomerate spanning automobiles, food and beverages, international trade, hospitality, wellness, and agro-industries.",
    "We embrace change, digital agility, and innovation as cornerstones of our growth strategy, ensuring we meet global standards while fostering domestic economic development.",
    "Our deepest gratitude goes to our partners, customers, and dedicated workforce who continuously propel Arksh Group toward higher horizons of excellence.",
  ],
  quote:
    "Since our inception in 1978, we have remained steadfast in our commitment to delivering exceptional value across diverse sectors, fostering innovation, and building enduring trust.",
  pillars: [
    {
      title: "Adaptability & Visionary Growth",
      desc: "We embrace change and agility as essential components of our long-term strategic evolution.",
    },
    {
      title: "People & Process Excellence",
      desc: "We continuously invest in our human capital, quality systems, and governance to deliver world-class solutions.",
    },
    {
      title: "Global Standards & Local Trust",
      desc: "Bridging world-leading international brands with authentic local consumer satisfaction.",
    },
    {
      title: "Integrity & Sustainable Impact",
      desc: "Committed to ethical business practices, CSR, and nation-building economic development.",
    },
  ],
};

export const STATS = [
  {
    value: 47,
    suffix: "+",
    label: "Years of Excellence",
    description: "Pioneering enterprise since 1978",
  },
  {
    value: 21,
    suffix: "+",
    label: "Leadership Roles",
    description: "Chambers, diplomacy & national councils",
  },
  {
    value: 19,
    suffix: "+",
    label: "National & Global Honors",
    description: "Conferred by Heads of State & PMs",
  },
  {
    value: 16,
    suffix: "+",
    label: "Business Sectors",
    description: "Automotive, FMCG, Hospitality & Tech",
  },
];

export const AWARDS: AwardItem[] = [
  {
    year: "2025",
    title: "Outstanding Contribution in Business Award",
    desc: "Honored with Outstanding Contribution in Business Award by Rt. Honorable Prime Minister KP Sharma Oli on behalf of Phoenix Inspiration, 2025.",
    category: "National",
  },
  {
    year: "2022",
    title: "Letter of Honor by Nepal Tayari Poshak Udhyog Sang",
    desc: "Honored with Letter of Honor by Nepal Tayari Poshak Udhyog Sang (Garment Association-Nepal) for exemplary work towards the development of Nepali garment sector.",
    category: "Industry",
  },
  {
    year: "2022",
    title: "Corporate Dynamic Business Leader Award",
    desc: "Corporate Dynamic Business Leader Award - 2022 by Corporate Khabar for excellent contribution to Nepalese Industry.",
    category: "Leadership",
  },
  {
    year: "2021",
    title: "Sukritimaya Rastra Deep Third",
    desc: "Decorated with the prestigious state order Sukritimaya Rastra Deep Third by Rt. Honorable President of Nepal Bidhya Devi Bhandari, 2021.",
    category: "National",
  },
  {
    year: "2021",
    title: "Honored with Excellence Award - Indo-Nepal Friendship",
    desc: "Honored with Excellence Award in recognition of the Indo-Nepal Friendship Award by the Confederation of West Bengal Trade Association.",
    category: "International",
  },
  {
    year: "2019",
    title: "Commercially Important Person (CIP) Decoration",
    desc: "Honored as a Commercially Important Person (CIP) by Rt. Honorable Prime Minister K.P. Sharma Oli - 2019.",
    category: "National",
  },
  {
    year: "2017",
    title: "Decorated with Suprabal Jansewa Shri",
    desc: "Decorated with Suprabal Jansewa Shri by Rt. Honorable President of Nepal Bidhya Devi Bhandari, 2017.",
    category: "National",
  },
  {
    year: "2005",
    title: "Decorated with Bikhyat Trishakti Patta Third",
    desc: "Decorated with the Bikhyat Trishakti Patta Third by His Majesty King Gyanendra Bir Bikram Shah Dev on the occasion of His Majesty 59th Birth Anniversary.",
    category: "National",
  },
  {
    year: "2005",
    title: "Excellence Contribution in Nepalese Industry & Chamber Movement",
    desc: "Conferred for groundbreaking contributions to Nepalese commerce and nationwide chamber movement.",
    category: "Leadership",
  },
  {
    year: "2004",
    title: "Commercially Important Person (CIP) Award",
    desc: "Honored as Commercially Important Person (CIP) by Rt. Honorable Prime Minister Surya Bahadur Thapa, 2004.",
    category: "National",
  },
  {
    year: "2002",
    title: "Decorated with Suprabal Gorkha Dakshin Bahu Third",
    desc: "Decorated with the Suprabal Gorkha Dakshin Bahu Third by His Majesty King Gyanendra Bir Bikram Shah Dev on the occasion of His Majesty 56th Birth Anniversary.",
    category: "National",
  },
  {
    year: "2001",
    title: "Decorated with Birendra-Aishwarya Sewa Padak",
    desc: "Decorated with the Birendra-Aishwarya Sewa Padak by His Majesty King Gyanendra Bir Bikram Shah Dev.",
    category: "National",
  },
  {
    year: "2001",
    title: "Youth Entrepreneur, Industrialist & Social Worker Honor",
    desc: "Honored by Rt. Honorable Prime Minister Sher Bahadur Deuba as Youth Entrepreneur, Industrialist and Social Worker on behalf of the National Honor and Development Center.",
    category: "Leadership",
  },
  {
    year: "2000",
    title: "Letter of Honor for Chamber Movement Leadership",
    desc: "Honored with the Letter of Honor by Rt. Honorable Prime Minister Girija Prasad Koirala for distinguished leadership on the Executive Committee of Nepal Chamber of Commerce.",
    category: "Leadership",
  },
  {
    year: "1999",
    title: "Decorated with Prakhyat Trishakti Patta",
    desc: "Decorated with Prakhyat Trishakti Patta by His Majesty King Birendra Bir Bikram Shah Dev on the auspicious occasion of His Majesty 55th Birth Anniversary.",
    category: "National",
  },
  {
    year: "1999",
    title: "Udyog Ratna Award - Institute of Economic Studies",
    desc: "Honored with the prestigious Udyog Ratna - 1999 by the Institute of Economic Studies, Delhi, India.",
    category: "International",
  },
  {
    year: "1997",
    title: "Decorated with Prabal Gorkha Dakshin Bahu",
    desc: "Decorated with Prabal Gorkha Dakshin Bahu by His Majesty King Birendra Bir Bikram Shah Dev on the auspicious occasion of His Majesty 53rd Birthday Anniversary.",
    category: "National",
  },
  {
    year: "1997",
    title: "Letter of Honor and Do Shall - World Hindu Federation",
    desc: "Honored with the Letter of Honor and Do Shall by Rt. Honorable Prime Minister Surya Bahadur Thapa on behalf of the World Hindu Federation.",
    category: "Leadership",
  },
  {
    year: "1996",
    title: "Accession to the Throne Silver Jubilee Medal",
    desc: "Decorated with H M Kings Accession to the Throne Silver Jubilee Celebration Medal by His Majesty King Birendra Bir Bikram Shah Dev.",
    category: "National",
  },
];

export const LEADERSHIP_ROLES: AffiliationItem[] = [
  {
    title: "Honorary Consul",
    organization: "Socialist Republic of Vietnam to Nepal",
    category: "Diplomatic",
  },
  {
    title: "Chairman",
    organization: "International Chamber of Commerce (ICC), Nepal",
    category: "Chambers",
  },
  {
    title: "Chairman Advisory Council & Past President",
    organization: "Nepal Chamber of Commerce",
    category: "Chambers",
  },
  {
    title: "Honorary President",
    organization: "Nepal China Chamber of Commerce & Industry",
    category: "Chambers",
  },
  {
    title: "Patron",
    organization: "Nepal Vietnam Chamber of Commerce & Industry",
    category: "Chambers",
  },
  {
    title: "Patron",
    organization: "Nepal Italy Chamber of Commerce & Industry",
    category: "Chambers",
  },
  {
    title: "Former Vice President",
    organization:
      "World Association for Small & Medium Enterprises (WASME), India",
    category: "Chambers",
  },
  {
    title: "Chairman",
    organization: "Bhanubhakta Memorial Purba Bidhyarthi Samaj (Alumni)",
    category: "Government & Academic",
  },
  {
    title: "Executive Member",
    organization: "Honorary Consular Corps-Nepal (HCC-N)",
    category: "Diplomatic",
  },
  {
    title: "Former Senator",
    organization: "Tribhuvan University",
    category: "Government & Academic",
  },
  {
    title: "Former Senator",
    organization: "Purbanchal University, Biratnagar",
    category: "Government & Academic",
  },
  {
    title: "Former Board Member",
    organization: "Investment Board Nepal",
    category: "Government & Academic",
  },
  {
    title: "Former Board Member",
    organization: "Nepal Intermodal Transport Development",
    category: "Government & Academic",
  },
  {
    title: "Former Board Member",
    organization:
      "Trade & Export Promotion Centre, Ministry of Industry, Commerce & Supplies",
    category: "Government & Academic",
  },
  {
    title: "Former Board Member",
    organization: "Board of Trade, Commerce Ministry",
    category: "Government & Academic",
  },
  {
    title: "Former Board Member",
    organization: "Private Sector Development Committee",
    category: "Government & Academic",
  },
  {
    title: "Former Vice President",
    organization: "Silk Road Chamber of International Commerce, China",
    category: "Chambers",
  },
  {
    title: "Former Treasurer",
    organization: "Hotel Association of Nepal",
    category: "Chambers",
  },
  {
    title: "Former Executive Member",
    organization: "Nepal Olympic Committee",
    category: "Sports & Culture",
  },
  {
    title: "Former Chairman",
    organization: "8th South Asian Federation Games, Hospitality Committee",
    category: "Sports & Culture",
  },
  {
    title: "Former President",
    organization: "Nepal Weightlifting Association",
    category: "Sports & Culture",
  },
];

export const VIDEOS: VideoItem[] = [
  {
    id: "VhM8qHRVcto",
    youtubeUrl: "https://www.youtube.com/watch?v=VhM8qHRVcto",
    title: "Arksh Group Vision & Industry Leadership Speech",
  },
  {
    id: "rSQX5vqKJYQ",
    youtubeUrl: "https://www.youtube.com/watch?v=rSQX5vqKJYQ",
    title: "Address on Nepal Trade & International Relations",
  },
  {
    id: "cGOVGaH-bFw",
    youtubeUrl: "https://www.youtube.com/watch?v=cGOVGaH-bFw",
    title: "International Chamber of Commerce Keynote",
  },
  {
    id: "GQLN5GvYVOE",
    youtubeUrl: "https://www.youtube.com/watch?v=GQLN5GvYVOE",
    title: "Chamber Movement & Economic Resilience Talk",
  },
  {
    id: "LKa8wGy7A9o",
    youtubeUrl: "https://www.youtube.com/watch?v=LKa8wGy7A9o",
    title: "Arksh Group Annual Summit Chairman Address",
  },
  {
    id: "yWh2Ah--vwc",
    youtubeUrl: "https://www.youtube.com/watch?v=yWh2Ah--vwc",
    title: "Bilateral Trade Dialogue & Global Partnerships",
  },
  {
    id: "U5W0UwOhfyE",
    youtubeUrl: "https://www.youtube.com/watch?v=U5W0UwOhfyE",
    title: "Entrepreneurship & Industrial Modernization",
  },
  {
    id: "U4kzJYN0QOY",
    youtubeUrl: "https://www.youtube.com/watch?v=U4kzJYN0QOY",
    title: "Honoring Industry Pioneers & Innovation",
  },
  {
    id: "LJH7s4ar-Rc",
    youtubeUrl: "https://www.youtube.com/watch?v=LJH7s4ar-Rc",
    title: "Strengthening Cross-Border Commerce in South Asia",
  },
  {
    id: "CLzXhh1MjL4",
    youtubeUrl: "https://www.youtube.com/watch?v=CLzXhh1MjL4",
    title: "Economic Perspectives & Private Sector Growth",
  },
  {
    id: "YfwCAWJEWd8",
    youtubeUrl: "https://www.youtube.com/watch?v=YfwCAWJEWd8",
    title: "Diplomatic Relations & Trade Mission Insights",
  },
  {
    id: "42ljZg7N3BE",
    youtubeUrl: "https://www.youtube.com/watch?v=42ljZg7N3BE",
    title: "Special Executive Interview on Market Strategy",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "award-1",
    src: "/images/gallery/award-1.jpg",
    alt: "Decorated with Suprabal Gorkha Dakshin Bahu Third",
    caption:
      "Decorated with Suprabal Gorkha Dakshin Bahu Third by His Majesty King Gyanendra Bir Bikram Shah Dev.",
    year: "2002",
  },
  {
    id: "award-2",
    src: "/images/gallery/award-2.jpg",
    alt: "Decorated with Prakhyat Trishakti Patta Third",
    caption:
      "Decorated with Prakhyat Trishakti Patta Third by His Majesty King Gyanendra Bir Bikram Shah Dev.",
    year: "2005",
  },
  {
    id: "award-3",
    src: "/images/gallery/award-3.jpg",
    alt: "Honored by the Rt. Honorable Prime Minister of Nepal",
    caption:
      "Honored by the Rt. Honorable Prime Minister of Nepal for Outstanding Contribution to the Nations Commerce.",
    year: "2025",
  },
  {
    id: "award-4",
    src: "/images/gallery/award-4.jpg",
    alt: "Decorated with Rastriyadeep Tritiya",
    caption:
      "Decorated with Sukritimaya Rastra Deep Third by Rt. Honorable President of Nepal Bidhya Devi Bhandari.",
    year: "2021",
  },
  {
    id: "award-5",
    src: "/images/gallery/award-5.jpg",
    alt: "Decorated with Prakhyat Trishakti Patta by Late King Birendra",
    caption:
      "Decorated with Prakhyat Trishakti Patta by His Majesty Late King Birendra Bir Bikram Shah Dev.",
    year: "1999",
  },
  {
    id: "award-6",
    src: "/images/gallery/award-6.jpg",
    alt: "Decorated with Prabal Gorkha Dakshin Bahu by Late King Birendra",
    caption:
      "Decorated with Prabal Gorkha Dakshin Bahu by His Majesty Late King Birendra Bir Bikram Shah Dev.",
    year: "1997",
  },
];

export interface SectorItem {
  name: string;
  category: string;
  brands: string[];
  description: string;
  icon: string;
}

export const SECTORS: SectorItem[] = [
  {
    name: "Automobiles",
    category: "Mobility & Transport",
    brands: ["Higer Buses", "Golden Dragon", "Jubao Electric Vehicles"],
    description:
      "Leading importer and distributor of commercial buses, public transit, and modern electric transport vehicles.",
    icon: "Car",
  },
  {
    name: "Food & FMCG",
    category: "Consumer Goods",
    brands: [
      "Dami (दामी)",
      "Didian",
      "Tafeli",
      "Paldo",
      "Tastee",
      "Glacier",
      "Richy",
      "Chizzpa",
      "Monarko",
      "Hwa Tai",
    ],
    description:
      "Extensive portfolio of premium packaged foods, noodles, snacks, and quality confectionery across Nepal.",
    icon: "Utensils",
  },
  {
    name: "Beverages",
    category: "FMCG & Drinks",
    brands: [
      "MacCoffee",
      "MacTea",
      "MacCereal",
      "Luxury Creamer",
      "Barley Chhang",
      "Nutirite",
      "Klassno",
    ],
    description:
      "Pioneering coffee, specialty teas, healthy cereals, and beverage solutions distributed nationwide.",
    icon: "Coffee",
  },
  {
    name: "Health & Wellness",
    category: "Healthcare",
    brands: ["Nirvana Physiotherapy & Wellness Centre"],
    description:
      "State-of-the-art physiotherapy, rehabilitation, lifestyle wellness, and holistic therapeutic services.",
    icon: "Activity",
  },
  {
    name: "Luxury Watches & Eyewear",
    category: "Retail & Lifestyle",
    brands: ["Sulux Centre", "Sulux Hour"],
    description:
      "Nepal premiere luxury horology boutique offering prestigious Swiss watches and designer eyewear.",
    icon: "Watch",
  },
  {
    name: "Hotels & Hospitality",
    category: "Hospitality & Tourism",
    brands: ["Hotel Peaceland Lumbini", "Hotel Rara"],
    description:
      "Premier hospitality properties serving international pilgrims, cultural tourists, and leisure travelers in Nepal.",
    icon: "Hotel",
  },
  {
    name: "Flooring & Interiors",
    category: "Home & Construction",
    brands: [
      "Urban Earth",
      "Swiss Krono",
      "Darling Mattress",
      "Gem Flooring",
      "Abu Dhabi National Carpet",
      "Hanwha",
    ],
    description:
      "High-grade laminate flooring, luxury carpets, ergonomic mattresses, and comprehensive interior surfaces.",
    icon: "Layers",
  },
  {
    name: "Biotechnology & Agro",
    category: "Agriculture & Bio",
    brands: ["Arksh Agro", "Sustainable Farm Tech"],
    description:
      "Modern agricultural biotechnology, high-yield crop cultivation, and agro-processing investments.",
    icon: "Sprout",
  },
  {
    name: "Beauty & Cosmetics",
    category: "Personal Care",
    brands: ["Dream Skin Nepal", "The Fragrance Room"],
    description:
      "Authorized importer and retailer of world-class skincare cosmetics and authentic designer fragrances.",
    icon: "Sparkles",
  },
  {
    name: "Fashion & Lifestyle",
    category: "Apparel & Retail",
    brands: ["Fynaza", "Clovia", "Suoyue"],
    description:
      "Contemporary fashion apparel, intimate wear, and lifestyle accessories for modern consumers.",
    icon: "Layers",
  },
  {
    name: "Tours & Travels",
    category: "Travel & Aviation",
    brands: ["Lifestyle Holidays", "Stream Travels", "Book My Ticket"],
    description:
      "Inbound and outbound customized corporate travel packages, flight ticketing, and holiday management.",
    icon: "Plane",
  },
  {
    name: "International Trading",
    category: "Global Commerce",
    brands: ["Arksh Trade International", "Vietnam-Nepal Commerce Hub"],
    description:
      "Over 47 years of bilateral trade facilitation between Nepal, China, Vietnam, India, and European markets.",
    icon: "Globe",
  },
];
