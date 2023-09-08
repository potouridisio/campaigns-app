import type { ColumnDef } from '@tanstack/react-table'

import type { Campaign } from '../api/campaigns/campaign'

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorFn: (row) => row.panels.map((panel) => panel.name).join(', '),
    header: 'Panels',
  },
  {
    accessorKey: 'completed',
    header: 'Completes',
  },
  {
    accessorKey: 'median_loi',
    header: 'LOI',
  },
  {
    accessorKey: 'incidence_rate',
    header: 'IR',
  },
  {
    accessorKey: 'screened',
    header: 'Screeners',
  },
  {
    accessorKey: 'incomplete',
    header: 'Incompletes',
  },
  {
    accessorKey: 'quota_full',
    header: 'Quota full',
  },
  {
    accessorKey: 'broken_reports',
    header: 'Broken reports',
  },
  {
    accessorKey: 'disqualified',
    header: 'Disqualified',
  },
  {
    accessorFn: (row) => row.status_text,
    header: 'Status',
  },
  {
    accessorKey: 'campaign_target_enddate',
    header: 'End date',
  },
]
