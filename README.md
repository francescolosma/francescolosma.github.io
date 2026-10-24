# francescolosma.github.io

Personal academic website, served by GitHub Pages at https://francescolosma.github.io.

Plain HTML/CSS, no build step: open `index.html` in a browser to preview. The whole site is that one page; the top menu jumps to its sections.

| To change…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Bio, email, papers, teaching, policy         | `index.html`                           |
| Menu and profile icons (LinkedIn, GitHub)    | top of `index.html`                    |
| Photo                                        | replace `images/profile.jpg` (square)  |
| CV                                           | edit it on Overleaf (see below)        |
| Colours and fonts                            | top of `styles.css`                    |

To add a paper, copy an `<article class="paper">` block in `index.html`. A commented example at the start of the Research section shows every optional line: status, abstract, links and "Presented at".

To add a section, copy a `<section>` with its `<hr>`, give it a new `id`, and add a matching `<a href="#id">` to the menu.

The CV is pulled from Overleaf, compiled and saved as `files/CV.pdf` on the 1st of every month by `.github/workflows/update-cv.yml`. To update it straight away, open the Actions tab on GitHub, pick "Update CV from Overleaf" and press "Run workflow". It needs an Overleaf Git token stored as the `OVERLEAF_TOKEN` repository secret; if the token expires or is revoked, generate a new one and run `gh secret set OVERLEAF_TOKEN`.
