import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bil Abror",
  description: "Full Stack Developer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'My Projects', link: '/my-projects' },
      { text: 'About me', link: '/about-me' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bilabror' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/bil-abror' },
    ]
  }
})
