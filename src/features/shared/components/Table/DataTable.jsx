import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function DataTable({
  columns,
  data,
  searchKey,
  pagination = true,
  filtering = true,
  tableTitle = "",
  buttonText,
  linkSlug = "",
}) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(sorting && {
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
    }),
    ...(filtering && {
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
    }),
    ...(pagination && {
      getPaginationRowModel: getPaginationRowModel(),
    }),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div>
      {/* Filtering */}
      <div className="mb-[1rem] flex justify-end items-center">
        <h4 className="w-full text-[1.4rem] font-[700]">{tableTitle}</h4>

        <div className="flex gap-[1rem] items-center">
          {filtering && searchKey && (
            <Input
              placeholder={`Search ${searchKey}...`}
              value={table.getColumn(searchKey)?.getFilterValue() ?? ""}
              onChange={(event) =>
                table.getColumn(searchKey)?.setFilterValue(event.target.value)
              }
              className="w-[15rem] bg-secondary text-foreground focus:ring-0"
              divStyle="flex items-end justify-end"
            />
          )}
          {buttonText && (
            <Link to={linkSlug}>
              <Button variant="ghost">
                {buttonText} <Plus />
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Table Rendering */}
      <div className="rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex items-center justify-end gap-2 mt-[0.8rem]">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
