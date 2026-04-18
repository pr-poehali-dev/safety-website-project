export const HERO_IMG = "https://cdn.poehali.dev/projects/a0d0cbab-2980-4d41-b858-c9386cb1362b/files/5a1f24bf-101d-4f99-a604-2081928f2b73.jpg";
export const FIRSTAID_IMG = "https://cdn.poehali.dev/projects/a0d0cbab-2980-4d41-b858-c9386cb1362b/files/6e9ed470-f005-4284-8a38-0c5663216c00.jpg";
export const PPE_IMG = "https://cdn.poehali.dev/projects/a0d0cbab-2980-4d41-b858-c9386cb1362b/files/df9a238f-4dad-4253-9204-dd6590f4cb60.jpg";

export const navItems = [
  { id: "home", label: "Главная" },
  { id: "policy", label: "Политика" },
  { id: "documents", label: "Документы" },
  { id: "training", label: "Обучение" },
  { id: "firstaid", label: "Первая помощь" },
  { id: "risks", label: "Оценка рисков" },
  { id: "regulations", label: "Нормативная база" },
];

export const regulations = [
  {
    category: "Постановления Правительства РФ",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    icon: "Landmark",
    items: [
      { code: "Постановление № 2816", title: "Примерное положение о системе управления охраной труда", year: "2021" },
      { code: "Постановление № 447", title: "Правила обеспечения работников средствами индивидуальной защиты", year: "2023" },
      { code: "Постановление № 1464", title: "Порядок обучения по охране труда и проверки знаний", year: "2021" },
      { code: "Постановление № 559н", title: "Требования охраны труда при строительстве, реконструкции и ремонте", year: "2020" },
    ],
  },
  {
    category: "ГОСТы и стандарты",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    icon: "BookMarked",
    items: [
      { code: "ГОСТ 12.0.230-2007", title: "ССБТ. Системы управления охраной труда. Общие требования", year: "2007" },
      { code: "ГОСТ 12.1.004-91", title: "ССБТ. Пожарная безопасность. Общие требования", year: "1991" },
      { code: "ГОСТ 12.4.011-89", title: "ССБТ. Средства защиты работающих. Общие требования", year: "1989" },
      { code: "ГОСТ Р 12.0.007-2009", title: "ССБТ. Системы управления охраной труда в организации", year: "2009" },
    ],
  },
  {
    category: "Трудовой кодекс РФ",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    icon: "Scale",
    items: [
      { code: "Статья 212 ТК РФ", title: "Обязанности работодателя по обеспечению безопасных условий труда", year: "" },
      { code: "Статья 214 ТК РФ", title: "Обязанности работника в области охраны труда", year: "" },
      { code: "Статья 221 ТК РФ", title: "Обеспечение работников средствами индивидуальной защиты", year: "" },
      { code: "Статья 225 ТК РФ", title: "Обучение и профессиональная подготовка в области охраны труда", year: "" },
    ],
  },
];

export const stats = [
  { value: "0", label: "Несчастных случаев", icon: "ShieldCheck" },
  { value: "247", label: "Обученных сотрудников", icon: "Users" },
  { value: "98%", label: "Соответствие нормам", icon: "CheckCircle" },
  { value: "24/7", label: "Готовность к ЧС", icon: "Zap" },
];

export const documents = [
  { title: "Положение об охране труда", type: "PDF", date: "15.01.2024", icon: "FileText" },
  { title: "Инструкция по пожарной безопасности", type: "PDF", date: "10.02.2024", icon: "Flame" },
  { title: "Регламент использования СИЗ", type: "DOCX", date: "05.03.2024", icon: "HardHat" },
  { title: "Журнал инструктажей", type: "XLSX", date: "01.04.2024", icon: "BookOpen" },
  { title: "Акты проверок рабочих мест", type: "PDF", date: "20.03.2024", icon: "ClipboardCheck" },
  { title: "Карты оценки рисков", type: "PDF", date: "18.04.2024", icon: "AlertTriangle" },
];

export const trainingModules = [
  { id: 1, title: "Использование респираторов и масок", duration: "12 мин", level: "Базовый", img: PPE_IMG, tag: "СИЗ" },
  { id: 2, title: "Защитные каски и очки: правила надевания", duration: "8 мин", level: "Базовый", img: PPE_IMG, tag: "СИЗ" },
  { id: 3, title: "Спецодежда и перчатки: выбор и уход", duration: "15 мин", level: "Средний", img: PPE_IMG, tag: "СИЗ" },
];

export const firstAidItems = [
  { icon: "Heart", title: "Сердечно-лёгочная реанимация", desc: "Алгоритм при остановке сердца", color: "text-red-400" },
  { icon: "Thermometer", title: "Тепловой удар", desc: "Первые действия при перегреве", color: "text-orange-400" },
  { icon: "Scissors", title: "Порезы и ссадины", desc: "Обработка ран на рабочем месте", color: "text-yellow-400" },
  { icon: "Eye", title: "Химикаты в глаза", desc: "Экстренное промывание и помощь", color: "text-blue-400" },
  { icon: "Zap", title: "Поражение электротоком", desc: "Освобождение от источника", color: "text-purple-400" },
  { icon: "Wind", title: "Отравление газами", desc: "Действия при вдыхании веществ", color: "text-green-400" },
];

export const riskCategories = [
  { level: "Высокий", count: 3, colorClass: "bg-red-500", glowClass: "shadow-red-500/40", desc: "Требуют немедленных мер" },
  { level: "Средний", count: 8, colorClass: "bg-orange-500", glowClass: "shadow-orange-500/40", desc: "Плановые мероприятия" },
  { level: "Низкий", count: 24, colorClass: "bg-green-500", glowClass: "shadow-green-500/40", desc: "Под контролем" },
];

export const policyPrinciples = [
  { icon: "Target", title: "Цели и обязательства", desc: "Нулевая травматизация как стратегическая цель. Безопасность — приоритет выше производительности." },
  { icon: "Users", title: "Ответственность", desc: "Каждый сотрудник несёт личную ответственность за соблюдение норм охраны труда на своём месте." },
  { icon: "TrendingUp", title: "Постоянное улучшение", desc: "Регулярный аудит условий труда, анализ инцидентов и внедрение лучших практик безопасности." },
  { icon: "Scale", title: "Соответствие законодательству", desc: "Полное соблюдение ТК РФ, ГОСТ и профессиональных стандартов в сфере охраны труда." },
];

export const riskRows = [
  { risk: "Работа на высоте", location: "Леса, блок А", level: "Высокий", action: "Инструктаж 25.04" },
  { risk: "Падение предметов", location: "Монтажная зона", level: "Высокий", action: "Каски обязательны" },
  { risk: "Электрические установки", location: "Временный щит", level: "Средний", action: "Проверка изоляции" },
  { risk: "Работа с бетоном", location: "Фундамент, ось 3", level: "Средний", action: "СИЗ обязательны" },
  { risk: "Шум и вибрация", location: "Вся стройплощадка", level: "Низкий", action: "Наушники выданы" },
];
