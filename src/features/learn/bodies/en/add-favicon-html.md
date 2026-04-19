You've created your favicon files. Now what? Adding a favicon to your website is simpler than it sounds — it comes down to placing your files in the right location and adding a few lines of HTML to your page. This guide walks you through the entire process, step by step.

---

## Step 1: Prepare Your Favicon Files

Before touching any HTML, make sure you have your favicon files ready. A complete favicon package should include:

- `favicon.ico` — the universal fallback for all browsers
- `favicon-16x16.png` — standard browser tab icon
- `favicon-32x32.png` — high-resolution tabs and Windows shortcuts
- `apple-touch-icon.png` (180×180) — iOS home screen icon
- `android-chrome-192x192.png` — Android home screen icon
- `android-chrome-512x512.png` — PWA splash screen
- `site.webmanifest` — configuration file for Android and PWA icons

If you don't have these yet, **Favify** generates the complete package automatically from a single photo upload.

---

## Step 2: Upload the Files to Your Server

The simplest and most reliable approach is to place all your favicon files in the **root directory** of your website — the same folder where your homepage (`index.html`) lives.

```
your-website/
├── index.html
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── site.webmanifest
```

Placing files at the root means your paths stay simple (`/favicon.ico`) and browsers can find them without any extra configuration. Most browsers automatically look for a `favicon.ico` at the root even without an HTML tag — but you should still add the full HTML snippet for complete coverage.

### Using a Subdirectory

If you prefer to keep your icons in a subfolder (for example, `/icons/` or `/assets/favicons/`), that's fine — but you'll need to update every `href` in your HTML to match the path.

```
your-website/
├── index.html
└── icons/
    ├── favicon.ico
    ├── favicon-16x16.png
    └── ...
```

In this case, your HTML links would use `/icons/favicon.ico`, `/icons/favicon-16x16.png`, and so on.

---

## Step 3: Add the HTML to Your Page

Open your HTML file and find the `<head>` section. Add the following lines inside it:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

Here's what each line does:

| Tag | Purpose |
|-----|---------|
| `apple-touch-icon` | Tells iOS which icon to use for home screen shortcuts |
| `icon` (32×32 PNG) | High-resolution tab icon for modern browsers |
| `icon` (16×16 PNG) | Standard tab icon for modern browsers |
| `manifest` | Points to the webmanifest for Android/PWA icon config |
| `icon` (ICO) | Universal fallback for legacy browsers |

### Order Matters

Browsers read through these tags in order and pick the best match for each context. The `favicon.ico` tag is placed last with `sizes="any"` so it acts as a catch-all fallback without overriding the more specific PNG entries above it.

---

## Step 4: Update the site.webmanifest

The `site.webmanifest` file tells Android Chrome and PWA-capable browsers which icons to use for home screen shortcuts and splash screens. Open the file and make sure it includes the following:

```json
{
  "name": "Your Site Name",
  "short_name": "Site",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

Update `name` and `short_name` to match your site, and adjust `theme_color` and `background_color` to match your brand colors.

---

## Step 5: Verify It's Working

Once you've uploaded your files and updated your HTML, open your site in a browser and check the tab — your favicon should appear. If it doesn't show up immediately, try a hard refresh (`Ctrl+Shift+R` on Windows, `Cmd+Shift+R` on Mac) to clear the browser cache.

You can also verify your favicon setup using browser developer tools:

1. Open DevTools (`F12` or right-click → Inspect)
2. Go to the **Network** tab
3. Reload the page and filter by the filename `favicon`
4. Check that your favicon files are loading with a `200` status code

For a more thorough check, tools like [RealFaviconGenerator](https://realfavicongenerator.net/favicon_checker) let you enter your URL and verify that all favicon sizes are correctly configured.

---

## Platform-Specific Instructions

### WordPress

In WordPress, you can add a favicon through the built-in Site Icon feature:

1. Go to **Appearance → Customize → Site Identity**
2. Click **Select site icon**
3. Upload your image (WordPress recommends at least 512×512)
4. Click **Publish**

WordPress handles the HTML automatically. If you need more control, you can also add the full HTML snippet manually through your theme's `header.php` file or using a plugin like **Insert Headers and Footers**.

### Squarespace

1. Go to **Pages → Website Tools → Favicon**
2. Upload your favicon image
3. Save and publish

Squarespace only supports a single image upload, so use a square PNG at 180×180 or larger.

### Webflow

1. Go to **Project Settings → General**
2. Scroll to **Favicon & App Icon**
3. Upload a square PNG (at least 180×180)
4. Save and publish your site

### Notion (Public Pages)

Notion supports page icons but does not currently allow custom favicon files for public-facing pages. You can set a page icon (emoji or image) that appears in the Notion tab, but this is managed within Notion itself rather than through HTML.

### Static Sites and Custom HTML

If you're building a static site or using a framework like Next.js, Astro, or Hugo, place your favicon files in the `public/` directory (or the equivalent static assets folder) and add the HTML snippet to your base layout template. Most frameworks will serve files from `public/` at the root URL automatically.

---

## Common Issues and Fixes

**The favicon isn't showing up.**
Check that the file paths in your HTML match the actual location of your files. A mismatch between `/favicon.ico` and `/icons/favicon.ico` is a common cause.

**The favicon appears in some browsers but not others.**
Make sure you have both the PNG versions (for modern browsers) and the ICO file (for legacy browsers). Relying on only one format will cause gaps.

**The old favicon keeps showing up even after I replaced it.**
Browsers cache favicons aggressively. Do a hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) or open an incognito window to see the updated version.

**The iOS home screen icon looks blurry or wrong.**
Make sure your `apple-touch-icon.png` is exactly 180×180 pixels and that the HTML tag is present in your `<head>`. iOS will fall back to a screenshot if the tag is missing.

**The webmanifest is returning a 404 error.**
Verify that `site.webmanifest` is uploaded to the correct location and that the `href` in your HTML points to the right path.

---

## The Complete HTML Reference

Here is the full snippet for easy reference. Place this inside your `<head>` tag:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

If your files are in a subdirectory, replace `/` with your folder path:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
<link rel="manifest" href="/icons/site.webmanifest" />
<link rel="icon" href="/icons/favicon.ico" sizes="any" />
```

---

## Ready to Get Started?

The hardest part of adding a favicon is usually creating the files in the first place. With **Favify**, that part is handled for you — upload a photo, get a complete favicon package with all the right sizes, and paste the ready-made HTML snippet straight into your site.

[→ Generate your favicon now](/)
