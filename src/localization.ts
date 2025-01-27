export interface MRT_Localization {
  actions: string;
  cancel: string;
  changeFilterMode: string;
  clearFilter: string;
  clearSearch: string;
  clearSort: string;
  clickToCopy: string;
  columnActions: string;
  copiedToClipboard: string;
  edit: string;
  expand: string;
  expandAll: string;
  filterByColumn: string;
  filterContains: string;
  filterEmpty: string;
  filterEndsWith: string;
  filterEquals: string;
  filterFuzzy: string;
  filterGreaterThan: string;
  filterLessThan: string;
  filterMode: string;
  filterNotEmpty: string;
  filterNotEquals: string;
  filterStartsWith: string;
  filteringByColumn: string;
  groupByColumn: string;
  groupedBy: string;
  hideAll: string;
  hideColumn: string;
  rowActions: string;
  save: string;
  search: string;
  selectedCountOfRowCountRowsSelected: string;
  showAll: string;
  showHideColumns: string;
  showAllColumns: string;
  showHideFilters: string;
  showHideSearch: string;
  sortByColumnAsc: string;
  sortByColumnDesc: string;
  thenBy: string;
  toggleDensePadding: string;
  toggleFullScreen: string;
  toggleSelectAll: string;
  toggleSelectRow: string;
  ungroupByColumn: string;
}

export const MRT_DefaultLocalization_EN: MRT_Localization = {
  actions: 'Actions',
  cancel: 'Cancel',
  changeFilterMode: 'Change filter mode',
  clearFilter: 'Clear filter',
  clearSearch: 'Clear search',
  clearSort: 'Clear sort',
  clickToCopy: 'Click to copy',
  columnActions: 'Column Actions',
  copiedToClipboard: 'Copied to clipboard',
  edit: 'Edit',
  expand: 'Expand',
  expandAll: 'Expand all',
  filterByColumn: 'Filter by {column}',
  filterContains: 'Contains Exact',
  filterEmpty: 'Empty',
  filterEndsWith: 'Ends With',
  filterEquals: 'Equals',
  filterFuzzy: 'Fuzzy Match',
  filterGreaterThan: 'Greater Than',
  filterLessThan: 'Less Than',
  filterMode: 'Filter Mode: {filterType}',
  filterNotEmpty: 'Not Empty',
  filterNotEquals: 'Not Equals',
  filterStartsWith: 'Starts With',
  filteringByColumn: 'Filtering by {column} - {filterType} "{filterValue}"',
  groupByColumn: 'Group by {column}',
  groupedBy: 'Grouped by ',
  hideAll: 'Hide all',
  hideColumn: 'Hide {column} column',
  rowActions: 'Row Actions',
  save: 'Save',
  search: 'Search',
  selectedCountOfRowCountRowsSelected:
    '{selectedCount} of {rowCount} row(s) selected',
  showAll: 'Show all',
  showAllColumns: 'Show all columns',
  showHideColumns: 'Show/Hide columns',
  showHideFilters: 'Show/Hide filters',
  showHideSearch: 'Show/Hide search',
  sortByColumnAsc: 'Sort by {column} ascending',
  sortByColumnDesc: 'Sort by {column} descending',
  thenBy: ', then by ',
  toggleDensePadding: 'Toggle dense padding',
  toggleFullScreen: 'Toggle full screen',
  toggleSelectAll: 'Toggle select all',
  toggleSelectRow: 'Toggle select row',
  ungroupByColumn: 'Ungroup by {column}',
};
