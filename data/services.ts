export type ServiceCategorySlug =
  | "residential"
  | "commercial"
  | "industrial"
  | "ev-charging";

export interface ServiceCategory {
  slug: ServiceCategorySlug;
  title: string;
  blurb: string;
  bullets: string[];
}

// NOTE: Replace bullet lists with your provided "exact" lists.
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "residential",
    title: "Residential",
    blurb: "Safe, tidy workmanship for homes, condos, and renovations.",
    bullets: [
      "Panel & breaker upgrades",
      "Lighting installation",
      "Troubleshooting & repairs",
      "Smoke/CO alarms",
      "Hot tub & appliance circuits",
      "Surge protection",
      "Pot lights & feature lighting",
      "Ceiling fans",
      "EV-ready circuits",
      "Knob & tube replacement",
      "Service upgrades",
      "Code compliance fixes",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    blurb: "Reliable electrical solutions to keep your business running.",
    bullets: [
      "Tenant fit-outs",
      "Lighting retrofits",
      "Emergency lighting",
      "Data & low-voltage",
      "Maintenance programs",
      "Panel schedules",
      "Power distribution",
      "Signage power",
      "Load calculations",
      "Troubleshooting",
      "Energy efficiency upgrades",
      "After-hours service",
    ],
  },
  {
    slug: "industrial",
    title: "Industrial",
    blurb: "Robust installs and responsive service for demanding sites.",
    bullets: [
      "Motor controls",
      "Machine hookups",
      "Conduit runs",
      "3-phase distribution",
      "Preventative maintenance",
      "Lockout/tagout support",
      "Equipment troubleshooting",
      "Lighting high-bays",
      "Control panels",
      "Power quality checks",
    ],
  },
  {
    slug: "ev-charging",
    title: "EV Charging",
    blurb: "Future-proof charging installs for home and workplace.",
    bullets: [
      "Level 2 charger installs",
      "Load management",
      "Permit support",
      "Dedicated circuits",
      "Inspection-ready installs",
      "Commercial EV bays",
    ],
  },
];

export const servicesPreview = serviceCategories.map((c) => ({
  slug: c.slug,
  title: c.title,
}));




