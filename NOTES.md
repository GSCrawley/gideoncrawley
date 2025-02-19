# Portfolio Website Update Notes

## Current Status (as of Feb 18, 2025)

### Project Structure Changes
1. Created new React components:
   - `CodeProjects.js`: For coding projects
   - `Videos.js`: For video content
   - `Blog.js`: For blog posts (replaced Papers)
   - `Presentations.js`: For talks and presentations

2. Updated App.js with new layout:
   ```jsx
   <Header />
   <About />
   <CodeProjects />
   <Videos />
   <Blog />
   <Presentations />
   <Resume />
   <Footer />
   ```

### Project Status Check
Working Projects:
- ✅ Redux Tetris (tetris-auth.web.app)
- ✅ Card for Kaleb (gscrawley.github.io/forKaleb)
- ✅ Leah & the Infinite Loop (gscrawley.github.io/Leah)
- ✅ Breakout Game (gscrawley.github.io/breakout/dist)
- ✅ Rock Star Trivia (gscrawley.github.io/visual_quiz)
- ✅ 10% Velcro (gscrawley.github.io/velcro)
- ✅ Stylin Stylesheet (gscrawley.github.io/stylin_styles)

Non-Working Projects (Need Migration):
- ❌ OmniConnx (omniconnx.herokuapp.com)
- ❌ My Open Mic (myopenmic-gsc.herokuapp.com)

## Next Steps

### 1. Content Addition
- [ ] Add blog posts to resumeData.json
- [ ] Add video content to resumeData.json
- [ ] Add presentation content to resumeData.json
- [ ] Update project thumbnails and screenshots

### 2. Styling Tasks
- [ ] Style the blog post grid layout
- [ ] Style the video section
- [ ] Style the presentations section
- [ ] Ensure responsive design for all new sections

### 3. Project Migration
- [ ] Migrate OmniConnx from Heroku to:
  - Option 1: Render.com
  - Option 2: Railway.app
  - Option 3: Fly.io
  - Option 4: Firebase
- [ ] Migrate My Open Mic from Heroku (same options as above)

### 4. Testing and Optimization
- [ ] Test all links and navigation
- [ ] Optimize images and media
- [ ] Test responsive design on different devices
- [ ] Check loading performance

### 5. Future Considerations
- Consider adding categories/filters for blog posts
- Add search functionality
- Implement dark mode
- Add RSS feed for blog posts

## File Locations

### New Components
- `/src/Components/CodeProjects.js`
- `/src/Components/Videos.js`
- `/src/Components/Blog.js`
- `/src/Components/Presentations.js`

### Data
- `/public/resumeData.json`: Contains all content data

### Example Blog Post Structure
```json
{
  "title": "Your Blog Title",
  "date": "February 18, 2024",
  "excerpt": "Brief preview of content...",
  "url": "link-to-post",
  "thumbnail": "thumbnail.jpg",
  "tags": ["tech", "web-development"]
}
```

## Notes for Next Session
- Decide on a hosting platform for the Heroku projects
- Gather content for blog posts, videos, and presentations
- Consider any design changes needed for the new sections
- Think about any additional features you'd like to add

Remember: The site is fully functional with the new structure, just needs content and styling refinements.
