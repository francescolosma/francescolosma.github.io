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

Course slides live on their own page, `microeconomic-theory.html`, linked from the course title under Teaching. That page repeats the menu from `index.html`, so a change to the menu goes in both files.

The slide PDFs in `files/microeconomic-theory/` are kept in sync with Dropbox (`Class_MicroxDevelopment/Tutorials`) by a background task on Francesco's Mac, which runs every 15 minutes:

- To publish a deck, copy a line in the Slides section of `microeconomic-theory.html`, set the file name to the deck's PDF name in Dropbox (e.g. `PS2_Tutorial.pdf`), and push. The task copies the PDF in and re-uploads it whenever it changes. Decks the page doesn't link to are never published.
- The task is `~/Library/Application Support/website-slides-sync/sync-slides.sh`, scheduled by `~/Library/LaunchAgents/io.github.francescolosma.slides-sync.plist`; its log is `~/Library/Logs/website-slides-sync.log`. It works in its own copy of this repo, so it never touches this folder.
- To stop it: `launchctl bootout gui/$(id -u)/io.github.francescolosma.slides-sync`. To restart it: `launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/io.github.francescolosma.slides-sync.plist`.

The CV is pulled from Overleaf, compiled and saved as `files/CV.pdf` on the 1st of every month by `.github/workflows/update-cv.yml`. To update it straight away, open the Actions tab on GitHub, pick "Update CV from Overleaf" and press "Run workflow". It needs an Overleaf Git token stored as the `OVERLEAF_TOKEN` repository secret; if the token expires or is revoked, generate a new one and run `gh secret set OVERLEAF_TOKEN`.
