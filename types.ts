
export interface NavItem {
  label: string;
  href: string;
}

export interface Facility {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
