// Core
import React, { useState } from "react";

interface ImageFallbackProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageFallback: React.FC<ImageFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  style,
}) => {
  const [loadError, setLoadError] = useState(false);

  const handleLoadError = () => {
    setLoadError(true);
  };

  return (
    <img
      src={loadError ? fallbackSrc : src}
      alt={alt}
      className={className}
      style={style}
      onError={handleLoadError}
    />
  );
};

export default ImageFallback;
