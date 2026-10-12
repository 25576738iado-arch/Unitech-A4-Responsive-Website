# Unitech Online Outreach Community — ISO229 Assessment 4

## Website purpose
This multi-page demonstration website introduces online outreach programs for students aged 12–18 and their parents/carers. It presents program information and provides an enquiry form interface.

## Pages and files
- `index.html` — home page and introduction
- `programs.html` — program descriptions and comparison table
- `contact.html` — enquiry form with validation feedback
- `styles.css` — shared responsive styling, Flexbox, CSS Grid, media queries, focus styles and dark theme
- `script.js` — persistent theme switcher, client-side form validation feedback and live message character count

## JavaScript features
1. **Theme switcher:** switches between light and dark themes and saves the preference in browser localStorage.
2. **Enquiry form validation:** checks required fields and browser validity before displaying a demo success message. It also prevents past dates and updates a live message character counter.

**Important limitation:** this is a front-end demonstration. The form does not send, email, or store submissions. Do not enter real sensitive personal information.

## Accessibility and responsive design
The pages use semantic HTML landmarks, a skip link, descriptive image alternative text, labelled controls, fieldsets and legends, visible keyboard focus, accessible status messaging, and responsive CSS using Flexbox, Grid and media queries.

## How to run locally
1. Extract the project ZIP file.
2. Open `index.html` in a modern browser, or use the VS Code Live Server extension.
3. Test all three pages and the links between them.

## Testing evidence checklist
Complete these checks yourself and record the actual result/date/browser. Do not mark a test as passed until you have performed it.

| Test area | Test to perform | Actual result / evidence |
|---|---|---|
| Functional | Open Home, Programs and Contact using all navigation and footer links | Record result and screenshot |
| JavaScript | Toggle theme; refresh; confirm preference persists | Record result and screenshot |
| Form | Submit blank form; correct errors; submit valid sample values | Record result and screenshot |
| Form counter | Type and remove text; check character count updates | Record result and screenshot |
| Responsive | Test at 375px mobile, 768px tablet and 1366px desktop | Record result and screenshots |
| Browser | Repeat main checks in two modern browsers where available | List browsers and results |
| HTML/CSS | Check pages using W3C validators | Record validator links/results and fix errors |
| Accessibility | Use keyboard only and run Lighthouse/accessibility audit | Record score/issues and improvements |

## Deployment: GitHub Pages
1. Create a GitHub repository, for example `unitech-online-outreach-a4`.
2. Upload all project files to the repository root and commit the changes.
3. Open **Settings → Pages**; select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
4. Wait for GitHub Pages to publish the site. Copy the live URL and repository URL into your submission.
5. Re-test the published website and update this README with the real URLs.

## AI Use Declaration
AI assistance was used to help review and improve the website code, suggest JavaScript functionality, and prepare documentation/testing guidance. The student must review, test, understand, and adapt all generated code and describe the actual assistance used in accordance with the lecturer's requirements.

## Project Summary (draft — verify after testing)
The Unitech Online Outreach Community website is a responsive, multi-page information website intended for students aged 12–18 and their parents or carers. Its purpose is to explain outreach learning programs, help visitors compare available pathways, and provide a structured way to express interest. The website includes Home, Programs and Contact pages connected through shared navigation and footer links.

The design uses semantic HTML5, an external CSS stylesheet, Flexbox, CSS Grid, flexible sizing and media queries to support desktop, tablet and mobile layouts. Accessibility features include a skip-to-content link, labelled form controls, fieldsets and legends, descriptive image alt text, keyboard focus indicators and status feedback for form interaction.

Two main JavaScript features are included. A theme switcher lets visitors choose light or dark display and stores the preference in localStorage. The contact form checks required fields using browser validity, prevents selecting a past start date, provides a live message character count and displays a demonstration status after valid input. The form is front-end only and does not transmit or save enquiries.

Testing must cover navigation, buttons, theme persistence, form errors and successful demo validation, responsive layouts at mobile/tablet/desktop widths, two browsers where practical, HTML/CSS validation and an accessibility audit such as Lighthouse. Add the actual dates, browsers, results, screenshots and published URLs after completing these checks. Known limitations include the lack of a server-side form handler and the need to verify external image availability. Future improvements could include a secure backend form service and further usability testing. AI assistance was used for code review and documentation support; the student must verify the implementation and be prepared to explain it.
