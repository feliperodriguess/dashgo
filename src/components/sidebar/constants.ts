import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export const SIDEBAR_MENUS = {
  GENERAL: {
    title: 'GERAL',
    options: [
      { id: 'dashboard', title: 'Dashboard', icon: RiDashboardLine, link: '/dashboard' },
      { id: 'users', title: 'Usuários', icon: RiContactsLine, link: '/users' },
    ],
  },
  AUTOMATION: {
    title: 'AUTOMAÇÃO',
    options: [
      { id: 'forms', title: 'Formulários', icon: RiInputMethodLine, link: '/forms' },
      { id: 'automation', title: 'Automação', icon: RiGitMergeLine, link: '/automation' },
    ],
  },
}
