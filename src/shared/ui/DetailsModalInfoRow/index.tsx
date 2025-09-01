import { FC } from 'react';

interface DetailsModalInfoRowProps {
  label: string;
  value: React.ReactNode;
}

export const DetailsModalInfoRow: FC<DetailsModalInfoRowProps> = ({
  label,
  value,
}) => (
  <div>
    <div className="text-xs text-gray-500 mb-1">{label}</div>
    <div className="text-sm text-black break-all">{value}</div>
  </div>
);
