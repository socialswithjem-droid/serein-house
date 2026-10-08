# Publish Serein House yourself

## 1. Put the project in GitHub

1. Extract `serein-house-github.zip` on your computer.
2. Visit https://github.com/new and create a repository named `serein-house`. Public is suitable for a visible portfolio; private is also supported by Cloudflare.
3. In the empty repository, click **uploading an existing file**. (If it has a README, choose **Add file → Upload files**.)
4. Open the extracted folder and drag its contents into GitHub. Upload the files and folders inside it, not the ZIP or the enclosing folder.
5. Choose **Commit changes**. At the repository top level you should see `package.json`, `package-lock.json`, `next.config.ts`, `src`, and `public`.

This archive excludes dependencies and generated build output. Do not upload `node_modules` or `.next` from a working development folder.

## 2. Connect Cloudflare Pages

1. Sign into https://dash.cloudflare.com.
2. Go to **Workers & Pages → Create application → Pages → Import an existing Git repository**.
3. Connect GitHub, grant access to your `serein-house` repository, select it, and choose **Begin setup**.
4. Enter these build settings:

| Setting | Value |
|---|---|
| Project name | `serein-house` (or another available name) |
| Production branch | `main` |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | Leave blank when `package.json` is at the repository top level |

5. Select **Save and Deploy**. Cloudflare installs dependencies and builds the website.
6. Open the assigned `pages.dev` address after the deployment succeeds. Test Shop, a product page, the cart, and a journal article. Refresh a product URL to confirm direct navigation works.

The project already enables `output: 'export'`. No payment keys, Shopify credentials, or environment variables are needed. If you accidentally upload the enclosing folder, set Root directory to that folder name, or move its contents to the repository root.

Future commits to the connected production branch trigger new deployments. Add your domain later through the project's Custom domains settings.

Official references:
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
