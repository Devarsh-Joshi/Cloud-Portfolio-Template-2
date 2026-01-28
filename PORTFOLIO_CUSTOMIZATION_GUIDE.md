# Portfolio Website Customization Guide

Welcome! This guide will help you customize your portfolio website. You can easily modify colors, links, images, and content to match your personal brand.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Changing Colors](#changing-colors)
3. [Updating Links](#updating-links)
4. [Changing Images](#changing-images)
5. [Editing Portfolio Content](#editing-portfolio-content)
6. [Running the Project](#running-the-project)

---

## Quick Start

The portfolio is built with **React + TypeScript** and styled with **Tailwind CSS**. No complex setup required!

### Project Structure
```
client/src/
├── components/        # All page sections
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── TechStack.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── pages/
│   └── Home.tsx       # Main page layout
├── assets/            # Images go here
├── index.css          # Global colors & styles
└── App.tsx           # App setup
```

---

## Changing Colors

### Step 1: Locate the Color Configuration
Open [client/src/index.css](client/src/index.css) to find the theme colors defined in the `@theme inline` block.

### Step 2: Identify Available Colors
The portfolio uses these color variables:

| Color Variable | Current Value | Used For |
|---|---|---|
| `--color-primary` | Cyan (HSL 180 100% 50%) | Main accent, buttons |
| `--color-accent` | Electric Purple (HSL 260 100% 65%) | Secondary highlights |
| `--color-background` | Deep blue (HSL 222 47% 11%) | Page background |
| `--color-foreground` | Off-white (HSL 210 40% 98%) | Text |
| `--color-card` | Semi-transparent blue | Card backgrounds |
| `--color-secondary` | Dark slate (HSL 217.2 32.6% 17.5%) | Buttons, inputs |
| `--color-muted` | Dim gray | Inactive text |
| `--color-border` | Dark slate | Borders, dividers |
| `--color-destructive` | Red (HSL 0 62.8% 30.6%) | Error states |

### Step 3: Change Colors
Edit the HSL values in `index.css`. For example:

**Before:**
```css
--color-primary: hsl(180 100% 50%); /* Cyan Neon */
```

**After (to make it green):**
```css
--color-primary: hsl(120 100% 50%); /* Green Neon */
```

### Understanding HSL Format
- **Hue** (0-360°): The color type
  - 0° = Red, 120° = Green, 180° = Cyan, 240° = Blue, 300° = Magenta
- **Saturation** (0-100%): How vivid the color is
  - 0% = Gray, 100% = Full color
- **Lightness** (0-100%): How bright the color is
  - 0% = Black, 50% = Normal, 100% = White

### Popular Color Palettes (HSL Values)

**Tech Blue Theme** (Already applied)
- Primary: `hsl(180 100% 50%)` - Cyan
- Accent: `hsl(260 100% 65%)` - Purple
- Background: `hsl(222 47% 11%)` - Dark Blue

**Modern Green Theme**
- Primary: `hsl(120 70% 45%)` - Green
- Accent: `hsl(200 80% 50%)` - Light Blue
- Background: `hsl(220 20% 10%)` - Dark Gray

**Professional Orange Theme**
- Primary: `hsl(25 90% 50%)` - Orange
- Accent: `hsl(280 70% 55%)` - Purple
- Background: `hsl(225 15% 12%)` - Almost Black

### Step 4: Gradient Customization
The portfolio features gradient text and backgrounds. To customize:

**Text Gradient** (in `index.css`):
```css
.text-gradient {
  @apply bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500;
}
```
Change `cyan-400` and `purple-500` to your color choices.

**Background Gradient** (in `index.css`):
```css
body {
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(76, 29, 149, 0.15), transparent 25%), 
    radial-gradient(circle at 85% 30%, rgba(6, 182, 212, 0.15), transparent 25%);
}
```
The `rgba()` values control the gradient colors and transparency.

---

## Updating Links

### Step 1: Navigation Links
Edit [client/src/components/Navigation.tsx](client/src/components/Navigation.tsx) to change navigation menu links:

```tsx
<nav className="flex gap-8">
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#experience">Experience</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>
```

### Step 2: Social Media Links
In [client/src/components/Contact.tsx](client/src/components/Contact.tsx), find the social links section:

```tsx
<div className="flex gap-4">
  <a href="https://github.com/yourprofile" target="_blank">
    <GitHub className="w-6 h-6" />
  </a>
  <a href="https://linkedin.com/in/yourprofile" target="_blank">
    <Linkedin className="w-6 h-6" />
  </a>
  <a href="https://twitter.com/yourprofile" target="_blank">
    <Twitter className="w-6 h-6" />
  </a>
</div>
```

Replace URLs with your actual profiles:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourname`
- Twitter/X: `https://twitter.com/yourhandle`
- Email: `mailto:your.email@example.com`

### Step 3: External Links
Search for `href="#"` in component files and replace with actual links:

```tsx
// Before
<a href="#">View Project</a>

// After
<a href="https://github.com/yourrepo">View Project</a>
```

### Step 4: Footer Links
Edit the footer in [client/src/pages/Home.tsx](client/src/pages/Home.tsx):

```tsx
<div className="flex gap-6">
  <a href="#privacy">Privacy</a>
  <a href="#terms">Terms</a>
</div>
```

Replace with your actual policy pages or leave empty (`href="#"`).

---

## Changing Images

### Step 1: Prepare Your Images
1. Place your images in [client/src/assets/](client/src/assets/)
2. Recommended formats: PNG, JPG, or WebP
3. Optimize images for web (reduce file size):
   - Hero image: 1200×800px
   - Project screenshots: 800×600px
   - Profile picture: 300×300px

### Step 2: Update Hero Section Image
Edit [client/src/components/Hero.tsx](client/src/components/Hero.tsx):

```tsx
import heroCloud from "../assets/hero-cloud.png";

// Later in the component:
<img src={heroCloud} alt="Cloud architecture" className="w-full" />
```

To change the image:
1. Copy your image to `client/src/assets/`
2. Update the import path:
   ```tsx
   import myImage from "../assets/my-image.png";
   ```
3. Replace the old variable name with your new one

### Step 3: Update Project Images
Edit [client/src/components/Projects.tsx](client/src/components/Projects.tsx):

```tsx
// Add your project image imports at the top:
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

// In the projects array, update image references:
const projects = [
  {
    title: "Project Name",
    image: project1,
    description: "...",
    // ...
  }
];
```

### Step 4: Add a Profile Picture
1. Add your profile picture to `client/src/assets/profile.png`
2. Import it in the appropriate component:
   ```tsx
   import profilePic from "../assets/profile.png";
   ```
3. Use it in an Avatar component:
   ```tsx
   import { Avatar, AvatarImage } from "@/components/ui/avatar";
   
   <Avatar>
     <AvatarImage src={profilePic} alt="Your Name" />
   </Avatar>
   ```

### Step 5: Update Favicon
Replace the favicon:
1. Create a new image (512×512px minimum, preferably square)
2. Save as `client/public/favicon.ico` or `favicon.png`
3. Update [client/index.html](client/index.html):
   ```html
   <link rel="icon" type="image/png" href="/favicon.png" />
   ```

---

## Editing Portfolio Content

### Step 1: Update Hero Section Text
Edit [client/src/components/Hero.tsx](client/src/components/Hero.tsx):

```tsx
<h1 className="text-5xl md:text-7xl font-bold text-gradient">
  Your Name
</h1>
<p className="text-xl md:text-2xl text-muted-foreground mt-4">
  Cloud Engineer & DevOps Specialist
</p>
<p className="text-lg text-muted-foreground/80 mt-4 max-w-xl">
  Building scalable cloud infrastructure and deploying enterprise solutions.
</p>
```

Change the text to your title, subtitle, and description.

### Step 2: Update Tech Stack
Edit [client/src/components/TechStack.tsx](client/src/components/TechStack.tsx):

```tsx
const technologies = [
  { name: "AWS", icon: <Cloud /> },
  { name: "Kubernetes", icon: <Container /> },
  { name: "Docker", icon: <Package /> },
  { name: "Terraform", icon: <Settings /> },
  // Add your technologies here
];
```

### Step 3: Update Experience
Edit [client/src/components/Experience.tsx](client/src/components/Experience.tsx):

Look for the experience array:
```tsx
const experiences = [
  {
    title: "Senior Cloud Architect",
    company: "Tech Company",
    period: "2021 - Present",
    description: "Led migration of legacy systems to AWS infrastructure..."
  },
  // Update with your experience
];
```

Fields to update:
- `title`: Your job title
- `company`: Company name
- `period`: Employment dates (e.g., "2020 - Present")
- `description`: 2-3 sentence summary of your role

### Step 4: Update Projects
Edit [client/src/components/Projects.tsx](client/src/components/Projects.tsx):

```tsx
const projects = [
  {
    title: "Project Name",
    description: "What this project does...",
    technologies: ["React", "TypeScript", "AWS"],
    link: "https://github.com/your-repo",
    image: projectImage,
  },
  // Add your projects
];
```

Fields to update:
- `title`: Project name
- `description`: Brief description
- `technologies`: Tech stack used (array of strings)
- `link`: GitHub repo or live demo URL
- `image`: Reference to your project image

### Step 5: Update Contact Information
Edit [client/src/components/Contact.tsx](client/src/components/Contact.tsx):

```tsx
<h2 className="text-4xl font-bold mb-12">
  Get In Touch
</h2>
<p className="text-xl text-muted-foreground mb-8">
  Ready to discuss your next project? Reach out to me!
</p>

// Update email
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

### Step 6: Update Page Title & Meta
Edit [client/index.html](client/index.html):

```html
<title>Your Name - Cloud Engineer Portfolio</title>
<meta name="description" content="Portfolio of Your Name, Cloud Engineer specializing in AWS and DevOps">
```

Update:
- `<title>`: Page title in browser tab
- `name="description"`: SEO description shown in search results

Also edit [client/src/pages/Home.tsx](client/src/pages/Home.tsx) footer:

```tsx
<p>© 2024 Your Name. Built with React & Three.js.</p>
```

---

## Running the Project

### First Time Setup
1. Open terminal in the workspace root
2. Install dependencies:
   ```bash
   npm install
   ```

### Start Development Server
```bash
npm run dev
```

The site will open at `http://localhost:5000`

### Build for Production
```bash
npm run build
```

Output files go to `dist/` folder, ready for deployment.

### Check TypeScript Errors
```bash
npm run check
```

---

## Best Practices

### Colors
✅ **Do:**
- Keep contrast between text and background (important for readability)
- Use consistent accent colors across the site
- Test colors in both light and dark settings

❌ **Don't:**
- Use colors with low saturation on similar lightness backgrounds
- Mix too many colors (stick to 3-4 main colors)

### Images
✅ **Do:**
- Optimize images to reduce loading time
- Use descriptive alt text for accessibility
- Keep aspect ratios consistent

❌ **Don't:**
- Use images larger than 1MB
- Use placeholder images in production
- Upload images directly; always store in `assets/` folder

### Links
✅ **Do:**
- Test all links before publishing
- Use `target="_blank"` for external links
- Include descriptive link text

❌ **Don't:**
- Use `href="#"` for broken links
- Forget the protocol (`https://`)
- Include unnecessary tracking parameters

### Content
✅ **Do:**
- Keep descriptions concise (2-3 sentences per item)
- Update regularly with new projects
- Proofread for typos and grammar

❌ **Don't:**
- Overcrowd sections with too much text
- Use generic descriptions
- Include outdated information

---

## Troubleshooting

### Colors not changing?
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (`npm run dev`)
- Check that you edited `index.css` in the correct `@theme inline` block

### Images not showing?
- Verify image path is correct
- Check file format (PNG, JPG, WebP supported)
- Ensure image file exists in `client/src/assets/`
- Check browser console for error messages

### Links not working?
- Make sure URLs start with `https://` or `http://`
- Use `target="_blank"` for external links
- Test in different browsers

### Styling looks off?
- Ensure Tailwind classes are correctly spelled
- Restart dev server
- Check that CSS file was saved (Ctrl+S)

---

## Need Help?

### Common Tasks Checklist
- [ ] Changed primary color
- [ ] Updated hero section text
- [ ] Added profile picture
- [ ] Updated tech stack
- [ ] Added your experience
- [ ] Added your projects
- [ ] Updated contact information
- [ ] Changed social media links
- [ ] Updated page title
- [ ] Tested on desktop and mobile

### Development Tools
- **VS Code**: Recommended code editor
- **Browser DevTools**: Press F12 to inspect elements
- **Color Picker**: Use browser DevTools to preview color changes

---

## Next Steps

1. **Customize your brand**: Update colors to match your personal brand
2. **Add your content**: Fill in your experience and projects
3. **Test thoroughly**: Preview on mobile and desktop
4. **Deploy**: Build and host on Vercel, Netlify, or GitHub Pages

Happy customizing! 🚀
