import type { ICellRendererParams } from 'ag-grid-community';

import type { Author } from '../../graphql-client/github-client.model';

type AuthorCellParams = Omit<ICellRendererParams, 'value'> & { value: Author };

export function AuthorCell({ value: { login, url } }: AuthorCellParams) {
  return (
    <span>
      <a href={url} target="_blank" rel="noreferrer">
        {login}
      </a>
    </span>
  );
}
