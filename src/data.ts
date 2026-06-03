// ---------------------------------------------------------------------------
// Business facts for O'Neals Smokehouse, sourced from public listings.
// NOTE FOR THE OWNER: prices & hours change — confirm/update these freely.
// The whole site reads from this one file, so editing here updates everywhere.
// ---------------------------------------------------------------------------

export const business = {
  name: "O'Neals Smokehouse",
  tagline: "Southern proud. Smoked to perfection.",
  blurb:
    "Family-owned and Southern-proud, serving up real-deal barbecue one plate at a time. Everything's slow-smoked low and tender, packed with bold, smoky flavor.",
  phone: "(269) 228-8033",
  phoneHref: "tel:+12692288033",
  address: "525 S Broadway St",
  cityState: "Cassopolis, MI 49031",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=O%27Neals+Smokehouse+525+S+Broadway+St+Cassopolis+MI+49031",
  facebook: "https://www.facebook.com/p/ONeals-Smokehouse-100084572924158/",
  // Online ordering — owner can swap to their preferred default
  orderHref:
    "https://www.toasttab.com/local/order/o-neals-smokehouse-new-521-south-broadway/r-dfd89bee-1093-4ead-b323-157e58344673",
  doordashHref: "https://www.doordash.com/store/o%E2%80%99neals-smokehouse-cassopolis-32172711/",
  rating: "4.6",
  ranking: "#1 BBQ in Cassopolis",
};

export const hours = [
  { day: "Sunday", time: "Closed", closed: true },
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "11:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "11:00 AM – 7:00 PM" },
  { day: "Thursday", time: "11:00 AM – 7:00 PM" },
  { day: "Friday", time: "11:00 AM – 7:00 PM" },
  { day: "Saturday", time: "11:00 AM – 7:00 PM" },
];

export type MenuItem = {
  name: string;
  description: string;
  tag?: "Signature" | "Fan Favorite" | "Limited";
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "smoked-meats",
    title: "From the Smoker",
    blurb: "Low, slow, and over real smoke. Sold by the plate or by the pound.",
    items: [
      {
        name: "Beef Brisket",
        description:
          "Smoked overnight with a peppery bark and a tender, juicy center. Nice smoky flavor, never over-seasoned.",
        tag: "Signature",
      },
      {
        name: "Pulled Pork",
        description: "Hand-pulled, fall-apart pork shoulder kissed with smoke and our house sauce.",
        tag: "Fan Favorite",
      },
      {
        name: "Spare Ribs",
        description: "St. Louis-cut spares smoked until the meat hugs the bone. Big 'dino-rib' energy.",
      },
      {
        name: "Rib Tips",
        description: "Meaty, caramelized tips with crispy edges — the regulars' pick. Small or large.",
        tag: "Fan Favorite",
      },
      {
        name: "Burnt Ends",
        description: "Candied, smoky cubes of brisket point. When they're on, grab 'em fast.",
        tag: "Limited",
      },
      {
        name: "Carnitas",
        description: "Slow-cooked, crisp-edged pork done right. Tender, rich, and full of flavor.",
      },
    ],
  },
  {
    id: "plates",
    title: "Plates & Sandwiches",
    blurb: "Comes with sides and a roll. Bring your appetite.",
    items: [
      {
        name: "Smokehouse Bowl",
        description:
          "Mac & cheese loaded with your choice of brisket or pulled pork, bacon bits, and BBQ sauce.",
        tag: "Signature",
      },
      {
        name: "Pulled Pork Sub",
        description: "A pile of smoky pulled pork on a soft roll with sauce on the side.",
      },
      {
        name: "Meatloaf Sandwich",
        description: "Smoked-meatloaf comfort, stacked and sauced. A Smokehouse original.",
      },
      {
        name: "Brisket Dinner",
        description: "A generous portion of sliced brisket with two sides and a roll.",
      },
    ],
  },
  {
    id: "sides",
    title: "Made-From-Scratch Sides",
    blurb: "The supporting cast that steals the show.",
    items: [
      { name: "Mac & Cheese", description: "Creamy, cheesy, crowd-favorite comfort.", tag: "Fan Favorite" },
      { name: "Candied Sweet Potatoes", description: "Buttery and brown-sugar sweet. A standout." },
      { name: "Coleslaw", description: "Cool, crisp, and tangy — the perfect counter to smoke." },
      { name: "Green Beans", description: "Slow-simmered Southern style." },
      { name: "Seasoned Fries", description: "Golden, crispy, and well-seasoned." },
    ],
  },
  {
    id: "family",
    title: "Feed the Family",
    blurb: "Built for a crowd and game days.",
    items: [
      {
        name: "Family Meal",
        description:
          "Half rack of ribs, ½ lb brisket, ½ lb pulled pork & ½ lb rib tips. Feeds 4–6 hungry folks.",
        tag: "Signature",
      },
    ],
  },
];

export const reviews = [
  {
    quote:
      "Their BBQ is the real deal! Smoked to perfection, tender, juicy, and packed with bold, smoky flavors.",
    author: "Eat Good Local",
    source: "TikTok",
  },
  {
    quote: "Everything was amazing. Nice smoky flavor and not overwhelmingly seasoned.",
    author: "Verified Diner",
    source: "Restaurant Guru",
  },
  {
    quote: "Perfectly cooked carnitas, BBQ pork and brisket. They show the true meaning of barbecue.",
    author: "Local Regular",
    source: "Google",
  },
];
