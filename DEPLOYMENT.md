# Sunshine Kids Day Care Website Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Domain Setup ✅ COMPLETED
- **Domain**: www.sunshinekidsdaycare.com
- **Status**: Purchased and ready!
- **Next**: Configure DNS settings

### 2. Supabase Setup (Database & Storage)
1. Go to [supabase.com](https://supabase.com)
2. Create new project: "sunshine-kids-daycare"
3. Copy your project URL and API keys
4. Run the SQL setup script (provided in scripts folder)

### 3. Vercel Deployment
1. Push code to GitHub repository
2. Connect GitHub to Vercel
3. Deploy with environment variables
4. Connect custom domain: www.sunshinekidsdaycare.com

### 4. Environment Variables (Add to Vercel)
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://www.sunshinekidsdaycare.com
NEXT_PUBLIC_SITE_NAME=Sunshine Kids Day Care
SMTP_USER=info@sunshinekidsdaycare.com
SMTP_PASS=your-email-password
\`\`\`

### 5. DNS Configuration
Point your domain to Vercel:
\`\`\`
Type: A Record
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
\`\`\`

## 📊 Expected Costs
- **Domain**: $12-15/year ✅ PAID
- **Supabase**: $0-25/month (free tier available)
- **Vercel**: $0-20/month (free tier for small sites)
- **Total**: $12-552/year

## 🎯 Post-Deployment Checklist
- [ ] Test all forms (contact, tour scheduling)
- [ ] Upload sample photos to gallery
- [ ] Create admin account (admin@sunshinekidsdaycare.com)
- [ ] Test parent portal login
- [ ] Set up Google My Business
- [ ] Submit sitemap to Google Search Console
- [ ] Configure email forwarding (info@sunshinekidsdaycare.com)
- [ ] Update contact information with your actual details

## 📧 Professional Email Setup
Set up these email addresses:
- info@sunshinekidsdaycare.com (main contact)
- admin@sunshinekidsdaycare.com (admin access)
- director@sunshinekidsdaycare.com (director contact)

## 🔗 Important URLs
- **Website**: https://www.sunshinekidsdaycare.com
- **Admin Panel**: https://www.sunshinekidsdaycare.com/admin
- **Parent Portal**: https://www.sunshinekidsdaycare.com/parent-portal

## 📞 Support
For deployment help, contact your web developer or Vercel support.
\`\`\`

Let me update the README with your new branding:
