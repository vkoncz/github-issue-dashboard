import type { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

import type { Node } from '../graphql-client/github-client.model';
import { useGithubIssuesQuery } from '../graphql-client/github-issues.query';
import styles from './IssueTable.module.css';

type IssueColDef = Omit<ColDef, 'field'> & { field: keyof Node };

const columnDefs: IssueColDef[] = [
  { field: 'title', flex: 1 },
  { field: 'author' },
  { field: 'state' },
  { field: 'createdAt' },
  { field: 'url' },
];

export function IssuesTable() {
  const { loading, data } = useGithubIssuesQuery();
  const rowData = data?.repository.issues.nodes;

  return (
    <div className={`${styles.tableContainer} ag-theme-alpine`}>
      {!loading && <AgGridReact rowData={rowData} columnDefs={columnDefs} />}
    </div>
  );
}
