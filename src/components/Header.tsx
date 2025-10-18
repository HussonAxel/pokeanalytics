import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  ClipboardType,
  Database,
  Home,
  Menu,
  Network,
  SquareFunction,
  StickyNote,
  Store,
  Table,
  X,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  return (
    <>
      <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg sticky top-0">
        <nav className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center">
            <Home className="w-6 h-6 mr-2" />
            PokeAnalytics
          </Link>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>
    </>
  )
}
