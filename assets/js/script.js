const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
}

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('.slider-dots button')];
const prev = document.querySelector('.slider-arrow.prev');
const next = document.querySelector('.slider-arrow.next');
let active = 0;
let timer;

function showSlide(index) {
  active = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === active));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === active));
}

function advance(step = 1) {
  showSlide(active + step);
  restartSlider();
}

function restartSlider() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(active + 1), 5500);
}

prev?.addEventListener('click', () => advance(-1));
next?.addEventListener('click', () => advance(1));
dots.forEach((dot, i) => dot.addEventListener('click', () => { showSlide(i); restartSlider(); }));
showSlide(0);
restartSlider();

const translations = {
  en: {
    brandKicker: 'Scalixr AI Strategic Division',
    navVision: 'Vision',
    navEngine: 'Engine',
    navPlatforms: 'AI Platforms',
    navMedia: 'Media',
    navFaq: 'FAQ',
    navContact: 'Contact',
    heroTitle: 'Cognitive security for intelligent systems before risk becomes impact.',
    heroCopy: 'Scalixr Security combines AI, behavioral analytics, and real-time response to protect cities, enterprises, and infrastructure with cognitive precision.',
    heroBtn1: 'Explore security intelligence',
    heroBtn2: 'Partner with Scalixr',
    metric1: 'Threat intelligence',
    metric1v: 'Active',
    metric2: 'Behavioral analytics',
    metric3: 'Incident response',
    engineKicker: 'End-to-end protection',
    engineTitle: 'AI security across every critical layer.',
    engineLead: 'From data to operations, we build adaptive defenses that learn, predict, and neutralize threats in real time.',
    f1Title: 'Threat Intelligence',
    f1Text: 'AI-powered monitoring of global threats and attack vectors.',
    f2Title: 'Behavioral Analytics',
    f2Text: 'Detect anomalies and insider risks using cognitive modeling.',
    f3Title: 'Infrastructure Shield',
    f3Text: 'Protect critical systems, networks, venues, and IoT infrastructure.',
    f4Title: 'Incident Response',
    f4Text: 'Autonomous response and recovery with AI-driven orchestration.',
    visionKicker: 'Cognitive security vision',
    visionTitle: 'Security that understands people, places, patterns, and systems.',
    visionLead: 'The division turns security operations into a living intelligence layer for smart environments, enterprise campuses, cultural venues, and future cities.',
    v1Title: 'Command center intelligence',
    v1Text: 'Unified dashboards for cyber, physical, infrastructure and city-scale risk.',
    v2Title: 'Infrastructure protection',
    v2Text: 'AI awareness around networks, devices, routes, assets and sensitive operations.',
    v3Title: 'Adaptive access',
    v3Text: 'Context-aware access and security decisions connected to behavior and alerts.',
    platformsKicker: 'AI security platforms',
    platformsTitle: 'A layered platform for risk, awareness, and response.',
    p1Title: 'Cognitive Command',
    p1Text: 'A single intelligence surface connecting people, systems, alerts, and decisions.',
    p2Title: 'Risk Intelligence',
    p2Text: 'Predictive scoring for vulnerabilities, patterns, behavior, and operational weak points.',
    p3Title: 'Smart City Protection',
    p3Text: 'AI-assisted monitoring for districts, facilities, events, and connected public spaces.',
    p4Title: 'Behavior Intelligence',
    p4Text: 'AI-assisted evaluation of signals, users, movement, intent, and sensitive workflows.',
    mediaKicker: 'Motion intelligence',
    mediaTitle: 'Video loops for security presentations and sponsor demos.',
    mediaLead: 'The website uses silent looping visual moments to communicate cybersecurity, command centers, and surveillance without heavy controls.',
    m1Title: 'Security command center',
    m2Title: 'Cognitive threat engine',
    m3Title: 'Smart city surveillance',
    m4Title: 'Next-gen AI platform',
    appsKicker: 'Security applications',
    appsTitle: 'Built for strategic environments where trust is infrastructure.',
    a1Title: 'Smart city operations',
    a1Text: 'Monitor city-scale risk signals, incident clusters, connected zones, and response workflows.',
    a2Title: 'Corporate campuses',
    a2Text: 'Connect access, surveillance, visitor flows, and security teams into one intelligent command layer.',
    a3Title: 'Events and venues',
    a3Text: 'Analyze crowd movement, anomaly signals, and on-ground response actions in real time.',
    a4Title: 'Critical infrastructure',
    a4Text: 'Protect utilities, facilities, logistics networks, and operational technology environments.',
    faqKicker: 'Questions & answers',
    faqTitle: 'Common questions about Scalixr Cognitive Security.',
    q1: 'What is Scalixr Cognitive Security?',
    q1a: 'It is an AI security division focused on threat intelligence, behavior analysis, infrastructure protection, and incident response.',
    q2: 'Who can use it?',
    q2a: 'It can support smart cities, corporate campuses, government programs, entertainment venues, public spaces, and critical infrastructure.',
    q3: 'Does it replace existing security systems?',
    q3a: 'No. The concept is designed to connect with existing cameras, sensors, dashboards, access systems, and security operation workflows.',
    q4: 'Is it sponsor-ready?',
    q4a: 'Yes. The website presents the division as a focused concept for strategic partners, investors, and institutional collaboration.',
    contactKicker: 'Strategic collaboration',
    contactTitle: 'Secure the future with Scalixr AI.',
    contactLead: 'For strategic collaboration, investment, sponsorship, or concept development, contact Scalixr AI.',
    waLabel: 'WhatsApp',
    emailLabel: 'Email',
    projectLabel: 'Project Contact',
    nameLabel: 'Name',
    mailLabel: 'Email',
    msgLabel: 'Message',
    sendBtn: 'Send inquiry'
  },
  ar: {
    brandKicker: 'قطاع استراتيجي من سكاليكسر AI',
    navVision: 'الرؤية',
    navEngine: 'المحرك',
    navPlatforms: 'منصات الذكاء',
    navMedia: 'الوسائط',
    navFaq: 'الأسئلة',
    navContact: 'التواصل',
    heroTitle: 'أمن إدراكي يحمي الأنظمة الذكية قبل أن تتحول المخاطر إلى أثر حقيقي.',
    heroCopy: 'يجمع Scalixr Security بين الذكاء الاصطناعي، وتحليل السلوك، والاستجابة الفورية لحماية المدن والمؤسسات والبنية التحتية بدقة معرفية عالية.',
    heroBtn1: 'استكشف ذكاء الأمن',
    heroBtn2: 'ابدأ شراكة مع سكاليكسر',
    metric1: 'استخبارات التهديدات',
    metric1v: 'نشطة',
    metric2: 'تحليل السلوك',
    metric3: 'زمن الاستجابة',
    engineKicker: 'حماية متكاملة',
    engineTitle: 'أمن مدعوم بالذكاء الاصطناعي عبر كل طبقة حرجة.',
    engineLead: 'من البيانات إلى التشغيل، نبني دفاعات تكيفية تتعلم وتتنبأ وتتعامل مع التهديدات فور ظهورها.',
    f1Title: 'استخبارات التهديدات',
    f1Text: 'مراقبة مدعومة بالذكاء الاصطناعي للتهديدات العالمية ومسارات الهجوم.',
    f2Title: 'تحليل السلوك',
    f2Text: 'اكتشاف السلوك غير الطبيعي ومخاطر الداخل من خلال نمذجة معرفية دقيقة.',
    f3Title: 'درع البنية التحتية',
    f3Text: 'حماية الأنظمة الحرجة والشبكات والمواقع وبنية إنترنت الأشياء.',
    f4Title: 'استجابة الحوادث',
    f4Text: 'استجابة واستعادة تلقائية منسقة بالذكاء الاصطناعي.',
    visionKicker: 'رؤية الأمن الإدراكي',
    visionTitle: 'أمن يفهم الأشخاص والأماكن والأنماط والأنظمة.',
    visionLead: 'يحوّل هذا القطاع عمليات الأمن إلى طبقة ذكاء حية للبيئات الذكية والمجمعات المؤسسية والمواقع الثقافية ومدن المستقبل.',
    v1Title: 'ذكاء مركز القيادة',
    v1Text: 'لوحات موحدة لإدارة المخاطر السيبرانية والمادية ومخاطر البنية التحتية على مستوى المدينة.',
    v2Title: 'حماية البنية التحتية',
    v2Text: 'وعي ذكي بالشبكات والأجهزة والمسارات والأصول والعمليات الحساسة.',
    v3Title: 'وصول تكيفي',
    v3Text: 'قرارات وصول وأمن مرتبطة بالسياق والسلوك والتنبيهات.',
    platformsKicker: 'منصات الأمن الذكي',
    platformsTitle: 'منصة متعددة الطبقات للمخاطر والوعي والاستجابة.',
    p1Title: 'القيادة الإدراكية',
    p1Text: 'واجهة ذكاء موحدة تربط الأشخاص والأنظمة والتنبيهات والقرارات.',
    p2Title: 'ذكاء المخاطر',
    p2Text: 'تقييم تنبؤي للثغرات والأنماط والسلوك ونقاط الضعف التشغيلية.',
    p3Title: 'حماية المدن الذكية',
    p3Text: 'مراقبة مدعومة بالذكاء الاصطناعي للمناطق والمرافق والفعاليات والمساحات العامة المتصلة.',
    p4Title: 'ذكاء السلوك',
    p4Text: 'تحليل ذكي للإشارات والمستخدمين والحركة والنية وسير العمل الحساس.',
    mediaKicker: 'ذكاء الحركة',
    mediaTitle: 'لقطات بصرية لعروض الأمن والشراكات الاستراتيجية.',
    mediaLead: 'يعرض الموقع لقطات بصرية صامتة توضّح الأمن السيبراني ومراكز القيادة والمراقبة دون عناصر تحكم مزعجة.',
    m1Title: 'مركز قيادة أمني',
    m2Title: 'محرك تهديدات إدراكي',
    m3Title: 'مراقبة المدن الذكية',
    m4Title: 'منصة ذكاء من الجيل القادم',
    appsKicker: 'تطبيقات الأمن',
    appsTitle: 'مصمم لبيئات استراتيجية تكون فيها الثقة جزءًا من البنية التحتية.',
    a1Title: 'عمليات المدن الذكية',
    a1Text: 'مراقبة إشارات المخاطر على مستوى المدينة وتجمعات الحوادث والمناطق المتصلة وسير الاستجابة.',
    a2Title: 'المجمعات المؤسسية',
    a2Text: 'ربط أنظمة الوصول والمراقبة وتدفقات الزوار وفرق الأمن داخل طبقة قيادة ذكية واحدة.',
    a3Title: 'الفعاليات والمواقع',
    a3Text: 'تحليل حركة الحشود وإشارات الشذوذ وإجراءات الاستجابة الميدانية في الوقت الفعلي.',
    a4Title: 'البنية التحتية الحرجة',
    a4Text: 'حماية المرافق والخدمات وشبكات اللوجستيات وبيئات التقنية التشغيلية.',
    faqKicker: 'أسئلة وأجوبة',
    faqTitle: 'أسئلة شائعة حول Scalixr Cognitive Security.',
    q1: 'ما هو Scalixr Cognitive Security؟',
    q1a: 'هو قطاع أمني مدعوم بالذكاء الاصطناعي يركز على استخبارات التهديدات وتحليل السلوك وحماية البنية التحتية والاستجابة للحوادث.',
    q2: 'من يمكنه استخدامه؟',
    q2a: 'يدعم المدن الذكية والمجمعات المؤسسية والبرامج الحكومية ومواقع الترفيه والمساحات العامة والبنية التحتية الحرجة.',
    q3: 'هل يستبدل أنظمة الأمن الحالية؟',
    q3a: 'لا. الفكرة مصممة للتكامل مع الكاميرات والحساسات ولوحات التحكم وأنظمة الوصول وسير عمل فرق الأمن الحالية.',
    q4: 'هل الموقع جاهز للعرض على الرعاة؟',
    q4a: 'نعم. يقدم الموقع القطاع كمفهوم واضح للشركاء الاستراتيجيين والمستثمرين والتعاون المؤسسي.',
    contactKicker: 'تعاون استراتيجي',
    contactTitle: 'أمّن المستقبل مع Scalixr AI.',
    contactLead: 'للتعاون الاستراتيجي أو الاستثمار أو الرعاية أو تطوير المفهوم، تواصل مع Scalixr AI.',
    waLabel: 'واتساب',
    emailLabel: 'البريد الإلكتروني',
    projectLabel: 'مسؤول المشروع',
    nameLabel: 'الاسم',
    mailLabel: 'البريد الإلكتروني',
    msgLabel: 'الرسالة',
    sendBtn: 'إرسال عبر واتساب'
  }
};

const switchBtn = document.querySelector('.lang-switch');

const placeholderFields = [
  { selector: 'input[type="text"]', en: 'Name', ar: 'الاسم' },
  { selector: 'input[type="email"]', en: 'Email', ar: 'البريد الإلكتروني' },
  { selector: 'textarea', en: 'Message', ar: 'الرسالة' }
];

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  body.dir = lang === 'ar' ? 'rtl' : 'ltr';

  if (switchBtn) {
    switchBtn.dataset.lang = lang === 'ar' ? 'en' : 'ar';
    switchBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  placeholderFields.forEach(field => {
    const element = document.querySelector(field.selector);
    if (element) element.setAttribute('placeholder', field[lang]);
  });
}

applyLanguage('en');
switchBtn?.addEventListener('click', () => applyLanguage(switchBtn.dataset.lang));

// Image lightbox with next / previous navigation
(function () {
  const imageNodes = [...document.querySelectorAll('.visual-card img, .platform-card img, .loop-card img, .app-card img')];
  const images = [];
  const seen = new Set();

  imageNodes.forEach(img => {
    const src = img.getAttribute('src');
    if (!src || seen.has(src)) return;
    seen.add(src);
    images.push({ src, alt: img.getAttribute('alt') || 'Scalixr Cognitive Security visual' });
  });

  if (!images.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'image-lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close">×</button>
    <button class="lightbox-arrow lightbox-prev" type="button" aria-label="Previous image">‹</button>
    <figure><img src="" alt="" /><figcaption></figcaption></figure>
    <button class="lightbox-arrow lightbox-next" type="button" aria-label="Next image">›</button>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const caption = lightbox.querySelector('figcaption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = (index + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
    caption.textContent = images[currentIndex].alt;
    lightbox.classList.add('open');
    document.body.classList.add('lightbox-active');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-active');
  }

  function move(step) {
    openLightbox(currentIndex + step);
  }

  imageNodes.forEach(img => {
    const src = img.getAttribute('src');
    const index = images.findIndex(item => item.src === src);
    if (index === -1) return;

    img.classList.add('lightbox-trigger');
    img.addEventListener('click', event => {
      event.preventDefault();
      openLightbox(index);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => move(-1));
  nextBtn.addEventListener('click', () => move(1));

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') move(document.body.dir === 'rtl' ? 1 : -1);
    if (event.key === 'ArrowRight') move(document.body.dir === 'rtl' ? -1 : 1);
  });
})();

// Contact form: send message directly to WhatsApp
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]')?.value.trim() || '';
    const email = form.querySelector('input[type="email"]')?.value.trim() || '';
    const message = form.querySelector('textarea')?.value.trim() || '';
    const isArabic = document.documentElement.lang === 'ar';

    const lines = isArabic ? [
      'استفسار من موقع Scalixr Cognitive Security',
      '',
      name ? `الاسم: ${name}` : '',
      email ? `البريد الإلكتروني: ${email}` : '',
      message ? `الرسالة: ${message}` : ''
    ] : [
      'Scalixr Cognitive Security Inquiry',
      '',
      name ? `Name: ${name}` : '',
      email ? `Email: ${email}` : '',
      message ? `Message: ${message}` : ''
    ];

    const whatsappNumber = '966503449892';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });
})();
