# Golden Cambodia Century (GCC) Website

This is the official website for **Golden Cambodia Century (GCC)** — a static site built to showcase company information, group businesses, and overseas branches.

Built with **Next.js** and **Tailwind CSS**, and designed to be fast, clean, and easy to maintain.

![gcc](/public/home/gcc-logo.png "Logo")

---

## Project Overview

- **Type**: Static website
- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: None
- **Hosting**: [Vercel](https://vercel.com/) (free tier)
- **Deployment**: Manual from Vercel dashboard

---

## Getting Started (For Developers)

To run the website locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/repo-name.git
cd repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

---

## Project Structure

This project uses **Next.js App Router**, which means:

- All pages are located in the `/app` folder.
- Each page is placed in its own folder (e.g. `/app/media`, `/app/care`, `/app/trust`).
- Each page folder includes a `page.tsx` file that renders the full page.

```
/app
  /media
    page.tsx         → GCC Media page
  /care
    page.tsx         → GCC Care page
  /trust
    page.tsx         → GCC Trust page
  /components
    Header.tsx       → Shared header
    Footer.tsx       → Shared footer
    /Media           → Components for the Media page
    /Care            → Components for the Care page
    /Trust           → Components for the Trust page

/public
  /media             → Images for the Media page
  /care              → Images for the Care page
  /trust             → Images for the Trust page
```

> All styles are done using **Tailwind CSS utility classes**, no separate CSS files.

---

## How to Edit or Add Content

### Add a New Page

1. Go to `/app`
2. Create a new folder using lowercase name (e.g., `team`)
3. Inside that folder, add a `page.tsx` file:

   ```tsx
   // app/team/page.tsx
   import TeamHero from "../components/Team/TeamHero";

   export default function TeamPage() {
     return (
       <div>
         <TeamHero />
         {/* Add more sections here */}
       </div>
     );
   }
   ```

### Add a New Component

1. Know which page this component belongs to (e.g., GCC Trust page).
2. Go to `/app/components/Trust`
3. Create a new file using **PascalCase** (e.g., `TrustHistory.tsx`)
4. Write your component:

   ```tsx
   export default function TrustHistory() {
     return (
       <section className="p-4">
         <h2 className="text-xl font-bold">Our History</h2>
       </section>
     );
   }
   ```

### Connect a Component to a Page

Just import it into the `page.tsx` file:

```tsx
import TrustHistory from "../../components/Trust/TrustHistory";

export default function TrustPage() {
  return (
    <>
      <TrustHistory />
    </>
  );
}
```

---

## How to Update Images and Links

### Update Images

1. Go to `/public/[page]` (e.g., `/public/media`)
2. Replace the image with a new one using the **same file name** to avoid breaking the site.
3. If using a **new name**, find where it’s used in your component (e.g., `/components/Media/MediaHero.tsx`) and update the path manually:

```tsx
<img src="/media/newImage.jpg" alt="New image" />
```

### Update Links

Links are hard-coded. To change them:

1. Open the relevant `.tsx` file
2. Locate the `<a href="...">` or `<Link href="...">` element
3. Update the URL directly

---

## How to Deploy (Vercel)

1. Go to your [Vercel dashboard](https://vercel.com/)
2. Click **“New Project”**
3. Import this GitHub repository
4. Keep the default settings (Next.js will be auto-detected)
5. Click **“Deploy”**

Once deployed, visit the generated link to view the site.

To update the site after changes:

- Push updates to the repo and click **"Deploy"** manually on Vercel.

---

## Common Commands

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm install`   | Install all dependencies        |
| `npm run dev`   | Start local development server  |
| `npm run build` | Build for production            |
| `npm run start` | Start production preview server |

---

## Environment & Secrets

There are **no environment variables**, **no API keys**, and **no backend setup** needed.

---

## FAQ

**Q: Can I edit this site without coding experience?**
A: You’ll need some basic knowledge of HTML/JSX and how to run commands using a terminal or code editor.

**Q: Where do I change images and logos?**
A: You can update images in the `/public` folder and update image paths inside the `.tsx` files.

**Q: Does this site have a database or CMS?**
A: No — this is a fully static website.
