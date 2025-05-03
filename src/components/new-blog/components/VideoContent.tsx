import type React from 'react';

interface VideoContentProps {
  videoSrc: string; // now used as the image fallback instead of video
  webmSrc: string; // not used anymore, optional to remove
  isActive: boolean;
  index: number;
  badgeImage?: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videoSrc, isActive, index, badgeImage }) => {
  return (
    <div
      className={`tabs_video ${isActive ? 'is-1' : ''}`}
      style={
        index === 0
          ? {
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }
          : {}
      }
    >
      <img
        src={videoSrc}
        alt={`Preview ${index + 1}`}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      {/* {badgeImage && (
        <img
          src={badgeImage}
          loading="lazy"
          sizes="(max-width: 479px) 56px, 80px"
          srcSet={`${badgeImage} 1298w, ${badgeImage.replace('.webp', '-p-500.png')} 500w`}
          alt="German design award winner 2024 logo."
          className="tabs_video-gda-badge"
        />
      )} */}
    </div>
  );
};

export default VideoContent;
