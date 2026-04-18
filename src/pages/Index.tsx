import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/a0d0cbab-2980-4d41-b858-c9386cb1362b/files/5a1f24bf-101d-4f99-a604-2081928f2b73.jpg";
const FIRSTAID_IMG = "https://cdn.poehali.dev/projects/a0d0cbab-2980-4d41-b858-c9386cb1362b/files/6e9ed470-f005-4284-8a38-0c5663216c00.jpg";
const PPE_IMG = "https://cdn.poehali.dev/projects/a0d0cbab-2980-4d41-b858-c9386cb1362b/files/df9a238f-4dad-4253-9204-dd6590f4cb60.jpg";

const navItems = [
  { id: "home", label: "Главная" },
  { id: "policy", label: "Политика" },
  { id: "documents", label: "Документы" },
  { id: "training", label: "Обучение" },
  { id: "firstaid", label: "Первая помощь" },
  { id: "risks", label: "Оценка рисков" },
];

const stats = [
  { value: "0", label: "Несчастных случаев", icon: "ShieldCheck" },
  { value: "247", label: "Обученных сотрудников", icon: "Users" },
  { value: "98%", label: "Соответствие нормам", icon: "CheckCircle" },
  { value: "24/7", label: "Готовность к ЧС", icon: "Zap" },
];

const documents = [
  { title: "Положение об охране труда", type: "PDF", date: "15.01.2024", icon: "FileText" },
  { title: "Инструкция по пожарной безопасности", type: "PDF", date: "10.02.2024", icon: "Flame" },
  { title: "Регламент использования СИЗ", type: "DOCX", date: "05.03.2024", icon: "HardHat" },
  { title: "Журнал инструктажей", type: "XLSX", date: "01.04.2024", icon: "BookOpen" },
  { title: "Акты проверок рабочих мест", type: "PDF", date: "20.03.2024", icon: "ClipboardCheck" },
  { title: "Карты оценки рисков", type: "PDF", date: "18.04.2024", icon: "AlertTriangle" },
];

const trainingModules = [
  { id: 1, title: "Использование респираторов и масок", duration: "12 мин", level: "Базовый", img: PPE_IMG, tag: "СИЗ" },
  { id: 2, title: "Защитные каски и очки: правила надевания", duration: "8 мин", level: "Базовый", img: PPE_IMG, tag: "СИЗ" },
  { id: 3, title: "Спецодежда и перчатки: выбор и уход", duration: "15 мин", level: "Средний", img: PPE_IMG, tag: "СИЗ" },
];

const firstAidItems = [
  { icon: "Heart", title: "Сердечно-лёгочная реанимация", desc: "Алгоритм при остановке сердца", color: "text-red-400" },
  { icon: "Thermometer", title: "Тепловой удар", desc: "Первые действия при перегреве", color: "text-orange-400" },
  { icon: "Scissors", title: "Порезы и ссадины", desc: "Обработка ран на рабочем месте", color: "text-yellow-400" },
  { icon: "Eye", title: "Химикаты в глаза", desc: "Экстренное промывание и помощь", color: "text-blue-400" },
  { icon: "Zap", title: "Поражение электротоком", desc: "Освобождение от источника", color: "text-purple-400" },
  { icon: "Wind", title: "Отравление газами", desc: "Действия при вдыхании веществ", color: "text-green-400" },
];

const riskCategories = [
  { level: "Высокий", count: 3, colorClass: "bg-red-500", glowClass: "shadow-red-500/40", desc: "Требуют немедленных мер" },
  { level: "Средний", count: 8, colorClass: "bg-orange-500", glowClass: "shadow-orange-500/40", desc: "Плановые мероприятия" },
  { level: "Низкий", count: 24, colorClass: "bg-green-500", glowClass: "shadow-green-500/40", desc: "Под контролем" },
];

const policyPrinciples = [
  { icon: "Target", title: "Цели и обязательства", desc: "Нулевая травматизация как стратегическая цель. Безопасность — приоритет выше производительности." },
  { icon: "Users", title: "Ответственность", desc: "Каждый сотрудник несёт личную ответственность за соблюдение норм охраны труда на своём месте." },
  { icon: "TrendingUp", title: "Постоянное улучшение", desc: "Регулярный аудит условий труда, анализ инцидентов и внедрение лучших практик безопасности." },
  { icon: "Scale", title: "Соответствие законодательству", desc: "Полное соблюдение ТК РФ, ГОСТ и профессиональных стандартов в сфере охраны труда." },
];

const riskRows = [
  { risk: "Работа на высоте", location: "Леса, блок А", level: "Высокий", action: "Инструктаж 25.04" },
  { risk: "Падение предметов", location: "Монтажная зона", level: "Высокий", action: "Каски обязательны" },
  { risk: "Электрические установки", location: "Временный щит", level: "Средний", action: "Проверка изоляции" },
  { risk: "Работа с бетоном", location: "Фундамент, ось 3", level: "Средний", action: "СИЗ обязательны" },
  { risk: "Шум и вибрация", location: "Вся стройплощадка", level: "Низкий", action: "Наушники выданы" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-golos overflow-x-hidden">
      {/* NAV */}
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
                onClick={() => scrollTo(item.id)}
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 grid-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="ShieldCheck" size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary tracking-widest uppercase">Охрана труда · Строительный объект</span>
            </div>

            <h1 className="font-oswald text-5xl sm:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              ОХРАНА<br />
              <span className="text-primary text-glow-green">ТРУДА</span><br />
              <span className="text-muted-foreground text-4xl sm:text-5xl">НА СТРОЙКЕ</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Комплексная система управления охраной труда на строительном объекте. Документы, обучение по СИЗ, оценка рисков и первая помощь — всё в одном месте.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("training")}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 neon-glow-green transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Icon name="Play" size={18} />
                Начать обучение
              </button>
              <button
                onClick={() => scrollTo("documents")}
                className="px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Icon name="FileText" size={18} />
                Документы
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-oswald font-bold text-primary text-glow-green">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative float-anim hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden gradient-border">
              <img src={HERO_IMG} alt="Охрана труда" className="w-full aspect-[4/3] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon name="Shield" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Строительный объект · Соответствует ГОСТ 12.0.230</div>
                  <div className="text-xs text-muted-foreground">Система менеджмента ОТ в строительстве</div>
                </div>
                <Icon name="CheckCircle" size={20} className="text-primary ml-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-secondary/50 overflow-hidden py-3">
          <div className="flex gap-12 marquee whitespace-nowrap">
            {[0, 1].map((i) => (
              <div key={i} className="flex gap-12 shrink-0">
                {[
                  "⚠️ Проверка средств пожаротушения — 25 апреля",
                  "🦺 Плановый инструктаж — 30 апреля",
                  "📋 Сдача отчётности по охране труда — 1 мая",
                  "✅ Аудит рабочих мест — 10 мая",
                  "🎓 Обучение первой помощи — 15 мая",
                ].map((t) => (
                  <span key={t} className="text-sm text-muted-foreground">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY */}
      <section id="policy" className="py-24 relative">
        <div className="absolute inset-0 diagonal-stripe opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-accent tracking-widest uppercase mb-3 block">01 — Политика</span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-4">
              ПОЛИТИКА <span className="text-primary text-glow-green">БЕЗОПАСНОСТИ</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наша компания принимает полную ответственность за создание безопасных условий труда на строительном объекте для каждого работника
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {policyPrinciples.map((p, i) => (
              <div key={i} className="gradient-border rounded-2xl bg-card p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 neon-glow-green">
                    <Icon name={p.icon as "Target"} size={22} className="text-primary" fallback="Shield" />
                  </div>
                  <div>
                    <h3 className="font-oswald text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 p-8 text-center">
            <Icon name="Quote" size={32} className="text-primary mx-auto mb-4" />
            <blockquote className="font-oswald text-2xl sm:text-3xl font-bold mb-4">
              «БЕЗОПАСНОСТЬ — ЭТО НЕ РАСХОДЫ,<br className="hidden sm:block" /> ЭТО ИНВЕСТИЦИИ В ЛЮДЕЙ»
            </blockquote>
            <p className="text-muted-foreground text-sm">Генеральный директор компании</p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section id="documents" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
            <div>
              <span className="text-xs font-medium text-accent tracking-widest uppercase mb-3 block">02 — Документы</span>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold">
                ДОКУМЕНТЫ И<br /><span className="text-primary text-glow-green">РЕГЛАМЕНТЫ</span>
              </h2>
            </div>
            <button className="px-5 py-2.5 rounded-xl bg-secondary border border-border hover:border-primary/40 text-sm font-medium transition-all duration-200 flex items-center gap-2 self-start sm:self-auto">
              <Icon name="FolderOpen" size={16} />
              Все документы
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, i) => (
              <div key={i} className="group rounded-xl bg-card border border-border hover:border-primary/30 p-5 card-hover cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={doc.icon as "FileText"} size={20} className="text-primary" fallback="FileText" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                    doc.type === "PDF" ? "bg-red-500/10 text-red-400" :
                    doc.type === "DOCX" ? "bg-blue-500/10 text-blue-400" :
                    "bg-green-500/10 text-green-400"
                  }`}>
                    {doc.type}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-2 leading-tight">{doc.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Calendar" size={12} />
                    {doc.date}
                  </span>
                  <Icon name="Download" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium text-accent tracking-widest uppercase mb-3 block">03 — Обучение</span>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-4">
              ВИДЕОУРОКИ ПО <span className="text-primary text-glow-green">СИЗ</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Практические видеоинструкции по правильному использованию средств индивидуальной защиты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {trainingModules.map((module) => (
              <div key={module.id} className="group rounded-2xl bg-card border border-border overflow-hidden card-hover">
                <div className="relative">
                  <img
                    src={module.img}
                    alt={module.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <button
                    onClick={() => setActiveVideo(activeVideo === module.id ? null : module.id)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center neon-glow-green group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        name={activeVideo === module.id ? "Pause" : "Play"}
                        size={24}
                        className="text-primary-foreground ml-0.5"
                      />
                    </div>
                  </button>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-xs font-bold px-2 py-1 rounded-md bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                      {module.tag}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-md bg-black/40 text-white backdrop-blur-sm">
                      {module.level}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                    <Icon name="Clock" size={12} className="text-white" />
                    <span className="text-xs text-white">{module.duration}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-3 leading-tight">{module.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="Star" size={12} className="text-yellow-400" />
                      ))}
                    </div>
                    <button className="text-xs text-primary hover:underline font-medium">Пройти тест →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-card border border-border p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-oswald text-xl font-bold">Прогресс обучения команды</h3>
                <p className="text-muted-foreground text-sm mt-1">Текущий квартал: апрель 2024</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                <Icon name="TrendingUp" size={16} className="text-primary" />
                <span className="text-sm font-semibold text-primary">+18% к прошлому кварталу</span>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Завершили обучение", value: 78, colorClass: "bg-primary" },
                { label: "В процессе", value: 15, colorClass: "bg-accent" },
                { label: "Не начали", value: 7, colorClass: "bg-muted-foreground" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-bold">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${item.colorClass}`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                    onClick={() => scrollTo(item.id)}
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
    </div>
  );
}