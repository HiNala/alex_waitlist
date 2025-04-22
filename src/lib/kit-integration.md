# Kit Email Integration Guide

This guide explains how to use the Kit email collection integration in the Whisker Waitlist project.

## Setup

The Kit integration requires two main scripts:

1. The Kit core script: `https://f.convertkit.com/ckjs/ck.5.js`
2. The form-specific script: `https://whiskerai.kit.com/0f72656b6b/index.js`

These scripts are already included in the application's layout file (`src/app/layout.tsx`).

## Integration Methods

The project implements three main ways to use Kit:

### 1. Using the KitWaitlistForm Component

The `KitWaitlistForm` component provides a full-featured email collection form styled consistently with the Whisker design system:

```tsx
import KitWaitlistForm from '@/components/KitWaitlistForm';

// In your component or page:
<KitWaitlistForm 
  title="Join Our Waitlist" 
  subtitle="Early access gets 3 months premium free" 
  buttonText="Join The Waitlist"
/>
```

### 2. Direct Form Integration

You can embed a Kit form directly in your components/pages with the following markup:

```tsx
<form 
  action="https://app.kit.com/forms/7916923/subscriptions" 
  className="seva-form formkit-form" 
  method="post" 
  data-sv-form="7916923" 
  data-uid="0f72656b6b" 
  data-format="inline" 
  data-version="5"
>
  <div data-style="clean">
    <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
    <div data-element="fields" data-stacked="true" className="seva-fields formkit-fields">
      <div className="formkit-field">
        <input 
          className="formkit-input" 
          name="email_address" 
          aria-label="Email" 
          placeholder="Your email address" 
          required 
          type="email"
        />
      </div>
      <button data-element="submit" className="formkit-submit formkit-submit">
        <div className="formkit-spinner">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span>Subscribe</span>
      </button>
    </div>
  </div>
</form>
```

### 3. Using the Script Tag Directly

You can also use the Kit script tag directly, which will render a Kit form wherever it's placed:

```tsx
import Script from 'next/script';

<Script 
  async 
  data-uid="0f72656b6b" 
  src="https://whiskerai.kit.com/0f72656b6b/index.js"
  strategy="lazyOnload"
/>
```

## Tag Support

The Kit forms include support for tagging subscribers based on their pet type:

| Pet Type | Tag Value |
|----------|-----------|
| Dog      | 7440990   |
| Cat      | 7440991   |
| Both     | 7440992   |
| Future Pet Parent | 7440994 |

## Styling Guide

Kit forms can be fully customized with your own CSS classes. The key classes to know:

- `.formkit-form` - The main form container
- `.formkit-field` - Field container
- `.formkit-input` - Input elements
- `.formkit-select` - Select elements
- `.formkit-submit` - Submit button
- `.formkit-spinner` - Loading spinner element

## Testing

You can test the Kit integration by visiting the `/test-kit` page, which demonstrates all three integration methods.

## Troubleshooting

If you encounter issues with the Kit integration:

1. Check the browser console for any JavaScript errors
2. Verify that both Kit scripts are loading properly
3. Ensure the form's action URL is pointing to the correct Kit endpoint

## Additional Resources

- [Kit Documentation](https://kit.com/help)
- [API Documentation](https://kit.com/developers)
- Form ID: 7916923
- Form UID: 0f72656b6b 