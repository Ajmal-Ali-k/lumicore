import {
  Box,
  Check,
  ChefHat,
  DoorOpen,
  Hammer,
  Layers3,
  Maximize,
  Phone,
  Send,
  Shirt,
  Upload,
  Wrench,
} from "lucide-react";

export const navLinks = [
  { label: "Our Service", href: "#solutions" },
  { label: "Our Projects", href: "#work" },
  { label: "About Us", href: "#approach" },
  { label: "Contact Us", href: "#contact" },
];

export const services = [
  {
    title: "Kitchens",
    description: "Designed for daily use, built for long-term performance",
    href: "#contact",
    image: "/images/home/kitchen-product-image.webp",
    Icon: ChefHat,
  },
  {
    title: "Wardrobes & Closets",
    description: "Structured storage that stays organized over time",
    href: "#contact",
    image: "/images/home/wardrobe-product-image.webp",
    Icon: Shirt,
  },
  {
    title: "Interior Doors",
    description: "Precise finishes that hold up with everyday use",
    href: "#contact",
    image: "/images/home/door-product-image.webp",
    Icon: DoorOpen,
  },
  {
    title: "Premium Window Systems",
    description: "Sealed systems for better comfort and control",
    href: "#contact",
    image: "/images/home/window-systems-image.webp",
    Icon: Maximize,
  },
];

export const problems = [
  "Quality Problems",
  "Delays during execution",
  "Poor value for money",
  "Weak after-sales support",
];

export const approach = [
  {
    title: "Multiple Interior Systems",
    body: "One factory. Kitchens, wardrobes, doors, and premium window systems manufactured together in one facility for coordinated villa interiors.",
    Icon: Layers3,
  },
  {
    title: "Coordinated Design",
    body: "Our designers ensure that kitchens, closets, doors, and window systems complement each other in style and proportion.",
    Icon: Wrench,
  },
  {
    title: "After-Sales Support & Maintenance",
    body: "Our team installs every product with precision to ensure the final result reflects the original design.",
    Icon: Phone,
  },
  {
    title: "Precision Manufacturing & Installation",
    body: "Manufactured in-house. Installed with precision. One accountable team.",
    Icon: Hammer,
  },
];

export const designSteps = [
  { label: "Upload Floor Plan", Icon: Upload },
  { label: "Get 3D Design", Icon: Box },
  { label: "Live Design Edit", Icon: Wrench },
];

export const guarantees = ["No guessing", "No Expensive Redesigns", "No Delays"];

export const workImages = [
  {
    alt: "Interior door",
    src: "/images/home/door-product-image.webp",
    className: "row-span-2",
  },
  {
    alt: "Kitchen",
    src: "/images/home/kitchen-product-image.webp",
    className: "",
  },
  {
    alt: "uPVC windows",
    src: "/images/home/window-systems-image.webp",
    className: "",
  },
  {
    alt: "Kitchen",
    src: "/images/home/gallery-section-images/dsc03381-edit-copy.webp",
    className: "",
  },
  {
    alt: "uPVC windows",
    src: "/images/home/gallery-section-images/hf-20260327-102428-028018e6-eeff-4ff9-b135-c8cc5b97d2a0.webp",
    className: "sm:col-span-2",
  },
  {
    alt: "Closet",
    src: "/images/home/wardrobe-product-image.webp",
    className: "",
  },
  {
    alt: "Door",
    src: "/images/home/gallery-section-images/dsc03469-edit-copy.webp",
    className: "",
  },
];

export const whyChoose = [
  "One factory for kitchens, wardrobes, doors, and premium window systems.",
  "Fast 3D design before production",
  "Precision manufacturing with European machinery",
  "Solutions designed for UAE villas",
];

export const testimonials = [
  {
    quote:
      "Working with Ideal Factory was the best decision for our villa. Every kitchen, closet and door felt like part of one coordinated whole.",
    name: "Khalid Al Mansoori",
  },
  {
    quote:
      "Having one factory handle everything saved months of coordination and the finish quality is genuinely premium.",
    name: "Aisha Al Nuaimi",
  },
  {
    quote:
      "The uPVC windows and matching interior doors transformed how the villa feels. Quiet, well sealed, beautifully aligned.",
    name: "Fatima Al Hammadi",
  },
];

export const footerLinks = {
  quick: ["About Us", "Our Team", "Testimonials", "Projects", "Gallery"],
  explore: [
    "Walk in Closet",
    "Wardrobe Closet",
    "U-Shape Kitchen",
    "Pantry Kitchen",
    "Doors",
  ],
};

export const contactIcon = Send;
export const checkIcon = Check;
