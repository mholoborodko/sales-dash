export const DetailsModalSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <div className="text-sm font-semibold text-gray-600">{title}</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
      {children}
    </div>
  </div>
);
