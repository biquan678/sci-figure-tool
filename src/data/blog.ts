export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  lang: string;
}

export const posts: BlogPost[] = [
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
];
