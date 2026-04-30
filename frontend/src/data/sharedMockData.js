import { statusValues } from '../constants/status'

export const sharedStatusMeta = {
  [statusValues.active]: { tone: 'success', category: 'warehouse' },
  [statusValues.pendingReview]: { tone: 'warning', category: 'review' },
  [statusValues.suspended]: { tone: 'error', category: 'account' },
  [statusValues.inactive]: { tone: 'neutral', category: 'warehouse' },
  [statusValues.paid]: { tone: 'accent', category: 'payment' },
}

export const saudiCityOptions = ['الرياض', 'جدة', 'الدمام', 'الخبر']

export const roleNavigation = [
  { id: 'renter', label: 'المستأجر', dashboardLabel: 'لوحة المستأجر' },
  { id: 'owner', label: 'المالك', dashboardLabel: 'لوحة المالك' },
  { id: 'admin', label: 'المشرف', dashboardLabel: 'لوحة المشرف' },
]

export const heroContent = {
  kicker: 'RAFDI PLATFORM',
  brandName: 'رفدي',
  brandMarkLabel: 'لوجستيات',
  title: 'ربط المستودعات بالشركات بطريقة أبسط وأوضح',
  subtitle:
    'رفدي منصة عربية لإدارة واستعراض وحجز المساحات التخزينية بين الملاك والمستأجرين مع رؤية واضحة للمشرف.',
  primaryCta: 'ابدأ العرض',
  secondaryCta: 'استعرض الأدوار',
  heroPanel: {
    eyebrow: 'الواجهة الرئيسية',
    title: 'رفدي',
    badge: 'عربي أولاً',
    flowTitle: 'تدفق العرض',
    flowSteps: ['الرئيسية', 'تسجيل الدخول', 'منصات النظام'],
  },
}

export const landingValueContent = {
  eyebrow: 'قيمة المنصة',
  title: 'منصة واحدة لاكتشاف المساحات وإدارة التشغيل بثقة',
  text: 'تجمع رفدي بين الاستعراض والحجز والمتابعة الإدارية في تجربة عربية واضحة ومناسبة لقطاع الخدمات اللوجستية في السعودية.',
  outcomes: [
    {
      title: 'اكتشف المستودعات المتاحة',
      text: 'استعرض الخيارات المناسبة حسب المدينة والمساحة والسعر قبل بدء الحجز.',
    },
    {
      title: 'أدر الحجوزات والمدفوعات',
      text: 'تابع حالة الطلبات والفواتير والمدفوعات من واجهة واضحة ومباشرة.',
    },
    {
      title: 'اعمل برؤية إشرافية كاملة',
      text: 'يحصل المالك والمستأجر والمشرف على صورة متناسقة للحالة التشغيلية والحجوزات.',
    },
  ],
}

export const workflowSteps = [
  'ابحث عن المستودع',
  'احجز المساحة',
  'تابع الحجوزات والمدفوعات',
]

export const roleCards = [
  { title: 'المستأجر', text: 'استعراض المستودعات المناسبة والحجز ومتابعة حالة الدفع.' },
  { title: 'المالك', text: 'إدارة المستودعات والطلبات والحالة التشغيلية من لوحة واضحة.' },
  { title: 'المشرف', text: 'متابعة الشركات والمستودعات والحجوزات من رؤية مركزية واحدة.' },
]

export const workflowContent = {
  eyebrow: 'مسار العمل',
  title: 'رحلة واضحة من البحث إلى الحجز ثم المتابعة',
  text: 'يعرض رفدي المسار الأساسي للمستأجر بطريقة مختصرة وواضحة تساعد على فهم قيمة المنصة سريعاً في العرض التقديمي.',
  stepPrefix: 'الخطوة',
}

export const rolePreviewContent = {
  eyebrow: 'استعراض الأدوار',
  title: 'ثلاثة أدوار داخل منصة واحدة',
  text: 'تُظهر رفدي كيف تتحرك تجربة المنتج بين المستأجر والمالك والمشرف بدون ازدحام بصري أو تفاصيل تقنية داخل الواجهة.',
}

export const finalCtaContent = {
  eyebrow: 'الخطوة التالية',
  title: 'ابدأ العرض من صفحة الدخول ثم انتقل مباشرة إلى استعراض المنصات',
  text: 'تم تصميم الصفحة الرئيسية لتوضيح الفكرة بسرعة، ثم توجيه المشاهد إلى شاشة الدخول ولوحة الاستعراض بلغة واضحة وتجربة مركزة.',
  primaryAction: 'الانتقال إلى تسجيل الدخول',
  secondaryAction: 'عرض المنصات',
}

export const loginContent = {
  tabs: {
    signIn: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',
  },
  fields: {
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'name@company.com',
    passwordLabel: 'كلمة المرور',
    passwordPlaceholder: '........',
  },
  primaryAction: 'تسجيل الدخول',
  forgotPassword: 'نسيت كلمة المرور؟',
  signUpPreview: {
    title: 'إنشاء الحساب في المرحلة القادمة',
    text: 'في هذا العرض الأولي نركز على مسار الدخول واستعراض المنصات. شاشة التسجيل الكاملة ستكون جزءاً من المرحلة التالية.',
    action: 'الانتقال إلى الاستعراض',
  },
  brandPanel: {
    logoText: 'رفدي',
    platformLabel: 'RAFDI PLATFORM 2026',
    platformFooter: 'RAFDI PLATFORM 2026 ©',
    headline: 'مرحباً بك في رفدي',
    description: 'منصة عربية لربط الشركات بالمستودعات وإدارة العمليات اللوجستية بثقة ووضوح.',
    trustBullets: [
      {
        title: 'عروض واضحة وموثقة',
        text: 'بيانات المستودعات والشركات معروضة بصورة منظمة ومناسبة للعرض التقديمي.',
      },
      {
        title: 'متابعة تشغيلية أسهل',
        text: 'لوحات موجزة تساعد على فهم الحجوزات والمدفوعات والحالة العامة بسرعة.',
      },
      {
        title: 'تجربة عربية أولاً',
        text: 'تصميم RTL احترافي مع تفاصيل ثنائية اللغة حيث تضيف مصداقية للمنتج.',
      },
    ],
  },
}

export const dashboardShowcaseContent = {
  eyebrow: 'واجهات المنصة',
  title: 'منصات النظام داخل رفدي',
  text: 'عرض سريع للواجهات الأساسية التي سيستخدمها المالك والمستأجر والمشرف في المراحل القادمة.',
  summaryBar: {
    title: 'عرض المنصات',
    subtitle: 'واجهة تقديمية تعرض كيف تتوزع تجربة رفدي بين الإشراف والإدارة والحجز.',
    badge: 'عرض تجريبي',
  },
  sharedStats: [
    { label: 'الشركات', value: '42' },
    { label: 'المستودعات', value: '26' },
    { label: 'الحجوزات النشطة', value: '18' },
  ],
  sections: {
    admin: {
      eyebrow: 'واجهة المشرف',
      title: 'لوحة المشرف',
      description: 'رؤية مركزية للشركات والمستودعات والحجوزات والطلبات التي تحتاج مراجعة.',
      badge: 'قائمة المراجعة',
      queueTitle: 'طلبات المراجعة',
      queueDescription: 'طلب تفعيل ومراجعة بيانات الشركة',
      highlights: [
        { label: 'إجمالي الشركات', value: '42' },
        { label: 'عدد المستودعات', value: '26' },
        { label: 'نظرة على الحجوزات', value: '18 قيد التنفيذ' },
      ],
      moderationQueue: [
        { company: 'شركة المسار التجاري', status: statusValues.pendingReview },
        { company: 'شركة الإمداد الذكي', status: statusValues.suspended },
        { company: 'شركة رافد الصناعية', status: statusValues.active },
      ],
    },
    owner: {
      eyebrow: 'واجهة المالك',
      title: 'لوحة المالك',
      description: 'متابعة المستودعات المسجلة وطلبات الحجز والحالة التشغيلية والإيرادات الشهرية.',
      badge: 'محفظة نشطة',
      listTitle: 'المستودعات المسجلة',
      highlights: [
        { label: 'المستودعات', value: '03' },
        { label: 'الطلبات الجديدة', value: '01' },
        { label: 'الإيراد الشهري', value: '40,500 SAR' },
      ],
      warehouses: [
        { name: 'مستودع الرمال اللوجستي', city: 'الرياض', status: statusValues.active },
        { name: 'مستودعات بوابة الشرق', city: 'الدمام', status: statusValues.active },
        { name: 'مستودع الشمال المبرد', city: 'الرياض', status: statusValues.inactive },
      ],
    },
    renter: {
      eyebrow: 'واجهة المستأجر',
      title: 'لوحة المستأجر',
      description: 'استعراض المستودعات المناسبة ومتابعة الحجوزات الحالية وحالة الدفع والإجراءات السريعة.',
      labels: {
        size: 'المساحة',
        monthlyPrice: 'السعر الشهري',
      },
      paymentStatus: {
        title: 'حالة الدفع الحالية',
        status: statusValues.paid,
        detail: 'آخر دفعة مرتبطة بحجز مستودع الرمال اللوجستي وتم تأكيدها بنجاح.',
      },
      highlights: [
        { label: 'الحجوزات الحالية', value: '02' },
        { label: 'الدفعات المكتملة', value: '01' },
        { label: 'المدينة المفضلة', value: 'الرياض' },
      ],
      quickActions: ['بحث جديد', 'متابعة الدفعات', 'عرض العقود'],
    },
  },
}
