import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataTable({ data, columns, actions, category }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.header}>{column.header}</TableHead>
            ))}
            {category && <TableHead>Category</TableHead>}
            {actions && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item._id}>
              {columns.map((column) => (
                <>
                  <TableCell key={column.accessor}>
                    {item[column.accessor]
                      ? item[column.accessor].length > 35
                        ? `${item[column.accessor].substring(0, 35)}...`
                        : item[column.accessor]
                      : "-"}
                  </TableCell>
                </>
              ))}
              {category && <TableCell>{item.category.name || "-"}</TableCell>}
              {actions && <TableCell>{actions(item)}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
