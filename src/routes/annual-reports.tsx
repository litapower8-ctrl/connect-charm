import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/annual-reports")({
  head: () => ({ meta: [
    { title: "Annual Reports — 54 Global Afrikan" },
    { name: "description", content: "Download our annual reports, audited financials, and impact publications. Transparent stewardship of every gift." },
  ]}),
  component: Reports,
});

const reports = [2024, 2023, 2022, 2021, 2020];

function Reports() {
  return (
    <>
      <PageHero eyebrow="Annual Reports" title="A public record of stewardship." description="Every year we publish a full impact and financial report. Read what your generosity has accomplished, dollar for dollar, life by life." photoLabel="Reports and publications" tone="green" />

      <Section>
        <div className="grid gap-4">
          {reports.map((y) => (
            <div key={y} className="flex flex-wrap items-center justify-between gap-4 bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-lg bg-primary/10 text-primary grid place-items-center"><FileText className="h-5 w-5" /></span>
                <div>
                  <div className="font-serif text-xl">{y} Annual Report</div>
                  <div className="text-sm text-muted-foreground">Impact metrics, programme highlights, and audited financials.</div>
                </div>
              </div>
              <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Download PDF</Button>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
      <div className="h-20" />
    </>
  );
}
