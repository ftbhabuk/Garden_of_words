import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge Tailwind CSS class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Parse a color string into a numeric value
export const parseColor = (color: string) => {
  const hex = color.startsWith("#") ? color.slice(1) : color;
  return parseInt(hex, 16);
};

// Metadata for the site
export const siteMetadata = {
  title: "Garden of Words: Explore the Art of Poetry",
  description:
    "Step into the 'Garden of Words'—a serene space for poetry lovers and learners. Craft verses, discover timeless poems, and unlock your creative potential with the help of an integrated AI-powered chatbot. Perfect for aspiring poets and seasoned wordsmiths alike.",
  url: "https://gardenofwords.com",
  image: "/thumbnail.jpg", // Replace with your actual image URL
  favicon: "/favicon.ico",
  themeColor: "#a4d4ae", // A soothing green to match the garden theme
};

// Generate meta tags for SEO and sharing
export const generateMetaTags = () => {
  const { title, description, url, image, favicon, themeColor } = siteMetadata;

  const metaTags = [
    // Basic meta tags
    { name: "description", content: description },
    { name: "theme-color", content: themeColor },

    // Open Graph meta tags for social sharing
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },

    // Twitter Card meta tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Link tags for favicon
    { rel: "icon", href: favicon },
  ];

  return metaTags;
};
