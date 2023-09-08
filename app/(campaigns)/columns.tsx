'use client'

import { cn } from '@/lib/utils'
import type { ColumnDef } from '@tanstack/react-table'

import type { Campaign } from '../api/campaigns/campaign'

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (props) => (
      <span className="font-medium">
        {`${props.row.original.id} - ${props.getValue() as string}`}
      </span>
    ),
  },
  {
    accessorFn: (row) => row.panels.map((panel) => panel.name).join(', '),
    header: 'Panels',
  },
  {
    accessorKey: 'completed',
    header: () => <div className="text-right">Completes</div>,
    cell: (props) => (
      <div className="text-right">
        {`${props.getValue() as number}${
          props.row.original.max_completes_total
            ? `/${props.row.original.max_completes_total}`
            : ''
        }`}
      </div>
    ),
  },
  {
    accessorKey: 'median_loi',
    header: () => <div className="text-right">LOI</div>,
    cell: ({ row }) => {
      const medianLoi = row.getValue('median_loi') as number | null
      const medianLoiInMinutes = Math.round((medianLoi || 0) / 60)

      return (
        <div
          className={cn(
            'text-right',
            row.original.loi_tolerance_exceeded === true && 'text-red-500',
            row.original.loi_tolerance_exceeded === false && 'text-green-500'
          )}
        >
          {row.original.first_went_live_at ? `${medianLoiInMinutes}m` : '-'}
        </div>
      )
    },
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
