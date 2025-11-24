// This script adds a smooth scroll effect to the navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default "jump"

        // Smoothly scroll to the section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});```

#### File: `README.md`
This is your instruction manual. After you upload your project to GitHub, this file will be displayed on the main page of your repository.

````markdown
# My Startup Website Template

A clean, modern, and easy-to-customize static website template for startups. This project uses plain HTML, CSS, and a touch of JavaScript.

## How to Customize

Making changes is simple!

### 1. Change the Text
Open `index.html` and edit the text directly. All sections are clearly commented.

### 2. Change the Colors
Open `css/style.css`. At the very top, you will see a section called `/* --- 1. Global Styles & Color Palette --- */`. You can change the entire website's color scheme by just editing these three variables:

```css
:root {
    --primary-color: #007bff; /* Main brand color (buttons, icons, etc.) */
    --secondary-color: #343a40; /* Main text color */
    --background-color: #f8f9fa; /* Light background for sections */
}```

### 3. Change the Icons
The template uses [Font Awesome](https://fontawesome.com/icons) for icons. To change an icon:
1.  Go to the Font Awesome website and find a free icon you like.
2.  Click on the icon and copy its HTML code (e.g., `<i class="fa-solid fa-star"></i>`).
3.  In `index.html`, find the icon you want to replace (e.g., `<i class="fas fa-rocket fa-3x"></i>`) and paste the new HTML code in its place.

---

## How to Deploy to Cloudflare Pages (for FREE)

This is the best part. You can host this website for free with a super-fast global network.

**Step 1: Push Your Code to GitHub**
1.  Create a new repository on [GitHub](https://github.com).
2.  Upload the `index.html`, `README.md`, and the `css` and `js` folders to your new repository.

**Step 2: Sign Up for Cloudflare**
1.  Go to [Cloudflare](https://www.cloudflare.com/) and create a free account.
2.  In your dashboard, go to **Workers & Pages**.

**Step 3: Connect to Your GitHub Project**
1.  Click **"Create application"** and then select the **"Pages"** tab.
2.  Click **"Connect to Git"**.
3.  Authorize Cloudflare to access your GitHub account and select the repository you just created.

**Step 4: Configure the Build Settings**
1.  After selecting your repository, you'll see a "Set up builds and deployments" page.
2.  **This is the crucial step for a simple static site:** You don't need a build command.
    *   **Framework preset:** Select **`None`**.
    *   **Build command:** Leave this **BLANK**.
    *   **Build output directory:** Set this to **`/`** (the root directory).
3.  Click **"Save and Deploy"**.

**Step 5: Done!**
That's it! Cloudflare will now deploy your site. After about a minute, it will give you a unique URL (like `your-repo-name.pages.dev`) where you can see your live website.

Every time you push a new change to your GitHub repository, Cloudflare will automatically redeploy the new version of your site.