import { motion } from 'framer-motion';
import { Download, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function Blog() {

  const capturePost = async () => {
    const element = document.getElementById('blog-post');
    const imageElement = element?.querySelector('img');
    const captionElement = element?.querySelector('.absolute.bottom-0') as HTMLElement;
    const imageContainer = element?.querySelector('.relative.w-full.overflow-hidden') as HTMLElement;
    
    if (element && imageElement && imageContainer) {
      // Store original styles
      const originalHeight = imageElement.style.height;
      const originalMaxHeight = imageElement.style.maxHeight;
      const originalFlexDirection = element.style.flexDirection;
      const originalWidth = element.style.width;
      const originalPadding = element.style.padding;
      const originalCaptionOpacity = captionElement?.style.opacity;
      const originalImageContainerWidth = imageContainer.style.width;
      
      // Force desktop-style layout and show caption
      element.style.flexDirection = 'row';
      element.style.width = '100%';
      element.style.padding = '32px';
      imageContainer.style.width = '50%';
      imageElement.style.height = 'auto';
      imageElement.style.maxHeight = 'none';
      imageElement.style.width = '100%';
      if (captionElement) {
        captionElement.style.opacity = '1';
      }
      
      // Wait for DOM to update
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      // Restore original styles
      imageElement.style.height = originalHeight;
      imageElement.style.maxHeight = originalMaxHeight;
      imageElement.style.width = '';
      imageContainer.style.width = originalImageContainerWidth || '';
      element.style.flexDirection = originalFlexDirection;
      element.style.width = originalWidth;
      element.style.padding = originalPadding;
      if (captionElement) {
        captionElement.style.opacity = originalCaptionOpacity || '';
      }
      
      return canvas;
    }
    return null;
  };

  const handleDownload = async () => {
    const canvas = await capturePost();
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'essaouira-post.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const handleShare = async () => {
    const canvas = await capturePost();
    if (canvas) {
      canvas.toBlob(async (blob) => {
        if (blob) {
          const file = new File([blob], 'essaouira-post.png', { type: 'image/png' });
          if (navigator.share && navigator.canShare({ files: [file] })) {
            try {
              await navigator.share({
                files: [file],
                title: 'Essaouira, Morocco',
                text: 'A coastal city of creativity'
              });
            } catch (err) {
              console.error('Error sharing:', err);
            }
          } else {
            handleDownload();
          }
        }
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Blog</h1>
          <div className="section-line" />
          <p className="text-navy-600 mt-4 text-lg tracking-wide">Life, code, and everything in between</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div id="blog-post" className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-1/2"
            >
              <div className="relative w-full overflow-hidden rounded-3xl group cursor-pointer">
                <div className="absolute inset-0 border-2 border-navy-500/50 rounded-3xl transform rotate-6 opacity-50 transition-transform duration-500 ease-out group-hover:rotate-0" />
                <img
                  src="/assets/img/IMG_1065.jpg"
                  alt="Essaouira"
                  className="relative w-full h-64 md:h-80 object-cover rounded-3xl transition-all duration-500 ease-out group-hover:h-auto group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                  <p className="text-white font-semibold text-lg">Essaouira, Morocco • 2026</p>
                  <p className="text-cream-200 text-sm">A coastal city of creativity</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-navy-900 mb-4 tracking-tight">Essaouira, Morocco.</h2>
              <p className="text-navy-700 text-lg leading-relaxed mb-4">
                This year, I visited and the beaches there are really clean and the medina has these amazing colors everywhere. It's a pretty special place.
              </p>
              <p className="text-navy-700 text-lg leading-relaxed mb-4">
                Walking around the streets, I got inspired by the local artisans and their work. Seeing the Atlantic ocean meet the sky was something else. Essaouira showed me that creativity is about how you see things, not just what you make.
              </p>
              <p className="text-navy-700 text-lg leading-relaxed">
                The mix of old traditions and modern vibes there gave me some new ideas that I still think about when I'm coding.
              </p>
            </motion.div>
          </div>
          
          <div className="flex gap-4 mt-6 justify-center">
            <button
              onClick={handleDownload}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download as Image
            </button>
            <button
              onClick={handleShare}
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Share2 size={18} />
              Share
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
