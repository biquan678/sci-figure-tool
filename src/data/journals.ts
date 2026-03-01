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
  // ===== 综合顶刊 =====
  { name: "Nature", category: "综合顶刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "官方要求：字体Helvetica或Arial，面板标签8pt粗体，最小文字5pt。线条图建议600dpi" },
  { name: "Science", category: "综合顶刊", format: ["EPS","PDF","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "15MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "推荐矢量格式EPS，照片300dpi，线条图600dpi" },
  { name: "Cell", category: "综合顶刊", format: ["PDF","EPS","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "25MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "Cell Press标准，接受高分辨率JPEG用于照片" },
  { name: "PNAS", category: "综合顶刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 87, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "推荐TIFF格式，LZW压缩" },
  { name: "Nature Communications", category: "综合顶刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "开放获取，同Nature标准" },
  { name: "Science Advances", category: "综合顶刊", format: ["EPS","PDF","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "15MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "同Science标准，开放获取" },

  // ===== 医学 =====
  { name: "The Lancet", category: "医学", format: ["TIFF","EPS"], minDPI: 300, maxDPI: 600, colorMode: "CMYK", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 240, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "印刷版需CMYK色彩模式" },
  { name: "NEJM", category: "医学", format: ["EPS","TIFF","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "优先使用矢量格式" },
  { name: "JAMA", category: "医学", format: ["EPS","TIFF","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 86, doubleColumnWidth: 178, maxHeight: 235, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 8, notes: "字体最小8pt，JAMA Network通用标准" },
  { name: "BMJ", category: "医学", format: ["TIFF","EPS","JPEG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "5MB", fontFamily: "Arial", minFontSize: 6, notes: "JPEG质量需最高" },
  { name: "Nature Medicine", category: "医学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "同Nature标准" },
  { name: "The Lancet Oncology", category: "医学", format: ["TIFF","EPS"], minDPI: 300, maxDPI: 600, colorMode: "CMYK", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 240, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "同Lancet标准" },
  { name: "Annals of Internal Medicine", category: "医学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "ACP旗下" },
  { name: "Circulation", category: "医学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 86, doubleColumnWidth: 178, maxHeight: 235, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "AHA旗下心血管顶刊" },
  { name: "Journal of Clinical Oncology", category: "医学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 86, doubleColumnWidth: 178, maxHeight: 235, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "ASCO旗下肿瘤顶刊" },

  // ===== 生物 =====
  { name: "Molecular Cell", category: "生物", format: ["PDF","EPS","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "25MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "Cell Press旗下" },
  { name: "Nucleic Acids Research", category: "生物", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 86, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "Oxford Academic旗下" },
  { name: "Nature Cell Biology", category: "生物", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "同Nature标准" },
  { name: "Nature Genetics", category: "生物", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "同Nature标准" },
  { name: "Nature Biotechnology", category: "生物", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "同Nature标准" },
  { name: "Cell Reports", category: "生物", format: ["PDF","EPS","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "25MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "Cell Press旗下，开放获取" },
  { name: "eLife", category: "生物", format: ["TIFF","EPS","PDF","PNG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "开放获取，接受PNG" },
  { name: "EMBO Journal", category: "生物", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "EMBO Press旗下" },

  // ===== 化学 =====
  { name: "ACS (美国化学学会)", category: "化学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "TOC图形要求 8.47cm × 4.76cm" },
  { name: "RSC (英国皇家化学学会)", category: "化学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 7, notes: "图形摘要要求 5cm × 13cm" },
  { name: "Angewandte Chemie", category: "化学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "Wiley旗下化学顶刊" },
  { name: "Chemical Reviews", category: "化学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "ACS旗下综述期刊" },
  { name: "Nature Chemistry", category: "化学", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "同Nature标准" },

  // ===== 材料/物理 =====
  { name: "Nature Materials", category: "材料/物理", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "同Nature标准" },
  { name: "Nature Energy", category: "材料/物理", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "同Nature标准" },
  { name: "Advanced Materials", category: "材料/物理", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "Wiley旗下材料顶刊" },
  { name: "ACS Nano", category: "材料/物理", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "ACS旗下纳米顶刊" },
  { name: "Physical Review Letters", category: "材料/物理", format: ["EPS","PDF","PNG","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 86, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "5MB", fontFamily: "Times, Helvetica", minFontSize: 6, notes: "APS旗下，推荐EPS矢量格式" },

  // ===== 工程/计算机 =====
  { name: "IEEE", category: "工程/计算机", format: ["TIFF","EPS","PDF","PNG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 88, doubleColumnWidth: 181, maxHeight: 234, maxFileSize: "5MB", fontFamily: "Arial, Times New Roman", minFontSize: 8, notes: "线条图推荐600dpi" },
  { name: "ACM", category: "工程/计算机", format: ["PDF","EPS","PNG","TIFF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 6, notes: "推荐矢量PDF格式" },

  // ===== 出版商通用 =====
  { name: "Elsevier (通用)", category: "出版商通用", format: ["TIFF","EPS","PDF","JPEG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 90, doubleColumnWidth: 190, maxHeight: 240, maxFileSize: "10MB", fontFamily: "Arial, Times New Roman", minFontSize: 6, notes: "适用于大部分Elsevier子刊，线条图1000dpi，组合图500dpi，照片300dpi" },
  { name: "Springer Nature (通用)", category: "出版商通用", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "适用于大部分Springer子刊" },
  { name: "Wiley (通用)", category: "出版商通用", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "适用于大部分Wiley子刊" },
  { name: "Taylor & Francis (通用)", category: "出版商通用", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "适用于大部分T&F子刊" },
  { name: "Oxford Academic (通用)", category: "出版商通用", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "适用于大部分OUP子刊" },
  { name: "Cambridge University Press", category: "出版商通用", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial, Helvetica", minFontSize: 6, notes: "适用于大部分CUP子刊" },

  // ===== 开放获取 =====
  { name: "PLoS ONE", category: "开放获取", format: ["TIFF","EPS"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 83, doubleColumnWidth: 173, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "官方要求：TIFF或EPS，单栏13.2cm，1.5栏15.7cm，双栏17.35cm" },
  { name: "PLoS Biology", category: "开放获取", format: ["TIFF","EPS"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 83, doubleColumnWidth: 173, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "同PLoS标准" },
  { name: "PLoS Medicine", category: "开放获取", format: ["TIFF","EPS"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 83, doubleColumnWidth: 173, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "同PLoS标准" },
  { name: "Frontiers", category: "开放获取", format: ["TIFF","JPEG","PNG","EPS"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 180, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial, Helvetica, Times", minFontSize: 8, notes: "接受PNG和JPEG，字体最小8pt" },
  { name: "MDPI (通用)", category: "开放获取", format: ["TIFF","PNG","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 180, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "适用于所有MDPI期刊（如Molecules, Sensors, Materials等）" },
  { name: "Scientific Reports", category: "开放获取", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "Nature旗下开放获取，同Nature标准" },

  // ===== 国内期刊 =====
  { name: "中国科学", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 80, doubleColumnWidth: 170, maxHeight: 230, maxFileSize: "10MB", fontFamily: "宋体, Arial", minFontSize: 6, notes: "中英文版均适用，推荐TIFF格式" },
  { name: "科学通报", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 80, doubleColumnWidth: 170, maxHeight: 230, maxFileSize: "10MB", fontFamily: "宋体, Arial", minFontSize: 6, notes: "中国科学院主办" },
  { name: "化学学报", category: "国内期刊", format: ["TIFF","EPS","PDF","JPEG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 80, doubleColumnWidth: 170, maxHeight: 230, maxFileSize: "5MB", fontFamily: "宋体, Arial", minFontSize: 6, notes: "中国化学会主办" },
  { name: "物理学报", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 80, doubleColumnWidth: 170, maxHeight: 230, maxFileSize: "5MB", fontFamily: "宋体, Times New Roman", minFontSize: 6, notes: "中国物理学会主办" },
  { name: "生物化学与生物物理学报", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 80, doubleColumnWidth: 170, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "Acta Biochimica et Biophysica Sinica，Oxford出版" },
  { name: "中华医学杂志", category: "国内期刊", format: ["TIFF","JPEG","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 75, doubleColumnWidth: 160, maxHeight: 220, maxFileSize: "5MB", fontFamily: "宋体, Arial", minFontSize: 6, notes: "中华医学会主办，国内医学权威期刊" },
  { name: "中华外科杂志", category: "国内期刊", format: ["TIFF","JPEG","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 75, doubleColumnWidth: 160, maxHeight: 220, maxFileSize: "5MB", fontFamily: "宋体, Arial", minFontSize: 6, notes: "中华医学会外科学分会主办" },
  { name: "中华内科杂志", category: "国内期刊", format: ["TIFF","JPEG","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 75, doubleColumnWidth: 160, maxHeight: 220, maxFileSize: "5MB", fontFamily: "宋体, Arial", minFontSize: 6, notes: "中华医学会内科学分会主办" },
  { name: "药学学报", category: "国内期刊", format: ["TIFF","EPS","PDF","JPEG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 80, doubleColumnWidth: 170, maxHeight: 230, maxFileSize: "5MB", fontFamily: "宋体, Arial", minFontSize: 6, notes: "中国药学会主办" },
  { name: "中国药理学通报", category: "国内期刊", format: ["TIFF","JPEG","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 75, doubleColumnWidth: 160, maxHeight: 220, maxFileSize: "5MB", fontFamily: "宋体, Arial", minFontSize: 6, notes: "中国药理学会主办" },
  { name: "National Science Review", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 86, doubleColumnWidth: 178, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "中国科学院英文综述旗舰刊，Oxford出版" },
  { name: "Science Bulletin", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "中国科学院英文版，Elsevier出版" },
  { name: "Science China (各辑)", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "中国科学英文版各辑通用，Springer出版" },
  { name: "Cell Research", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "中科院上海生化细胞所主办，Nature标准" },
  { name: "Protein & Cell", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "中国生物物理学会主办，Oxford出版" },
  { name: "Signal Transduction and Targeted Therapy", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 89, doubleColumnWidth: 183, maxHeight: 247, maxFileSize: "10MB", fontFamily: "Helvetica, Arial", minFontSize: 5, notes: "四川大学主办，Nature标准" },
  { name: "Engineering", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 85, doubleColumnWidth: 174, maxHeight: 230, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "中国工程院旗舰刊，Elsevier出版" },
  { name: "Nano Research", category: "国内期刊", format: ["TIFF","EPS","PDF"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 84, doubleColumnWidth: 174, maxHeight: 234, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "清华大学主办，Springer出版" },
  { name: "Journal of Energy Chemistry", category: "国内期刊", format: ["TIFF","EPS","PDF","JPEG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 90, doubleColumnWidth: 190, maxHeight: 240, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "中科院大连化物所主办，Elsevier出版" },
  { name: "Acta Pharmaceutica Sinica B", category: "国内期刊", format: ["TIFF","EPS","PDF","JPEG"], minDPI: 300, maxDPI: 600, colorMode: "RGB", singleColumnWidth: 90, doubleColumnWidth: 190, maxHeight: 240, maxFileSize: "10MB", fontFamily: "Arial", minFontSize: 6, notes: "中国药学会主办，Elsevier出版" },
];

export const categories = [...new Set(journals.map(j => j.category))];
