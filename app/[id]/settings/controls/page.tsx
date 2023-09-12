import { Separator } from '@/components/ui/separator'

export default function SettingsControlsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Controls</h3>
        <p className="text-sm text-muted-foreground">
          Manage throttle, security, and automation settings.
        </p>
      </div>
      <Separator />
    </div>
  )
}
