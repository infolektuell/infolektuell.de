import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro'

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export interface FeatureList {
  id: string
  features: Feature[]
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
  main: {
    id: 'main',
    features: [
      {
        icon: Zap,
        title: 'Dev Coaching',
        description: 'Erweitern Sie mit mir Ihre persönlichen technischen Skills, Barrieren aufzuspüren und zu beheben',
      },
      {
        icon: Shield,
        title: 'Schulungen für Teams',
        description: 'Integrieren Sie Barrierefreiheit in Ihre Workflows und machen sie sie zur Gewohnheit',
      },
      {
        icon: TabletSmartphone,
        title: 'Testung und Analyse',
        description:
          'Ich erstelle aussagekräftige Berichte über bei Ihnen gefundene Barrieren und wie sie zu beheben sind.',
      },
      {
        icon: Smile,
        title: 'Schnellbericht',
        description: 'Ein erstes Screening können Sie bereits kostenlos im Rahmen eines Erstgesprächs erhalten.',
      },
      {
        icon: Type,
        title: 'Rechtssicherheit',
        description: 'Vermeiden Sie rechtliche Probleme mit geringem Aufwand.',
      },
      {
        icon: CodeXml,
        title: 'Beratung',
        description: 'Technische Umsetzung, DevOps, interne Abläufe',
      },
    ],
  },
  secondary: {
    id: 'secondary',
    features: [
      {
        icon: Heart,
        title: 'Nutzerfreundlichkeit',
        description: 'Für Menschen, nicht für Validator-Tools',
      },
      {
        icon: Coffee,
        title: 'DX First',
        description: 'Pragmatisch und motivierend barrierefrei entwickeln',
      },
      {
        icon: Smile,
        title: 'Nachhaltig',
        description: 'Dauerhaft fliegen lernen, statt einmal geflogen zu werden',
      },
    ],
  },
}
