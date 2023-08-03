export type MenuItem = {
  name: string
  href: string
}

export type Menu = {
  name: string
  items: MenuItem[]
}

export const mainMenu: Menu = {
  name: 'Hauptnavigation',
  items: [
    { href: '/', name: 'Infolektuell' },
    { href: '/trainings', name: '🎓 Trainings' },
    { href: '/about', name: '📝 Über Infolektuell' },
    { href: '/contact', name: '🤝 Kontakt' },
  ],
}

export const legalMenu: Menu = {
  name: 'Rechtliche Links',
  items: [
    { href: '/privacy', name: '🤐 Datenschutz' },
    { href: '/impressum', name: '📮 Impressum' },
  ],
}
