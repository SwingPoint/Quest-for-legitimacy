# Adding Images to Your Quest for Legitimacy Website

## 📸 Image Locations & Specifications

### Team Photos
**Location:** `/public/images/team/`

Add these files:
- `jamie-weiner.jpg` - Photo of Dr. Jamie Weiner (square, 800x800px recommended)
- `russ-haworth.jpg` - Photo of Russ Haworth (square, 800x800px recommended)
- `kim-schneider.jpg` - Photo of Kim Schneider-Malek (square, 800x800px recommended)

### Book Cover
**Location:** `/public/images/`

Add this file:
- `book-cover.jpg` - The Quest for Legitimacy book cover (3:4 ratio, 600x800px recommended)

### Hero/Background Images (Optional)
**Location:** `/public/images/`

Optional files you can add:
- `hero-pattern.svg` - Background pattern for hero section
- `og-image.jpg` - Social media preview image (1200x630px)

## 🎨 Design Colors

Your site now uses the original Quest for Legitimacy color scheme:

- **Primary Purple/Indigo:** Gradient from `#4f46e5` to `#6366f1` to `#8b5cf6`
- **Accent Colors:** Indigo-50 to Indigo-900 shades
- **Text:** Gray-900 for headings, Gray-700 for body text
- **Backgrounds:** White, Gray-50, and the purple gradient

## 🚀 How to Update Images

### Option 1: Via File Explorer
1. Navigate to: `C:\Users\spsjd\OneDrive\Desktop\Property Listings\public\images\`
2. Add your image files with the exact names listed above
3. Run these commands:
```bash
cd "C:\Users\spsjd\OneDrive\Desktop\Property Listings"
git add public/images/
git commit -m "Add team photos and book cover"
git push
vercel --prod --yes
```

### Option 2: Update data/team.json
After adding images to `/public/images/team/`, the images will automatically display because the paths are already configured in `data/team.json`:

```json
{
  "name": "Dr. Jamie Weiner",
  "image": "/images/team/jamie-weiner.jpg"
}
```

## 📝 Current Placeholders

The site currently shows elegant placeholders with icons where images should go. They indicate:
- Team member photos show a person icon
- Book cover shows a book icon
- All placeholders have helpful text showing what to add

## 🌐 Live Site

Visit your site at: **https://quest-for-legitimacy.vercel.app**

Changes pushed to GitHub automatically deploy within 30-60 seconds!
