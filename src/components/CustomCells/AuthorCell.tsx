import type { ICellRendererParams } from 'ag-grid-community';

import type { Author } from '../../graphql-client/github-client.model';

type AuthorCellParams = Omit<ICellRendererParams, 'value'> & { value?: Author };

export function AuthorCell({ value }: AuthorCellParams) {
  return (
    <span>
      <a href={value?.url} target="_blank" rel="noreferrer">
        {value?.login}
      </a>
    </span>
  );
}
