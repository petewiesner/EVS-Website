import { Building2, FileCheck2, FileText, Landmark } from "lucide-react"
import { BUSINESS } from "@/lib/site"
import { DevNote } from "@/components/DevNote"

/** Trust signals for agency procurement teams. */
export function ProcurementSignals({ className = "" }: { className?: string }) {
  const items = [
    { icon: Building2, title: BUSINESS.legalNote, text: `Based in ${BUSINESS.city}, ${BUSINESS.province}` },
    { icon: FileText, title: "Formal quotes", text: "Itemized written quotes for your approval process" },
    { icon: FileCheck2, title: "Purchase orders accepted", text: "Buy through your standard PO process" },
    ...BUSINESS.vendorOfRecord.map((v) => ({ icon: Landmark, title: "Vendor of record", text: v })),
  ]
  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title + text} className="flex gap-3 rounded-xl border bg-background p-4">
            <Icon className="mt-0.5 size-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
      {BUSINESS.vendorOfRecord.length === 0 && (
        <div className="mt-4">
          <DevNote>add vendor-of-record status in lib/site.ts (BUSINESS.vendorOfRecord) once you hold it.</DevNote>
        </div>
      )}
    </div>
  )
}
