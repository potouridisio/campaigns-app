'use client'

import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import type { ColumnDef } from '@tanstack/react-table'

import type { Campaign } from '../api/campaigns/campaign'

const deleteOption = <DropdownMenuItem>Delete</DropdownMenuItem>

const generateFilesOptions = (
  <>
    <DropdownMenuItem>Generate std file</DropdownMenuItem>
    <DropdownMenuItem>Generate int file</DropdownMenuItem>
  </>
)

const manageOptions = (
  <>
    <DropdownMenuItem>Manage quota</DropdownMenuItem>
    <DropdownMenuItem>Manage throttle</DropdownMenuItem>
  </>
)

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
    header: () => <div className="text-right">IR</div>,
    cell: (props) => (
      <div
        className={cn(
          'text-right',
          props.row.original.ir_tolerance_exceeded === true && 'text-red-500',
          props.row.original.ir_tolerance_exceeded === false && 'text-green-500'
        )}
      >
        {props.row.original.first_went_live_at
          ? `${props.getValue() as number}%`
          : '-'}
      </div>
    ),
  },
  {
    accessorKey: 'screened',
    header: () => <div className="text-right">Screeners</div>,
    cell: (props) => (
      <div className="text-right">{props.getValue() as number}</div>
    ),
  },
  {
    accessorKey: 'incomplete',
    header: () => <div className="text-right">Incompletes</div>,
    cell: (props) => (
      <div className="text-right">{props.getValue() as number}</div>
    ),
  },
  {
    accessorKey: 'quota_full',
    header: () => <div className="text-right">Quota full</div>,
    cell: (props) => (
      <div className="text-right">{props.getValue() as number}</div>
    ),
  },
  {
    accessorKey: 'broken_reports',
    header: () => <div className="text-right">Broken reports</div>,
    cell: (props) => (
      <div className="text-right">{props.getValue() as number}</div>
    ),
  },
  {
    accessorKey: 'disqualified',
    header: () => <div className="text-right">Disqualified</div>,
    cell: (props) => (
      <div className="text-right">{props.getValue() as number}</div>
    ),
  },
  {
    accessorFn: (row) => row.status_text,
    header: 'Status',
  },
  {
    accessorKey: 'campaign_target_enddate',
    header: 'End date',
    cell: ({ row }) => {
      const campaignTargetEnddate = row.getValue('campaign_target_enddate') as
        | string
        | null

      if (campaignTargetEnddate === null) {
        return '-'
      }

      const date = new Date(campaignTargetEnddate)

      return date.toLocaleDateString('en-GB', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const campaign = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {campaign.status === 'C' ? generateFilesOptions : null}
            {campaign.status === 'D' ? deleteOption : null}
            {campaign.status === 'L' ? (
              <>
                {generateFilesOptions}
                {manageOptions}
              </>
            ) : null}
            {campaign.status === 'P' ? (
              <>
                <DropdownMenuItem>Mark complete</DropdownMenuItem>
                <DropdownMenuSeparator />
                {generateFilesOptions}
                {manageOptions}
              </>
            ) : null}
            {campaign.status === 'R' ? deleteOption : null}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
