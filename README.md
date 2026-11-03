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

## Dependency and session verification

The November 3, 2026 update uses Passport 0.7 and its required asynchronous logout callback. With Node.js 26 LTS and pnpm 7.33.7 (compatible with the existing lockfile format), run `pnpm install --frozen-lockfile` and `pnpm test`. The integration test replaces only the GitHub strategy's external authentication step with a dummy profile. It starts the real Express app locally and checks the account guard, session login, account rendering, logout, and rejection of the previous session cookie after logout. It does not use real OAuth credentials or contact GitHub.

The local pnpm audit fell from two moderate findings to one moderate minimatch finding, with no new advisory IDs. Real GitHub authorization, consent, token exchange, and a deployed environment were not tested. The hard-coded demo session secret, in-memory session store, localhost callback, broad `user` scope, and GET logout route remain learning-project limitations; this app is not production-ready. No deployment or credential change was performed.
