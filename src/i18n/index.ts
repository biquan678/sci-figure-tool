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
        latest_articles: 'Latest Articles',
      },
      blog: { subtitle: 'Guides, tips and best practices for scientific figure preparation and journal submission.' },
      faq: {
        title: 'Frequently Asked Questions',
        q1: 'Is this tool really free?', a1: 'Yes, completely free. No registration, no hidden fees, no watermarks. All tools are open to everyone.',
        q2: 'Are my images uploaded to a server?', a2: 'No. All image processing happens entirely in your browser using JavaScript. Your images never leave your device. We have zero access to your data.',
        q3: 'What image formats are supported?', a3: 'For checking: JPG, PNG, TIFF, SVG, BMP, WebP. For conversion: JPG, PNG, TIFF (with LZW compression), and PDF. The TIFF output is compatible with Photoshop, ImageJ, GIMP and other professional software.',
        q4: 'How many journals are supported?', a4: 'We currently support 60+ journals including Nature, Science, Cell, Lancet, NEJM, JAMA, and major Chinese journals like Cell Research and Science Bulletin. We regularly add more.',
        q5: 'Can I convert JPG/PNG to TIFF for journal submission?', a5: 'Yes. Our converter creates real TIFF files with LZW compression that are accepted by all major journals. The output opens correctly in Photoshop, ImageJ, and GIMP.',
        q6: 'What DPI should I use for my figures?', a6: 'Most journals require 300 DPI minimum for photographs and 600 DPI for line art (graphs, diagrams). Check your specific journal requirements using our Figure Checker tool.',
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
        convert_download: 'Convert & Download', converting: 'Converting...',
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
      bookmark: { title: 'Bookmark this tool for your next submission!', desktop: 'Press {{shortcut}} to bookmark', mobile: 'Tap Share → Add to Home Screen' },
      categories: { '综合顶刊': 'Top Journals', '医学': 'Medicine', '生物': 'Biology', '化学': 'Chemistry', '材料/物理': 'Materials/Physics', '工程/计算机': 'Engineering/CS', '出版商通用': 'Publishers', '开放获取': 'Open Access', '国内期刊': 'Chinese Journals', '环境/地球': 'Environment/Earth', '社会科学': 'Social Sciences', '农业/食品': 'Agriculture/Food', '药学/临床': 'Pharma/Clinical' },
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
        latest_articles: '最新文章',
      },
      blog: { subtitle: '科研图片准备和期刊投稿的指南、技巧和最佳实践。' },
      faq: {
        title: '常见问题',
        q1: '这个工具真的免费吗？', a1: '是的，完全免费。无需注册，没有隐藏费用，没有水印。所有工具对所有人开放。',
        q2: '我的图片会上传到服务器吗？', a2: '不会。所有图片处理完全在你的浏览器中通过 JavaScript 完成。图片永远不会离开你的设备。我们无法访问你的任何数据。',
        q3: '支持哪些图片格式？', a3: '检查支持：JPG、PNG、TIFF、SVG、BMP、WebP。转换支持：JPG、PNG、TIFF（LZW压缩）和 PDF。TIFF 输出兼容 Photoshop、ImageJ、GIMP 等专业软件。',
        q4: '支持多少个期刊？', a4: '目前支持 60+ 个期刊，包括 Nature、Science、Cell、Lancet、NEJM、JAMA，以及 Cell Research、Science Bulletin 等国内主要 SCI 期刊。我们会持续添加更多。',
        q5: '可以将 JPG/PNG 转换为 ？', a5: '可以。我们的转换器生成真实的 TIFF 文件（LZW压缩），被所有主要期刊接受。输出文件可以在 Photoshop、ImageJ、GIMP 中正常打开。',
        q6: '图片应该用多少 DPI？', a6: '大多数期刊要求照片最低 300 DPI，线条图（图表、示意图）600 DPI。使用我们的图片检查工具可以查看具体期刊的要求。',
      },
      checker: {
        title: '论文图片格式检查',
        step1: '选择目标期刊', step1_hint: '选择后我们会告诉你图片需要满足什么要求',
        step2: '上传论文图片', step2_hint_ready: '上传后自动检查是否符合 {{name}} 的图片要求，不合规的项目会标红提示',
        step2_hint_wait: '请先选择目标期刊',
        step3: '检查结果', all_pass: '🎉 全部通过！', pass_count: '{{pass}}/{{total}} 项通过',
        step4: '一键转换为合规格式', step4_hint: '自动调整尺寸和DPI，下载后可直接用于投稿',
        search_placeholder: '输入期刊名称搜索，Nature、中华医学、Lancet...',
        upload_text: '拖拽图片到这里，或点击上传', upload_formats: '支持 PNG / JPEG / TIFF / SVG · 图片不会上传到服务器',
        select_first: '请先在上方选择目标期刊',
        single_col: '单栏', double_col: '双栏',
        convert_download: '转换并下载', converting: '转换中...',
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
      bookmark: { title: '收藏本站，下次投稿随时用！', desktop: '按 {{shortcut}} 即可收藏', mobile: '点击分享 → 添加到主屏幕' },
      categories: { '综合顶刊': '综合顶刊', '医学': '医学', '生物': '生物', '化学': '化学', '材料/物理': '材料/物理', '工程/计算机': '工程/计算机', '出版商通用': '出版商通用', '开放获取': '开放获取', '国内期刊': '国内期刊', '环境/地球': '环境/地球', '社会科学': '社会科学', '农业/食品': '农业/食品', '药学/临床': '药学/临床' },
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
        latest_articles: '最新記事',
      },
      blog: { subtitle: '科学論文の図の準備とジャーナル投稿のガイド、ヒント、ベストプラクティス。' },
      faq: {
        title: 'よくある質問',
        q1: 'このツールは本当に無料ですか？', a1: 'はい、完全に無料です。登録不要、隠れた費用なし、透かしなし。',
        q2: '画像はサーバーにアップロードされますか？', a2: 'いいえ。すべての画像処理はブラウザ上のJavaScriptで行われます。画像がデバイスから離れることはありません。',
        q3: 'どの画像フォーマットに対応していますか？', a3: 'チェック：JPG、PNG、TIFF、SVG、BMP、WebP。変換：JPG、PNG、TIFF（LZW圧縮）、PDF。TIFF出力はPhotoshop、ImageJ、GIMPと互換性があります。',
        q4: '何誌に対応していますか？', a4: 'Nature、Science、Cell、Lancetなど60誌以上に対応。定期的に追加しています。',
        q5: 'JPG/PNGをTIFFに変換して投稿できますか？', a5: 'はい。LZW圧縮の本物のTIFFファイルを生成します。主要なジャーナルすべてで受け入れられます。',
        q6: '図のDPIはいくつにすべきですか？', a6: 'ほとんどのジャーナルは写真に300 DPI以上、線画に600 DPIを要求します。図チェッカーで具体的な要件を確認できます。',
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
      bookmark: { title: 'ブックマークして次の投稿に備えましょう！', desktop: '{{shortcut}} でブックマーク', mobile: '共有 → ホーム画面に追加' },
      categories: { '综合顶刊': 'トップジャーナル', '医学': '医学', '生物': '生物学', '化学': '化学', '材料/物理': '材料/物理', '工程/计算机': '工学/CS', '出版商通用': '出版社共通', '开放获取': 'オープンアクセス', '国内期刊': '中国ジャーナル', '环境/地球': '環境/地球', '社会科学': '社会科学', '农业/食品': '農業/食品', '药学/临床': '薬学/臨床' },
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
