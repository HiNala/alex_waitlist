# WhiskerAI Waitlist Application

A Next.js application that implements an email sign-up waitlist for WhiskerAI, a pet health advisor powered by AI.

## Features

- Modern UI built with Next.js 15 and Tailwind CSS
- TypeScript for type safety
- Responsive design for all device sizes
- Waitlist email signup form with validation
- Simple API route for waitlist management

## Prerequisites

- Node.js 18.17 or later

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HiNala/alex_waitlist.git
cd alex_waitlist
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Then edit the `.env` file with your specific configuration.

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── public/              # Static files
├── src/                 # Source code
│   ├── app/             # Next.js app router pages
│   │   ├── api/         # API routes
│   │   │   └── waitlist/# Waitlist API endpoint
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   └── components/      # Reusable components
│       ├── Header.tsx   # Header component
│       └── WaitlistForm.tsx # Waitlist form component
├── .env                 # Environment variables (not committed)
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore file
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Technology Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [React Hook Form](https://react-hook-form.com/) - Form validation

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Environment Variables

The following environment variables can be configured in the `.env` file:

- `NEXT_PUBLIC_API_URL` - The base URL for API requests
- `NEXT_PUBLIC_APP_NAME` - The application name

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Project Link: [https://github.com/HiNala/alex_waitlist](https://github.com/HiNala/alex_waitlist)
