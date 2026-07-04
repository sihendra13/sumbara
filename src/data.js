export const company = {
  name: "PT. Kayuwangi Jagadhita Inovasi",
  shortName: "Sumbara",
  tagline: "Indonesia's Natural Commodities. Global Reach.",
  headline: "Premium Indonesian Seaweed,\nExport-Ready.",
  subheadline: "Sustainably harvested from the coastal waters of Bima, West Nusa Tenggara — supplying global industries since 2015.",
  location: "Jl. Tiwir VII Sumbersari, Moyudan, Sleman, Yogyakarta, Indonesia",
  phone: "+62 xxx-xxxx-xxxx",
  email: "hello@kayuwangi.id",
  instagram: "kayuwangi.id",
  website: "www.kayuwangi.id",
  role: "Digital Sourcing Hub",
};

export const stats = [
  { value: "200–400", unit: "MT/month", label: "Supply capacity" },
  { value: "500+",    unit: "MT",       label: "Warehouse capacity" },
  { value: "13",      unit: "farmers",  label: "Supplier network" },
  { value: "10+",     unit: "years",    label: "Operational experience" },
  { value: "2",       unit: "countries",label: "Active export markets" },
];

export const products = [
  {
    id: "cottonii",
    name: "Eucheuma Cottonii",
    aka: "Kappaphycus Alvarezii",
    badge: "Most exported",
    color: "#2AA5A0",
    colorLight: "#E0F4F3",
    description: "Primary raw material for kappa-carrageenan production. Widely used as a stabilizer, thickener, and gelling agent across food, pharmaceutical, and industrial applications.",
    specs: [
      { label: "Moisture content", value: "Max 35%" },
      { label: "Impurity",         value: "Max 3%" },
      { label: "Color",            value: "Natural brown" },
      { label: "Drying method",    value: "Sun-dried" },
      { label: "Packaging",        value: "PP woven bag ±60–80 kg" },
    ],
    applications: [
      "Food stabilizer & thickener",
      "Dairy & processed food",
      "Pharmaceutical excipients",
      "Industrial hydrocolloids",
    ],
    exportMarkets: ["Tunisia — carrageenan industry"],
    image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=600&q=80",
  },
  {
    id: "sargassum",
    name: "Sargassum",
    aka: "Brown seaweed",
    badge: "Industrial grade",
    color: "#4A7C59",
    colorLight: "#EAF3EE",
    description: "Brown seaweed used as a primary raw material for alginate extraction, widely applied in pharmaceutical, textile, and industrial processes.",
    specs: [
      { label: "Moisture content", value: "Max 12%" },
      { label: "Impurity",         value: "Max 3%" },
      { label: "Color",            value: "Dark brown" },
      { label: "Drying method",    value: "Sun-dried" },
      { label: "Packaging",        value: "PP woven bag ±50–65 kg" },
    ],
    applications: [
      "Pharmaceutical & medical",
      "Alginate production",
      "Textile & industrial thickening",
      "Agriculture & feed supplement",
    ],
    exportMarkets: ["China — alginate & industrial use"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
];

export const certifications = [
  { name: "HACCP Certified", status: "verified", desc: "Hazard Analysis Critical Control Points — food safety management" },
  { name: "COA (Certificate of Analysis)", status: "available", desc: "Available upon verified buyer request" },
  { name: "Phytosanitary Certificate", status: "available", desc: "Export clearance from Indonesian Agricultural Quarantine" },
  { name: "NIB / SIUP", status: "verified", desc: "Indonesian business registration" },
];

export const exportMarkets = [
  { country: "Tunisia", flag: "🇹🇳", product: "Eucheuma Cottonii", use: "Carrageenan industry" },
  { country: "China",   flag: "🇨🇳", product: "Sargassum",         use: "Alginate & industrial use" },
];

export const process = [
  { step: "01", title: "Harvest",    desc: "Directly from 13 local farmer networks across Bima's coastal regions." },
  { step: "02", title: "Sun-dry",    desc: "Natural sun-drying process in coastal areas to achieve export-grade moisture levels." },
  { step: "03", title: "Sort & QC",  desc: "Manual controlled sorting and quality inspection before packaging." },
  { step: "04", title: "Pack",       desc: "PP woven bags, export-grade preparation with organized loading." },
  { step: "05", title: "Ship",       desc: "From Bima to global ports — ready for bulk and repeat orders." },
];

export const impactStats = [
  { value: "Bima",   label: "West Nusa Tenggara origin", image: "/Asset/community 3.jpeg" },
  { value: "13+",    label: "Farmer families supported", image: "/Asset/community 1.jpeg" },
  { value: "2015",   label: "Community partnership since", image: "/Asset/community 2.jpeg" },
  { value: "100%",   label: "Sun-dried, natural process", image: "/Asset/community 4.jpeg" },
  { value: "500+",   label: "MT Warehouse Capacity", image: "/Asset/Activity 3 gudang.jpeg" },
];

export const activityVideos = [
  "/Asset/Activity 1.mp4",
  "/Asset/Activity 2.mp4",
  "/Asset/ibu-ibu-rame-rumput-laut.mp4"
];
