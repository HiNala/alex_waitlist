# whisker.pet — Deploy & Store Tie-ins

## Vercel + Domain
1. Add **whisker.pet** to your Vercel project (Settings → Domains).
2. If using Vercel DNS: add the domain and follow the automatic setup; HTTPS is automatic.
   If using external DNS: set **A/AAAA** to Vercel and **CNAME** for **www** → cname.vercel-dns.com.
3. Decide on canonical (apex). The config redirects **www → apex**.

## Email (recommended)
Create **support@whisker.pet** and **privacy@whisker.pet**. Add **SPF, DKIM, DMARC** at DNS.
Until ready, the site also shows **whisker@digitalstudiolabs.com**.

## Store Tie-ins
- **Apple App Store Connect**
  - App Privacy details (data types collected, purposes).
  - Support URL → `https://whisker.pet/support`
  - Privacy Policy URL → `https://whisker.pet/privacy`
- **Google Play Console**
  - Data Safety form (data collection/sharing, purposes).
  - Privacy Policy URL → `https://whisker.pet/privacy`

## Content Guidelines
- Avoid "24/7 vet consultations" unless fully operational. Use "access to vetted experts" and add "availability may vary; not for emergencies."
- Medical disclaimer is present site-wide and in Terms.

## SEO/QA
- Titles, meta, OG/Twitter complete.
- Sitemap at `/sitemap.xml`, robots at `/robots.txt`.
- Accessibility: keyboard focus rings, alt text, contrast.

## Update Before Store Submission
1. Replace `[UPDATE WITH LEGAL MAILING ADDRESS]` in `src/lib/site.ts` with actual mailing address.
2. Verify all email addresses are working and monitored.
3. Test all forms and ensure privacy consent is properly captured.
4. Review medical disclaimers and ensure compliance with local regulations.

## App Store Requirements Met
✅ **Privacy Policy URL**: https://whisker.pet/privacy
✅ **Terms of Service URL**: https://whisker.pet/terms  
✅ **Support URL**: https://whisker.pet/support
✅ **Contact Information**: Multiple contact methods provided
✅ **Medical Disclaimers**: Present on all relevant pages
✅ **Cookie Consent**: Cookie banner implemented
✅ **Data Rights**: Deletion and access procedures documented
✅ **Security Headers**: CSP and security headers configured
✅ **SEO**: Sitemap, robots.txt, and meta tags complete
