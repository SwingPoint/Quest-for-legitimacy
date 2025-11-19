# 📧 Email Notification Setup Guide

This guide will help you set up automatic email notifications for property listings generated through Brenda's Listings Page.

---

## ✅ What This Does

When Brenda (or anyone) fills out the property listing form and clicks "Generate WordPress JSON", an email will automatically be sent to your specified email address containing:

1. **PHP Code** - For Code Snippets plugin
2. **CSS Styles** - For Additional CSS
3. **JSON Data** - For the custom field

All in one email! 📦

---

## 🔧 Setup Instructions

### Step 1: Get a Resend API Key (FREE)

1. Go to https://resend.com
2. Click **"Sign Up"** (it's free for 100 emails/day)
3. Verify your email
4. Go to **"API Keys"** in the dashboard
5. Click **"Create API Key"**
6. Copy the API key (starts with `re_...`)

---

### Step 2: Add API Key to Your Project

#### **Option A: On Vercel (Recommended for Production)**

1. Go to your **Vercel Dashboard**
2. Select your **"brenda-listings"** project
3. Click **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_your_actual_api_key_here`
5. Click **Save**
6. **Redeploy** your site (Vercel will do this automatically)

#### **Option B: For Local Development**

1. In your project folder, create a file named `.env.local`
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
3. Save the file
4. Restart your dev server (`npm run dev`)

---

### Step 3: Verify Email Domain (Optional but Recommended)

By default, emails will come from `onboarding@resend.dev`. To use your own domain:

1. Go to **Resend Dashboard** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `brenda-listings.com`)
4. Add the DNS records Resend provides
5. Wait for verification (usually a few minutes)

Then update the email sender in `app/api/send-listing-email/route.ts`:

```typescript
from: 'Brenda Listings <notifications@yourdomain.com>',
```

---

## 🎯 How to Use

### For You (The Admin):

1. Your email is pre-configured (you'll set this up)
2. When anyone generates a WordPress listing, you get an email automatically
3. Email contains all 3 files ready to copy-paste into WordPress

### For Brenda (The User):

1. Share the form URL with Brenda: `https://your-site.vercel.app/brenda-listings`
2. Brenda fills out the form
3. Brenda enters YOUR email in the "Email Notification" field
4. Brenda clicks "Generate WordPress JSON"
5. You receive the email with all the code! ✅

---

## 🔒 Security Notes

- ✅ The API key is stored securely in environment variables
- ✅ It's never exposed in the frontend code
- ✅ Emails are sent server-side only
- ✅ The `.env.local` file is ignored by Git (won't be committed)

---

## 📊 Email Limits

**Resend Free Tier:**
- ✅ 100 emails per day
- ✅ 1 email per second rate limit
- ✅ Perfect for this use case!

If you need more, paid plans start at $20/month for 50,000 emails.

---

## 🎨 Customizing the Email

To customize the email template, edit:
`app/api/send-listing-email/route.ts`

You can change:
- Email subject line
- HTML styling
- Sender name
- Email content

---

## 🐛 Troubleshooting

### "Failed to send email"

**Check:**
1. ✅ Is `RESEND_API_KEY` set in Vercel environment variables?
2. ✅ Did you redeploy after adding the key?
3. ✅ Is the email address valid?
4. ✅ Check Resend dashboard for error logs

### "Email not received"

**Check:**
1. ✅ Spam folder
2. ✅ Email address spelling
3. ✅ Resend dashboard → "Logs" to see if it was sent
4. ✅ Domain verification if using custom domain

---

## ✨ Features

The email includes:
- ✅ Property title and slug
- ✅ Step-by-step installation instructions
- ✅ All 3 code blocks (PHP, CSS, JSON) in the email body
- ✅ Color-coded sections for easy identification
- ✅ Copy-paste ready code
- ✅ Professional HTML formatting

---

## 📞 Support

If you run into issues:
1. Check Resend dashboard logs
2. Check Vercel function logs
3. Verify API key is correct
4. Make sure environment variable is set

---

**You're all set!** 🎉

Now when anyone generates a property listing, you'll get an email with everything you need to create the WordPress page.

