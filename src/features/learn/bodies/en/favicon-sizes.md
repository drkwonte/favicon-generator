If you've ever looked into favicon requirements, you've probably run into a bewildering list of sizes — 16×16, 32×32, 48×48, 57×57, 72×72, 96×96, 114×114, 120×120, 144×144, 152×152, 180×180, 192×192, 512×512... the list goes on. It's enough to make anyone's head spin.

The good news is that you don't need all of them. Here's a clear breakdown of which sizes actually matter, what each one is for, and what a minimal but complete favicon setup looks like.

---

## Why So Many Sizes?

Favicons appear in a surprisingly wide range of contexts — browser tabs, bookmarks, home screen shortcuts, PWA splash screens, search results — and each context has different display requirements. On top of that, different operating systems, browsers, and devices have their own expectations.

The result is a fragmented landscape where no single image size works everywhere. The solution is a carefully chosen set of sizes that covers every major use case without going overboard.

---

## The Sizes That Actually Matter

### 16×16 — The Classic Tab Icon

This is the original favicon size, and it's still the most important one. Every desktop browser displays a 16×16 icon in the browser tab and bookmarks bar. It's tiny, which means your design needs to be extremely simple to remain readable at this size.

**Used by:** All desktop browsers (Chrome, Firefox, Safari, Edge)
**Format:** PNG or ICO

---

### 32×32 — High-Resolution Tabs and Taskbar

Modern high-DPI displays (like Retina screens on Macs) and Windows taskbar shortcuts use a 32×32 icon. Browsers on these displays will prefer the 32×32 version over 16×16 for sharper rendering.

**Used by:** High-DPI browsers, Windows taskbar shortcuts, Safari on macOS
**Format:** PNG or ICO

---

### 48×48 — Windows Site Icons

Windows uses 48×48 icons for site shortcuts pinned to the taskbar or desktop. This size is less commonly discussed but worth including inside your `favicon.ico` file for complete Windows coverage.

**Used by:** Windows desktop and taskbar shortcuts
**Format:** ICO (embedded alongside 16×16 and 32×32)

---

### 180×180 — Apple Touch Icon

When someone saves your website to their iPhone or iPad home screen, iOS uses the Apple Touch Icon as the app icon. Without this, iOS will fall back to a screenshot of your page — which looks terrible as a home screen icon.

This is one of the most important sizes to get right, especially if your audience uses iOS devices.

**Used by:** iPhone and iPad home screen shortcuts
**Format:** PNG
**HTML tag:** `<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`

---

### 192×192 — Android Home Screen

Android Chrome uses the 192×192 icon when a user adds your site to their home screen. This size is specified in the `site.webmanifest` file rather than directly in your HTML.

**Used by:** Android Chrome home screen shortcuts
**Format:** PNG
**Specified in:** `site.webmanifest`

---

### 512×512 — PWA Splash Screen and App Store

The 512×512 icon is used by Progressive Web Apps (PWAs) for the splash screen shown when the app is launching. It's also used by some Android devices for high-resolution home screen icons.

If you're building or planning to build a PWA, this size is mandatory. Even if you're not, including it future-proofs your favicon package.

**Used by:** PWA splash screens, high-res Android icons
**Format:** PNG
**Specified in:** `site.webmanifest`

---

## The Minimal Complete Setup

If you want full coverage without unnecessary files, this is the set you actually need:

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 16×16, 32×32, 48×48 | Universal fallback, all legacy browsers |
| `favicon-16x16.png` | 16×16 | Modern browser tabs |
| `favicon-32x32.png` | 32×32 | High-DPI tabs, Windows shortcuts |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192x192.png` | 192×192 | Android home screen |
| `android-chrome-512x512.png` | 512×512 | PWA splash screen |
| `site.webmanifest` | — | Android/PWA icon configuration |

This covers virtually every browser, device, and use case in common use today.

---

## What About All Those Other Sizes?

You may have seen favicon generators produce dozens of files — 57×57, 72×72, 114×114, 152×152, and more. These were needed for older versions of iOS and Android, but are largely obsolete today.

Here's a quick guide to what you can safely skip:

| Size | Originally For | Still Needed? |
|------|---------------|---------------|
| 57×57 | iPhone (pre-Retina, iOS 6 and earlier) | No |
| 72×72 | iPad (original, iOS 6 and earlier) | No |
| 76×76 | iPad (iOS 7) | No |
| 114×114 | iPhone Retina (iOS 6 and earlier) | No |
| 120×120 | iPhone Retina (iOS 7) | No |
| 144×144 | iPad Retina (iOS 6 and earlier) | No |
| 152×152 | iPad Retina (iOS 7) | No |
| 96×96 | Old Android / Google TV | No |

Unless you have strong reasons to support very old iOS or Android versions, you can safely skip all of these. The 180×180 Apple Touch Icon covers all modern iOS devices, and 192×192 covers modern Android.

---

## Source Image Recommendations

All these sizes ultimately come from a single source image. To get sharp results across every size, keep the following in mind.

**Start with at least 512×512 pixels.** This gives you enough resolution to downscale cleanly to every size you need, including the 16×16 tab icon. Starting smaller means your tiny icons will look blurry or pixelated.

**Use a square image.** All favicon formats are square. If your source image isn't square, most tools will center-crop it, which may cut off important parts of your design.

**Keep the design simple.** Detail that looks great at 512×512 often becomes an unreadable smear at 16×16. Test your icon at actual tab size before publishing.

**Use a transparent background if possible.** PNG transparency ensures your icon blends cleanly with both light and dark browser themes.

---

## The HTML Snippet

Once you have your files, connect them to your site by adding this to your `<head>`:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

And your `site.webmanifest` should include:

```json
{
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## Summary

You don't need 30 different favicon sizes. You need the right ones. A complete, modern favicon setup comes down to six image files and a manifest — covering every major browser, device, and use case without unnecessary bloat.

**Favify** generates exactly this set automatically. Upload a photo, and you'll get every size you need, properly named, with a ready-to-paste HTML snippet — in seconds.

[→ Generate your favicon package now](/)
