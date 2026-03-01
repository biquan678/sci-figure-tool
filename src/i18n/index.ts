import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      site: { title: 'SCI Pub Tools', subtitle: 'Free online tools for scientific publication — Figure checker, format converter & more', journals_count: '{{count}} journals supported' },
      nav: { home: 'Home', checker: 'Figure Checker', converter: 'Format Converter', blog: 'Blog' },
      home: {
        hero: 'Free Tools for Scientific Publication',
        hero_sub: 'Check figure requirements, convert image formats, and prepare publication-ready figures — all in your browser, no upload needed.',
        checker_title: 'Figure Checker', checker_desc: 'Check if your figures meet journal requirements for DPI, size, format and color mode.',
        converter_title: 'Format Converter', converter_desc: 'Convert between JPG, PNG, TIFF and PDF. Real conversion that opens in any software.',
        privacy: 'All processing happens in your browser. Your images never leave your device.',
      },
      checker: {
        title: 'Figure Format Checker',
        step1: 'Select Target Journal', step1_hint: 'We\'ll show you the exact figure requirements',
        step2: 'Upload Your Figure', step2_hint_ready: 'Upload to check against {{name}} requirements. Non-compliant items will be flagged.',
        step2_hint_wait: 'Please select a target journal first',
        step3: 'Check Results', all_pass: '🎉 All passed!', pass_count: '{{pass}}/{{total}} passed',
        step4: 'Convert & Download', step4_hint: 'Auto-adjust size and DPI, ready for submission',
        search_placeholder: 'Search journal name, e.g. Nature, Lancet, Cell...',
        upload_text: 'Drag & drop your figure here, or click to browse', upload_formats: 'Supports PNG / JPEG / TIFF / SVG · Images stay on your device',
        select_first: 'Please select a journal above first',
        single_col: 'Single column', double_col: 'Double column',
        convert_download: 'Convert & Download',
        converting: 'Converting...',
        selected: 'Selected', clear: 'Clear', back: 'Back to categories',
        format: 'Format', dpi: 'DPI', color: 'Color', size: 'Max size', single_w: 'Single col width', double_w: 'Double col width', font: 'Font', min_font: 'Min font size',
        privacy: '🔒 All processing happens locally in your browser. Images are never uploaded.',
      },
      converter: {
        title: 'Image Format Converter',
        subtitle: 'Convert between JPG, PNG, TIFF and PDF — real format conversion compatible with all editing software',
        upload: 'Upload Image', upload_hint: 'Drag & drop or click to select. Supports JPG, PNG, TIFF, BMP, WebP.',
        output_format: 'Output Format', quality: 'Quality', dpi: 'DPI Setting',
        convert: 'Convert & Download', converting: 'Converting...',
        info: 'Image Info', width: 'Width', height: 'Height', format: 'Format', file_size: 'File Size',
        privacy: '🔒 All conversion happens locally in your browser. Images are never uploaded to any server.',
        tiff_note: 'TIFF files are generated with LZW compression, compatible with Photoshop, ImageJ, GIMP and other software.',
      },
      footer: { desc: 'Free online tools for scientific publication', privacy: 'All images processed locally in your browser — never uploaded to any server.' },
      categories: { '综合顶刊': 'Top Journals', '医学': 'Medicine', '生物': 'Biology', '化学': 'Chemistry', '材料/物理': 'Materials/Physics', '工程/计算机': 'Engineering/CS', '出版商通用': 'Publishers', '开放获取': 'Open Access', '国内期刊': 'Chinese Journals' },
    }
  },
  zh: {
    translation: {
      site: { title: 'SCI Pub Tools', subtitle: '免费在线科研发表工具 — 图片检查、格式转换等', journals_count: '支持 {{count}} 个期刊' },
      nav: { home: '首页', checker: '图片检查', converter: '格式转换', blog: '博客' },
      home: {
        hero: '免费科研发表工具集',
        hero_sub: '检查图片是否符合期刊要求，转换图片格式，准备投稿就绪的论文图片 — 全部在浏览器本地完成，无需上传。',
        checker_title: '图片格式检查', checker_desc: '检查图片是否符合目标期刊的 DPI、尺寸、格式和色彩模式要求。',
        converter_title: '格式转换', converter_desc: '在 JPG、PNG、TIFF 和 PDF 之间互转。真实转换，任何软件都能正常打开。',
        privacy: '所有处理在浏览器本地完成，图片不会离开你的设备。',
      },
      checker: {
        title: '论文图片格式检查',
        step1: '选择目标期刊', step1_hint: '选择后我们会告诉你图片需要满足什么要求',
        step2: '上传论文图片', step2_hint_ready: '上传后自动检查是否符合 {{name}} 的图片要求，不合规的项目会标红提示',
        step2_hint_wait: '请先选择目标期刊',
        step3: '检查结果', all_pass: '🎉 全部通过！', pass_count: '{{pass}}/{{total}} 项通过',
        step4: '一键转换为合规格式', step4_hint: '自动调整尺寸和DPI，下载后可直接用于投稿',
        search_placeholder: '输入期刊名称搜索，如 Nature、中华医学、Lancet...',
        upload_text: '拖拽图片到这里，或点击上传', upload_formats: '支持 PNG / JPEG / TIFF / SVG · 图片不会上传到服务器',
        select_first: '请先在上方选择目标期刊',
        single_col: '单栏', double_col: '双栏',
        convert_download: '转换并下载',
        converting: '转换中...',
        selected: '已选期刊', clear: '清除', back: '返回全部分类',
        format: '格式', dpi: 'DPI', color: '色彩', size: '大小', single_w: '单栏宽', double_w: '双栏宽', font: '字体', min_font: '最小字号',
        privacy: '🔒 所有处理在浏览器本地完成，图片不会上传到任何服务器',
      },
      converter: {
        title: '图片格式转换',
        subtitle: '在 JPG、PNG、TIFF 和 PDF 之间互转 — 真实格式转换，兼容所有编辑软件',
        upload: '上传图片', upload_hint: '拖拽或点击选择。支持 JPG、PNG、TIFF、BMP、WebP。',
        output_format: '输出格式', quality: '质量', dpi: 'DPI 设置',
        convert: '转换并下载', converting: '转换中...',
        info: '图片信息', width: '宽度', height: '高度', format: '格式', file_size: '文件大小',
        privacy: '🔒 所有转换在浏览器本地完成，图片不会上传到任何服务器。',
        tiff_note: 'TIFF 文件使用 LZW 压缩生成，兼容 Photoshop、ImageJ、GIMP 等软件。',
      },
      footer: { desc: '免费在线科研发表工具', privacy: '所有图片在浏览器本地处理，不上传服务器，保护您的数据隐私。' },
      categories: { '综合顶刊': '综合顶刊', '医学': '医学', '生物': '生物', '化学': '化学', '材料/物理': '材料/物理', '工程/计算机': '工程/计算机', '出版商通用': '出版商通用', '开放获取': '开放获取', '国内期刊': '国内期刊' },
    }
  },
  ja: {
    translation: {
      site: { title: 'SCI Pub Tools', subtitle: '科学論文投稿のための無料オンラインツール', journals_count: '{{count}}誌対応' },
      nav: { home: 'ホーム', checker: '図チェッカー', converter: 'フォーマット変換', blog: 'ブログ' },
      home: {
        hero: '科学論文投稿のための無料ツール',
        hero_sub: '図の要件チェック、画像フォーマット変換、投稿用図の準備 — すべてブラウザ上で完結。',
        checker_title: '図フォーマットチェッカー', checker_desc: 'DPI、サイズ、フォーマット、カラーモードがジャーナルの要件を満たしているか確認。',
        converter_title: 'フォーマット変換', converter_desc: 'JPG、PNG、TIFF、PDF間の変換。あらゆるソフトウェアで開ける本物の変換。',
        privacy: 'すべての処理はブラウザ上で行われます。画像がデバイスから離れることはありません。',
      },
      checker: {
        title: '論文図フォーマットチェッカー',
        step1: '対象ジャーナルを選択', step1_hint: '図の要件をお知らせします',
        step2: '図をアップロード', step2_hint_ready: 'アップロードして{{name}}の要件をチェック',
        step2_hint_wait: '先にジャーナルを選択してください',
        step3: 'チェック結果', all_pass: '🎉 すべて合格！', pass_count: '{{pass}}/{{total}} 合格',
        step4: '変換＆ダウンロード', step4_hint: 'サイズとDPIを自動調整',
        search_placeholder: 'ジャーナル名を検索...',
        upload_text: 'ここに画像をドラッグ＆ドロップ、またはクリック', upload_formats: 'PNG / JPEG / TIFF / SVG対応',
        select_first: '先にジャーナルを選択してください',
        single_col: 'シングルカラム', double_col: 'ダブルカラム',
        convert_download: '変換＆ダウンロード', converting: '変換中...',
        selected: '選択済み', clear: 'クリア', back: 'カテゴリに戻る',
        format: 'フォーマット', dpi: 'DPI', color: 'カラー', size: 'サイズ', single_w: '単カラム幅', double_w: '双カラム幅', font: 'フォント', min_font: '最小フォントサイズ',
        privacy: '🔒 すべての処理はブラウザ上で行われます。',
      },
      converter: {
        title: '画像フォーマット変換',
        subtitle: 'JPG、PNG、TIFF、PDF間の変換 — すべてのソフトウェアで開ける本物の変換',
        upload: '画像をアップロード', upload_hint: 'ドラッグ＆ドロップまたはクリック。',
        output_format: '出力フォーマット', quality: '品質', dpi: 'DPI設定',
        convert: '変換＆ダウンロード', converting: '変換中...',
        info: '画像情報', width: '幅', height: '高さ', format: 'フォーマット', file_size: 'ファイルサイズ',
        privacy: '🔒 すべての変換はブラウザ上で行われます。',
        tiff_note: 'TIFFファイルはLZW圧縮で生成され、Photoshop、ImageJ、GIMPなどと互換性があります。',
      },
      footer: { desc: '科学論文投稿のための無料ツール', privacy: 'すべての画像はブラウザ上で処理されます。' },
      categories: { '综合顶刊': 'トップジャーナル', '医学': '医学', '生物': '生物学', '化学': '化学', '材料/物理': '材料/物理', '工程/计算机': '工学/CS', '出版商通用': '出版社共通', '开放获取': 'オープンアクセス', '国内期刊': '中国ジャーナル' },
    }
  }
};

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
const browserLang = typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLang || (['zh', 'ja'].includes(browserLang) ? browserLang : 'en'),
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
