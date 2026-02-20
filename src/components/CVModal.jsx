import { X, Download, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CVModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleDownload = (lang) => {
    const fileName = lang === 'ro' 
      ? '/Lupastean_Raoul_CV_RO.pdf' 
      : '/Lupastean_Raoul_CV_EN.pdf';
    
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={28} className="text-white/60" />
          </div>
          <h3 className="text-white text-xl font-light">{t.selectCVLanguage}</h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <button
            onClick={() => handleDownload('ro')}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇷🇴</span>
              <span className="text-white/80 font-light">{t.downloadRO}</span>
            </div>
            <Download size={18} className="text-white/40 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={() => handleDownload('en')}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <span className="text-white/80 font-light">{t.downloadEN}</span>
            </div>
            <Download size={18} className="text-white/40 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Cancel */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-3 text-white/40 text-sm font-light hover:text-white/60 transition-colors"
        >
          {t.cancel}
        </button>
      </div>
    </div>
  );
};