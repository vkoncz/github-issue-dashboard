import type { ICellRendererParams } from 'ag-grid-community';

type IssueLinkCellParams = Omit<ICellRendererParams, 'value'> & { value?: string };

export function IssueLinkCell({ value }: IssueLinkCellParams) {
  return (
    value && (
      <span>
        <a href={value} target="_blank" rel="noreferrer">
          Open issue
        </a>
      </span>
    )
  );
}
