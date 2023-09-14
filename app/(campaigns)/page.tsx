import { cookies } from 'next/headers'

import { columns } from './columns'
import { DataTable } from './data-table'

export type Campaign = {
  broken_reports: number
  campaign_target_enddate?: string
  completed: number
  disqualified: number
  first_went_live_at?: string
  id: number
  incidence_rate: number
  incomplete: number
  ir_tolerance_exceeded?: boolean
  loi_tolerance_exceeded?: boolean
  max_completes_total?: number
  name: string
  panels: Panel[]
  quota_full: number
  screened: number
  status_text: string
}

type Panel = {
  code: string
  name: string
}

async function getData({
  limit = '20',
  page = '1',
}: { limit?: string; page?: string } = {}): Promise<{ campaigns: Campaign[] }> {
  const res = await fetch(
    `https://dev-access.pureprofile.com/api/v1/campaignsNew?limit=${limit}&page=${page}`,
    {
      headers: {
        Cookie: cookies().toString(),
      },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data.campaigns} />
    </div>
  )
}
