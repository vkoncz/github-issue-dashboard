import type { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

import type { Node } from '../../graphql-client/github-client.model';
import { useGithubIssuesQuery } from '../../graphql-client/github-issues.query';
import { AuthorCell } from '../CustomCells/AuthorCell';
import { IssueLinkCell } from '../CustomCells/IssueLinkCell';
import styles from './IssueTable.module.css';

type IssueColDef = Omit<ColDef, 'field'> & { field: keyof Node };

const columnDefs: IssueColDef[] = [
  { field: 'title', flex: 1 },
  { field: 'author', cellRenderer: AuthorCell },
  { field: 'state' },
  { field: 'createdAt' },
  { field: 'url', cellRenderer: IssueLinkCell },
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
