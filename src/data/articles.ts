import type { BlogPost } from './blog';
import { posts } from './blog';

// Full article content for each blog post
export const articleContent: Record<string, string> = {

'how-to-prepare-figures-for-nature': `
## Why Figure Preparation Matters

Getting your figures right is one of the most critical steps in submitting to Nature journals. Poorly formatted figures are one of the top reasons manuscripts get sent back for revision — not because of the science, but because of technical issues.

Nature requires specific standards for resolution, sizing, fonts, and file formats. This guide walks you through every requirement so your figures pass on the first try.

## Nature Figure Requirements at a Glance

| Requirement | Specification |
|-------------|--------------|
| File Format | TIFF, EPS, or PDF |
| Resolution | 300 DPI minimum (600 DPI for line art) |
| Color Mode | RGB |
| Single Column Width | 89 mm |
| Double Column Width | 183 mm |
| Maximum Height | 247 mm |
| Font | Helvetica or Arial |
| Minimum Font Size | 5 pt |
| Panel Labels | 8 pt bold, lowercase (a, b, c) |
| Maximum File Size | 10 MB |

## Step 1: Choose the Right Dimensions

Nature uses a two-column layout. Your figure will be printed at either:

- **Single column**: 89 mm wide — use for simple graphs, single panels
- **Double column**: 183 mm wide — use for multi-panel figures, complex diagrams

Always design at the final print size. Scaling down a large figure can make text unreadable.

## Step 2: Set the Correct Resolution

- **Photographs and micrographs**: 300 DPI minimum
- **Line art** (graphs, diagrams): 600 DPI recommended
- **Combination** (photos with text overlay): 500 DPI

To check your figure's DPI: divide the pixel width by the physical width in inches. For a single-column figure at 300 DPI, you need at least 1051 pixels wide (89mm ÷ 25.4 × 300).

## Step 3: Use the Right Fonts

Nature requires **Helvetica or Arial** throughout all figures. Key rules:

- Panel labels (a, b, c): 8 pt bold, upright (not italic)
- Maximum text size: 7 pt
- Minimum text size: 5 pt
- Use sans-serif throughout
- Do not rasterize text — keep it editable

## Step 4: Format Colors Correctly

- Use **RGB** color mode (not CMYK)
- Ensure figures are colorblind-friendly
- Avoid red-green combinations when possible
- Use distinct line styles in addition to colors

## Step 5: Export in the Right Format

Nature accepts TIFF, EPS, and PDF:

- **TIFF**: Best for photographs. Use LZW compression.
- **EPS**: Best for vector graphics (graphs, diagrams).
- **PDF**: Acceptable alternative to EPS.

Do NOT submit JPEG — it uses lossy compression that degrades quality.

## Common Mistakes to Avoid

1. **Text too small** — anything below 5 pt will be rejected
2. **Wrong font** — Times New Roman is not accepted
3. **Low resolution** — screenshots are almost always too low
4. **File too large** — keep under 10 MB per figure
5. **CMYK color mode** — Nature uses RGB for digital publication

## Quick Checklist Before Submission

- [ ] Resolution ≥ 300 DPI (600 for line art)
- [ ] Width matches column size (89 mm or 183 mm)
- [ ] Font is Helvetica or Arial, minimum 5 pt
- [ ] Panel labels are 8 pt bold lowercase
- [ ] File format is TIFF, EPS, or PDF
- [ ] Color mode is RGB
- [ ] File size under 10 MB
- [ ] Text is not rasterized

Use our [Figure Checker](/figure-checker) tool to automatically verify all these requirements before submission.
`,

'tiff-vs-png-vs-eps-which-format': `
## The Format Dilemma

You've finished your beautiful figure. Now the journal wants it in TIFF. Or was it EPS? Maybe PDF? Understanding image formats is essential for hassle-free submission.

## Format Comparison

| Feature | TIFF | PNG | EPS | PDF | JPEG |
|---------|------|-----|-----|-----|------|
| Compression | Lossless (LZW) | Lossless | N/A (vector) | Mixed | Lossy |
| Best For | Photos, micrographs | Web, screenshots | Graphs, diagrams | Mixed content | Never for papers |
| Quality Loss | None | None | None | None | Yes, every save |
| File Size | Large | Medium | Small (vector) | Medium | Small |
| Journal Acceptance | ★★★★★ | ★★☆☆☆ | ★★★★★ | ★★★★☆ | ★☆☆☆☆ |

## When to Use TIFF

TIFF is the gold standard for scientific publishing. Use it for:

- Microscopy images
- Photographs
- Gel/blot images
- Any raster (pixel-based) figure

Always use **LZW compression** — it's lossless and reduces file size by 30-50%.

## When to Use EPS

EPS is ideal for vector graphics:

- Line graphs
- Bar charts
- Flow diagrams
- Schematics

Vector formats scale to any size without quality loss. If your figure was created in Illustrator, R, or Python (matplotlib), export as EPS.

## When to Use PNG

PNG is lossless like TIFF but less widely accepted by journals. Use it when:

- The journal specifically accepts PNG (PLoS, eLife, Frontiers)
- You need transparency
- File size is a concern

## When to Use PDF

PDF can contain both vector and raster elements. Good for:

- Multi-panel figures with mixed content
- Figures created in LaTeX
- When you need a single file with text + images

## Never Use JPEG for Publication

JPEG uses lossy compression. Every time you save, quality degrades. Artifacts appear around text and sharp edges. Journals can detect JPEG artifacts and may reject your figure.

## Converting Between Formats

Need to convert? Use our [Format Converter](/image-converter) — it handles TIFF, PNG, JPEG, and PDF conversion right in your browser. The TIFF output uses proper LZW compression compatible with Photoshop, ImageJ, and GIMP.
`,

'common-figure-rejection-reasons': `
## The Frustrating Reality

You spent months on your research, weeks writing the paper, and your figures get rejected for technical reasons. Here are the 10 most common figure-related rejection reasons and how to fix them.

## 1. Resolution Too Low (DPI < 300)

**The problem**: Screenshots, web images, or figures created at screen resolution (72-96 DPI).

**The fix**: Always create figures at 300 DPI minimum. For line art, use 600 DPI. Check with our [Figure Checker](/figure-checker).

## 2. Wrong File Format

**The problem**: Submitting JPEG, BMP, or Word-embedded images.

**The fix**: Export as TIFF (photos) or EPS/PDF (vector graphics). Use our [Format Converter](/image-converter) if needed.

## 3. Text Too Small After Scaling

**The problem**: Figure looks fine on screen but text becomes unreadable at print size.

**The fix**: Design at final print dimensions. Minimum font size is typically 6-8 pt at print size.

## 4. Wrong Color Mode

**The problem**: Using CMYK when the journal requires RGB, or vice versa.

**The fix**: Most journals use RGB for digital publication. Check the specific journal requirements.

## 5. File Size Too Large

**The problem**: Uncompressed TIFF files can be 50+ MB.

**The fix**: Use LZW compression for TIFF. It's lossless and typically reduces size by 30-50%.

## 6. Incorrect Dimensions

**The problem**: Figure doesn't match the journal's column width.

**The fix**: Check single-column (typically 80-90 mm) vs double-column (170-190 mm) requirements.

## 7. Poor Font Choice

**The problem**: Using serif fonts, decorative fonts, or inconsistent fonts across panels.

**The fix**: Use Arial or Helvetica throughout. Be consistent across all figures.

## 8. Missing or Incorrect Panel Labels

**The problem**: No labels, wrong format (A vs a), or inconsistent styling.

**The fix**: Use lowercase bold letters (a, b, c) at 8 pt for most journals.

## 9. Inaccessible Color Schemes

**The problem**: Red-green color combinations that colorblind readers can't distinguish.

**The fix**: Use colorblind-friendly palettes. Add patterns or different line styles as secondary indicators.

## 10. Embedded Artifacts

**The problem**: White borders, compression artifacts, or embedded metadata from PowerPoint/Word.

**The fix**: Export directly from your graphics software. Never copy-paste through PowerPoint.

## Prevention is Better Than Cure

Use our [Figure Checker](/figure-checker) before submission to catch all these issues automatically. Select your target journal, upload your figure, and get instant feedback on every requirement.
`,

'biorender-alternative-free-tools': `
## Why Look for Alternatives?

BioRender is excellent for creating scientific illustrations, but the subscription cost ($39/month for academics, $99/month for industry) can be prohibitive. Here are free alternatives and complementary tools.

## Free Tools for Creating Scientific Figures

### 1. Inkscape (Free, Open Source)
- Vector graphics editor, similar to Adobe Illustrator
- Perfect for diagrams, schematics, and flow charts
- Exports to SVG, EPS, PDF
- Learning curve: moderate

### 2. GIMP (Free, Open Source)
- Raster image editor, similar to Photoshop
- Good for photo editing, microscopy image processing
- Supports TIFF with LZW compression
- Learning curve: moderate

### 3. ImageJ / FIJI (Free, Open Source)
- Specifically designed for scientific image analysis
- Excellent for microscopy, gel quantification
- Batch processing capabilities
- Learning curve: low for basic tasks

### 4. R (ggplot2) + Python (matplotlib)
- Publication-quality graphs and charts
- Highly reproducible
- Export to EPS, PDF, TIFF
- Learning curve: requires coding

### 5. draw.io / diagrams.net (Free)
- Web-based diagram tool
- Good for flow charts, pathway diagrams
- Exports to SVG, PNG, PDF
- Learning curve: very low

## Free Tools for Checking & Converting Figures

### SCI Pub Tools (This Site!)
- [Figure Checker](/figure-checker): Verify DPI, size, format against 60+ journal requirements
- [Format Converter](/image-converter): Convert between TIFF, PNG, JPEG, PDF
- 100% free, runs in your browser, no upload needed

## When You Still Need BioRender

BioRender excels at one thing: beautiful biological illustrations with pre-made components (cells, organs, molecules). If you need:

- Cell signaling pathway diagrams
- Graphical abstracts with biological elements
- Mechanism of action illustrations

Consider a short-term BioRender subscription just for those specific figures, and use free tools for everything else.

## Tips for Budget-Conscious Researchers

1. Check if your institution has a BioRender license
2. Use BioRender's free tier for basic illustrations
3. Create reusable templates in Inkscape for common diagram types
4. Use our free tools for format checking and conversion
`,

'figure-dpi-explained': `
## What is DPI?

DPI stands for Dots Per Inch. It measures how many pixels (dots) fit in one inch of printed output. Higher DPI means more detail and sharper images.

## DPI vs PPI

Technically, DPI refers to print output and PPI (Pixels Per Inch) refers to digital images. In scientific publishing, they're used interchangeably. When a journal says "300 DPI," they mean your image should have enough pixels to print at 300 pixels per inch at the required dimensions.

## Why 300 DPI?

At 300 DPI, individual pixels are invisible to the human eye at normal reading distance. This is the minimum for:

- Photographs
- Micrographs
- Color images

For line art (graphs, text, diagrams), 600 DPI is recommended because sharp edges and thin lines need more resolution to appear smooth.

## How to Calculate Required Pixels

**Formula**: Pixels = (Width in mm ÷ 25.4) × DPI

| Journal Width | 300 DPI | 600 DPI |
|--------------|---------|---------|
| 89 mm (single column) | 1,051 px | 2,102 px |
| 174 mm (double column) | 2,055 px | 4,110 px |
| 183 mm (Nature double) | 2,161 px | 4,323 px |

## How to Check Your Figure's DPI

1. **Quick method**: Use our [Figure Checker](/figure-checker) — upload your image and select your target journal
2. **Manual calculation**: DPI = Pixel width ÷ (Physical width in mm ÷ 25.4)
3. **In Photoshop**: Image → Image Size → Resolution

## Common DPI Mistakes

### "I set it to 300 DPI in Word"
Word's DPI setting doesn't increase actual resolution. If your image is 500 pixels wide, it's 500 pixels regardless of what Word says.

### "I upscaled from 72 DPI to 300 DPI"
Upscaling (resampling) adds pixels by interpolation. It makes the file larger but doesn't add real detail. The image will look blurry.

### "My screenshot is high quality"
Screenshots are typically 72-96 DPI. A full-screen screenshot on a 1920×1080 monitor is only about 6.4 inches wide at 300 DPI — too small for a double-column figure.

## How to Get High-DPI Figures

1. **Create at target size**: Design your figure at the final print dimensions and 300+ DPI from the start
2. **Export from source**: Export directly from R, Python, Illustrator at high resolution
3. **Use vector formats**: EPS and PDF are resolution-independent
4. **Never upscale**: If your image is too low resolution, go back to the source

## DPI Settings for Different Figure Types

| Figure Type | Minimum DPI | Recommended |
|------------|-------------|-------------|
| Photographs | 300 | 300 |
| Micrographs | 300 | 300-600 |
| Line art (graphs) | 600 | 600-1200 |
| Combination | 500 | 600 |
| Color illustrations | 300 | 300 |

Use our [Figure Checker](/figure-checker) to verify your figure meets the DPI requirements for your target journal.
`,

'sci-figure-requirements-chinese-journals': `
## 国内SCI期刊图片要求

投稿国内SCI期刊时，图片格式要求是最容易被忽视的环节。本文整理了20+国内主要SCI期刊的图片规范。

## 中华医学会系列

| 期刊 | 格式 | DPI | 色彩 | 单栏宽 |
|------|------|-----|------|--------|
| 中华医学杂志 | TIFF/JPEG/PDF | 300-600 | RGB | 75mm |
| 中华外科杂志 | TIFF/JPEG/PDF | 300-600 | RGB | 75mm |
| 中华内科杂志 | TIFF/JPEG/PDF | 300-600 | RGB | 75mm |

中华医学会系列期刊统一要求：
- 字体：宋体（中文）+ Arial（英文）
- 最小字号：6pt
- 文件大小：≤5MB

## 中科院系列（英文版）

| 期刊 | 格式 | DPI | 出版商 |
|------|------|-----|--------|
| National Science Review | TIFF/EPS/PDF | 300-600 | Oxford |
| Science Bulletin | TIFF/EPS/PDF | 300-600 | Elsevier |
| Science China (各辑) | TIFF/EPS/PDF | 300-600 | Springer |

这些期刊遵循国际出版商标准，图片要求与对应出版商一致。

## 高影响力国内期刊

| 期刊 | IF | 格式 | 标准 |
|------|-----|------|------|
| Cell Research | ~46 | TIFF/EPS/PDF | Nature标准 |
| Signal Transduction and Targeted Therapy | ~40 | TIFF/EPS/PDF | Nature标准 |
| Protein & Cell | ~15 | TIFF/EPS/PDF | Oxford标准 |
| Nano Research | ~10 | TIFF/EPS/PDF | Springer标准 |

## 药学期刊

| 期刊 | 格式 | 出版商 |
|------|------|--------|
| Acta Pharmaceutica Sinica B | TIFF/EPS/PDF/JPEG | Elsevier |
| 药学学报 | TIFF/EPS/PDF/JPEG | 中国药学会 |
| 中国药理学通报 | TIFF/JPEG/PDF | 中国药理学会 |

## 通用建议

1. **优先使用TIFF格式** — 几乎所有期刊都接受
2. **DPI设置300以上** — 线条图建议600
3. **英文期刊用Arial字体** — 中文期刊用宋体+Arial
4. **检查文件大小** — 国内期刊通常限制5-10MB

使用我们的[图片检查工具](/figure-checker)可以一键检查是否符合目标期刊要求。
`,

'how-to-convert-images-to-tiff': `
## 为什么需要TIFF格式？

大多数SCI期刊要求提交TIFF格式的图片，因为：
- **无损压缩** — LZW压缩不会降低图片质量
- **行业标准** — 印刷和出版行业的通用格式
- **元数据支持** — 可以嵌入DPI、色彩空间等信息

## 在线转换（推荐）

使用我们的[格式转换工具](/image-converter)：
1. 上传你的JPG/PNG图片
2. 选择输出格式为TIFF
3. 设置DPI（通常300）
4. 点击转换并下载

优点：无需安装软件，浏览器本地处理，图片不上传服务器。

## 使用Photoshop转换

1. 打开图片：File → Open
2. 设置分辨率：Image → Image Size → 设置Resolution为300
3. 保存为TIFF：File → Save As → 选择TIFF格式
4. 压缩选项：选择LZW压缩

## 使用ImageJ转换

1. 打开图片：File → Open
2. 设置比例：Image → Properties → 设置Unit和Pixel Size
3. 保存为TIFF：File → Save As → Tiff

## 使用Python批量转换

\`\`\`python
from PIL import Image
import os

input_dir = "figures/"
output_dir = "figures_tiff/"
dpi = 300

for f in os.listdir(input_dir):
    if f.endswith(('.jpg', '.png')):
        img = Image.open(os.path.join(input_dir, f))
        out = os.path.join(output_dir, f.rsplit('.', 1)[0] + '.tiff')
        img.save(out, 'TIFF', compression='tiff_lzw', dpi=(dpi, dpi))
\`\`\`

## 转换注意事项

### ❌ 不要这样做
- 直接改文件扩展名（.jpg → .tiff）— 这不是真正的转换
- 从低分辨率图片放大 — 不会增加真实细节
- 使用在线转换工具上传敏感数据

### ✅ 正确做法
- 从源文件（AI/PSD/R/Python）直接导出TIFF
- 保持原始分辨率，不要放大
- 使用LZW压缩减小文件体积
- 转换后用[图片检查工具](/figure-checker)验证

## 常见问题

**Q: TIFF文件太大怎么办？**
A: 使用LZW压缩，通常可以减小30-50%。如果还是太大，检查是否分辨率设置过高。

**Q: 转换后颜色变了怎么办？**
A: 确保色彩模式一致（RGB→RGB）。不要在转换过程中改变色彩空间。

**Q: 期刊说不接受我的TIFF？**
A: 可能是压缩方式不对。有些期刊不接受JPEG压缩的TIFF，改用LZW压缩。
`,

};

export function getArticle(slug: string): { post: BlogPost; content: string } | null {
  const post = posts.find((p: BlogPost) => p.slug === slug);
  if (!post) return null;
  const content = articleContent[slug];
  if (!content) return null;
  return { post, content };
}
