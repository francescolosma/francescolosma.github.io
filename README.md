# francescolosma.github.io

Personal academic website, served by GitHub Pages at https://francescolosma.github.io.

Plain HTML/CSS, no build step: open `index.html` in a browser to preview.

| To change…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Name, email, address, social links, banner   | settings block at the top of `site.js` |
| Photo                                        | add `images/profile.jpg`               |
| CV                                           | edit it on Overleaf (see below)        |
| Bio and education                            | `index.html`                           |
| Papers                                       | `research.html`                        |
| Notes                                        | `notes.html`                           |
| Colours and fonts                            | top of `styles.css`                    |

Text highlighted in yellow (`<span class="todo">`) is placeholder text still to be filled in.

To add a new page: copy `notes.html`, change `data-page="notes"` on `<body>`, and add it to `pages` in `site.js`.

The CV is pulled from Overleaf, compiled and saved as `files/CV.pdf` on the 1st of every month by `.github/workflows/update-cv.yml`. To update it straight away, open the Actions tab on GitHub, pick "Update CV from Overleaf" and press "Run workflow". It needs an Overleaf Git token stored as the `OVERLEAF_TOKEN` repository secret; if the token expires or is revoked, generate a new one and run `gh secret set OVERLEAF_TOKEN`.
