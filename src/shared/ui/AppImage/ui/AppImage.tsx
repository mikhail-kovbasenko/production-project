import {
  ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
  className?: string;
  fallback?: ReactElement,
  errorFallback?: ReactElement
}

function AppImage(props: AppImageProps) {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  useLayoutEffect(() => {
    const image = new Image();

    image.src = src ?? '';
    image.onload = () => {
      setIsLoading(false);
    };
    image.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src, setIsLoading, setHasError]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <img className={className} src={src} alt={alt} {...otherProps} />
  );
}

export default memo(AppImage);
