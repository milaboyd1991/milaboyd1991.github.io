# Image Rename Plan — `money/images/`

## Batch 1 — Partially completed (2026-06-07)

- **Backup made first:** full copy of `images/` saved to `images-backup-before-batch-1`.
- **Renamed successfully (3 unused `.jfif` files):**
  - `download (4).jfif` → `reference-image-01.jpg`
  - `download (5).jfif` → `reference-image-02.jpg`
  - `download (6).jfif` → `reference-image-03.jpg`
- **Skipped (9 unused comma-named ChatGPT files):** not renamed due to
  Windows `ren` mishandling commas plus AVG blocking the comma-safe fix script
  from running. These remain with their original names.
- **No live references broken.** No used images touched. No files deleted.
  PNW-Portfolio-Kit untouched.
- **Safe to revisit manually later** — the 9 files are unused and fully backed up.
  To finish them, double-click `run-batch1-fix.bat` (allow it through AVG if prompted).

---

**Status: PLAN. Batch 1 partially executed (see above). Remaining batches not started.**

Usage below is based on a full-text search of the whole site for `images/...`
references across all HTML, CSS, and JS. The `PNW-Portfolio-Kit/` mini-site uses
its own separate image names (`mila-boyd-portrait.jpg`, `project-*.jpg`,
`case-*-cover.jpg`) — none of the main site's messy files are shared with it, so
the Kit is left untouched.

## Naming rules used
lowercase · hyphens (not spaces or underscores) · no commas/parentheses ·
no UUID strings · descriptive of the image/project · correct lowercase extension ·
portfolio/UX/design keywords where it helps SEO.

`⚠` = subject unknown (couldn't open the image) — confirm the picture, then refine
the descriptor before renaming.

**"Safe to Rename Now?" key**
- **Yes – unused** = no reference anywhere; lowest risk.
- **Yes – update refs** = used; every reference is located and can be updated in the same step.
- **Backup only** = referenced *only* in `index-carousel-original-backup.html` (a backup page, not live). Rename only if you also update or retire that backup.

---

## Group 1 — Spaces + commas (highest priority, all UNUSED)
These break in URLs. None are referenced anywhere → safest possible batch.

| Current Filename | Suggested New Filename | Used On Pages | Safe to Rename Now? | Notes |
|---|---|---|---|---|
| `ChatGPT Image May 14, 2026, 09_19_10 PM.png` | `concept-art-2026-05-14-01.png` | none | Yes – unused | ⚠ verify subject |
| `ChatGPT Image May 14, 2026, 09_20_53 PM.png` | `concept-art-2026-05-14-02.png` | none | Yes – unused | ⚠ |
| `ChatGPT Image May 14, 2026, 09_22_48 PM.png` | `concept-art-2026-05-14-03.png` | none | Yes – unused | ⚠ |
| `ChatGPT Image May 14, 2026, 09_32_33 PM.png` | `concept-art-2026-05-14-04.png` | none | Yes – unused | ⚠ |
| `ChatGPT Image May 14, 2026, 09_34_32 PM.png` | `concept-art-2026-05-14-05.png` | none | Yes – unused | ⚠ |
| `ChatGPT Image May 14, 2026, 09_35_49 PM.png` | `concept-art-2026-05-14-06.png` | none | Yes – unused | ⚠ |
| `ChatGPT Image May 14, 2026, 09_35_51 PM.png` | `concept-art-2026-05-14-07.png` | none | Yes – unused | ⚠ |
| `ChatGPT Image May 14, 2026, 09_37_00 PM.png` | `concept-art-2026-05-14-08.png` | none | Yes – unused | ⚠ |
| `ChatGPT Image May 14, 2026, 09_38_15 PM.png` | `concept-art-2026-05-14-09.png` | none | Yes – unused | ⚠ |
| `download (4).jfif` | `reference-image-01.jpg` | none | Yes – unused | spaces/parens; jfif→jpg |
| `download (5).jfif` | `reference-image-02.jpg` | none | Yes – unused | jfif→jpg |
| `download (6).jfif` | `reference-image-03.jpg` | none | Yes – unused | jfif→jpg |
| `5A3C8D89-799C-4C3D-8244-4C1F4E644F90 (1).png` | `home-banner-archive.png` | `index-carousel-original-backup.html` | Backup only | UUID + space + paren |

## Group 2 — UUID / random names
| Current Filename | Suggested New Filename | Used On Pages | Safe to Rename Now? | Notes |
|---|---|---|---|---|
| `EFEA6EA6-0C02-4BB9-8109-94586C08EE96.png` | `mila-boyd-portrait.png` | `contact.html` | Yes – update refs | confirm it's the portrait |
| `48956F3B-0FAB-4AD4-856F-4203AF3F42A9.png` | `about-image-01.png` | `about.html` | Yes – update refs | ⚠ |
| `308A2742-E9CC-4120-AB68-F845EB7AAC73.png` | `about-image-02.png` | `about.html` | Yes – update refs | ⚠ |
| `BE5A4663-744B-4BE8-A861-AB9505785D43.png` | `about-image-03.png` | `about.html` | Yes – update refs | ⚠ |
| `680DB5D5-AFCE-481D-A3DC-39E186FCD861.png` | `about-image-04.png` | `about.html` | Yes – update refs | ⚠ |
| `B9C0490D-B50D-470B-8BD5-BA0D8C9E2CBC.png` | `graphic-design-asset-01.png` | `design.html` | Yes – update refs | ⚠ |
| `1C086403-5833-40D2-9674-29E17D810BD3.png` | `portfolio-asset-01.png` | `portfolio.html` | Yes – update refs | ⚠ |
| `2232A01C-F9FB-4F32-ABC7-057C56FA2437.png` | `mila-boyd-portrait-alt.png` | none (was on old homepage) | Yes – unused | ⚠ confirm before reuse |
| `d5ba13dc-71a5-457c-958a-591cbe8f7633.png` | `design-asset-01.png` | none | Yes – unused | ⚠ |
| `0271f09e-0c9e-4e79-b06d-48a652499b72.png` | `design-asset-02.png` | none | Yes – unused | ⚠ |
| `43ff5986-b0ae-46a5-a556-9f0053c3329c.png` | `design-asset-03.png` | none | Yes – unused | ⚠ |
| `5A3C8D89-799C-4C3D-8244-4C1F4E644F90.png` | `design-asset-04.png` | none | Yes – unused | ⚠ (compare with the `(1)` copy) |

## Group 3 — Long ChatGPT-export names
| Current Filename | Suggested New Filename | Used On Pages | Safe to Rename Now? | Notes |
|---|---|---|---|---|
| `ChatGPT-Image-May-14-2026-08_12_58-PM.png` | `about-banner.png` | `about.html` | Yes – update refs | ⚠ about page banner |
| `ChatGPT-Image-May-15-2026-09_53_56-AM.png` | `about-image-05.png` | `about.html` | Yes – update refs | ⚠ |
| `ChatGPT-Image-May-14-2026-08_01_51-PM.png` | `concept-art-2026-05-14-10.png` | none | Yes – unused | ⚠ |
| `ChatGPT-Image-May-14-2026-07_54_19-PM.png` | `concept-art-2026-05-14-11.png` | none | Yes – unused | ⚠ |
| `ChatGPT-Image-May-14-2026-09_01_40-PM.png` | `concept-art-2026-05-14-12.png` | none | Yes – unused | ⚠ |
| `_original_ChatGPT-Image-May-14-2026-08_01_51-PM.png` | `concept-art-2026-05-14-10-original.png` | none | Yes – unused | backup file |
| `_original_ChatGPT-Image-May-14-2026-07_54_19-PM.png` | `concept-art-2026-05-14-11-original.png` | none | Yes – unused | backup file |
| `_original_ChatGPT-Image-May-14-2026-09_01_40-PM.png` | `concept-art-2026-05-14-12-original.png` | none | Yes – unused | backup file |
| `_original_ChatGPT-Image-May-14-2026-08_12_58-PM.png` | `about-banner-original.png` | none | Yes – unused | backup of about banner |

## Group 4 — Long social-export numeric names (all used on Photography)
| Current Filename | Suggested New Filename | Used On Pages | Safe to Rename Now? | Notes |
|---|---|---|---|---|
| `square_269793243_962660714649138_3641019446905539326_n.jpg` | `photography-social-01.jpg` | `photography.html` | Yes – update refs | ⚠ |
| `square_269799278_612570923400536_8365366798394921060_n.jpg` | `photography-social-02.jpg` | `photography.html` | Yes – update refs | ⚠ |
| `square_269892647_615012259830241_2870535935789588585_n.jpg` | `photography-social-03.jpg` | `photography.html` | Yes – update refs | ⚠ |
| `square_270118511_105289735313513_7880037620117716519_n.jpg` | `photography-social-04.jpg` | `photography.html` (used twice) | Yes – update refs | ⚠ both refs |

## Group 5 — Generic camera `IMG_` names
| Current Filename | Suggested New Filename | Used On Pages | Safe to Rename Now? | Notes |
|---|---|---|---|---|
| `IMG_0118-1.png` | `portfolio-graphic-01.png` | `portfolio.html` | Yes – update refs | ⚠ |
| `IMG_1059.png` | `about-photo-01.png` | `about.html` | Yes – update refs | ⚠ |
| `square_IMG_2764.JPG` | `photography-still-02.jpg` | `photography.html` | Yes – update refs | uppercase ext |
| `square_IMG_3020.JPG` | `photography-still-03.jpg` | `photography.html` | Yes – update refs | uppercase ext |
| `square3_IMG_3873.jpeg` | `portfolio-photo-01.jpg` | `portfolio.html` | Yes – update refs | ⚠ |
| `IMG_9096.jpeg` | `home-archive-photo-01.jpg` | `index-carousel-original-backup.html` | Backup only | ⚠ |
| `IMG_9099.jpeg` | `home-archive-photo-02.jpg` | `index-carousel-original-backup.html` | Backup only | ⚠ |
| `IMG_9093.jpeg` | `home-archive-photo-03.jpg` | `index-carousel-original-backup.html` | Backup only | ⚠ |
| `IMG_9118.jpeg` | `home-archive-photo-04.jpg` | `index-carousel-original-backup.html` | Backup only | ⚠ |
| `IMG_9116.jpeg` | `home-archive-photo-05.jpg` | `index-carousel-original-backup.html` | Backup only | ⚠ |
| `IMG_9097.jpeg` | `photo-unused-01.jpg` | none | Yes – unused | ⚠ |
| `IMG_9098.jpeg` | `photo-unused-02.jpg` | none | Yes – unused | ⚠ |
| `IMG_9112.jpeg` | `photo-unused-03.jpg` | none | Yes – unused | ⚠ |

## Group 6 — Underscore / mixed-case / unclear descriptive names
Mostly lowercase already, but underscores + uppercase extensions + vague words.
Lower priority; all but `fixed_1.jpg` are in use.

| Current Filename | Suggested New Filename | Used On Pages | Safe to Rename Now? | Notes |
|---|---|---|---|---|
| `carousel_DSC01225.JPG` | `photography-still-01.jpg` | `index.html` | Yes – update refs | uppercase ext; homepage |
| `logob.png` | `logo-mila-boyd.png` | `css/portfolio.css` | Yes – update refs | **CSS** `.navbar-brand` — update CSS, affects every page |
| `logohair.png` | `logo-hair.png` | `design.html` | Yes – update refs | ⚠ |
| `drew1-1.jpg` | `graphic-design-drew-01.jpg` | `index.html`, `design.html`, `graphic_design.html`, `portfolio.html` | Yes – update refs | used on 4 pages |
| `drew1-2.jpg` | `graphic-design-drew-02.jpg` | `design.html`, `graphic_design.html`, `portfolio.html` | Yes – update refs | used on 3 pages |
| `resized_Dispersion_Art_3_mila.png` | `dispersion-art-mila.png` | `design.html`, `photography.html` | Yes – update refs | |
| `resized_Flag_good_blue_Mila_Boyd.jpg` | `flag-blue-mila-boyd.jpg` | `photography.html` | Yes – update refs | |
| `resized_white_rose_mila_boyd.jpg` | `white-rose-mila-boyd.jpg` | `photography.html` | Yes – update refs | |
| `resized_pinkflower.jpg` | `pink-flower.jpg` | `portfolio.html` | Yes – update refs | |
| `resized_pinktree.jpg` | `pink-tree.jpg` | `photography.html` | Yes – update refs | |
| `resized_army.jpg` | `photography-army.jpg` | `photography.html` | Yes – update refs | ⚠ |
| `resized_camradino.jpg` | `camradino.jpg` | `photography.html` | Yes – update refs | ⚠ |
| `square_Mila_APPLE.jpg` | `mila-apple-still-life.jpg` | `photography.html` | Yes – update refs | |
| `square_plante_final.jpg` | `plant-still-life.jpg` | `photography.html` | Yes – update refs | ⚠ |
| `square_Mila_Boyd_line_gym_jpg.jpg` | `mila-boyd-line-gym.jpg` | `photography.html` | Yes – update refs | drops stray `_jpg` in name |
| `mayacake.jpg` | `maya-cake.jpg` | `portfolio.html` | Yes – update refs | |
| `fixed_1.jpg` | `photo-fixed-01.jpg` | none | Yes – unused | ⚠ |

## Bonus — messy non-image files (PDFs)
Not images, but messy. Listed for completeness; verify references before renaming.

| Current Filename | Suggested New Filename | Used On Pages | Safe to Rename Now? | Notes |
|---|---|---|---|---|
| `creativebrife.pdf` | `creative-brief.pdf` | (search separately) | Check refs first | fixes typo "brife" |
| `app.pdf` | `pnw-app.pdf` | (search separately) | Check refs first | generic name |

## Needs separate repair — missing referenced files (NOT part of any rename batch)
These filenames are referenced in the HTML but do **not** exist in the `images/`
folder, so those pages are likely already showing broken images. Do **not** fold
these into the rename batches — they are a separate repair task. No replacement is
guessed here; the correct source file needs to be located or re-exported first.

| Missing file | Referenced on | Status | Suggested action |
|---|---|---|---|
| `bridge5_thumb.png` | `bridge5.html` | Needs separate repair | Locate/re-export the intended Bridge 5 thumbnail, or update the reference to an existing image. |
| `facelogo.png` | `growth-case-study.html` | Needs separate repair | Locate the intended logo file, or update the reference. |
| `web.PNG` | `growth-case-study.html` | Needs separate repair | Locate the intended screenshot, or update the reference (note the uppercase `.PNG`). |

`.claude/settings.local.json` mentions `mila-portrait.jpg`/`banner.png` — that's a
Claude settings file, not a web page; ignore it.

---

## Safety procedure (do not skip; nothing is renamed until you say go)
1. **Back up** `money\images` → `money\images_backup_2026-06-07` (or zip). Confirm it opens.
2. **Find references** for each file before touching it (already captured above; re-run to be sure):
   ```powershell
   Select-String -Path .\*.html, .\css\*.css -Pattern "OLD_FILENAME" -SimpleMatch
   ```
3. **Rename** one file (or one small batch).
4. **Update every reference** listed in "Used On Pages" in the same step.
5. **Test** each affected page in Dreamweaver Live View (no broken-image icons; check mobile).
6. **Delete old files only** after the whole site re-tests clean. Keep the backup until then.

---

## Summary

- **Messy image filenames found: 60** (excludes the already-clean `pnw_*`, `plate_*`, `banner.png`).
  Breakdown: 9 spaces+commas · 3 `download(n).jfif` · 12 UUID/random · 9 long ChatGPT-exports (incl. 4 `_original_` backups) · 4 long social-numeric · 13 generic `IMG_*` · 17 underscore/mixed-case/unclear. (Plus 2 messy PDFs, listed separately.)

- **Actively used on the live site (~31):** the Photography page is the heaviest user (all `resized_*`, `square_*`, social-numeric, and two stills); About uses 7 (four UUIDs, `IMG_1059.png`, and two ChatGPT exports incl. its banner); Contact uses the portrait `EFEA6EA6…png`; Design/Graphic/Portfolio/Index share `drew1-1/2.jpg`; `logob.png` is used by the CSS on every page.

- **Appear unused (~24):** all 9 space+comma ChatGPT files, all 3 `download(n).jfif`, 3 hyphen ChatGPT + 4 `_original_` backups, 5 UUID files (incl. the old portrait `2232A01C…` and base `5A3C8D89…`), and `IMG_9097/9098/9112.jpeg`, `fixed_1.jpg`.

- **Backup-only (~6):** `5A3C8D89… (1).png` and `IMG_9093/9096/9099/9116/9118.jpeg` are referenced only by `index-carousel-original-backup.html`.

### Recommended first batch (lowest risk)
**Batch 1 — the unused space/comma/jfif files (Group 1, minus the backup row).** Zero
references, so renaming can't break a live page — only the file names change. This
is the safest place to start and immediately removes the URL-breaking spaces and commas.

Then **Batch 2:** the other unused files (unused UUIDs + unused ChatGPT exports + `IMG_9097/9098/9112` + `fixed_1.jpg`).
Then **Batch 3 (used, one page at a time):** Photography set, then About set, then `drew1-*`, and finally `logob.png` (because it lives in the CSS and touches every page — do it last and test thoroughly).

> Say the word and I'll execute Batch 1 first — back up, rename, and verify — then pause for your OK before each next batch.
