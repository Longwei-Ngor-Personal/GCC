'use client';
import { useTranslation } from 'react-i18next';

function MediaAbout() {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-20 pb-14">
      <div className="container mx-auto px-4">
        <div className="lg:grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t('media.about.title')}
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed mb-6">
              {t('media.about.description')}
            </p>
          </div>
          <video
            src="https://gcc-gp.com/wp-content/uploads/2021/03/GC-MEDIA_V3.mp4"
            autoPlay
            muted
            loop
            controls
            className="w-full h-full"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default MediaAbout;
