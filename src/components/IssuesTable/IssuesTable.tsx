import type { ColDef, IDatasource } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useRef } from 'react';

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

const numberOfLines = 30;

export function IssuesTable() {
  const cursor = useRef<undefined | string>();
  const [getIssues] = useGithubIssuesQuery({});

  const datasource = useMemo<IDatasource>(
    () => ({
      getRows: async params => {
        const result = await getIssues({
          variables: { afterCursor: cursor.current, blockSize: numberOfLines },
        });

        const issues = result.data?.repository.issues;
        if (!issues) return;

        const lastRow = issues.pageInfo.endCursor ? undefined : issues.totalCount;
        params.successCallback(issues.nodes, lastRow);
        cursor.current = issues.pageInfo.endCursor;
      },
    }),
    [getIssues],
  );

  return (
    <div className={`${styles.tableContainer} ag-theme-alpine`}>
      <AgGridReact
        columnDefs={columnDefs}
        rowBuffer={0}
        gridOptions={{
          rowModelType: 'infinite',
          datasource,
          cacheBlockSize: numberOfLines,
        }}
      />
    </div>
  );
}
