Most guides about favicons start with design software, color theory, and pixel grids. This one doesn't. If you have a photo — any decent portrait photo — you can have a complete, professional favicon package ready to install on your website in under a minute. Here's exactly how to do it.

---

## What You'll Need

Before you start, make sure you have the following:

**A portrait photo.** Any clear photo where your face is visible and reasonably centered will work. It doesn't need to be a professional headshot — a good selfie or a casual portrait works fine. The better the photo quality, the better the result, but you don't need anything special.

**Your photo file in a supported format.** PNG, JPEG, and WebP are all accepted. If your photo is in another format, convert it first using any standard image tool or even your phone's built-in photo app.

**A website to install the favicon on.** This guide covers the creation process and the installation. You'll need access to your site's files or settings to complete the installation step.

That's it. No design skills required. No software to install.

---

## Step 1: Choose a Good Photo

The quality of your source photo has a significant impact on the quality of the resulting avatar and favicon. You don't need a studio-quality shot, but a few things make a real difference.

**Face visibility.** Your face should be clearly visible, reasonably well-lit, and facing roughly toward the camera. Extreme side angles, heavy shadows, or faces obscured by objects in the foreground will produce weaker results.

**Centering.** The AI works best when your face is centered or near-centered in the frame. A photo where your face is a small element in a wide landscape shot won't produce as strong an avatar as a portrait-oriented photo where your face fills most of the frame.

**Resolution.** Higher resolution is better. Aim for at least 512×512 pixels of usable image — meaning the face area alone, not the total image dimensions. A photo taken on a modern smartphone will almost always exceed this threshold easily.

**Background.** A clean, uncluttered background helps the AI focus on your face and produce a cleaner stylization. Busy or highly patterned backgrounds can sometimes interfere with the result, though modern AI tools handle them reasonably well.

**Expression.** A neutral to slightly positive expression generally produces the most versatile avatar. Very exaggerated expressions can sometimes translate awkwardly into the stylized output.

---

## Step 2: Upload Your Photo to Favify

Go to [Favify](/) and upload your photo. You can either drag and drop the file onto the upload area or click to browse your files. Favify accepts PNG, JPEG, and WebP files up to 10 MB.

Once your photo is uploaded, you'll see a preview with a square crop overlay. This is important — favicons are always square, so the tool needs to establish which square region of your photo to use.

---

## Step 3: Adjust the Crop

Review the crop preview carefully. The crop should be centered on your face, with a small amount of space around the head if possible. Avoid crops that cut off the top of your head or place your face too close to the edge of the frame.

Most of the time the automatic crop will be correct — particularly if your photo is a portrait-oriented shot with your face reasonably centered. If adjustments are needed, use the crop controls to reposition and resize the crop area until your face is well-framed within the square.

A well-framed crop at this stage makes a significant difference to the final favicon. Remember that the result will eventually be displayed at 16×16 pixels — a tight, face-centered crop will be much more readable at that size than a wide shot with a lot of empty space around the face.

---

## Step 4: Generate Your Avatar

Once you're happy with the crop, click **Generate Favicons**. This is where the AI goes to work.

The AI analyzes your portrait — detecting your facial features, mapping your facial structure, and understanding the three-dimensional geometry of your face. It then renders a stylized avatar that preserves your likeness while transforming your appearance into a 3D animation style.

This process takes a few seconds. The result is a stylized avatar that looks like you, but rendered in a way that works beautifully as a small icon — clear, distinctive, and immediately recognizable even at the tiny sizes that favicons require.

---

## Step 5: Download Your Favicon Package

Once generation is complete, download the ZIP file. Extract it and you'll find a complete favicon package containing everything you need:

| File | Purpose |
|------|---------|
| `favicon.ico` | Universal fallback (16×16, 32×32, 48×48 combined) |
| `favicon-16x16.png` | Standard browser tab |
| `favicon-32x32.png` | High-resolution tab, Windows shortcuts |
| `apple-touch-icon.png` | iOS home screen (180×180) |
| `android-chrome-192x192.png` | Android home screen |
| `android-chrome-512x512.png` | PWA splash screen |
| `site.webmanifest` | Android and PWA configuration |

You also get a ready-to-paste HTML snippet that connects all these files to your website — no need to write any code yourself.

---

## Step 6: Install the Favicon on Your Website

Installing your favicon is the final step. The process varies slightly depending on how your site is built, but the core approach is the same everywhere.

### Standard HTML Sites

Upload all the favicon files to your website's root directory — the same folder where your `index.html` file lives. Then add the following snippet inside the `<head>` tag of your HTML:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

### WordPress

Go to **Appearance → Customize → Site Identity** and upload your favicon image under **Site Icon**. WordPress handles the HTML automatically. For more control, you can add the full snippet manually via your theme's `header.php` or a plugin like Insert Headers and Footers.

### Squarespace

Go to **Pages → Website Tools → Favicon** and upload your favicon image. Use the 180×180 PNG for the best result.

### Webflow

Go to **Project Settings → General → Favicon & App Icon** and upload your square PNG. Publish your site to apply the change.

### Next.js

Place your favicon files in the `/public` directory. In Next.js 13+ with the App Router, you can also use the built-in metadata API to reference your favicon files directly from your layout file.

### Astro, Hugo, and Other Static Site Generators

Place your favicon files in the `/public` directory (or the equivalent static assets folder for your framework) and add the HTML snippet to your base layout template.

---

## Step 7: Verify the Result

After installing your favicon, open your site in a browser and check the tab. Your favicon should appear within a few seconds of the page loading.

If it doesn't appear immediately, try a hard refresh to bypass the browser cache:
- **Windows / Linux:** `Ctrl + Shift + R`
- **Mac:** `Cmd + Shift + R`

You can also open your site in an incognito or private browsing window, which bypasses the cache entirely and will show the favicon immediately if it's installed correctly.

To verify that all your favicon files are loading correctly, open your browser's developer tools (`F12`), go to the **Network** tab, reload the page, and filter by `favicon`. All your favicon files should appear with a `200` status code.

---

## Tips for the Best Results

A few extra tips that make a noticeable difference to the quality of your favicon:

**Use your best photo.** The AI can work with a wide range of photo qualities, but a clear, well-lit, high-resolution portrait will always produce a better result than a blurry or poorly lit one. If you have several photos to choose from, spend a moment picking the best one.

**Try a few crops.** If the automatic crop doesn't look right, experiment with the crop controls. Sometimes shifting the crop slightly — a bit higher to include more forehead, or tighter to emphasize the face — makes a significant difference to how the avatar reads at small sizes.

**Check at actual size.** Before installing, zoom in on your browser tab after installation to check how the favicon looks at actual tab size. What looks good at 512×512 can sometimes be less clear at 16×16. If the result is unclear at small sizes, try regenerating with a tighter crop.

**Use a portrait-oriented photo.** Landscape photos where your face is a small part of a wide scene produce weaker results. The closer your face fills the frame, the better the avatar will be.

**Test on mobile.** If you plan to use your favicon as a home screen icon on iOS or Android, add the site to your home screen after installing the favicon and check how the apple-touch-icon looks as an app icon. This size (180×180) is where your avatar will be most visible.

---

## From Zero to Favicon in Under a Minute

That's the entire process — from a clear portrait through crop, AI generation, ZIP download, install, and a quick verification in the browser. It typically takes under a minute, and the result is a complete, professional favicon that represents your personal brand everywhere your site appears — in browser tabs, bookmarks, search results, and home screens.

[→ Create your favicon now](/)
