import { Separator } from '@/components/ui/separator'

export default function SettingsAppearancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize visuals for the invitation and &quot;thank you&quot; pages,
          and choose to show insights.
        </p>
      </div>
      <Separator />
    </div>
  )
}
