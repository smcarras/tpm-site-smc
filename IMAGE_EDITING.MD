# 📸 Image Editing Guide for Talent PayMaster Website

This guide shows you how to easily update all images across your website in one central location.

---

## 🎯 Quick Start

**All website images are managed in one file:** `/config/images.ts`

To change any image on the website:
1. Open `/config/images.ts`
2. Find the image you want to replace
3. Replace the URL with your new image URL
4. Save the file

The changes will automatically appear throughout the website!

---

## 📁 Image Configuration File Location

```
/config/images.ts
```

This file contains all image URLs organized by page and purpose, with helpful comments explaining what each image is used for.

---

## 🏷️ Client Logos (Most Important!)

### Where to Update
Look for the **`clientLogos`** section at the top of `/config/images.ts`

### Current Placeholder Logos (REPLACE THESE):
```typescript
clientLogos: {
  historyChannel: "https://via.placeholder.com/300x100/1e293b/ffffff?text=HISTORY+CHANNEL",
  investigationDiscovery: "https://via.placeholder.com/200x100/1e293b/ffffff?text=ID",
  discoveryChannel: "https://via.placeholder.com/300x100/1e293b/ffffff?text=DISCOVERY",
  nfl: "https://via.placeholder.com/200x200/013369/ffffff?text=NFL",
  tlc: "https://via.placeholder.com/250x100/7c3aed/ffffff?text=TLC",
  nationalGeographic: "https://via.placeholder.com/300x100/1e293b/ffffff?text=NAT+GEO",
}
```

### How to Add Your Actual Logos

**Option 1: Use URLs from your server**
```typescript
clientLogos: {
  historyChannel: "https://www.talentpaymaster.com/logos/history-channel.png",
  investigationDiscovery: "https://www.talentpaymaster.com/logos/id-logo.png",
  // ... etc
}
```

**Option 2: Use image hosting service (like Imgur, Cloudinary, etc.)**
```typescript
clientLogos: {
  historyChannel: "https://i.imgur.com/abc123.png",
  investigationDiscovery: "https://i.imgur.com/def456.png",
  // ... etc
}
```

**Option 3: Use relative paths (if logos are in your project)**
```typescript
clientLogos: {
  historyChannel: "/images/logos/history-channel.png",
  investigationDiscovery: "/images/logos/id-logo.png",
  // ... etc
}
```

### Recommended Logo Specifications
- **Format:** PNG with transparent background (preferred) or JPG
- **Size:** 200-400px wide
- **Aspect Ratio:** Original logo aspect ratio (will auto-resize to fit)
- **Quality:** High resolution for crisp display on all screens

---

## 🖼️ Other Images by Page

### Home Page Images

**Hero Background** (Full-screen image behind headline)
```typescript
home: {
  heroBackground: "YOUR_IMAGE_URL_HERE",
  // Recommended size: 1920x1080px or larger
}
```

**Portal Feature Cards** (4 images in horizontal scroll section)
```typescript
home: {
  portalInstantEstimates: "YOUR_IMAGE_URL_HERE",
  portalFastPayments: "YOUR_IMAGE_URL_HERE",
  portalTeamManagement: "YOUR_IMAGE_URL_HERE",
  portalAutoCompliance: "YOUR_IMAGE_URL_HERE",
  // Recommended size: 800x600px
}
```

### Portal Page Images
```typescript
portal: {
  heroBackground: "YOUR_IMAGE_URL_HERE",
  featureEstimates: "YOUR_IMAGE_URL_HERE",
  featureInvoicing: "YOUR_IMAGE_URL_HERE",
  featureCompliance: "YOUR_IMAGE_URL_HERE",
  featureTeam: "YOUR_IMAGE_URL_HERE",
}
```

### Political Consultants Page Images
```typescript
political: {
  heroBackground: "YOUR_IMAGE_URL_HERE",
  featureEstimates: "YOUR_IMAGE_URL_HERE",
  featureCompliance: "YOUR_IMAGE_URL_HERE",
  featureBilling: "YOUR_IMAGE_URL_HERE",
}
```

### New Media & Productions Page Images
```typescript
newMedia: {
  heroBackground: "YOUR_IMAGE_URL_HERE",
  featurePayroll: "YOUR_IMAGE_URL_HERE",
  featureCompliance: "YOUR_IMAGE_URL_HERE",
  featureEstimates: "YOUR_IMAGE_URL_HERE",
}
```

### Agents & Talent Page Images
```typescript
agents: {
  heroBackground: "YOUR_IMAGE_URL_HERE",
  featurePayments: "YOUR_IMAGE_URL_HERE",
  featureContracts: "YOUR_IMAGE_URL_HERE",
  featureCompliance: "YOUR_IMAGE_URL_HERE",
}
```

### About Page Images
```typescript
about: {
  heroBackground: "YOUR_IMAGE_URL_HERE",
  timeline1986: "YOUR_IMAGE_URL_HERE",    // Company founding era
  timeline1990s: "YOUR_IMAGE_URL_HERE",   // Growth period
  timeline2020s: "YOUR_IMAGE_URL_HERE",   // Modern era/portal
}
```

### Contact Page Images
```typescript
contact: {
  heroBackground: "YOUR_IMAGE_URL_HERE",
}
```

---

## 💡 Tips for Best Results

### Image Sizes by Type

| Image Type | Recommended Size | Format |
|-----------|-----------------|--------|
| Hero backgrounds | 1920x1080px or larger | JPG |
| Feature cards | 800x600px | JPG |
| Client logos | 200-400px wide | PNG (transparent) |
| Timeline images | 600x800px | JPG |

### Image Quality Guidelines

✅ **DO:**
- Use high-resolution images (at least 1920px wide for hero images)
- Use images with good contrast and professional appearance
- Match the governmental/professional aesthetic of the site
- Use transparent PNG files for logos
- Test on different screen sizes

❌ **DON'T:**
- Use low-resolution or pixelated images
- Use images with watermarks
- Use images that don't match your brand colors (navy blue, red, white)
- Use overly busy or cluttered images

---

## 🔄 Step-by-Step Example

Let's say you want to replace the History Channel logo:

**Step 1:** Locate your History Channel logo file
- File: `history-channel-official-logo.png`

**Step 2:** Upload it to your server or image host
- URL: `https://www.talentpaymaster.com/assets/history-logo.png`

**Step 3:** Open `/config/images.ts`

**Step 4:** Find this line:
```typescript
historyChannel: "https://via.placeholder.com/300x100/1e293b/ffffff?text=HISTORY+CHANNEL",
```

**Step 5:** Replace it with:
```typescript
historyChannel: "https://www.talentpaymaster.com/assets/history-logo.png",
```

**Step 6:** Save the file

**Done!** The History Channel logo will now appear in the scrolling banner on your home page.

---

## 🐛 Troubleshooting

### Logo Not Showing Up?
1. Check that the URL is correct and accessible
2. Make sure the image file format is supported (PNG, JPG, SVG)
3. Check your browser console for errors
4. Verify the image URL works by pasting it in a browser

### Image Looks Stretched or Distorted?
- The code uses `object-contain` which preserves aspect ratio
- Logos will auto-resize to fit the container
- Use the original logo aspect ratio

### Logo Too Small or Too Large?
- Logos are set to `h-16` (64px) height by default
- You can adjust this in `/pages/Home.tsx` if needed
- Look for `className="h-16 w-auto object-contain"`

---

## 📞 Need Help?

If you need assistance:
1. Double-check the URL is publicly accessible
2. Verify image file format (PNG, JPG recommended)
3. Check that you saved the `/config/images.ts` file
4. Clear your browser cache and refresh

---

## ✨ Pro Tips

**For the Best Logo Banner:**
- Use PNG files with transparent backgrounds for all logos
- Keep logos roughly the same height (64-80px works well)
- Use high-quality official logo files from each brand
- Consider requesting logos directly from your client contacts

**Image Optimization:**
- Compress images before uploading (use tools like TinyPNG)
- Use modern formats (WebP) for better performance
- Keep file sizes under 500KB when possible
- Use a CDN for faster loading

---

**Last Updated:** January 2024
**Version:** 1.0
