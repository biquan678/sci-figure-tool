export interface JournalRequirement {
  name: string;
  category: string;
  format: string[];
  minDPI: number;
  maxDPI: number;
  colorMode: string;
  singleColumnWidth: number;
  doubleColumnWidth: number;
  maxHeight: number;
  maxFileSize: string;
  fontFamily: string;
  minFontSize: number;
  notes: string;
}

export const journals: JournalRequirement[] = [
  { name: "Nature", category: "综合", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 5, notes: "线条图建议600dpi，照片300dpi" },
  { name: "Science", category: "综合", format: ["EPS","PDF","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "15MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "推荐矢量格式EPS" },
  { name: "Cell", category: "生物", format: ["PDF","EPS","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "25MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "接受高分辨率JPEG用于照片" },
  { name: "The Lancet", category: "医学", format: ["TIFF","EPS"], minDPI: 300, maxDPI: 600, colorMode: "CMYK", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 240, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "印刷版需CMYK色彩模式" },
  { name: "NEJM", category: "医学", format: ["EPS","TIFF","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "优先使用矢量格式" },
  { name: "JAMA", category: "医学", format: ["EPS","TIFF","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 86, doubleColumnWidth: 178, maxHeight: 235, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 8, notes: "字体最小8pt" },
  { name: "PNAS", category: "综合", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 87, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "推荐TIFF格式" },
  { name: "PLoS ONE", category: "综合", format: ["TIFF","EPS"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 83, doubleColumnWidth: 173, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "开放获取期刊" },
  { name: "Frontiers", category: "综合", format: ["TIFF","JPEG","PNG","EPS"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 180, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial, Helvetica, Times", minFontSize: 8, notes: "接受PNG和JPEG" },
  { name: "Elsevier (通用)", category: "出版商", format: ["TIFF","EPS","PDF","JPEG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 90, doubleColumnWidth: 190, maxHeight: 240, maxFileSize: "10MB", fontFamily: "Arial, Times New Roman", minFontSize: 6, notes: "不同子刊可能有差异" },
  { name: "Springer Nature (通用)", category: "出版商", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "适用于大部分Springer子刊" },
  { name: "Wiley (通用)", category: "出版商", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "适用于大部分Wiley子刊" },
  { name: "ACS (美国化学学会)", category: "化学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "TOC图形要求 8.47cm × 4.76cm" },
  { name: "RSC (英国皇家化学学会)", category: "化学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 7, notes: "图形摘要要求 5cm × 13cm" },
  { name: "IEEE", category: "工程", format: ["TIFF","EPS","PDF","PNG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 88, doubleColumnWidth: 181, maxHeight: 234, maxFileSize: "5MB", fontFamily: "Arial, Times New Roman", minFontSize: 8, notes: "线条图推荐600dpi" },
  { name: "BMJ", category: "医学", format: ["TIFF","EPS","JPEG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "5MB", fontFamily: "Arial", minFontSize: 6, notes: "JPEG质量需最高" },
  { name: "Molecular Cell", category: "生物", format: ["PDF","EPS","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "25MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "Cell Press旗下" },
  { name: "Nature Medicine", category: "医学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 5, notes: "同Nature标准" },
  { name: "Nature Communications", category: "综合", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 5, notes: "开放获取，同Nature标准" },
  { name: "Nucleic Acids Research", category: "生物", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 86, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "在线版接受RGB" },
];

export const categories = [...new Set(journals.map(j => j.category))];
