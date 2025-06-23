// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Psicopedagoga360",
      logo: {
        src: "./public/logo.png",
      },
      social: [
        {
          icon: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/psicopedagogamarianasavid/",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/mariana-savid-saravia-a11b17210/",
        },
        {
          icon: "email",
          label: "e-Mail",
          href: "mailto:mariansavid@gmail.com",
        },
      ],
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/global.css",
      ],
      defaultLocale: "es",
      locales: {
        en: {
          label: "English",
        },
        es: {
          label: "Español",
        },
      },
    }),
  ],

  image: {
    service: passthroughImageService(),
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});