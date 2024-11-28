export const createColumns = (columnConfig) => {
  return columnConfig.map((col) => ({
    accessorKey: col.key,
    header: col.header,
    cell: col.cell || (({ getValue }) => getValue()),
    enableSorting: col.sortable !== false,
  }));
};
