# Oussama Dambri — GitHub Pages website

This is the **ready-to-publish** replacement for https://oussama-dambri.github.io/.

## What is included

- `index.html` — complete website (text, sections, publications and links).
- `styles.css` — responsive website design.
- `script.js` — mobile navigation and publication filters.
- `favicon.svg` — browser tab icon.
- `Oussama_Dambri_Professional_CV.pdf` — professional CV.
- `Oussama_Dambri_Research_CV.pdf` — research CV.
- `robots.txt` and `sitemap.xml` — search-engine basics.

### Important: keep your existing `images` folder

The new website uses your **existing portrait** from `images/crop.png` in your GitHub repository. **Do not delete the existing `images` folder**. You do not need to upload a new photo.

## Publish on your existing GitHub website (no programming needed)

1. **Back up the existing repository:** visit `https://github.com/Oussama-Dambri/Oussama-Dambri.github.io`, click the green **Code** button, then **Download ZIP**. Save that backup.
2. **Unzip the new package** you received. Keep the files together.
3. Visit the same GitHub repository and ensure you are on branch `main`, at the repository's top level (where the old `index.html` currently appears).
4. Click **Add file → Upload files**.
5. Drag in **all eight site files** (`index.html`, `styles.css`, `script.js`, `favicon.svg`, the two PDF files, `robots.txt`, `sitemap.xml`). You can also include `README_DEPLOY.md`, but it is not required on GitHub.
6. Under **Commit changes**, choose the `main` branch and click **Commit changes**. This replaces the old homepage and adds the new files, without deleting your existing `images` folder.
7. Wait a few minutes, then open `https://oussama-dambri.github.io/` and refresh with **Ctrl + Shift + R** if the browser shows the older cached version.

If GitHub does not let you replace `index.html` using **Upload files**, open the existing `index.html` file, click the pencil **Edit** icon, replace its contents with the provided `index.html`, and **Commit changes**. Then upload the other seven files using **Add file → Upload files**.

## GitHub Pages settings

If the site does not update, go to the repository **Settings → Pages**, under **Build and deployment** choose **Deploy from a branch**, and set the source to branch **main** and folder **/(root)**, then **Save**. If it is already set this way, leave it unchanged.

## Link and QR code

Your address remains exactly `https://oussama-dambri.github.io/`, so your existing homepage QR code continues to work.

## Updating later

- **Replace a CV:** upload an updated PDF with the *same filename* in the repository root; existing buttons keep working.
- **Edit the wording or publication list:** use the pencil Edit button on `index.html`, or edit it locally and upload again.
- **Change colors or layout:** edit `styles.css`.
- **Change your portrait:** replace `images/crop.png` with another image, keeping that filename, or change the image path in `index.html`.
- **Update Google Scholar metrics:** search `index.html` for `207`, `h-index`, and `13 October 2026` and update the numbers/date together.

## Final public review

Before sharing the link widely, confirm the scientific citations, manuscript statuses, project descriptions, contact details and your preferred portrait. Two submitted manuscripts are intentionally labelled as not yet published; their full author order still needs confirmation. Publications and metrics were based on the CV files and Scholar screenshot supplied for the 2026 update.

This is a static site and requires no paid hosting or external build service. Google Fonts are used for typography; if unavailable, the page falls back to system fonts.
