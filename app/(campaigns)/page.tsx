import { getCampaigns } from '../api/campaigns/get-campaigns'
import { columns } from './columns'
import { DataTable } from './data-table'

export default async function Home() {
  const campaigns = await getCampaigns()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={campaigns} />
    </div>
  )
}
