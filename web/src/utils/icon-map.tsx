import React from 'react';
import {
  BookOpen, FileText, Code, Terminal, Database, Globe,
  Users, Lock, Key, Settings, Layers, Package, Zap, Compass,
  Shield, HelpCircle, Lightbulb, Link, Server, GitBranch,
  Cpu, Cloud, Wrench, Book, Folder, Bell, Info, Rocket,
} from 'lucide-react';

export const ICON_MAP = {
  BookOpen,
  FileText,
  Code,
  Terminal,
  Database,
  Globe,
  Users,
  Lock,
  Key,
  Settings,
  Layers,
  Package,
  Zap,
  Compass,
  Shield,
  HelpCircle,
  Lightbulb,
  Link,
  Server,
  GitBranch,
  Cpu,
  Cloud,
  Wrench,
  Book,
  Folder,
  Bell,
  Info,
  Rocket,
} as const;

export type IconName = keyof typeof ICON_MAP;
export const ICON_NAMES = Object.keys(ICON_MAP) as IconName[];

interface CategoryIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, size = 16, className }) => {
  const Component = ICON_MAP[name as IconName];
  if (!Component) return null;
  return <Component size={size} className={className} />;
};
