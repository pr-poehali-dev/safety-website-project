import Icon from "@/components/ui/icon";
import { navItems } from "@/components/data";

interface NavBarProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  onScrollTo: (id: string) => void;
  onToggleMobile: () => void;
}

export default function NavBar({ activeSection, mobileMenuOpen, onScrollTo, onToggleMobile }: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center neon-glow-green">
            <Icon name="ShieldCheck" size={18} className="text-primary-foreground" />
          </div>
          <span className="font-oswald text-xl font-bold tracking-wide">
            SAFE<span className="text-primary text-glow-green">WORK</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="pulse-dot w-2 h-2 rounded-full bg-primary inline-block"></span>
            <span className="text-xs text-primary font-medium">Система активна</span>
          </div>
          <button
            onClick={onToggleMobile}
            className="lg:hidden p-2 rounded-lg bg-secondary text-foreground"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-3 grid grid-cols-2 gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary text-left transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
