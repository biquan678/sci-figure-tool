import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      site: {
        title: 'SCI Pub Tools',
        subtitle: 'Free online tools for scientific publication — Figure checker, format converter & more',
        journals_count: '{{count}} journals supported'
      },
      nav: { home: 'Home', journals: 'Journals', checker: 'Figure Checker', converter: 'Format Converter', blog: 'Blog' },
      home: {
        hero: 'Free Tools for Scientific Publication',
        hero_sub: 'Check figure requirements, convert image formats, and prepare publication-ready figures — all in your browser, no upload needed.',
        checker_title: 'Figure Checker',
        checker_desc: 'Check if your figures meet journal requirements for DPI, size, format and color mode.',
        converter_title: 'Format Converter',
        converter_desc: 'Convert between JPG, PNG, TIFF and PDF. Real conversion that opens in any software.',
        privacy: 'All processing happens in your browser. Your images never leave your device.',
        latest_articles: 'Latest Articles',
        intro_title: 'Journal figure requirements, checker and converter in one place',
        intro_p1: 'SciPubTools is built for researchers who need to prepare publication-ready figures without bouncing between multiple websites, manual checklists and desktop tools.',
        intro_p2: 'You can validate figure dimensions, DPI, file formats and panel readiness for major journals such as Nature, Science, Cell, Lancet, Elsevier, ACS and IEEE, then convert common formats like TIFF, PNG, JPG and PDF locally in the browser.',
        intro_p3: 'The goal is simple: save time, reduce journal submission errors and keep figure preparation private by processing files locally whenever possible.',
      },
      blog: { subtitle: 'Guides, tips and best practices for scientific figure preparation and journal submission.', not_found: 'Article Not Found', back_home: 'Back to Home', back_blog: 'Back' },
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
        select_first: 'Please select a journal above first', no_results: 'No results found',
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
        convert: 'Convert & Download', converting: 'Converting...', conversion_failed: 'Conversion failed',
        info: 'Image Info', width: 'Width', height: 'Height', format: 'Format', file_size: 'File Size',
        privacy: '🔒 All conversion happens locally in your browser. Images are never uploaded to any server.',
        tiff_note: 'TIFF files are generated with LZW compression, compatible with Photoshop, ImageJ, GIMP and other software.',
      },
      footer: { desc: 'Free online tools for scientific publication', privacy: 'All images processed locally in your browser — never uploaded to any server.' },
      bookmark: { title: 'Bookmark this tool for your next submission!', desktop: 'Press {{shortcut}} to bookmark', mobile: 'Tap Share → Add to Home Screen' },
      categories: { '综合顶刊': 'Top Journals', '医学': 'Medicine', '生物': 'Biology', '化学': 'Chemistry', '材料/物理': 'Materials/Physics', '工程/计算机': 'Engineering/CS', '出版商通用': 'Publishers', '开放获取': 'Open Access', '国内期刊': 'Chinese Journals', '环境/地球': 'Environment/Earth', '社会科学': 'Social Sciences', '农业/食品': 'Agriculture/Food', '药学/临床': 'Pharma/Clinical' },
      journals: {
        title: 'Journal Figure Requirements', subtitle: 'Quick links to common journal figure guidelines and templates.', card_desc: 'Open template & sizing guide',
        all_categories: 'All categories'
      },
      journal: {
        title: '{{name}} Figure Requirements', dpi: 'Recommended DPI', width: 'Common widths', notes: 'Notes',
        template_title: 'One‑click template', template_desc: 'Open a pre‑configured canvas and export at journal‑ready size.', open_template: 'Open Template',
        single_col: 'Single column', double_col: 'Double column', preview: 'Preview', enlarge_preview: 'Open large preview', close: 'Close', go_checker: 'Go to Figure Checker', go_converter: 'Go to Format Converter', mode: 'Mode', height: 'Height',
        nature_notes: 'Preferred formats: TIFF, EPS, PDF. Avoid JPG compression.', cell_notes: 'Vector preferred for line art; use embedded fonts.', science_notes: 'Panels labeled A, B, C. Avoid embedded raster text.', elsevier_notes: 'Color figures in RGB; 300 dpi for photos.', acs_notes: 'Line art 600–1200 dpi; photo 300 dpi.',
      },
      legal: {
        last_updated: 'Last updated: March 1, 2026',
        privacy_title: 'Privacy Policy',
        terms_title: 'Terms of Service',
      },
      privacy: {
        seo_title: 'Privacy Policy — SCI Pub Tools',
        seo_desc: 'Privacy policy for SCI Pub Tools. All image processing happens locally in your browser. We respect your data privacy.',
        s1t: '1. Overview', s1p: 'SCI Pub Tools ("we", "us", "our") operates the website scipubtools.com. This Privacy Policy explains how we collect, use, and protect information when you use our services.',
        s2t: '2. Image Processing — 100% Local', s2p: 'All image processing (figure checking, format conversion, DPI analysis) happens entirely in your browser using client-side JavaScript. Your images are never uploaded to our servers or any third-party servers. We have zero access to your image data.',
        s3t: '3. Information We Collect', s3p: 'We may collect the following non-personal information:', pii: 'We do not collect any personally identifiable information (PII) unless you voluntarily provide it (e.g., contacting us via email).',
        browser: 'Browser type and version', os: 'Operating system', pages: 'Pages visited and time spent', referrer: 'Referring website', lang: 'Language preference', geo: 'Approximate geographic location (country/region level, via IP address)',
        s4t: '4. Cookies and Local Storage', s4p1: 'We use browser local storage to remember your preferences (language selection, visit count for bookmark hints). These are stored only on your device and are not transmitted to our servers.', s4p2: 'Third-party services we use may set their own cookies:', ga: 'Google Analytics — for anonymous usage statistics', adsense: 'Google AdSense — for displaying relevant advertisements', s4p3: 'You can disable cookies in your browser settings at any time.',
        s5t: '5. Third-Party Advertising', s5p1: 'We use Google AdSense to display advertisements. Google may use cookies and web beacons to serve ads based on your prior visits to this website or other websites.', s5p2: 'You may opt out of personalized advertising by visiting Google Ads Settings.',
        s6t: '6. Analytics', s6p: 'We use Google Analytics to understand how visitors use our website. This helps us improve our tools and content. Google Analytics collects anonymous data such as page views, session duration, and device information. No personally identifiable information is collected.',
        s7t: '7. Data Security', s7p: 'Since all image processing is performed locally in your browser, your sensitive research data never leaves your device. Our website is served over HTTPS to ensure secure communication. We do not store, process, or have access to any images you use with our tools.',
        s8t: '8. Children\'s Privacy', s8p: 'Our services are not directed to children under 13. We do not knowingly collect personal information from children.',
        s9t: '9. Changes to This Policy', s9p: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.',
        s10t: '10. Contact', s10p: 'If you have questions about this Privacy Policy, please contact us at:'
      },
      terms: {
        seo_title: 'Terms of Service — SCI Pub Tools',
        seo_desc: 'Terms of service for SCI Pub Tools. Free online tools for scientific figure checking and image format conversion.',
        s1t: '1. Acceptance of Terms', s1p: 'By accessing and using SCI Pub Tools (scipubtools.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.',
        s2t: '2. Description of Service', s2p1: 'SCI Pub Tools provides free, browser-based tools for scientific publication, including:', service1: 'Figure format checker — verify images against journal requirements', service2: 'Image format converter — convert between JPG, PNG, TIFF, and PDF', service3: 'Blog articles — guides and tips for scientific figure preparation', s2p2: 'All image processing is performed locally in your browser. No images are uploaded to our servers.',
        s3t: '3. Free Use', s3p: 'Our tools are provided free of charge. No registration or account is required. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.',
        s4t: '4. Disclaimer of Warranties', s4p1: 'Our tools are provided "as is" and "as available" without warranties of any kind, either express or implied. While we strive for accuracy, we do not guarantee that:', warr1: 'Journal requirements in our database are always up-to-date', warr2: 'Converted images will be accepted by all journals', warr3: 'The service will be uninterrupted or error-free', s4p2: 'Always verify your figures against the latest journal guidelines before submission.',
        s5t: '5. Limitation of Liability', s5p: 'SCI Pub Tools shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to manuscript rejection due to figure formatting issues.',
        s6t: '6. Intellectual Property', s6p1: 'The content, design, and code of SCI Pub Tools are protected by copyright. You may use our tools freely for personal and commercial purposes. You may not copy, modify, or redistribute our website code without permission.', s6p2: 'Images you process using our tools remain entirely your property. We claim no rights over your content.',
        s7t: '7. Third-Party Services', s7p: 'Our website may contain links to third-party websites and uses third-party services (Google Analytics, Google AdSense). We are not responsible for the content or practices of these third parties. Your use of third-party services is governed by their respective terms and privacy policies.',
        s8t: '8. Advertising', s8p: 'We display advertisements through Google AdSense to support the free operation of our tools. Ad content is determined by Google and may be personalized based on your browsing history. You can manage ad personalization through your Google account settings.',
        s9t: '9. Changes to Terms', s9p: 'We reserve the right to update these Terms of Service at any time. Continued use of the service after changes constitutes acceptance of the new terms.',
        s10t: '10. Contact', s10p: 'For questions about these Terms, contact us at:'
      }
    }
  },
  zh: {
    translation: {
      site: { title: 'SCI Pub Tools', subtitle: '免费在线科研发表工具 — 图片检查、格式转换等', journals_count: '支持 {{count}} 个期刊' },
      nav: { home: '首页', journals: '期刊规范', checker: '图片检查', converter: '格式转换', blog: '博客' },
      home: {
        hero: '免费科研发表工具集', hero_sub: '检查图片是否符合期刊要求，转换图片格式，准备投稿就绪的论文图片 — 全部在浏览器本地完成，无需上传。',
        checker_title: '图片格式检查', checker_desc: '检查图片是否符合目标期刊的 DPI、尺寸、格式和色彩模式要求。',
        converter_title: '格式转换', converter_desc: '在 JPG、PNG、TIFF 和 PDF 之间互转。真实转换，任何软件都能正常打开。',
        privacy: '所有处理在浏览器本地完成，图片不会离开你的设备。', latest_articles: '最新文章',
        intro_title: '期刊图片要求、检查与转换，一站式完成', intro_p1: 'SciPubTools 面向需要高效准备投稿图片的研究者，减少在多个网站、人工清单和桌面软件之间来回切换。', intro_p2: '你可以检查 Nature、Science、Cell、Lancet、Elsevier、ACS、IEEE 等主流期刊的尺寸、DPI、格式和面板准备情况，并在浏览器本地完成 TIFF、PNG、JPG、PDF 的转换。', intro_p3: '目标很简单：节省时间、减少因图片规范问题带来的投稿错误，并尽可能通过本地处理保护科研数据隐私。',
      },
      blog: { subtitle: '科研图片准备和期刊投稿的指南、技巧和最佳实践。', not_found: '未找到文章', back_home: '返回首页', back_blog: '返回博客' },
      faq: {
        title: '常见问题', q1: '这个工具真的免费吗？', a1: '是的，完全免费。无需注册，没有隐藏费用，没有水印。所有工具对所有人开放。', q2: '我的图片会上传到服务器吗？', a2: '不会。所有图片处理完全在你的浏览器中通过 JavaScript 完成。图片永远不会离开你的设备。我们无法访问你的任何数据。', q3: '支持哪些图片格式？', a3: '检查支持：JPG、PNG、TIFF、SVG、BMP、WebP。转换支持：JPG、PNG、TIFF（LZW压缩）和 PDF。TIFF 输出兼容 Photoshop、ImageJ、GIMP 等专业软件。', q4: '支持多少个期刊？', a4: '目前支持 60+ 个期刊，包括 Nature、Science、Cell、Lancet、NEJM、JAMA，以及 Cell Research、Science Bulletin 等国内主要 SCI 期刊。我们会持续添加更多。', q5: '可以将 JPG/PNG 转换为 TIFF 用于投稿吗？', a5: '可以。我们的转换器生成真实的 TIFF 文件（LZW压缩），被所有主要期刊接受。输出文件可以在 Photoshop、ImageJ、GIMP 中正常打开。', q6: '图片应该用多少 DPI？', a6: '大多数期刊要求照片最低 300 DPI，线条图（图表、示意图）600 DPI。使用我们的图片检查工具可以查看具体期刊的要求。',
      },
      checker: {
        title: '论文图片格式检查', step1: '选择目标期刊', step1_hint: '选择后我们会告诉你图片需要满足什么要求', step2: '上传论文图片', step2_hint_ready: '上传后自动检查是否符合 {{name}} 的图片要求，不合规的项目会标红提示', step2_hint_wait: '请先选择目标期刊', step3: '检查结果', all_pass: '🎉 全部通过！', pass_count: '{{pass}}/{{total}} 项通过', step4: '一键转换为合规格式', step4_hint: '自动调整尺寸和DPI，下载后可直接用于投稿', search_placeholder: '输入期刊名称搜索，Nature、中华医学、Lancet...', upload_text: '拖拽图片到这里，或点击上传', upload_formats: '支持 PNG / JPEG / TIFF / SVG · 图片不会上传到服务器', select_first: '请先在上方选择目标期刊', no_results: '没有找到结果', single_col: '单栏', double_col: '双栏', convert_download: '转换并下载', converting: '转换中...', selected: '已选期刊', clear: '清除', back: '返回全部分类', format: '格式', dpi: 'DPI', color: '色彩', size: '大小', single_w: '单栏宽', double_w: '双栏宽', font: '字体', min_font: '最小字号', privacy: '🔒 所有处理在浏览器本地完成，图片不会上传到任何服务器',
      },
      converter: {
        title: '图片格式转换', subtitle: '在 JPG、PNG、TIFF 和 PDF 之间互转 — 真实格式转换，兼容所有编辑软件', upload: '上传图片', upload_hint: '拖拽或点击选择。支持 JPG、PNG、TIFF、BMP、WebP。', output_format: '输出格式', quality: '质量', dpi: 'DPI 设置', convert: '转换并下载', converting: '转换中...', conversion_failed: '转换失败', info: '图片信息', width: '宽度', height: '高度', format: '格式', file_size: '文件大小', privacy: '🔒 所有转换在浏览器本地完成，图片不会上传到任何服务器。', tiff_note: 'TIFF 文件使用 LZW 压缩生成，兼容 Photoshop、ImageJ、GIMP 等软件。',
      },
      footer: { desc: '免费在线科研发表工具', privacy: '所有图片在浏览器本地处理，不上传服务器，保护您的数据隐私。' },
      bookmark: { title: '收藏本站，下次投稿随时用！', desktop: '按 {{shortcut}} 即可收藏', mobile: '点击分享 → 添加到主屏幕' },
      categories: { '综合顶刊': '综合顶刊', '医学': '医学', '生物': '生物', '化学': '化学', '材料/物理': '材料/物理', '工程/计算机': '工程/计算机', '出版商通用': '出版商通用', '开放获取': '开放获取', '国内期刊': '国内期刊', '环境/地球': '环境/地球', '社会科学': '社会科学', '农业/食品': '农业/食品', '药学/临床': '药学/临床' },
      journals: { title: '期刊图片规范', subtitle: '常见期刊图片要求与模板入口。', card_desc: '打开模板与尺寸指南', all_categories: '全部分类' },
      journal: { title: '{{name}} 图片要求', dpi: '推荐 DPI', width: '常用宽度', notes: '备注', template_title: '一键模板', template_desc: '打开预设画布并按期刊尺寸导出。', open_template: '打开模板', single_col: '单栏', double_col: '双栏', preview: '预览', enlarge_preview: '放大预览', close: '关闭', go_checker: '前往图片检查', go_converter: '前往格式转换', mode: '模式', height: '高度', nature_notes: '建议格式：TIFF/EPS/PDF，避免 JPG 压缩。', cell_notes: '线稿优先用矢量，字体需嵌入。', science_notes: '面板标注 A/B/C，避免栅格文字。', elsevier_notes: '彩色图用 RGB；照片 300 dpi。', acs_notes: '线稿 600–1200 dpi；照片 300 dpi。' },
      legal: { last_updated: '最后更新：2026-03-01', privacy_title: '隐私政策', terms_title: '服务条款' },
      privacy: { seo_title: '隐私政策 — SCI Pub Tools', seo_desc: 'SCI Pub Tools 隐私政策。所有图片处理均在浏览器本地完成，我们重视你的数据隐私。', s1t: '1. 概述', s1p: 'SCI Pub Tools（“我们”）运营 scipubtools.com。本隐私政策说明你在使用我们的服务时，我们如何收集、使用和保护信息。', s2t: '2. 图片处理——100% 本地完成', s2p: '所有图片处理（图片检查、格式转换、DPI 分析）都在你的浏览器中通过前端 JavaScript 完成。你的图片不会上传到我们的服务器或任何第三方服务器。我们无法访问你的图片数据。', s3t: '3. 我们收集的信息', s3p: '我们可能收集以下非个人信息：', pii: '除非你主动提供（例如通过电子邮件联系我们），否则我们不会收集任何可识别个人身份的信息。', browser: '浏览器类型和版本', os: '操作系统', pages: '访问页面和停留时间', referrer: '来源网站', lang: '语言偏好', geo: '大致地理位置（国家/地区级别，通过 IP 推断）', s4t: '4. Cookie 与本地存储', s4p1: '我们使用浏览器本地存储来记住你的偏好设置（语言选择、收藏提示次数等）。这些数据仅保存在你的设备上，不会传输到我们的服务器。', s4p2: '我们使用的第三方服务可能会设置其自己的 Cookie：', ga: 'Google Analytics — 匿名使用统计', adsense: 'Google AdSense — 展示相关广告', s4p3: '你可以随时在浏览器设置中禁用 Cookie。', s5t: '5. 第三方广告', s5p1: '我们使用 Google AdSense 展示广告。Google 可能使用 Cookie 和网络信标，根据你此前访问本网站或其他网站的记录展示广告。', s5p2: '你可以访问 Google Ads Settings 关闭个性化广告。', s6t: '6. 分析统计', s6p: '我们使用 Google Analytics 了解访客如何使用网站，以帮助改进工具和内容。Google Analytics 收集页面浏览量、会话时长、设备信息等匿名数据，不收集可识别个人身份的信息。', s7t: '7. 数据安全', s7p: '由于所有图片处理都在浏览器本地完成，你的敏感科研数据不会离开设备。网站通过 HTTPS 提供服务，确保通信安全。我们不会存储、处理或访问你使用工具时的任何图片。', s8t: '8. 儿童隐私', s8p: '我们的服务不面向 13 岁以下儿童，我们不会故意收集儿童个人信息。', s9t: '9. 政策变更', s9p: '我们可能会不时更新本隐私政策。变更会发布在本页，并更新修订日期。', s10t: '10. 联系方式', s10p: '如果你对本隐私政策有任何疑问，请联系：' },
      terms: { seo_title: '服务条款 — SCI Pub Tools', seo_desc: 'SCI Pub Tools 服务条款。免费在线科研图片检查与格式转换工具。', s1t: '1. 条款接受', s1p: '访问和使用 SCI Pub Tools（scipubtools.com）即表示你同意受本服务条款约束。如果你不同意，请不要使用我们的服务。', s2t: '2. 服务说明', s2p1: 'SCI Pub Tools 提供免费的浏览器端科研发表工具，包括：', service1: '图片格式检查 —— 根据期刊要求验证图片', service2: '图片格式转换 —— 在 JPG、PNG、TIFF、PDF 之间转换', service3: '博客文章 —— 科研图片准备指南与技巧', s2p2: '所有图片处理都在你的浏览器本地完成，不会上传到我们的服务器。', s3t: '3. 免费使用', s3p: '我们的工具免费提供，无需注册或账号。我们保留在任何时候修改、暂停或终止任何部分服务的权利，恕不另行通知。', s4t: '4. 免责声明', s4p1: '我们的工具按“现状”和“可用”提供，不附带任何明示或暗示保证。尽管我们力求准确，但不保证：', warr1: '数据库中的期刊要求始终为最新', warr2: '转换后的图片一定会被所有期刊接受', warr3: '服务不会中断或完全无错误', s4p2: '投稿前请始终以期刊最新官方指南为准。', s5t: '5. 责任限制', s5p: 'SCI Pub Tools 不对因使用或无法使用本服务而产生的任何直接、间接、附带、特殊或后果性损害承担责任，包括但不限于因图片格式问题导致的稿件退回或拒稿。', s6t: '6. 知识产权', s6p1: 'SCI Pub Tools 的内容、设计和代码受版权保护。你可以自由将我们的工具用于个人和商业用途，但未经许可不得复制、修改或再分发网站代码。', s6p2: '你使用工具处理的图片始终归你所有，我们不主张任何权利。', s7t: '7. 第三方服务', s7p: '网站可能包含第三方链接，并使用第三方服务（Google Analytics、Google AdSense）。我们不对第三方内容或其做法负责。你对第三方服务的使用受其自身条款和隐私政策约束。', s8t: '8. 广告', s8p: '我们通过 Google AdSense 展示广告，以支持工具免费运营。广告内容由 Google 决定，可能会基于你的浏览历史进行个性化。你可以在 Google 账号设置中管理广告个性化。', s9t: '9. 条款变更', s9p: '我们保留随时更新服务条款的权利。在条款变更后继续使用服务即表示你接受新条款。', s10t: '10. 联系方式', s10p: '如对本条款有疑问，请联系：' }
    }
  },
  ja: {
    translation: {
      site: { title: 'SCI Pub Tools', subtitle: '科学論文投稿のための無料オンラインツール', journals_count: '{{count}}誌対応' },
      nav: { home: 'ホーム', journals: 'ジャーナル規定', checker: '図チェッカー', converter: 'フォーマット変換', blog: 'ブログ' },
      home: { hero: '科学論文投稿のための無料ツール', hero_sub: '図の要件チェック、画像フォーマット変換、投稿用図の準備 — すべてブラウザ上で完結。', checker_title: '図フォーマットチェッカー', checker_desc: 'DPI、サイズ、フォーマット、カラーモードがジャーナルの要件を満たしているか確認。', converter_title: 'フォーマット変換', converter_desc: 'JPG、PNG、TIFF、PDF間の変換。あらゆるソフトウェアで開ける本物の変換。', privacy: 'すべての処理はブラウザ上で行われます。画像がデバイスから離れることはありません。', latest_articles: '最新記事', intro_title: 'ジャーナル図要件の確認、チェック、変換を一か所で', intro_p1: 'SciPubTools は、複数のサイト、手動チェックリスト、デスクトップツールを行き来せずに投稿用図を準備したい研究者のために作られています。', intro_p2: 'Nature、Science、Cell、Lancet、Elsevier、ACS、IEEE など主要ジャーナル向けに、図の寸法、DPI、形式、パネル準備状況を確認し、TIFF、PNG、JPG、PDF をブラウザ上でローカル変換できます。', intro_p3: '目的はシンプルです。時間を節約し、図の規定違反による投稿エラーを減らし、可能な限りローカル処理でプライバシーを守ることです。' },
      blog: { subtitle: '科学論文の図の準備とジャーナル投稿のガイド、ヒント、ベストプラクティス。', not_found: '記事が見つかりません', back_home: 'ホームに戻る', back_blog: 'ブログへ戻る' },
      faq: { title: 'よくある質問', q1: 'このツールは本当に無料ですか？', a1: 'はい、完全に無料です。登録不要、隠れた費用なし、透かしなし。', q2: '画像はサーバーにアップロードされますか？', a2: 'いいえ。すべての画像処理はブラウザ上のJavaScriptで行われます。画像がデバイスから離れることはありません。', q3: 'どの画像フォーマットに対応していますか？', a3: 'チェック：JPG、PNG、TIFF、SVG、BMP、WebP。変換：JPG、PNG、TIFF（LZW圧縮）、PDF。TIFF出力はPhotoshop、ImageJ、GIMPと互換性があります。', q4: '何誌に対応していますか？', a4: 'Nature、Science、Cell、Lancetなど60誌以上に対応。定期的に追加しています。', q5: 'JPG/PNGをTIFFに変換して投稿できますか？', a5: 'はい。LZW圧縮の本物のTIFFファイルを生成します。主要なジャーナルすべてで受け入れられます。', q6: '図のDPIはいくつにすべきですか？', a6: 'ほとんどのジャーナルは写真に300 DPI以上、線画に600 DPIを要求します。図チェッカーで具体的な要件を確認できます。' },
      checker: { title: '論文図フォーマットチェッカー', step1: '対象ジャーナルを選択', step1_hint: '図の要件をお知らせします', step2: '図をアップロード', step2_hint_ready: 'アップロードして{{name}}の要件をチェック', step2_hint_wait: '先にジャーナルを選択してください', step3: 'チェック結果', all_pass: '🎉 すべて合格！', pass_count: '{{pass}}/{{total}} 合格', step4: '変換＆ダウンロード', step4_hint: 'サイズとDPIを自動調整', search_placeholder: 'ジャーナル名を検索...', upload_text: 'ここに画像をドラッグ＆ドロップ、またはクリック', upload_formats: 'PNG / JPEG / TIFF / SVG対応', select_first: '先にジャーナルを選択してください', no_results: '結果が見つかりません', single_col: 'シングルカラム', double_col: 'ダブルカラム', convert_download: '変換＆ダウンロード', converting: '変換中...', selected: '選択済み', clear: 'クリア', back: 'カテゴリに戻る', format: 'フォーマット', dpi: 'DPI', color: 'カラー', size: 'サイズ', single_w: '単カラム幅', double_w: '双カラム幅', font: 'フォント', min_font: '最小フォントサイズ', privacy: '🔒 すべての処理はブラウザ上で行われます。' },
      converter: { title: '画像フォーマット変換', subtitle: 'JPG、PNG、TIFF、PDF間の変換 — すべてのソフトウェアで開ける本物の変換', upload: '画像をアップロード', upload_hint: 'ドラッグ＆ドロップまたはクリック。', output_format: '出力フォーマット', quality: '品質', dpi: 'DPI設定', convert: '変換＆ダウンロード', converting: '変換中...', conversion_failed: '変換に失敗しました', info: '画像情報', width: '幅', height: '高さ', format: 'フォーマット', file_size: 'ファイルサイズ', privacy: '🔒 すべての変換はブラウザ上で行われます。', tiff_note: 'TIFFファイルはLZW圧縮で生成され、Photoshop、ImageJ、GIMPなどと互換性があります。' },
      footer: { desc: '科学論文投稿のための無料ツール', privacy: 'すべての画像はブラウザ上で処理されます。' },
      bookmark: { title: 'ブックマークして次の投稿に備えましょう！', desktop: '{{shortcut}} でブックマーク', mobile: '共有 → ホーム画面に追加' },
      categories: { '综合顶刊': 'トップジャーナル', '医学': '医学', '生物': '生物学', '化学': '化学', '材料/物理': '材料/物理', '工程/计算机': '工学/CS', '出版商通用': '出版社共通', '开放获取': 'オープンアクセス', '国内期刊': '中国ジャーナル', '环境/地球': '環境/地球', '社会科学': '社会科学', '农业/食品': '農業/食品', '药学/临床': '薬学/臨床' },
      journals: { title: 'ジャーナル図規定', subtitle: '主要ジャーナルの図要件とテンプレートへの入口。', card_desc: 'テンプレートとサイズガイドを開く', all_categories: 'すべてのカテゴリ' },
      journal: { title: '{{name}} 図要件', dpi: '推奨DPI', width: '一般的な幅', notes: '備考', template_title: 'ワンクリックテンプレート', template_desc: 'プリセットキャンバスを開き、ジャーナル規定サイズで書き出し。', open_template: 'テンプレートを開く', single_col: '単カラム', double_col: '双カラム', preview: 'プレビュー', enlarge_preview: '拡大プレビュー', close: '閉じる', go_checker: '図チェッカーへ', go_converter: '変換ツールへ', mode: 'モード', height: '高さ', nature_notes: '推奨形式：TIFF/EPS/PDF。JPG圧縮は避ける。', cell_notes: '線画はベクター推奨、フォント埋め込み。', science_notes: 'パネルはA/B/C表記、ラスタ文字を避ける。', elsevier_notes: 'カラーはRGB、写真は300dpi。', acs_notes: '線画600–1200dpi、写真300dpi。' },
      legal: { last_updated: '最終更新：2026-03-01', privacy_title: 'プライバシーポリシー', terms_title: '利用規約' },
      privacy: { seo_title: 'プライバシーポリシー — SCI Pub Tools', seo_desc: 'SCI Pub Tools のプライバシーポリシー。すべての画像処理はブラウザ上でローカルに行われます。', s1t: '1. 概要', s1p: 'SCI Pub Tools（「当社」）は scipubtools.com を運営しています。本ポリシーでは、サービス利用時に情報をどのように収集・利用・保護するかを説明します。', s2t: '2. 画像処理 — 100% ローカル', s2p: 'すべての画像処理（図チェック、形式変換、DPI 解析）はブラウザ上のクライアントサイド JavaScript により実行されます。画像が当社サーバーや第三者サーバーにアップロードされることはありません。', s3t: '3. 収集する情報', s3p: '当社は以下の非個人情報を収集する場合があります。', pii: 'メール等で自発的に提供されない限り、個人を特定できる情報は収集しません。', browser: 'ブラウザの種類とバージョン', os: 'オペレーティングシステム', pages: '閲覧ページと滞在時間', referrer: '参照元サイト', lang: '言語設定', geo: 'おおよその地域情報（国・地域レベル、IP ベース）', s4t: '4. Cookie とローカルストレージ', s4p1: '言語設定やブックマークヒント表示回数などの設定を記憶するために、ブラウザのローカルストレージを使用します。これらは端末内のみに保存され、当社サーバーには送信されません。', s4p2: '利用している第三者サービスは独自の Cookie を設定する場合があります。', ga: 'Google Analytics — 匿名の利用統計', adsense: 'Google AdSense — 関連広告の表示', s4p3: 'Cookie はブラウザ設定からいつでも無効化できます。', s5t: '5. 第三者広告', s5p1: '当社は Google AdSense を使用して広告を表示しています。Google は Cookie などを使用して、過去の訪問履歴に基づく広告を表示する場合があります。', s5p2: 'Google Ads Settings からパーソナライズ広告を無効化できます。', s6t: '6. アナリティクス', s6p: '訪問者の利用状況を把握し、ツールとコンテンツを改善するために Google Analytics を使用しています。収集されるのはページビュー、セッション時間、デバイス情報などの匿名データです。', s7t: '7. データセキュリティ', s7p: '画像処理はすべてブラウザ上でローカルに行われるため、機密性の高い研究データが端末外へ出ることはありません。サイトは HTTPS で提供され、安全な通信を確保しています。', s8t: '8. 子どものプライバシー', s8p: '本サービスは 13 歳未満の子どもを対象としていません。子どもの個人情報を故意に収集することはありません。', s9t: '9. 本ポリシーの変更', s9p: '本ポリシーは随時更新されることがあります。変更は本ページに掲載され、改訂日も更新されます。', s10t: '10. お問い合わせ', s10p: '本ポリシーに関するご質問は、以下までご連絡ください。' },
      terms: { seo_title: '利用規約 — SCI Pub Tools', seo_desc: 'SCI Pub Tools の利用規約。科学論文用の無料オンライン図チェック・形式変換ツール。', s1t: '1. 規約への同意', s1p: 'SCI Pub Tools（scipubtools.com）にアクセスし利用することにより、本利用規約に拘束されることに同意したものとみなされます。同意しない場合は利用しないでください。', s2t: '2. サービス内容', s2p1: 'SCI Pub Tools は、以下の無料ブラウザベースツールを提供します。', service1: '図フォーマットチェッカー — ジャーナル要件との照合', service2: '画像形式変換 — JPG、PNG、TIFF、PDF 間の変換', service3: 'ブログ記事 — 科学図準備のガイドとヒント', s2p2: 'すべての画像処理はブラウザ上でローカルに行われ、画像がサーバーにアップロードされることはありません。', s3t: '3. 無料利用', s3p: '当社ツールは無料で提供され、登録やアカウントは不要です。当社は予告なくサービスの一部を変更・停止・終了する権利を留保します。', s4t: '4. 免責事項', s4p1: '本サービスは「現状のまま」「利用可能な範囲で」提供され、明示または黙示の保証はありません。当社は正確性に努めますが、以下を保証しません。', warr1: 'ジャーナル要件データベースが常に最新であること', warr2: '変換画像がすべてのジャーナルで受理されること', warr3: 'サービスが中断なく、エラーなく提供されること', s4p2: '投稿前には必ず最新の公式ジャーナルガイドラインを確認してください。', s5t: '5. 責任の制限', s5p: 'SCI Pub Tools は、本サービスの利用または利用不能に起因するいかなる直接的、間接的、付随的、特別または結果的損害についても責任を負いません。', s6t: '6. 知的財産', s6p1: 'SCI Pub Tools のコンテンツ、デザイン、コードは著作権により保護されています。ツールは個人・商用目的で自由に利用できますが、許可なくサイトコードを複製、改変、再配布することはできません。', s6p2: 'ツールで処理した画像の権利はすべて利用者に帰属し、当社は一切の権利を主張しません。', s7t: '7. 第三者サービス', s7p: 'サイトには第三者サイトへのリンクが含まれる場合があり、Google Analytics や Google AdSense など第三者サービスも利用しています。これら第三者の内容や運用について当社は責任を負いません。', s8t: '8. 広告', s8p: '当社は無料運営を支えるため Google AdSense を通じて広告を表示します。広告は Google により決定され、閲覧履歴に基づきパーソナライズされる場合があります。', s9t: '9. 規約の変更', s9p: '当社は本利用規約をいつでも更新する権利を留保します。変更後にサービスを利用し続けることで、新しい規約に同意したものとみなされます。', s10t: '10. お問い合わせ', s10p: '本規約に関するご質問は、以下までご連絡ください。' }
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
