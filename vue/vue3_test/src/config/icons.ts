export const iconMap: Record<string, string> = {
  Grid: '<path d="M7 7h10v10H7z" stroke="#8ca3ff" stroke-width="1.5" fill="none"/><rect x="3" y="3" width="18" height="18" rx="3" stroke="#8ca3ff" stroke-width="1.5" fill="none"/>',
  Edit: '<path d="M15 4l5 5-11 11H4v-5L15 4z" stroke="#8ca3ff" stroke-width="1.5" fill="none"/>',
  Document:
    '<path d="M7 3h7l5 5v13H7V3z" stroke="#8ca3ff" stroke-width="1.5" fill="none"/><path d="M14 3v6h6" stroke="#8ca3ff" stroke-width="1.5" fill="none"/>',
  Menu: '<path d="M4 6h16M4 12h16M4 18h16" stroke="#8ca3ff" stroke-width="1.5" stroke-linecap="round"/>',
  Message:
    '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="#8ca3ff" stroke-width="1.5" fill="none"/>',
  Setting:
    '<circle cx="12" cy="12" r="3" stroke="#8ca3ff" stroke-width="1.5" fill="none"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1A1.7 1.7 0 008 19.4a1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H2a2 2 0 110-4h.1A1.7 1.7 0 003.6 8a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H8a1.7 1.7 0 001-1.5V2a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V8a1.7 1.7 0 001.5 1H22a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" stroke="#8ca3ff" stroke-width="1.5" fill="none"/>',
  More: '<circle cx="5" cy="12" r="1.5" fill="#8ca3ff"/><circle cx="12" cy="12" r="1.5" fill="#8ca3ff"/><circle cx="19" cy="12" r="1.5" fill="#8ca3ff"/>',
}

export function getComponentIcon(name: string): string {
  return iconMap[name] || iconMap.Document
}
