import React from 'react';

import { useToggle } from '@/shared/hooks';

import { Icon } from '../Icon';

interface AvatarProps {
  src?: string | null;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, size = 26 }) => {
  const isLoaded = useToggle(false);

  return (
    <div
      className="flex-shrink-0 rounded-full overflow-hidden bg-gray-200"
      style={{ width: size, height: size }}
    >
      {src ? (
        <>
          {!isLoaded.value && (
            <div className="w-full h-full animate-pulse bg-gray-300 rounded-full" />
          )}

          <img
            alt="avatar"
            className={`rounded-full object-cover transition-opacity duration-500 ${
              isLoaded.value ? 'opacity-100' : 'opacity-0'
            }`}
            decoding="async"
            loading="lazy"
            src={src}
            style={{ width: size, height: size }}
            onLoad={() => isLoaded.set(true)}
          />
        </>
      ) : (
        <Icon name="photo-placeholder" size={size} />
      )}
    </div>
  );
};
