import 'server-only'

import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

import type { Campaign } from './campaign'

export async function getCampaign(id: string) {
  const res = await fetch(
    `https://dev-access.pureprofile.com/api/v1/campaigns/${id}`,
    {
      headers: {
        Cookie: cookies().toString(),
      },
    }
  )

  if (!res.ok) {
    throw new Error('Something went wrong!')
  }

  const { campaign } = (await res.json()) as { campaign: Campaign }

  if (!campaign) {
    notFound()
  }

  return campaign
}
