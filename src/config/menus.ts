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
    { href: '/products', name: '🎓 Trainings' },
    { href: '/risikokompetenz', name: '🧮 Risikokompetenz' },
    { href: '/about', name: '📝 Über Infolektuell' },
    { href: '/contact', name: '🤝 Kontakt' },
  ],
}

export const legalMenu: Menu = {
  name: 'Rechtliche Links',
  items: [
    { href: '/page/privacy', name: '🤐 Datenschutz' },
    { href: '/page/impressum', name: '📮 Impressum' },
  ],
}
