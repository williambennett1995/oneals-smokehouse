import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Image that falls back to a warm ember gradient if the photo fails to load,
 * so the layout never shows a broken-image icon. Swap `src` values for the
 * restaurant's own photos any time.
 */
export default function SmartImage({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-ember-gradient ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
