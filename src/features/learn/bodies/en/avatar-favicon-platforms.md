You've created your avatar and downloaded your favicon package. Now it's time to put it to work. This guide covers exactly how to install your avatar favicon on three of the most popular website platforms — WordPress, Notion, and Squarespace — with step-by-step instructions for each.

If you're using a different platform, check the final section for guidance on other common tools and frameworks.

---

## Before You Start

Make sure you have your favicon package ready. Your Favify download includes everything you need:

- `favicon.ico` — universal fallback for all browsers
- `favicon-16x16.png` — standard browser tab
- `favicon-32x32.png` — high-resolution tab and Windows shortcuts
- `apple-touch-icon.png` — iOS home screen icon (180×180)
- `android-chrome-192x192.png` — Android home screen
- `android-chrome-512x512.png` — PWA splash screen
- `site.webmanifest` — Android and PWA configuration

You'll also find a ready-to-paste HTML snippet in your package. Keep this handy — some installation methods use it directly.

---

## WordPress

WordPress is the world's most widely used website platform, and it offers several ways to add a favicon depending on how your site is set up.

### Method 1: Using the Customizer (Recommended for Most Users)

This is the simplest method and works with almost every WordPress theme.

1. Log in to your WordPress admin dashboard.
2. Go to **Appearance → Customize**.
3. Click **Site Identity** in the left panel.
4. Scroll down to find the **Site Icon** section.
5. Click **Select site icon**.
6. Upload your `android-chrome-512x512.png` file — the 512×512 version gives WordPress the highest quality source to work from.
7. WordPress will show a crop preview. Adjust if needed, then click **Crop Image**.
8. Click **Publish** in the top left to save your changes.

WordPress automatically generates the necessary sizes and adds the appropriate HTML tags to your site. You don't need to manually add any code.

**Note:** The Site Icon feature requires your active theme to support `add_theme_support( 'custom-logo' )`. Almost all modern themes do. If you don't see the Site Icon option, check your theme documentation or use Method 2.

### Method 2: Adding the Full Snippet Manually (For Full Control)

If you want to use your complete favicon package — including the ICO file, all PNG sizes, and the webmanifest — you'll need to add the HTML snippet manually. This gives you full control and ensures all browsers and devices are covered.

**Step 1: Upload your favicon files.**

Using FTP, your hosting control panel's file manager, or a plugin like WP File Manager, upload all your favicon files to the root directory of your WordPress installation — the same folder where `wp-config.php` lives. This is typically the `/public_html/` or `/www/` folder on your server.

**Step 2: Add the HTML snippet to your theme.**

Go to **Appearance → Theme File Editor** (or use a child theme to avoid losing changes on theme updates). Open your theme's `header.php` file and locate the `<head>` section. Add the following snippet just before the closing `</head>` tag:

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

Click **Update File** to save.

### Method 3: Using a Plugin

If you're not comfortable editing theme files, several plugins make favicon management simple:

**Favicon by RealFaviconGenerator** is one of the most comprehensive options. It generates a complete favicon package and handles the HTML automatically.

**Insert Headers and Footers** (by WPBeginner) lets you paste any HTML snippet into your site's `<head>` without touching theme files. Upload your favicon files to your server root first, then paste the HTML snippet using this plugin.

### Verifying Your WordPress Favicon

After installing, visit your site in a browser and check the tab. If the favicon doesn't appear immediately, do a hard refresh (`Ctrl+Shift+R` on Windows, `Cmd+Shift+R` on Mac) or open your site in an incognito window.

---

## Notion

Notion's favicon support works differently from traditional websites — and it's important to understand the distinction before you start.

### What Notion Actually Supports

Notion allows you to set a **page icon** for any page. This icon appears in the browser tab when someone is viewing that page, and it also appears in the Notion sidebar and in link previews. However, this is not a traditional favicon — it's a Notion-specific feature tied to each individual page.

Notion does **not** currently support uploading a custom `favicon.ico` or PNG favicon file that applies site-wide to a custom domain. If you've published your Notion page to the web using Notion's built-in sharing feature, the favicon behavior depends on your setup:

- **Default Notion sharing** (notion.site subdomain): The favicon is controlled by Notion and shows the Notion logo by default. Individual page icons you set will appear in the tab for that specific page.
- **Custom domain via a third-party tool** (such as Super, Potion, or Fruition): These tools give you full control over your favicon, and you can use your complete Favify package just like a standard website.

### Setting a Page Icon in Notion

To set your avatar as the icon for a Notion page:

1. Open the page in Notion.
2. Hover over the page title to reveal the **Add icon** button, or click the existing icon if one is already set.
3. Click **Upload** in the icon selector.
4. Upload your `favicon-32x32.png` or `apple-touch-icon.png` — these sizes work well as Notion page icons.
5. The icon will appear immediately in the tab and in the Notion sidebar.

Repeat this for each page where you want your avatar to appear as the icon.

### Using a Full Favicon with a Custom Notion Domain

If you're using **Super** (super.so), **Potion** (potion.so), or a similar tool to publish your Notion site on a custom domain, you have full control over your favicon.

**With Super:**
1. Go to your Super dashboard and select your site.
2. Go to **Settings → Favicon**.
3. Upload your favicon image (use the 512×512 PNG for best results).
4. Save and republish your site.

Super handles the HTML automatically. For full control, you can also inject custom code through Super's **Code Injection** feature and paste your full HTML snippet there.

**With Potion:**
1. Go to your Potion dashboard.
2. Select your site and go to **Settings**.
3. Upload your favicon in the **Site Icon** section.
4. Save changes.

**With Fruition or custom Cloudflare Workers setups:**
Add your HTML snippet to your Cloudflare Worker script, in the section where page `<head>` content is injected. Upload your favicon files to a CDN or static host and reference them by their full URL in the snippet.

---

## Squarespace

Squarespace has a built-in favicon feature that's straightforward to use, though it has some limitations compared to a fully custom HTML setup.

### Adding Your Favicon via Squarespace Settings

1. Log in to your Squarespace account and open your site.
2. Go to **Website → Website Tools → Favicon**.

   *In older Squarespace versions (7.0):* Go to **Design → Browser Icon (Favicon)**.

3. Click **Upload** and select your favicon image.
   - Use your `apple-touch-icon.png` (180×180) for the best quality. Squarespace accepts square images and will handle resizing internally.
   - Alternatively, use your `android-chrome-512x512.png` for the highest resolution source.
4. Once uploaded, you'll see a preview of how the favicon will appear in the browser tab.
5. Click **Save** to apply the changes.
6. Your favicon will be live on your site within a few minutes.

### Squarespace Favicon Limitations

Squarespace's built-in favicon system has a few constraints worth knowing about:

**Single image upload only.** Squarespace generates the various favicon sizes from the one image you upload. You can't upload separate ICO, PNG, and webmanifest files individually. For most users this is fine — Squarespace handles the common cases well.

**No webmanifest control.** Squarespace doesn't give you direct control over the `site.webmanifest` file, which means Android PWA and home screen icon configuration is handled automatically by the platform rather than by you.

**No direct ICO upload.** Squarespace uses PNG internally. The ICO fallback for legacy browsers is handled by the platform.

For the vast majority of Squarespace sites, the built-in favicon feature is sufficient. If you need more control — for example, for PWA support or custom Android home screen icons — you'll need to use Squarespace's **Code Injection** feature.

### Advanced: Using Code Injection for Full Favicon Control

Squarespace Business and Commerce plans allow custom code injection, which gives you full control over your favicon setup.

1. Go to **Settings → Advanced → Code Injection**.
2. In the **Header** section, paste your full HTML favicon snippet:

```html
<link rel="apple-touch-icon" sizes="180x180" href="YOUR_FILE_URL/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="YOUR_FILE_URL/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="YOUR_FILE_URL/favicon-16x16.png" />
<link rel="manifest" href="YOUR_FILE_URL/site.webmanifest" />
<link rel="icon" href="YOUR_FILE_URL/favicon.ico" sizes="any" />
```

3. Replace `YOUR_FILE_URL` with the URL where you've hosted your favicon files. Since Squarespace doesn't give you direct file system access, you'll need to host your favicon files externally — on a CDN, GitHub Pages, or another static hosting service — and reference them by their full URL.
4. Click **Save**.

### Verifying Your Squarespace Favicon

After saving, visit your site and check the browser tab. Squarespace may take a few minutes to propagate the change. If the old favicon persists, do a hard refresh or check in an incognito window.

---

## Other Platforms

### Webflow

1. Go to **Project Settings → General**.
2. Scroll to **Favicon & App Icon**.
3. Upload your square PNG (512×512 recommended).
4. Click **Save Changes** and publish your site.

For full control, use **Project Settings → Custom Code → Head Code** to paste your HTML snippet. Host your favicon files via Webflow's asset manager or an external CDN.

### Ghost

1. Go to your Ghost admin panel.
2. Navigate to **Settings → Design → Brand**.
3. Upload your favicon image under **Publication icon**.
4. Save changes.

For the complete favicon package, use Ghost's **Code Injection** feature under **Settings → Code injection** and paste your HTML snippet in the Site Header field. Upload your files to an external host and reference them by URL.

### Wix

1. Go to your Wix dashboard.
2. Click **Settings → Favicon**.
3. Click **Upload Favicon** and select your image.
4. Click **Save**.

Wix supports custom favicon uploads directly. For advanced control, use Wix's **Custom Code** feature (available on paid plans) under **Settings → Custom Code**.

### Shopify

1. Go to your Shopify admin.
2. Navigate to **Online Store → Themes**.
3. Click **Customize** on your active theme.
4. Go to **Theme Settings → Favicon**.
5. Upload your favicon image and save.

For the full package, edit your theme's `theme.liquid` file and add the HTML snippet inside the `<head>` tag. Upload your favicon files to Shopify's file hosting via **Content → Files**.

### GitHub Pages and Static Sites

Place all your favicon files in the root of your repository (or in the `/public` folder for frameworks like Next.js, Astro, or Hugo). Add the HTML snippet to your base layout template or `index.html` file inside the `<head>` tag.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="icon" href="/favicon.ico" sizes="any" />
```

Commit and push your changes. Your favicon will be live once GitHub Pages rebuilds your site.

---

## Troubleshooting Common Issues

**The favicon isn't showing up.**
Check that your file paths are correct. A mismatch between the path in your HTML and the actual file location is the most common cause. Also try a hard refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) or open your site in an incognito window.

**The old favicon keeps appearing.**
Browsers cache favicons aggressively. Even after you've updated the file, the browser may continue showing the old one for hours. An incognito window bypasses this cache and will show the current favicon immediately.

**The favicon looks blurry or pixelated.**
This usually means you uploaded a low-resolution source image. Re-upload using your `android-chrome-512x512.png` or another high-resolution file from your Favify package.

**The favicon appears correctly in Chrome but not in Safari.**
Safari has its own favicon caching behavior and sometimes takes longer to update. Try clearing Safari's cache via **Develop → Empty Caches** (enable the Develop menu in Safari preferences if it's not visible).

**The favicon shows in the tab but not on the iOS home screen.**
Make sure your `apple-touch-icon.png` (180×180) is correctly uploaded and that the `<link rel="apple-touch-icon">` tag is present in your HTML. Without this specific tag, iOS falls back to taking a screenshot of your page.

---

## Your Avatar, Everywhere

Installing your favicon is the final step in bringing your digital identity together. Once it's live, your avatar appears in browser tabs, bookmarks, search results, and home screen shortcuts — everywhere your site is seen.

[→ Create your favicon package now](/)
