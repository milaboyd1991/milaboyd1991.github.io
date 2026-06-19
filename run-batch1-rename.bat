@echo off
REM ===================================================================
REM  Batch 1 image rename  -  Mila Boyd portfolio
REM  1) Backs up the entire images folder first
REM  2) Renames ONLY the 12 unused Batch 1 files from IMAGE_RENAME_PLAN.md
REM  No used images touched. No logob.png. No deletions. Kit untouched.
REM ===================================================================
setlocal
cd /d "C:\Users\Mila\Desktop\money"

echo Creating backup: images-backup-before-batch-1
if not exist "images-backup-before-batch-1" (
  xcopy "images" "images-backup-before-batch-1\" /E /I /Y >nul
  echo Backup created.
) else (
  echo Backup folder already exists - skipping backup copy.
)

cd images

echo Renaming Batch 1 (unused) files...
ren "ChatGPT Image May 14, 2026, 09_19_10 PM.png" "concept-art-2026-05-14-01.png"
ren "ChatGPT Image May 14, 2026, 09_20_53 PM.png" "concept-art-2026-05-14-02.png"
ren "ChatGPT Image May 14, 2026, 09_22_48 PM.png" "concept-art-2026-05-14-03.png"
ren "ChatGPT Image May 14, 2026, 09_32_33 PM.png" "concept-art-2026-05-14-04.png"
ren "ChatGPT Image May 14, 2026, 09_34_32 PM.png" "concept-art-2026-05-14-05.png"
ren "ChatGPT Image May 14, 2026, 09_35_49 PM.png" "concept-art-2026-05-14-06.png"
ren "ChatGPT Image May 14, 2026, 09_35_51 PM.png" "concept-art-2026-05-14-07.png"
ren "ChatGPT Image May 14, 2026, 09_37_00 PM.png" "concept-art-2026-05-14-08.png"
ren "ChatGPT Image May 14, 2026, 09_38_15 PM.png" "concept-art-2026-05-14-09.png"
ren "download (4).jfif" "reference-image-01.jpg"
ren "download (5).jfif" "reference-image-02.jpg"
ren "download (6).jfif" "reference-image-03.jpg"

echo.
echo Batch 1 complete.
endlocal
