import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { CTABand } from "@/components/site/CTABand";
import { PlaceholderImage } from "@/components/site/PlaceholderImage";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/organizations")({
  component: () => <Outlet />,
});
