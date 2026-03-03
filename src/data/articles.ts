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

'graphical-abstract-guide': `
## What Is a Graphical Abstract?

A graphical abstract is a single visual summary of your paper's main findings. More and more journals now require or strongly encourage them — including Elsevier, Cell Press, and ACS journals.

A good graphical abstract increases your paper's visibility, social media shares, and citation potential.

## Size Requirements by Publisher

| Publisher | Width | Height | Format | Max Size |
|-----------|-------|--------|--------|----------|
| Elsevier | 531 px | 531 px | TIFF/EPS/PDF | 10 MB |
| Cell Press | 1200 px | 1200 px | TIFF/EPS | 5 MB |
| ACS | 1200 px | 628 px | TIFF/EPS | 5 MB |
| Wiley | 530 px | 265 px | TIFF/EPS | 5 MB |
| RSC | 560 px | 280 px | TIFF/PNG | 5 MB |
| Springer Nature | 530 px | 530 px | TIFF/EPS | 10 MB |

## Design Principles

### Keep It Simple
- One central message, not your entire paper
- Maximum 4-5 elements on screen
- Clear left-to-right or top-to-bottom flow

### Typography
- Use sans-serif fonts (Arial, Helvetica)
- Minimum 12 pt at final size
- Avoid long text — use labels and arrows instead

### Color
- Use a consistent color palette (3-4 colors max)
- Ensure sufficient contrast
- Test for colorblind accessibility

## Free Tools for Creating Graphical Abstracts

1. **Inkscape** — Free vector editor, exports to EPS/SVG/PDF
2. **draw.io** — Browser-based, great for flow diagrams
3. **Canva** — Easy templates, export to PNG/PDF
4. **PowerPoint** — Most researchers already know it
5. **BioRender** — Free tier available for biological illustrations

## Step-by-Step Workflow

1. Sketch your story arc on paper first
2. Identify the single key finding
3. Choose your tool and set the correct canvas size
4. Design with large, clear elements
5. Export at the required resolution (usually 300 DPI)
6. Verify with our [Figure Checker](/figure-checker)

## Common Mistakes

- ❌ Too much text — it's a visual, not an abstract
- ❌ Wrong dimensions — each publisher has specific sizes
- ❌ Low resolution — always export at 300 DPI minimum
- ❌ Too complex — if it needs explanation, simplify it
- ❌ Inconsistent style — match your manuscript figures
`,

'batch-convert-figures-python': `
## Why Batch Convert?

If your manuscript has 6-10 figures plus supplementary materials, manually converting each one is tedious and error-prone. A Python script can process all figures in seconds with consistent settings.

## Prerequisites

Install Pillow (Python Imaging Library):

\`\`\`
pip install Pillow
\`\`\`

## The Complete Script

\`\`\`python
from PIL import Image
import os
import sys

# Configuration
INPUT_DIR = "figures_raw"
OUTPUT_DIR = "figures_ready"
TARGET_DPI = 300
TARGET_FORMAT = "TIFF"
MAX_WIDTH_MM = 183  # double column
COMPRESSION = "tiff_lzw"

def mm_to_px(mm, dpi):
    return int(mm / 25.4 * dpi)

def convert_figure(input_path, output_path, max_width_px, dpi):
    img = Image.open(input_path)

    # Convert to RGB if necessary
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")

    # Resize if wider than max
    if img.width > max_width_px:
        ratio = max_width_px / img.width
        new_size = (max_width_px, int(img.height * ratio))
        img = img.resize(new_size, Image.LANCZOS)

    img.save(output_path, TARGET_FORMAT,
             compression=COMPRESSION, dpi=(dpi, dpi))
    return img.size

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    max_w = mm_to_px(MAX_WIDTH_MM, TARGET_DPI)
    supported = (".jpg", ".jpeg", ".png", ".tiff", ".tif", ".bmp")

    for f in sorted(os.listdir(INPUT_DIR)):
        if f.lower().endswith(supported):
            inp = os.path.join(INPUT_DIR, f)
            out_name = os.path.splitext(f)[0] + ".tiff"
            out = os.path.join(OUTPUT_DIR, out_name)
            size = convert_figure(inp, out, max_w, TARGET_DPI)
            file_kb = os.path.getsize(out) / 1024
            print(f"{f} -> {out_name} ({size[0]}x{size[1]}, {file_kb:.0f} KB)")

if __name__ == "__main__":
    main()
\`\`\`

## How to Use

1. Create a folder called \`figures_raw\` and put all your figures in it
2. Run the script: \`python convert_figures.py\`
3. Find your converted figures in \`figures_ready\`

## Customization Options

### Change Target Format
Replace \`TARGET_FORMAT = "TIFF"\` with \`"PNG"\` or \`"JPEG"\`.

### Single Column Width
Change \`MAX_WIDTH_MM = 183\` to \`89\` for single-column figures.

### Higher DPI for Line Art
Set \`TARGET_DPI = 600\` for graphs and diagrams.

### Add Watermark or Label
\`\`\`python
from PIL import ImageDraw, ImageFont

def add_label(img, label, position=(10, 10)):
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype("arial.ttf", 24)
    draw.text(position, label, fill="black", font=font)
    return img
\`\`\`

## Verification

After batch conversion, use our [Figure Checker](/figure-checker) to verify each figure meets your target journal's requirements. Upload one by one or check the output dimensions and DPI from the script's console output.
`,

'colorblind-friendly-figures': `
## The Scale of the Problem

Approximately 8% of men and 0.5% of women have some form of color vision deficiency (CVD). That means in a lecture hall of 100 scientists, roughly 4-5 people cannot distinguish your red-green color scheme.

Many journals now explicitly require colorblind-friendly figures. Even if yours doesn't, accessible figures are simply better science communication.

## Types of Color Vision Deficiency

| Type | Prevalence | Confusion Colors |
|------|-----------|-----------------|
| Deuteranopia (green-blind) | 6% of men | Red ↔ Green |
| Protanopia (red-blind) | 2% of men | Red ↔ Green |
| Tritanopia (blue-blind) | 0.01% | Blue ↔ Yellow |

## Safe Color Palettes

### The Universal Palette (Okabe-Ito)
This 8-color palette is distinguishable by virtually everyone:

- #E69F00 (orange)
- #56B4E9 (sky blue)
- #009E73 (bluish green)
- #F0E442 (yellow)
- #0072B2 (blue)
- #D55E00 (vermillion)
- #CC79A7 (reddish purple)
- #000000 (black)

### For Sequential Data
Use single-hue gradients: light blue → dark blue, or light gray → dark gray.

### For Diverging Data
Use blue ↔ red (not green ↔ red). Most CVD types can distinguish blue from red.

## Design Strategies Beyond Color

### 1. Use Patterns and Textures
Add hatching, dots, or crosshatch patterns to bar charts. Color becomes a secondary cue.

### 2. Use Different Line Styles
Solid, dashed, dotted, dash-dot — combine with color for double encoding.

### 3. Add Direct Labels
Label lines and bars directly instead of relying on a color legend.

### 4. Use Shapes for Data Points
Circle, square, triangle, diamond — each group gets a unique marker.

## Testing Your Figures

### Free Online Simulators
- **Coblis** (color-blindness.com) — upload and simulate
- **Color Oracle** — desktop app, simulates in real-time

### In Python
\`\`\`python
# Using colorspacious library
from colorspacious import cspace_convert
import matplotlib.pyplot as plt

# Simulate deuteranopia
plt.style.use('tableau-colorblind10')
\`\`\`

### Quick Self-Test
Convert your figure to grayscale. If you can still distinguish all elements, it's likely colorblind-safe.

## Journal Requirements

| Journal | Colorblind Policy |
|---------|------------------|
| Nature | Required |
| Science | Strongly recommended |
| Cell | Required |
| PLOS ONE | Required |
| eLife | Required |
| JAMA | Recommended |

## Checklist

- [ ] Avoid pure red-green combinations
- [ ] Use the Okabe-Ito palette or similar
- [ ] Add secondary visual cues (patterns, shapes, labels)
- [ ] Test with a CVD simulator
- [ ] Convert to grayscale as a quick check
- [ ] Verify with our [Figure Checker](/figure-checker)
`,

'graphical-abstract-guide-zh': `
## 什么是图形摘要？

图形摘要（Graphical Abstract）是论文核心发现的视觉总结。目前越来越多的期刊要求或强烈推荐提交图形摘要，包括Elsevier、Cell Press和ACS系列期刊。

一个好的图形摘要能显著提升论文的曝光度、社交媒体转发量和引用潜力。

## 各出版商的尺寸要求

| 出版商 | 宽度 | 高度 | 格式 | 最大文件 |
|--------|------|------|------|---------|
| Elsevier | 531像素 | 531像素 | TIFF/EPS/PDF | 10 MB |
| Cell Press | 1200像素 | 1200像素 | TIFF/EPS | 5 MB |
| ACS | 1200像素 | 628像素 | TIFF/EPS | 5 MB |
| Wiley | 530像素 | 265像素 | TIFF/EPS | 5 MB |
| RSC | 560像素 | 280像素 | TIFF/PNG | 5 MB |
| Springer Nature | 530像素 | 530像素 | TIFF/EPS | 10 MB |

## 设计原则

### 简洁明了
- 只有一个核心信息，不是整篇论文的浓缩
- 屏幕上最多4-5个元素
- 有清晰的从左到右或从上到下的流程

### 排版
- 使用无衬线字体（Arial, Helvetica）
- 最终尺寸下最小12pt
- 避免长文字，用标签和箭头代替

### 配色
- 使用统一的配色方案（最多3-4种颜色）
- 确保足够的对比度
- 测试色盲可访问性

## 免费制作工具

1. **Inkscape** — 免费矢量编辑器，导出EPS/SVG/PDF
2. **draw.io** — 在线流程图工具
3. **Canva** — 简单模板，导出PNG/PDF
4. **PowerPoint** — 大多数研究人员已经很熟悉
5. **BioRender** — 免费账户可制作生物插图

## 制作步骤

1. 先在纸上画出故事框架
2. 确定唯一的核心发现
3. 选择工具并设置正确的画布尺寸
4. 设计简洁清晰的元素
5. 以所需分辨率导出（通常300 DPI）
6. 用我们的[图片检查工具](/figure-checker)验证

## 常见错误

- ❌ 文字太多 — 图形摘要是视觉的，不是文字摘要
- ❌ 尺寸错误 — 每个出版商都有具体要求
- ❌ 分辨率不足 — 至少导出300 DPI
- ❌ 过于复杂 — 如果需要解释，就简化它
- ❌ 风格不统一 — 应与论文其他图片风格一致
`,

'figure-color-mode-rgb-cmyk': `
## RGB vs CMYK：到底选哪个？

这是论文投稿中最常见的问题之一。很多研究者因为色彩模式选错而导致图片被拒或打印效果差。

## 什么是RGB？

RGB（Red, Green, Blue）是屏幕显示用的颜色模式。它通过红、绿、蓝三种光的叠加来显示颜色。

- **用途**：电脑屏幕、手机屏幕、网页展示
- **颜色范围**：比CMYK更广，更鲜艳
- **大多数期刊要求**：RGB

## 什么是CMYK？

CMYK（Cyan, Magenta, Yellow, Key/Black）是印刷用的颜色模式。它通过青、品红、黄、黑四种油墨的混合来呈现颜色。

- **用途**：传统印刷、纸质出版物
- **颜色范围**：比RGB小，有些颜色无法打印
- **出版商通常会转换**：很多期刊最终会帮你转

## 各期刊的要求

| 期刊/出版商 | 要求 |
|------------|------|
| Nature系列 | RGB |
| Science | RGB |
| Cell Press | RGB |
| Elsevier | RGB |
| Wiley | RGB |
| Springer | RGB |
| 大多数国内期刊 | RGB或CMYK |

**趋势**：现在几乎所有期刊都要求RGB，因为大多数期刊在线出版，RGB是数字时代的标准。

## 常见问题

### Q: 我的图片是CMYK怎么办？
A: 大多数期刊会接受CMYK并自动转换。但如果要求RGB，用Photoshop或我们的[格式转换工具](/image-converter)转换为RGB。

### Q: 期刊要求CMYK但我是RGB？
A: 在Photoshop中：图像 → 模式 → CMYK颜色。但这会改变颜色显示效果，建议先确认期刊是否真的要求CMYK。

### Q: 颜色看起来不一样？
A: RGB在屏幕上显示更鲜艳。打印时会略有差异，这是正常的。如果非常在意，用Photoshop在CMYK模式下预览。

## 最佳实践

1. **始终用RGB工作** — 更广的颜色范围，更好的屏幕显示
2. **确认目标期刊要求** — 多数要求RGB，少数要求CMYK
3. **避免特别鲜艳的RGB颜色** — 打印时可能会变暗
4. **转换前备份原文件** — 保留RGB版本

## 如何检查和转换

使用我们的[图片检查工具](/figure-checker)可以查看当前图片的色彩模式。如果需要转换，用[格式转换工具](/image-converter)转换为目标格式。
`,

'multi-panel-figure-layout': `
## 什么是多面板图片？

多面板（Multi-panel）图片是将多个子图（A、B、C、D...）组合成一张完整的论文图片。这是展示多个实验结果或对比数据的标准方式。

## 面板布局原则

### 1. 尺寸统一
- 所有子图应该宽度一致（要么都是单栏宽，要么都是双栏宽）
- 单栏宽度：80-90mm（约300 DPI下 944-1063像素）
- 双栏宽度：170-183mm（约2000-2160像素）

### 2. 面板间距
- 相邻面板间距：2-3mm
- 面板与边框间距：2mm
- 保持间距一致，不要有的密有的松

### 3. 面板标注
- 位置：每个子图左上角或左下角
- 字体：Arial或Helvetica，8pt粗体
- 格式：小写字母（a, b, c, d），不要大写
- 示例：Panel A, Panel B 或直接 a, b

## 常见布局方式

### 水平排列（2-4图）
适合展示同一实验的不同处理条件，或时间序列。

### 垂直排列
适合展示不同实验方法对同一样本的结果。

### 网格排列（2x2, 2x3, 3x3）
最常用，适合展示多个相关实验。注意每行/每列要对齐。

### 混合布局
主体为大图，角落放小图作为对照或放大区域。

## 排版工具

### Adobe Illustrator
专业排版，支持精确对齐和分布。

### Inkscape（免费）
开源矢量编辑器，功能与AI类似。

### PowerPoint
最简单的方法：插入图片 → 排列 → 导出。但分辨率可能不足，建议在AI/PS中最终处理。

### Python + matplotlib
\`\`\`python
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec

fig = plt.figure(figsize=(10, 6))
gs = GridSpec(2, 2, figure=fig, hspace=0.3, wspace=0.3)

ax1 = fig.add_subplot(gs[0, 0])
ax2 = fig.add_subplot(gs[0, 1])
ax3 = fig.add_subplot(gs[1, :])

ax1.plot([1,2,3], [1,2,3])
ax2.plot([1,2,3], [3,2,1])
ax3.bar(['A','B','C'], [5,3,7])

ax1.set_title('a', loc='left', fontweight='bold', pad=5)
ax2.set_title('b', loc='left', fontweight='bold', pad=5)
ax3.set_title('c', loc='left', fontweight='bold', pad=5)

plt.savefig('figure_combined.pdf', dpi=300)
\`\`\`

## 字体统一技巧

1. **全局搜索替换** — 在AI/PS中查找不一致的字体
2. **使用字符样式** — 定义统一的字符样式应用全文
3. **嵌入字体** — 导出前确保字体已嵌入，避免缺字

## 常见错误

- ❌ 面板标注位置不统一
- ❌ 子图大小不一致
- ❌ 间距有的宽有的窄
- ❌ 字体大小不统一
- ❌ 分辨率不足（低于300 DPI）

## 验证清单

- [ ] 所有子图宽度一致
- [ ] 面板间距均匀
- [ ] 标注字体统一（8pt Arial/Helvetica粗体）
- [ ] 分辨率 ≥ 300 DPI
- [ ] 整体尺寸符合期刊要求（单栏/双栏）
- [ ] 用我们的[图片检查工具](/figure-checker)验证
`,

'figure-preparation-guide-ja': `
## 投稿前にチェックすべき7つのポイント

論文の図 подготовкаはSCI投稿の最重要ステップの一つです。図の形式が揃っていないだけで原稿がリジェクトされるのは珍しいことではありません。

## 1. DPI（解像度）

- 写真・顕微鏡画像：300 DPI以上
- 線画（グラフ、模式図）：600 DPI以上
- 複合画像（写真＋テキスト）：500 DPI以上

**確認方法**：Pixel width ÷ (物理サイズinch) = DPI

## 2. ファイル形式

| 形式 | 推奨用途 | 圧縮 |
|------|---------|------|
| TIFF | 写真・画像 | LZW（無劣化） |
| EPS | ベクター graphics | なし |
| PDF | 複合内容 | なし |
| PNG | Web用 | 無劣化 |
| JPEG | 非推奨 | 劣化あり |

## 3. カラーモード

現在はほとんどがRGB。CMYKは印刷用で、オンライン出版には向かない。

## 4. フォント

- Nature、Science、Cell：HelveticaまたはArial
- 最小サイズ：5-6pt
- パネルラベル：8pt bold、小文字（a, b, c）

## 5. 尺寸

- 単一カラム：80-90mm
- ダブルカラム：170-183mm
- 最終印刷サイズでデザインすること

## 6. ファイルサイズ

大多数期刊要求单文件10MB以下。LZW圧縮でTIFFを压缩。

## 7. パネルラベル

- a, b, c（小文字）のラベル
- 位置：左上または左下
- フォント：Arial/Helvetica 8pt太字
- 重なり防止：正确配置

## チェックリスト

- [ ] DPI ≥ 300 (線画は600)
- [ ] 形式はTIFF/EPS/PDF
- [ ] RGBカラーモード
- [ ] フォントはArial/Helvetica
- [ ] パネルラベルは8pt小文字
- [ ] ファイルサイズは10MB以下
- [] テキストはラスタライズされていない

[図チェッカー](/figure-checker)で自動チェック！
`,

'tiff-conversion-guide-ja': `
## TIFF形式的重要性

多くの学術誌がTIFF形式を要求します。TIFFは：

- **無劣化圧縮** — LZW圧縮で画質不掉
- **業界標準** — 印刷・出版の通用形式
- **メタデータ対応** — DPI、色空間等信息を埋め込み可能

## 変換方法

### 推奨：当サイトのConverter

1. [フォーマット変換](/image-converter)を開く
2. JPG/PNGをアップロード
3. 出力形式はTIFFを選択
4. DPIを設定（通常300）
5. 変換してダウンロード

メリット：ブラウザ上で完結、サーバーアップロード不要

### Photoshopの場合

1. 画像を開く：File → Open
2. 解像度設定：Image → Image Size → Resolutionを300に
3. TIFFで保存：File → Save As → TIFF
4. 圧縮オプション：LZWを選択

### ImageJの場合

1. 画像を開く：File → Open
2. スケール設定：Image → Properties
3. TIFFで保存：File → Save As → TIFF

### Pythonで一括変換

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

## 注意点

### ❌ 避けるべきこと
- 拡張子だけの変更（.jpg → .tiff）
- 低解像度からのアップスケール
- オンラインで敏感なデータをアップロード

### ✅ 正しい方法
-  元ファイル（AI/PSD/R/Python）から直接TIFFエクスポート
-  元の解像度を維持（放大しない）
-  LZW圧縮を使用
-  変換後は[図チェッカー](/figure-checker)で検証

## よくある問題

**Q: TIFFファイルが大きすぎる**
A: LZW圧縮で対応。通常30-50%减小。それでも大きければDPI設定を確認。

**Q: 変換後 색상이变了**
A: カラーモードを確認。RGB→RGBで変換を。

**Q: ジャーナルから「受け入れられない」と言われた**
A: 圧縮方式の問題の可能性。JPEG圧縮のTIFFではなくLZW圧縮を試す。
`,

'journal-figure-requirements-ja': `
## 主要学術誌の図の要件一覧

SCI投稿前に、各ジャーナルの図要件を確認することは必須です。主要ジャーナルの要件をまとめました。

## Nature系列

| ジャーナル | DPI | 形式 | フォント | 單/雙欄 |
|-----------|-----|------|---------|---------|
| Nature | 300-600 (線画600) | TIFF/EPS/PDF | Helvetica/Arial | 89mm/183mm |
| Nature Communications | 300 | TIFF/EPS/PDF | Helvetica/Arial | 89mm/183mm |
| Scientific Reports | 300 | TIFF/EPS/PDF | Helvetica/Arial | 89mm/183mm |

## Cell Press

| ジャーナル | DPI | 形式 | フォント |
|-----------|-----|------|---------|
| Cell | 300 | TIFF/EPS | Helvetica/Arial |
| Molecular Cell | 300 | TIFF/EPS | Helvetica/Arial |
| Cell Reports | 300 | TIFF/EPS | Helvetica/Arial |

## Science系列

| ジャーナル | DPI | 形式 | フォント |
|-----------|-----|------|---------|
| Science | 600 (線画) | TIFF/EPS/PDF | Helvetica/Arial |
| Science Advances | 300 | TIFF/EPS/PDF | Helvetica/Arial |

## Lancet系列

| ジャーナル | DPI | 形式 |
|-----------|-----|------|
| Lancet | 300+ | TIFF/EPS/PDF |
| Lancet Neurology | 300+ | TIFF/EPS/PDF |

## Elsevier

| ジャーナル | DPI | 形式 |
|-----------|-----|------|
| Cell | 300 | TIFF/EPS/PDF |
| Biomaterials | 300 | TIFF/EPS/PDF |
| Journal of Controlled Release | 300 | TIFF/EPS/PDF |

## 中国主要ジャーナル

| ジャーナル | DPI | 形式 | 言語 |
|-----------|-----|------|------|
| Cell Research | 300-600 | TIFF/EPS | English |
| National Science Review | 300-600 | TIFF/EPS | English |
| Science Bulletin | 300 | TIFF/EPS | English |
| 中華医学雑誌 | 300-600 | TIFF/JPEG/PDF | Chinese |

## 共通ルール

1. **フォント**: HelveticaまたはArial
2. **パネルラベル**: 8pt、太字、小文字（a, b, c）
3. **最小フォントサイズ**: 5-6pt
4. **圧縮**: TIFFはLZW（無劣化）
5. **カラーモード**: RGB（ほとんど）
6. **ファイルサイズ**: 10MB以下

## -quick Check

[図チェッカー](/figure-checker)でジャーナル名を選択して图をアップロード 하면、自動的に全要件をチェックしてくれます。
`,

};

export function getArticle(slug: string): { post: BlogPost; content: string } | null {
  const post = posts.find((p: BlogPost) => p.slug === slug);
  if (!post) return null;
  const content = articleContent[slug];
  if (!content) return null;
  return { post, content };
}
