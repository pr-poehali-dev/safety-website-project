import Icon from "@/components/ui/icon";
import { HERO_IMG, stats, policyPrinciples, documents, trainingModules } from "@/components/data";

interface TopSectionsProps {
  activeVideo: number | null;
  onScrollTo: (id: string) => void;
  onSetActiveVideo: (id: number | null) => void;
}

export default function TopSections({ activeVideo, onScrollTo, onSetActiveVideo }: TopSectionsProps) {
  return (
    <>
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
                onClick={() => onScrollTo("training")}
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 neon-glow-green transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Icon name="Play" size={18} />
                Начать обучение
              </button>
              <button
                onClick={() => onScrollTo("documents")}
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
                  "⚠️ Плановая проверка средств пожаротушения",
                  "🦺 Плановый инструктаж по охране труда",
                  "📋 Сдача отчётности по охране труда",
                  "✅ Аудит рабочих мест на стройплощадке",
                  "🎓 Обучение первой помощи",
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
                    onClick={() => onSetActiveVideo(activeVideo === module.id ? null : module.id)}
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
    </>
  );
}
