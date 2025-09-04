import { FC } from 'react';

import { Icon } from '../Icon';

interface AvatarProps {
  src?: string | null;
  size?: number;
}

export const Avatar: FC<AvatarProps> = ({ src, size = 26 }) => {
  return (
    <div
      className="flex-shrink-0 rounded-full overflow-hidden bg-gray-200"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          alt="avatar"
          className="rounded-full object-cover transition-opacity duration-500"
          decoding="async"
          loading="lazy"
          src={src}
          style={{ width: size, height: size }}
        />
      ) : (
        <Icon name="photo-placeholder" size={size} />
      )}
    </div>
  );
};
