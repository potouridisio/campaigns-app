import { Separator } from '@/components/ui/separator'

export default function SettingsQuotasPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Quotas</h3>
        <p className="text-sm text-muted-foreground">
          Establish distribution limitations for the campaign.
        </p>
      </div>
      <Separator />
    </div>
  )
}
