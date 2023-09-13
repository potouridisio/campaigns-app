import { Separator } from '@/components/ui/separator'

export default function SettingsBasicsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Basics</h3>
        <p className="text-sm text-muted-foreground">
          Define core campaign details like name, timeline, and managers.
        </p>
      </div>
      <Separator />
    </div>
  )
}
