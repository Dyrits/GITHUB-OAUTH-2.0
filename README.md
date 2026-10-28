# GitHub OAuth 2.0

An Express application implementing GitHub OAuth 2.0 authentication with Passport - a project from the Codecademy Full-Stack Engineer career path (User Authentication & Authorization / OAuth 2.0).

## About The Project

This project demonstrates user authentication via GitHub's OAuth 2.0 flow in a Node.js/Express app, using Passport with the passport-github2 strategy, server-side sessions and EJS views.

## Built With

- Node.js / Express
- Passport (passport-github2)
- express-session
- EJS
- dotenv

## Getting Started

### Prerequisites

- Node.js and pnpm (a pnpm-lock.yaml is included)
- A GitHub OAuth App (client ID and secret)

### Installation

```bash
pnpm install
```

Create a `.env` file with your GitHub OAuth App credentials (see app.js for the expected variable names).

### Running the app

```bash
pnpm start
```

## License

No license file is present in this repository.

## Contact

Dylan J. Gerrits - [GitHub](https://github.com/Dyrits)
