import React from 'react';

import { Icon } from '../Icon';

interface AvatarProps {
  src?: string | null;
  size?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, size = 26 }) => {
  return (
    <div className="flex-shrink-0">
      {src ? (
        <img
          alt="avatar"
          className="rounded-full object-cover"
          src={src}
          style={{ width: size, height: size }}
        />
      ) : (
        <Icon name="photo-placeholder" size={size} />
      )}
    </div>
  );
};
