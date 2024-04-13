# Kwame Portfolio Website
[Kwame-Homepage](https://www.kwameowusu.dev/)


## Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites.
- [JSX](https://react.dev/) - Javascript framework, im still not an expert, but there are sprinkles of it in this project.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React.
- [Animate css](https://animate.style/) - Simple Css Library for creating quick and seamless animations.
- [MDX](https://mdxjs.com/) - Markdown for the component era, used in my blog section and posts.


> 🧑‍🚀 **Before diving into coding the website, I created a simple design in [Excalidraw](https://excalidraw.com/) to better visualize the end goal.**
![Portfolio website structure](https://github.com/kwame-Owusu/portfolio-website/assets/98961379/f3d8db58-6cb1-4887-a69a-208c14ddf073)



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

## To run it locally on your machine
Clone the repo, `cd` into it and then:

```bash
npm install astro
npm run dev
```
## Here is a link if you want to learn more about Astro?
[Documentation](https://docs.astro.build) 

## License

MIT License.

You can create your own homepage for free without notifying me by forking this project under the following conditions:

- Add a link to [Homepage](https://www.kwameowusu.dev/)
Example: 
```javascript
<footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
    <p>This site was designed by <a href="https://www.kwameowusu.dev/ target="_blank">Example</a>.</p>
</footer>

```

