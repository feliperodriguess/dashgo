import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'

export const SIDEBAR_MENUS = {
  GENERAL: {
    title: 'GERAL',
    options: [
      { id: 'dashboard', title: 'Dashboard', icon: RiDashboardLine },
      { id: 'users', title: 'Usuários', icon: RiContactsLine },
    ],
  },
  AUTOMATION: {
    title: 'AUTOMAÇÃO',
    options: [
      { id: 'forms', title: 'Formulários', icon: RiInputMethodLine },
      { id: 'automation', title: 'Automação', icon: RiGitMergeLine },
    ],
  },
}
