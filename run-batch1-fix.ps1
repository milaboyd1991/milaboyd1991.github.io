# Batch 1 fix - rename the 9 comma-named ChatGPT files (PowerShell handles commas)
$img = 'C:\Users\Mila\Desktop\money\images'
$pairs = @(
  @('ChatGPT Image May 14, 2026, 09_19_10 PM.png','concept-art-2026-05-14-01.png'),
  @('ChatGPT Image May 14, 2026, 09_20_53 PM.png','concept-art-2026-05-14-02.png'),
  @('ChatGPT Image May 14, 2026, 09_22_48 PM.png','concept-art-2026-05-14-03.png'),
  @('ChatGPT Image May 14, 2026, 09_32_33 PM.png','concept-art-2026-05-14-04.png'),
  @('ChatGPT Image May 14, 2026, 09_34_32 PM.png','concept-art-2026-05-14-05.png'),
  @('ChatGPT Image May 14, 2026, 09_35_49 PM.png','concept-art-2026-05-14-06.png'),
  @('ChatGPT Image May 14, 2026, 09_35_51 PM.png','concept-art-2026-05-14-07.png'),
  @('ChatGPT Image May 14, 2026, 09_37_00 PM.png','concept-art-2026-05-14-08.png'),
  @('ChatGPT Image May 14, 2026, 09_38_15 PM.png','concept-art-2026-05-14-09.png')
)
foreach ($p in $pairs) {
  $src = Join-Path $img $p[0]
  $dst = Join-Path $img $p[1]
  if ((Test-Path -LiteralPath $src) -and -not (Test-Path -LiteralPath $dst)) {
    Rename-Item -LiteralPath $src -NewName $p[1]
    Write-Output ("Renamed: " + $p[0] + " -> " + $p[1])
  }
}
Write-Output "Batch 1 fix complete."
