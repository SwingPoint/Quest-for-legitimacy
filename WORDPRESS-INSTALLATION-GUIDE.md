# WordPress Property Listing Integration Guide

This guide will help you integrate the property listing JSON data from Brenda's Listings Page into your WordPress site.

## 📋 What You Have

1. **JSON Data** - Generated from the Next.js form at `/brenda-listings`
2. **WordPress Shortcode** - PHP code to render the property listing
3. **CSS Styles** - Beautiful styling matching the Next.js design

---

## 🚀 Quick Start (3 Steps)

### Step 1: Add the PHP Code

**Option A: Using Code Snippets Plugin (Recommended)**
1. Install the "Code Snippets" plugin from WordPress
2. Go to **Snippets > Add New**
3. Name it: "Property Listing Shortcode"
4. Copy all the code from `wordpress-property-listing-shortcode.php`
5. Paste it into the snippet
6. Click **Save Changes and Activate**

**Option B: Add to functions.php**
1. Go to **Appearance > Theme File Editor**
2. Click on `functions.php` in the right sidebar
3. Scroll to the bottom of the file
4. Copy all the code from `wordpress-property-listing-shortcode.php`
5. Paste it at the end
6. Click **Update File**

---

### Step 2: Add the CSS Styles

1. Go to **Appearance > Customize**
2. Click **Additional CSS**
3. Copy all the code from `wordpress-property-listing-styles.css`
4. Paste it into the CSS editor
5. Click **Publish**

---

### Step 3: Create a Property Listing Page

You have **3 ways** to add the JSON data:

#### **Method 1: Use Custom Field (Cleanest)**

1. **Create a new page** in WordPress
2. Give it a title (e.g., "Golf Course Living - Palm Valley")
3. In the page editor, scroll down to **Custom Fields** section
   - If you don't see it, click the **⋮** (three dots) in the top-right and enable "Custom Fields"
4. Click **Add New Custom Field**
   - Name: `property_listing_json`
   - Value: [paste your entire JSON here]
5. In the page content area, add this shortcode:
   ```
   [property_listing]
   ```
6. Click **Publish**

---

#### **Method 2: Add JSON Directly to Page Content**

1. **Create a new page** in WordPress
2. Switch to **Code Editor** (not Visual Editor)
3. Paste your JSON at the top of the content
4. Below the JSON, add this shortcode:
   ```
   [property_listing]
   ```
5. Click **Publish**

**Note:** The JSON will be hidden automatically and only the beautiful listing will show.

---

#### **Method 3: Pass JSON in Shortcode (For ACF or Dynamic Data)**

If you're using Advanced Custom Fields or want to pull JSON from elsewhere:

```
[property_listing field='your_custom_field_name']
```

Or pass JSON directly (useful for testing):
```
[property_listing json='{"title":"Test Property","price":500000,...}']
```

---

## 🎨 How It Works

### What the Shortcode Does:

1. **Reads the JSON** from:
   - Custom field called `property_listing_json`
   - Or from the page content
   - Or passed directly in the shortcode

2. **Parses the JSON** and extracts all property data

3. **Renders a beautiful page** with:
   - Hero image with title and price
   - Property stats (beds, baths, sqft)
   - Full address
   - Story description
   - Key features with checkmarks
   - Photo gallery
   - Points of interest
   - Agent contact card (sticky sidebar)
   - CTA buttons
   - **SEO Schema.org markup** for Google

---

## ✅ Example JSON Structure

Your JSON should look like this:

```json
{
  "title": "Golf Course Living on Palm Valley Country Club",
  "slug": "golf-course-living-on-palm-valley-country-club",
  "canonicalUrl": "https://example.com/listings/...",
  "price": 894000,
  "address": {
    "streetAddress": "76546 Begonia Lane",
    "addressLocality": "Palm Desert",
    "addressRegion": "CA",
    "postalCode": "92211",
    "addressCountry": "US"
  },
  "propertyType": "Condo",
  "beds": 3,
  "baths": 3,
  "livingAreaSqFt": 2489,
  "lotSizeSqFt": 3485,
  "yearBuilt": 1990,
  "heroPhoto": {
    "url": "https://your-image-url.com/hero.jpg",
    "alt": "Property Hero Image"
  },
  "gallery": [
    {
      "url": "https://your-image-url.com/photo1.jpg",
      "alt": "Photo 1"
    }
  ],
  "storyIntro": "Step into wide-open elegance...",
  "features": [
    "Upgraded Willow floor plan",
    "Open concept living",
    "Chef's kitchen with granite countertops"
  ],
  "neighborhoodName": "Palm Desert",
  "pointsOfInterest": [
    {
      "name": "Downtown Palm Springs",
      "minutesAway": 15
    }
  ],
  "agent": {
    "name": "Brenda Devlin",
    "phone": "555-123-4567",
    "email": "brenda@example.com",
    "jobTitle": "Real Estate Agent",
    "brokerage": {
      "name": "Windermere Homes & Estates"
    }
  },
  "cta": {
    "scheduleUrl": "/book",
    "requestReportUrl": "/report"
  },
  "coordinates": {
    "latitude": 33.7625,
    "longitude": -116.3794
  }
}
```

---

## 🔧 Customization

### Change the CTA Button URLs

In your JSON, update these fields:
```json
"cta": {
  "scheduleUrl": "/contact",
  "requestReportUrl": "/request-info"
}
```

### Change Colors

Edit the CSS file and modify these values:
```css
.btn-primary {
    background: #2563eb; /* Change this color */
}
```

### Change Fonts

Add to your CSS:
```css
.property-listing-container {
    font-family: 'Your Font', sans-serif;
}
```

---

## 📱 Features Included

✅ **Fully Responsive** - Works perfectly on mobile, tablet, desktop  
✅ **SEO Optimized** - Includes Schema.org structured data  
✅ **Fast Loading** - Lazy loading images  
✅ **Print Friendly** - Optimized for printing  
✅ **Accessible** - Follows WCAG guidelines  
✅ **Beautiful Design** - Matches your Next.js site  

---

## 🆘 Troubleshooting

### "No property listing data found"
- Make sure the custom field is named exactly `property_listing_json`
- Or make sure the JSON is in your page content
- Check that the JSON is valid at [jsonlint.com](https://jsonlint.com)

### "Error parsing JSON data"
- Validate your JSON at [jsonlint.com](https://jsonlint.com)
- Make sure there are no extra quotes or commas
- Ensure all special characters are properly escaped

### Shortcode appears as text
- Make sure you added the PHP code to functions.php or Code Snippets
- Check that the snippet is activated

### Styling looks broken
- Make sure you added the CSS to Additional CSS
- Clear your WordPress cache (if using a caching plugin)
- Try hard-refreshing the page (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🎯 Next Steps

### For Multiple Listings:

1. **Create a custom post type** called "Properties"
2. Add the JSON as a custom field for each property
3. Use the shortcode in each property post
4. Create an archive page to list all properties

### For Advanced Users:

- Integrate with **ACF (Advanced Custom Fields)**
- Create a **Gutenberg block** version
- Add **property search/filtering**
- Connect to **IDX feed**

---

## 📞 Support

If you need help:
1. Validate your JSON at [jsonlint.com](https://jsonlint.com)
2. Check WordPress error logs
3. Test with a simple property first
4. Ensure all plugins are updated

---

## 📄 Files Included

1. `wordpress-property-listing-shortcode.php` - Main PHP code
2. `wordpress-property-listing-styles.css` - Styling
3. `WORDPRESS-INSTALLATION-GUIDE.md` - This guide

---

**You're all set! 🚀 Your property listings will now display beautifully in WordPress.**

