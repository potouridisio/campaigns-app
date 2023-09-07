import 'server-only'

import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

import type { Campaign } from './campaign'

export async function getCampaigns({
  limit = '20',
  page = '1',
}: { limit?: string; page?: string } = {}) {
  const res = await fetch(
    `https://dev-access.pureprofile.com/api/v1/campaigns?limit=${limit}&page=${page}`,
    {
      headers: {
        Cookie: cookies().toString(),
      },
    }
  )

  if (!res.ok) {
    throw new Error('Something went wrong!')
  }

  const { campaigns } = (await res.json()) as { campaigns: Campaign[] }

  if (campaigns.length === 0) {
    notFound()
  }

  return campaigns
}
