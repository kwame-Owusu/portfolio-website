# Kwame Portfolio Website
[Kwame-Homepage](https://portfolio-website-three-ruby-56.vercel.app/)
# Astro Starter Kit: Basics


> 🧑‍🚀 **Before diving into coding the website, I create a simple design  to better visualize the end goal.**


![Portfolio website structure](https://github.com/kwame-Owusu/portfolio-website/assets/98961379/62f913fe-3a91-4b2c-97cd-1d190b149f09)

## 🚀 Project Structure

Basic structure of astro website:

```text
/
├── public/
|   └── assets/
|          └── images
│   └── favicon.svg
|   └── K.svg
├── src/
│   ├── components/
│   │   └── astro files and jsx files
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
|       └── projects.astro
|       └── uses.astro              
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands to instal and build with Astro

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Here is a link if you want to learn more about Astro?
[Documentation](https://docs.astro.build) 
