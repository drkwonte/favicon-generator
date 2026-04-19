When you generate a favicon, you're not just creating one file — you're creating a small family of files in different formats and sizes. Each format has its own role, and understanding the differences helps you make sure your favicon looks great everywhere it appears.

---

## The Three Main Favicon Formats

### ICO — The Original Favicon Format

The `.ico` format is where favicons began. Introduced alongside the favicon concept itself in Internet Explorer 5 back in 1999, ICO files have been the backbone of favicon support for over two decades.

What makes ICO unique is that a single `.ico` file can contain **multiple image sizes at once** — typically 16×16, 32×32, and 48×48 pixels. The browser picks the most appropriate size depending on where it's being displayed. This multi-resolution packaging made ICO the go-to format for a long time, especially for ensuring compatibility with older browsers.

**When to use ICO:**
- As your primary `favicon.ico` placed at the root of your site
- For compatibility with legacy browsers and older operating systems
- As a fallback when other formats aren't supported

**Limitations:**
- Cannot be scaled infinitely like SVG
- Larger file size compared to a single PNG of the same dimensions
- Not ideal for high-resolution (Retina) displays on its own

---

### PNG — The Modern Standard

PNG has become the dominant favicon format for modern browsers. Unlike ICO, each PNG file contains a single image at a specific size, which means you'll typically need several PNG files to cover all use cases.

A complete favicon setup usually includes the following PNG sizes:

| Size | Purpose |
|------|---------|
| 16×16 | Standard browser tab |
| 32×32 | Taskbar shortcut, high-res tab |
| 180×180 | Apple Touch Icon (iOS home screen) |
| 192×192 | Android Chrome home screen |
| 512×512 | Android Chrome splash screen, PWA |

PNG supports **full transparency**, which means your icon can have a clean, shaped edge rather than a white or colored square background. This is especially important for icons that aren't square in shape.

**When to use PNG:**
- For all modern browser favicon needs
- For Apple Touch Icons (home screen shortcuts on iPhone and iPad)
- For Android home screen icons via the web app manifest
- When transparency is needed

**Limitations:**
- Each size requires a separate file
- Not infinitely scalable — quality degrades if you try to scale up a small PNG

---

### SVG — The Scalable Future

SVG (Scalable Vector Graphics) is a vector format, which means it's defined mathematically rather than as a fixed grid of pixels. The result is an image that looks sharp at **any size or resolution** — whether it's 16×16 on a standard display or 512×512 on a high-DPI screen.

Browser support for SVG favicons has grown significantly in recent years. Chromium-based browsers (Chrome, Edge, Brave) and Firefox now support SVG favicons, though Safari and some legacy environments still rely on PNG and ICO.

One particularly useful feature of SVG favicons is support for **`prefers-color-scheme`** — a CSS media query that lets your favicon automatically switch between a light and dark version depending on the user's system settings.

**When to use SVG:**
- When you want a single file that looks sharp on all screen densities
- When you want automatic light/dark mode switching
- As a modern complement alongside ICO and PNG for full coverage

**Limitations:**
- Not supported in all browsers — always provide ICO/PNG fallbacks
- Raster-based images (like photos) don't benefit from SVG's scalability
- Slightly more complex to implement correctly

---

## How the Formats Work Together

No single format covers every browser and device perfectly. A robust favicon setup uses all three formats in combination, each serving a specific role:

| Format | Role |
|--------|------|
| `favicon.ico` | Universal fallback for legacy browsers |
| `favicon-16x16.png` | Standard tab icon for modern browsers |
| `favicon-32x32.png` | High-res tab, taskbar shortcut |
| `apple-touch-icon.png` (180×180) | iOS home screen shortcut |
| `android-chrome-192x192.png` | Android home screen |
| `android-chrome-512x512.png` | PWA splash screen |
| `favicon.svg` | Scalable modern browsers, dark mode support |
| `site.webmanifest` | Tells Android/PWA which icons to use |

---

## The HTML You Need

To connect all these files to your website, add the following snippet inside your `<head>` tag:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

The order matters slightly — browsers work through the list and pick the best match. Placing `favicon.ico` last with `sizes="any"` ensures it acts as a fallback without overriding the more specific entries above it.

---

## Which Format Should You Start With?

If you're setting up a favicon for the first time and want to keep things simple:

1. **Start with a high-resolution source image** — at least 512×512 pixels.
2. **Generate ICO and PNG sizes** — this covers the vast majority of browsers and devices.
3. **Add SVG if possible** — especially if your icon is vector-based or you want dark mode support.
4. **Include a webmanifest** — required for proper PWA and Android icon support.

Tools like **Favify** handle all of this automatically. Upload your photo, and you'll get a complete package — ICO, all PNG sizes, a webmanifest, and ready-to-paste HTML — in seconds.

---

## Summary

| Format | Scalable | Transparency | Browser Support | Best For |
|--------|----------|--------------|-----------------|----------|
| ICO | ✗ | Partial | Universal | Legacy fallback |
| PNG | ✗ | ✓ | Universal | Modern browsers, Apple, Android |
| SVG | ✓ | ✓ | Modern only | Sharp icons, dark mode |

The best favicon setup isn't about picking one format — it's about using all three together so your icon looks right no matter where it appears.

[→ Generate your favicon package now](/)
