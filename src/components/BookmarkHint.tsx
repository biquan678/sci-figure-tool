import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function BookmarkHint() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('bookmark_dismissed');
    if (dismissed) {
      const ts = parseInt(dismissed);
      if (Date.now() - ts < 30 * 24 * 60 * 60 * 1000) return; // 30天内不再显示
    }

    const visits = parseInt(localStorage.getItem('visit_count') || '0') + 1;
    localStorage.setItem('visit_count', String(visits));

    // 第2次访问才显示
    if (visits >= 2) {
      const timer = setTimeout(() => setShow(true), 3000); // 3秒后淡入
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem('bookmark_dismissed', String(Date.now()));
  };

  if (!show) return null;

  const isMac = navigator.platform.toUpperCase().includes('MAC');
  const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
  const shortcut = isMobile ? '' : isMac ? '⌘+D' : 'Ctrl+D';

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-fade-in max-w-md w-[calc(100%-2rem)]">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-3 flex items-center gap-3">
        <span className="text-xl flex-shrink-0">⭐</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-700 font-medium">{t('bookmark.title')}</p>
          <p className="text-xs text-gray-400 mt-0.5">
            {isMobile ? t('bookmark.mobile') : t('bookmark.desktop', { shortcut })}
          </p>
        </div>
        <button onClick={dismiss} className="text-gray-300 hover:text-gray-500 text-lg flex-shrink-0 leading-none">×</button>
      </div>
    </div>
  );
}
