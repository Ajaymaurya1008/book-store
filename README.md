# Book Store Project Documentation

## Overview

This is a **Next.js** project bootstrapped with [create-next-app](file:///d%3A/internships/Assignments/book-store/README.md#1%2C70-1%2C70). It is a simple book store application that allows users to search for books, add them to their favorites, and manage their favorite books.

## Getting Started

### Prerequisites

Ensure you have Node.js installed. You can use npm, yarn, pnpm, or bun as your package manager.

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd book-store
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

- **app**: Contains the main application files.
  - `layout.js`: Defines the root layout including the `Navbar` and `Toaster`.
  - `page.js`: Main page for searching and displaying books.
  - `favourites/page.js`: Page for managing favorite books.
- **components**: Contains reusable components.
  - `Navbar.jsx`: Navigation bar component.
  - `BookCard.jsx`: Component to display individual book details.
- **public**: Contains static files.
- **styles**: Contains global styles.
  - `globals.css`: Global CSS file using Tailwind CSS.
- **config**: Configuration files.
  - `next.config.mjs`: Next.js configuration.
  - `postcss.config.mjs`: PostCSS configuration.
  - `tailwind.config.js`: Tailwind CSS configuration.
- **.eslintrc.json**: ESLint configuration.
- **.prettierrc**: Prettier configuration.

## Scripts

Defined in `package.json`:

```5:9:package.json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
```

## Dependencies

Key dependencies include:

- `next`: Next.js framework.
- `react` and `react-dom`: React library.
- `axios`: For making HTTP requests.
- `react-hot-toast`: For notifications.
- `react-icons`: For icons.

## Environment Variables

Create a `.env.local` file to store environment variables.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## License

This project is licensed under the MIT License.
