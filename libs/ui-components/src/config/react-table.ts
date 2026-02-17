import { type MRT_TableOptions } from "material-react-table";

export const tableConfig: MRT_TableOptions = {
  initialState: { showColumnFilters: false, density: "compact" },
  enableColumnFilters: false,
  enableColumnOrdering: false,
  enableTopToolbar: false,
  enableHiding: false,
  enableTableHead: true,
  enableFilters: false,
  enableFullScreenToggle: false,
  enableDensityToggle: false,
  enableColumnActions: false,
  manualFiltering: true, //turn off built-in client-side filtering
  manualPagination: true, //turn off built-in client-side pagination
  manualSorting: true, //turn off built-in client-side sorting
  enableMultiSort: false,
  muiTablePaginationProps: { sx: { backgroundColor: "#FFFFFF" } },
  muiBottomToolbarProps: { sx: { backgroundColor: "#FFFFFF" } },
  muiTableHeadRowProps: {
    sx: {
      background: "#6c757d",
      "& .MuiTableCell-head": {
        color: "white",
      },
    },
  },
  muiTableBodyProps: {
    sx: {
      //stripe the rows, make odd rows a darker color
      '& tr:nth-of-type(odd) > td': {
        backgroundColor: '#f5f5f5',
      },
    },
  },
  paginationDisplayMode: "pages",
  muiPaginationProps: {
    color: "secondary",
    rowsPerPageOptions: [10, 20, 30],
    shape: "rounded",
    variant: "outlined",
  },
};
