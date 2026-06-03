# O'Neals Smokehouse — Website

A fast, animated website for O'Neals Smokehouse (Cassopolis, MI). Built with React,
Vite, Tailwind CSS, and Framer Motion.

## Run it on your computer

Open a terminal in this folder and run:

```bash
npm install      # one time only
npm run dev      # starts the site at http://localhost:5173
```

Then open **http://localhost:5173** in your browser. The page auto-refreshes as you edit.

## Put it on the internet (free)

```bash
npm run build    # creates a "dist" folder — that's your finished website
```

Drag the `dist` folder onto **netlify.com/drop** or **vercel.com** to publish it free.
You can connect your own domain (like onealssmokehouse.com) afterward.

## Editing your content — the easy parts

Almost everything you'd want to change lives in ONE file:

> **`src/data.ts`**

There you can update, with no coding knowledge:

- **Phone, address, hours** — change the text between the quotes
- **The menu** — add/remove dishes, edit names and descriptions, set the
  `tag` to `"Signature"`, `"Fan Favorite"`, or `"Limited"` (or delete it)
- **Reviews** — swap in real customer quotes
- **Online ordering link** — point `orderHref` at your preferred ordering page

Save the file and the website updates instantly.

## Swapping in your own photos

The site currently uses stock barbecue photos. To use O'Neals' real photos:

1. Put your image files in the `public` folder (e.g. `public/brisket.jpg`)
2. In `src/components/Hero.tsx`, `Story.tsx`, and `Gallery.tsx`, replace the
   `https://images.unsplash.com/...` web links with `/brisket.jpg` etc.

If a photo ever fails to load, the site automatically shows a warm gradient
instead of a broken image, so it never looks broken.

## Notes on the business info

Hours, prices, and menu were gathered from public listings (Facebook, Google,
Restaurant Guru, DoorDash). **Please double-check them** and edit `src/data.ts`
to match what's true today. Live prices intentionally link out to the online
ordering page so they're always current.
