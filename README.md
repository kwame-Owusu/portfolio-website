# Kwame Portfolio Website
[Kwame-Homepage](https://portfolio-website-three-ruby-56.vercel.app/)


## Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites.
- [React.js](https://react.dev/) -Javascript framework, im still not an expert, but there are sprinkles  in this project.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React.
- [Animate css](https://animate.style/) - Simple Css Library for creating quick and seamless animations.


> 🧑‍🚀 **Before diving into coding the website, I create a simple design  to better visualize the end goal.**


![Portfolio website structure](https://github.com/kwame-Owusu/portfolio-website/assets/98961379/62f913fe-3a91-4b2c-97cd-1d190b149f09)
> 🧑‍🚀 **What I am working on right now :**
I will try and implement the Project page as soon as possible, trying to balance everything with my uni work 🫡.
and the uses page will be next, after that everything I will implement will  be optional, but will at least try to incorporate a blog inside the website
 to share what I like to do on a daily basis, write about some technologies I am excited about and on my gaming adventures, last but not least about my Faith.

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

## 🧞 Commands to install and build with Astro

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
