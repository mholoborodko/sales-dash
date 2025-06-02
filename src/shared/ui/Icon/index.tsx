import clsx from 'clsx';
import { useEffect, useState } from 'react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const icons = import.meta.glob('@/shared/assets/icons/*.svg', { as: 'raw' });

export const Icon: React.FC<IconProps> = ({ name, size = 24, className }) => {
  const [svg, setSvg] = useState<string | null>(null);

  useEffect(() => {
    const loadSvg = async () => {
      const importSvg = icons[`/src/shared/assets/icons/${name}.svg`];

      if (importSvg) {
        const svgText = await importSvg();
        setSvg(
          svgText.replace(
            /(<svg[^>]+)>/,
            `$1 width="${size}" height="${size}" fill="currentColor">`
          )
        );
      } else {
        // eslint-disable-next-line no-console
        console.warn(`SVG icon not found: ${name}`);
      }
    };

    loadSvg();
  }, [name, size]);

  if (!svg) return null;

  return (
    <span
      className={clsx('inline-block', className)}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
