/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';
import clsx from 'clsx';

interface TableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  className?: string;
}

export const Table = <TData,>({
  data,
  columns,
  className,
}: TableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className={clsx(
        'overflow-x-auto border border-gray-200 rounded-lg',
        className
      )}
    >
      <table className="min-w-full text-[12px] text-left border-collapse">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                const headerClass =
                  header.column.columnDef.meta?.headerClassName;

                return (
                  <th
                    key={header.id}
                    className={clsx(
                      'px-4 py-2 text-gray-700 font-semibold border border-gray-200',
                      headerClass
                    )}
                    style={{ width: header.column.columnDef.meta?.width }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                const cellClass = cell.column.columnDef.meta?.cellClassName;

                return (
                  <td
                    key={cell.id}
                    className={clsx(
                      'px-4 py-2 text-black border border-gray-200',
                      cellClass
                    )}
                    style={{ width: cell.column.columnDef.meta?.width }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
