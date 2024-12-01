# Recipes App 🍴

A web application to explore, save, and manage recipes, built with **Next.js**, **TypeScript**, and **NextAuth** for authentication. The app supports GitHub OAuth for user authentication and ensures protected routes for logged-in users.

## Features ✨

- 🥗 Browse a collection of recipes.
- ❤️ Save your favorite recipes.
- 🔒 Protected routes for `/favorites` and individual recipe pages.
- 📱 Fully responsive design with a mobile menu.
- 🔑 GitHub OAuth authentication with NextAuth.

## Tech Stack 🛠️

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Authentication**: [NextAuth](https://next-auth.js.org/) with GitHub as the provider.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)

## Setup and Installation ⚙️

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/anelsahovic/recipes.git
cd recipes
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

```env
NEXTAUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID=<your-github-client-id>
GITHUB_CLIENT_SECRET=<your-github-client-secret>

```

## Authentication 🔒

This app uses NextAuth with GitHub as the provider. Users must log in to access /favorites and /recipe/[id].

### Protected Routes

The following routes are protected by middleware:

/favorites
/recipe/:id
If a user isn't authenticated, they are redirected to the sign-in page.

### Contributing 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.
