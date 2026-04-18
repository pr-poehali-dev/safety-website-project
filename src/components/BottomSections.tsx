import Icon from "@/components/ui/icon";
import { FIRSTAID_IMG, firstAidItems, riskCategories, riskRows, regulations, navItems } from "@/components/data";

interface BottomSectionsProps {
  onScrollTo: (id: string) => void;
}

export default function BottomSections({ onScrollTo }: BottomSectionsProps) {
  return (
    <>
      {/* FIRST AID */}
      <section id="firstaid" className="py-24 bg-card/30 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-medium text-accent tracking-widest uppercase mb-3 block">04 — Первая помощь</span>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-6">
                ПЕРВАЯ <span className="text-accent text-glow-orange">ПОМОЩЬ</span><br />И ИНСТРУКЦИИ
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Каждый сотрудник должен знать, как действовать в экстренной ситуации. Здесь собраны все необходимые инструкции и алгоритмы.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {firstAidItems.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-card border border-border p-4 hover:border-accent/30 transition-colors cursor-pointer group"
                  >
                    <Icon name={item.icon as "Heart"} size={20} className={`${item.color} mb-2 group-hover:scale-110 transition-transform`} fallback="Heart" />
                    <h4 className="text-sm font-semibold leading-tight mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden gradient-border">
                <img src={FIRSTAID_IMG} alt="Первая помощь" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent neon-glow-orange flex flex-col items-center justify-center">
                <span className="font-oswald text-3xl font-bold text-white">112</span>
                <span className="text-xs text-white/80 font-medium">Экстренный</span>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl bg-card border border-border p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Icon name="Phone" size={18} className="text-red-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Ответственный по ОТ</div>
                  <div className="font-semibold text-sm">+7 (800) 555-ОТ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section id="risks" className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-accent tracking-widest uppercase mb-3 block">05 — Оценка рисков</span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-4">
              ОЦЕНКА <span className="text-primary text-glow-green">РИСКОВ</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Актуальный реестр рисков и опасностей на рабочих местах с планами корректирующих мер
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {riskCategories.map((cat, i) => (
              <div key={i} className={`rounded-2xl bg-card border border-border p-8 text-center card-hover shadow-lg ${cat.glowClass}`}>
                <div className={`w-16 h-16 rounded-full ${cat.colorClass} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  <span className="font-oswald text-2xl font-bold text-white">{cat.count}</span>
                </div>
                <h3 className="font-oswald text-xl font-bold mb-2">{cat.level} риск</h3>
                <p className="text-muted-foreground text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-card border border-border overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="font-oswald text-xl font-bold flex items-center gap-2">
                <Icon name="AlertTriangle" size={20} className="text-accent" />
                Реестр опасностей
              </h3>
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                <Icon name="Plus" size={14} />
                Добавить риск
              </button>
            </div>
            <div className="divide-y divide-border">
              {riskRows.map((row, i) => (
                <div key={i} className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-secondary/30 transition-colors">
                  <div className="font-medium text-sm">{row.risk}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="MapPin" size={12} />
                    {row.location}
                  </div>
                  <div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      row.level === "Высокий" ? "bg-red-500/15 text-red-400" :
                      row.level === "Средний" ? "bg-orange-500/15 text-orange-400" :
                      "bg-green-500/15 text-green-400"
                    }`}>
                      {row.level}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Icon name="ArrowRight" size={12} className="text-primary" />
                    {row.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REGULATIONS */}
      <section id="regulations" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-accent tracking-widest uppercase mb-3 block">06 — Нормативная база</span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-4">
              ПОСТАНОВЛЕНИЯ РФ <span className="text-primary text-glow-green">И ГОСТы</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Основные нормативно-правовые акты, регулирующие охрану труда в строительстве
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {regulations.map((group, gi) => (
              <div key={gi} className={`rounded-2xl bg-card border ${group.borderColor} overflow-hidden`}>
                <div className={`px-6 py-4 border-b ${group.borderColor} ${group.bgColor} flex items-center gap-3`}>
                  <Icon name={group.icon as "Landmark"} size={20} className={group.color} fallback="FileText" />
                  <h3 className={`font-oswald text-base font-bold ${group.color}`}>{group.category}</h3>
                </div>
                <div className="divide-y divide-border">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="px-6 py-4 hover:bg-secondary/30 transition-colors cursor-pointer group">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className={`text-xs font-bold mb-1 ${group.color}`}>{item.code}</div>
                          <p className="text-sm text-foreground leading-snug">{item.title}</p>
                          {item.year && (
                            <span className="text-xs text-muted-foreground mt-1 block">Принят: {item.year}</span>
                          )}
                        </div>
                        <Icon name="ExternalLink" size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-accent/10 border border-primary/20 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon name="Bell" size={22} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold">Следите за изменениями в законодательстве</div>
                <div className="text-sm text-muted-foreground">Нормативная база обновляется — проверяйте актуальность документов</div>
              </div>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 neon-glow-green transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center gap-2 shrink-0">
              <Icon name="RefreshCw" size={15} />
              Проверить обновления
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <Icon name="ShieldCheck" size={16} className="text-primary-foreground" />
                </div>
                <span className="font-oswald text-lg font-bold">SAFE<span className="text-primary">WORK</span></span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Охрана труда на строительном объекте — документы, обучение, безопасность
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Разделы</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onScrollTo(item.id)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Phone" size={14} className="text-primary" />
                  Служба охраны труда
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Mail" size={14} className="text-primary" />
                  safety@company.ru
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={14} className="text-primary" />
                  Офис 312, корпус А
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">© 2024 SafeWork. Система управления охраной труда</p>
            <div className="flex items-center gap-2">
              <span className="pulse-dot w-2 h-2 rounded-full bg-primary inline-block"></span>
              <span className="text-xs text-primary">Все системы работают штатно</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
