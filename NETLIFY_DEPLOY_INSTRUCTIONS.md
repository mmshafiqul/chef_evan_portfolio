# Deploying Chef Evan Website to Netlify

Follow these steps to deploy your Chef Evan website to Netlify:

## Option 1: Deploy via Netlify Drop (Easiest)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the entire `dist` folder from your project
3. Wait for the upload to complete
4. Your site will be live with a temporary URL (e.g., random-name-123456.netlify.app)
5. You can customize the URL or add your own domain in the Netlify dashboard

## Option 2: Deploy via Netlify Dashboard

1. Go to [Netlify](https://app.netlify.com/) and sign up/log in
2. Click "Add new site" > "Import an existing project"
3. Connect to your Git provider (GitHub, GitLab, Bitbucket)
4. Select your repository
5. Configure the deployment settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Option 3: Deploy via Netlify CLI (Command Line)

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify login` to authenticate
3. Run `netlify deploy --prod` from your project directory
4. When prompted, specify `dist` as your publish directory

## Custom Domain Setup (Optional)

1. In the Netlify dashboard, go to your site settings
2. Click on "Domain management" > "Add custom domain"
3. Follow the instructions to set up your domain

## Troubleshooting

- If you encounter routing issues, make sure the `netlify.toml` file is properly configured
- If assets aren't loading, check that all paths in your code are relative
- For more help, visit [Netlify Support](https://www.netlify.com/support/)
