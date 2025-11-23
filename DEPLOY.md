# 🚀 Deployment Guide: Vercel

This guide will help you deploy your personal website to **Vercel**, the best platform for Next.js applications.

## Prerequisites

1.  **GitHub Account**: [Sign up here](https://github.com/join) if you don't have one.
2.  **Vercel Account**: [Sign up here](https://vercel.com/signup) (Login with GitHub is recommended).
3.  **Git Installed**: Ensure Git is installed on your machine.

---

## Step 1: Push Your Code to GitHub

First, we need to upload your local code to a GitHub repository.

1.  **Initialize Git** (if not already done):
    Open your terminal in the project folder (`/Users/limingyang/.gemini/antigravity/playground/electric-ring/personal-site`) and run:
    ```bash
    git init
    ```

2.  **Create a .gitignore file**:
    Ensure you have a `.gitignore` file to exclude unnecessary files (like `node_modules`). One should already exist, but if not, create it with:
    ```bash
    echo "node_modules" >> .gitignore
    echo ".next" >> .gitignore
    echo ".env.local" >> .gitignore
    ```

3.  **Commit Your Changes**:
    ```bash
    git add .
    git commit -m "Initial commit: Personal Website V1"
    ```

4.  **Create a New Repository on GitHub**:
    *   Go to [GitHub.com/new](https://github.com/new).
    *   Name it (e.g., `my-personal-site`).
    *   **Do not** initialize with README, .gitignore, or License (since we have them locally).
    *   Click **Create repository**.

5.  **Push to GitHub**:
    Copy the commands under "…or push an existing repository from the command line" and run them. They will look like this:
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/my-personal-site.git
    git push -u origin main
    ```

---

## Step 2: Deploy on Vercel

Now that your code is on GitHub, Vercel can deploy it.

1.  **Go to Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  **Import Git Repository**:
    *   You should see your `my-personal-site` repository in the list.
    *   Click **Import**.
4.  **Configure Project**:
    *   **Framework Preset**: It should automatically detect **Next.js**.
    *   **Root Directory**: `./` (Default is fine).
    *   **Environment Variables**: If you used any API keys (like OpenAI), add them here. (Currently, your site is static/client-side, so you might not need any).
5.  Click **Deploy**.

---

## Step 3: Success! 🎉

*   Vercel will build your project (usually takes ~1 minute).
*   Once done, you will get a **Production URL** (e.g., `https://my-personal-site.vercel.app`).
*   **Automatic Updates**: Every time you `git push` changes to GitHub, Vercel will automatically re-deploy your site!

---

## Troubleshooting

*   **Build Failed?** Check the "Logs" tab in Vercel. Common issues are type errors or missing dependencies.
*   **Custom Domain?** You can add your own domain (e.g., `mingyang.li`) in the Vercel Project Settings > Domains.
