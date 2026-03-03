export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  lang: string;
}

export const posts: BlogPost[] = [
  // === Existing EN ===
  {
    slug: 'how-to-prepare-figures-for-nature',
    title: 'How to Prepare Figures for Nature Journals: Complete Guide 2026',
    excerpt: 'A step-by-step guide to preparing publication-ready figures that meet Nature\'s strict requirements for DPI, size, font, and color mode.',
    date: '2026-03-01', tags: ['Nature', 'figure preparation', 'guide'], lang: 'en',
  },
  {
    slug: 'tiff-vs-png-vs-eps-which-format',
    title: 'TIFF vs PNG vs EPS: Which Image Format for Your Paper?',
    excerpt: 'Understanding the differences between TIFF, PNG, EPS and PDF for scientific figures. When to use each format and why journals prefer TIFF.',
    date: '2026-03-01', tags: ['TIFF', 'PNG', 'EPS', 'format'], lang: 'en',
  },
  {
    slug: 'common-figure-rejection-reasons',
    title: '10 Common Reasons Your Figures Get Rejected by Journals',
    excerpt: 'Low DPI, wrong color mode, oversized files — learn the most common figure-related rejection reasons and how to avoid them.',
    date: '2026-03-01', tags: ['rejection', 'tips', 'DPI'], lang: 'en',
  },
  {
    slug: 'biorender-alternative-free-tools',
    title: 'Best Free Alternatives to BioRender for Scientific Figures',
    excerpt: 'Looking for free tools to create and format scientific figures? Here are the best BioRender alternatives for researchers on a budget.',
    date: '2026-03-01', tags: ['BioRender', 'alternatives', 'free'], lang: 'en',
  },
  {
    slug: 'figure-dpi-explained',
    title: 'Figure DPI Explained: Why 300 DPI Matters for Publication',
    excerpt: 'What is DPI? Why do journals require 300-600 DPI? How to check and convert your figure DPI without losing quality.',
    date: '2026-03-01', tags: ['DPI', 'resolution', 'quality'], lang: 'en',
  },
  // === Existing ZH ===
  {
    slug: 'sci-figure-requirements-chinese-journals',
    title: '国内SCI期刊图片要求汇总：中华医学杂志、Cell Research等',
    excerpt: '整理了国内主要SCI期刊的图片格式要求，包括中华医学杂志、Cell Research、Science Bulletin等20+期刊的DPI、尺寸、格式规范。',
    date: '2026-03-01', tags: ['国内期刊', '图片要求', 'SCI'], lang: 'zh',
  },
  {
    slug: 'how-to-convert-images-to-tiff',
    title: '如何将JPG/PNG转换为TIFF格式投稿？完整教程',
    excerpt: '很多SCI期刊要求TIFF格式图片，本文教你如何正确转换，确保DPI、色彩模式和压缩方式都符合要求。',
    date: '2026-03-01', tags: ['TIFF', '格式转换', '教程'], lang: 'zh',
  },
  // === NEW EN (3) ===
  {
    slug: 'graphical-abstract-guide',
    title: 'How to Create a Graphical Abstract: Size, Format & Design Tips',
    excerpt: 'Graphical abstracts are now required by many journals. Learn the exact size, format, and design principles to make yours stand out.',
    date: '2026-03-04', tags: ['graphical abstract', 'design', 'guide'], lang: 'en',
  },
  {
    slug: 'batch-convert-figures-python',
    title: 'Batch Convert & Resize Figures with Python: A Researcher\'s Script',
    excerpt: 'Save hours of manual work. Use this ready-made Python script to batch convert, resize, and set DPI for all your manuscript figures at once.',
    date: '2026-03-04', tags: ['Python', 'batch', 'automation'], lang: 'en',
  },
  {
    slug: 'colorblind-friendly-figures',
    title: 'Making Colorblind-Friendly Figures: Palettes & Best Practices',
    excerpt: '8% of men have color vision deficiency. Learn how to choose accessible color palettes and design figures everyone can read.',
    date: '2026-03-04', tags: ['accessibility', 'color', 'design'], lang: 'en',
  },
  // === NEW ZH (3) ===
  {
    slug: 'graphical-abstract-guide-zh',
    title: '期刊图形摘要(Graphical Abstract)制作指南：尺寸、格式与设计技巧',
    excerpt: '越来越多期刊要求提交图形摘要。本文详解各大期刊的尺寸要求、格式规范和设计原则，附免费工具推荐。',
    date: '2026-03-04', tags: ['图形摘要', '设计', '指南'], lang: 'zh',
  },
  {
    slug: 'figure-color-mode-rgb-cmyk',
    title: 'RGB还是CMYK？SCI论文图片色彩模式完全指南',
    excerpt: '投稿时色彩模式选错是常见退稿原因。本文解释RGB和CMYK的区别，以及各期刊的具体要求。',
    date: '2026-03-04', tags: ['RGB', 'CMYK', '色彩模式'], lang: 'zh',
  },
  {
    slug: 'multi-panel-figure-layout',
    title: '多面板论文图片排版技巧：从A到F的专业布局方法',
    excerpt: '如何将多个子图排成一张专业的组合图？本文教你面板标注、间距设置、字体统一等实用技巧。',
    date: '2026-03-04', tags: ['排版', '多面板', '技巧'], lang: 'zh',
  },
  // === NEW JA (3) ===
  {
    slug: 'figure-preparation-guide-ja',
    title: '学術論文の図の作り方：投稿前に確認すべき7つのポイント',
    excerpt: 'DPI、ファイル形式、カラーモード、フォントサイズ…投稿前にチェックすべき図のポイントを7つにまとめました。',
    date: '2026-03-04', tags: ['投稿準備', 'チェックリスト', 'ガイド'], lang: 'ja',
  },
  {
    slug: 'tiff-conversion-guide-ja',
    title: 'TIFF変換ガイド：学術誌投稿のための画像フォーマット変換',
    excerpt: '多くの学術誌がTIFF形式を要求します。JPG/PNGからTIFFへの正しい変換方法と注意点を解説します。',
    date: '2026-03-04', tags: ['TIFF', 'フォーマット変換', '投稿'], lang: 'ja',
  },
  {
    slug: 'journal-figure-requirements-ja',
    title: '主要学術誌の図の要件一覧：Nature・Science・Cell・Lancet',
    excerpt: 'Nature、Science、Cell、Lancetなど主要ジャーナルの図のフォーマット要件（DPI、サイズ、フォント）を一覧にまとめました。',
    date: '2026-03-04', tags: ['Nature', 'Science', 'Cell', '要件一覧'], lang: 'ja',
  },
];
