import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  agc,
  awwce,
  fgc,
  gcc,
  si,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    to: "/",
    title: "Home",
  },
  {
    id: "product",
    to: "/products",
    title: "Products",
  },
  {
    id: "about",
    to: "/about",
    title: "About",
  },
  {
    id: "contact",
    to: "/contact",
    title: "Contact",
  },
];

export const abouts = [
  {
    id: "mission",
    icon: star,
    title: "Mission",
    content:
      "To provide quality and reliable services through innovation, technology, diversity, and sustainability.",
  },
  {
    id: "vision",
    icon: shield,
    title: "Vision",
    content:
      "To become a leading importer in Ethiopia and establish a manufacturing plant for water pipes.",
  },
  {
    id: "values",
    icon: send,
    title: "Core Values",
    content:
      "Customer-Focused. Trust & Transparency. Efficiency & Effectiveness. Commitment to Sustainability.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
    name: "Martha Gurmu",
    title: "Founder & CEO",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.Mauris eu adipiscing ultrices ametodio aenean neque.",
    name: "Getnet Tola",
    title: "CTO",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.",
    name: "Ermias Ashenafi",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Business Lines",
    value: "3+",
  },
  {
    id: "stats-2",
    title: "Regular Employees",
    value: "30+",
  },
  {
    id: "stats-3",
    title: "ETB Contract",
    value: "18M+", //18295967.67
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "#",
      },
      {
        name: "How it Works",
        link: "#",
      },
      {
        name: "Create",
        link: "#",
      },
      {
        name: "Explore",
        link: "#",
      },
      {
        name: "Terms & Services",
        link: "#",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "#",
      },
      {
        name: "Partners",
        link: "#",
      },
      {
        name: "Suggestions",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Newsletters",
        link: "#",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "#",
      },
      {
        name: "Become a Partner",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: agc,//Amibara General Construction
    title: "Amibara General Construction",
  },
  {
    id: "client-2",
    logo: awwce, //Afar Water Works Construction Enterprise
    title: "Afar Water Works Construction Enterprise",
  },
  {
    id: "client-3",
    logo: fgc,//Famcon General Contractor
    title: "Famcon General Contractor",
  },
  {
    id: "client-4",
    logo: gcc,//Gelealu General Construction
    title: "Gelealu General Construction",
  },
  {
    id: "client-5",
    logo: si,//Splash International
    title: "Splash Intertional",
  },
];
