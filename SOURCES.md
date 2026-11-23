# Sources

- Climate diplomacy, COP31 in Antalya, Türkiye: NPR, 22 November 2026 — https://www.npr.org/2026/11/22/nx-s1-6046195/cop31-climate-talks-close-disappointment
- Technology and education, South Korea: The Guardian, 22 November 2026 — https://www.theguardian.com/world/2026/nov/22/south-korea-education-minister-resigns-after-ai-cheating-scandal-engulfs-university-exams
- Industrial safety, Indonesia: BBC News, 22 November 2026 — https://www.bbc.co.uk/news/articles/cw8dvg5pgm0eo
- Mediterranean, Benghazi, Libya: The Guardian, 22 November 2026 — https://www.theguardian.com/world/2026/nov/22/blast-russian-ship-suspected-drone-attack-benghazi-libya

## Reproduce the PNG

With ImageMagick and Node 22 available:

```sh
convert -density 96 broadsheet.svg -resize 1024x1024! -strip -define png:compression-level=9 -define png:compression-filter=5 entry.png
```
