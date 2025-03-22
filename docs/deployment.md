# Deploying to Cloudflare Pages

This document explains how to deploy NObinarie to Cloudflare Pages.

## Prerequisites

- Node.js and npm installed
- Cloudflare account
- Cloudflare API token with appropriate permissions

## Environment Setup

1. Create a `.env` file in the root of your project with the following content:

```
CLOUDFLARE_API_TOKEN=your-api-token
CLOUDFLARE_ACCOUNT_ID=your-account-id
```

2. Make sure `.env` is in your `.gitignore` to prevent committing secrets.

## Building the Project

The project is built using Next.js:

```bash
npm run build
```

This creates a `.next` directory with the built application.

## Deploying to Cloudflare Pages

### First-time Setup

1. Create a new Cloudflare Pages project:

```bash
export $(cat .env) && npx wrangler pages project create nobinarie --production-branch=main
```

### Deployment

Deploy the built application to Cloudflare Pages:

```bash
export $(cat .env) && npx wrangler pages deploy .next --project-name=nobinarie --commit-message="Your commit message" --commit-dirty=true
```

For convenience, you can use the npm scripts:

```bash
npm run deploy:pages:full       # For preview deployments
npm run deploy:pages:full:prod  # For production deployments
```

## Configuration

The project uses a `wrangler.jsonc` configuration file, which includes:

- Project name
- Build output directory
- Environment variables
- KV namespaces (if needed)

## Accessing Your Deployed Site

After deployment, your site will be available at:

- Production: https://nobinarie.pages.dev
- Preview deployments: https://[branch-name].nobinarie.pages.dev

## Troubleshooting

If you encounter issues with the deployment:

1. Check that your API token has the correct permissions
2. Verify that the account ID is correct
3. Ensure the wrangler.jsonc file is properly formatted
4. Check the build output for any errors