// ========== PRELOADER ==========
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.classList.add('loaded');
        initAnimations();
    }, 1500);
});

// ========== TRANSLATIONS ==========
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.caseStudies': 'Case Studies',
        'nav.contact': 'Contact',

        // Hero
        'hero.title1': 'Performance Marketing',
        'hero.title2': 'That Drives Results',
        'hero.subtitle': '3+ Years of Scaling Brands Through Data-Driven Paid Advertising | Based in Cairo',
        'hero.stat1': '% Average ROAS',
        'hero.stat2': '% Cost Reduction',
        'hero.stat3': '+ Campaigns Managed',
        'hero.cta1': 'View Case Studies',
        'hero.cta2': 'Get In Touch',
        'hero.scroll': 'Scroll',

        // About
        'about.title1': 'About',
        'about.title2': 'Me',
        'about.heading': 'Turning Ad Spend Into Revenue',
        'about.p1': "I'm Mustafa Khaled, a performance marketing specialist based in Cairo with 3 years of hands-on experience creating and optimizing paid advertising campaigns that deliver measurable ROI. My data-driven approach combines strategic thinking with tactical execution to scale brands profitably.",
        'about.p2': "I've managed campaigns across multiple platforms including Google Ads, Meta (Facebook & Instagram), TikTok, and LinkedIn, helping businesses achieve their growth objectives while maintaining efficient cost structures.",
        'about.tag1': 'Paid Search',
        'about.tag2': 'Social Media Advertising',
        'about.tag3': 'Conversion Optimization',
        'about.tag4': 'Analytics & Attribution',
        'about.tag5': 'Budget Management',

        // Skills
        'skills.title1': 'Skills &',
        'skills.title2': 'Platforms',
        'skills.subtitle': 'Expertise across major advertising platforms and analytics tools',
        'skills.google': 'Google Ads',
        'skills.google1': 'Search Campaigns',
        'skills.google2': 'Display & Video',
        'skills.google3': 'Shopping Ads',
        'skills.google4': 'Performance Max',
        'skills.meta': 'Meta Ads',
        'skills.meta1': 'Facebook Ads',
        'skills.meta2': 'Instagram Campaigns',
        'skills.meta3': 'Audience Targeting',
        'skills.meta4': 'Creative Testing',
        'skills.tiktok': 'TikTok Ads',
        'skills.tiktok1': 'In-Feed Ads',
        'skills.tiktok2': 'Spark Ads',
        'skills.tiktok3': 'Trend Analysis',
        'skills.tiktok4': 'UGC Campaigns',
        'skills.linkedin': 'LinkedIn Ads',
        'skills.linkedin1': 'B2B Campaigns',
        'skills.linkedin2': 'Lead Generation',
        'skills.linkedin3': 'Account-Based Marketing',
        'skills.linkedin4': 'Sponsored Content',
        'skills.analytics': 'Analytics',
        'skills.analytics1': 'Google Analytics 4',
        'skills.analytics2': 'Data Studio/Looker',
        'skills.analytics3': 'Conversion Tracking',
        'skills.analytics4': 'Attribution Modeling',
        'skills.tools': 'Tools & Tech',
        'skills.tools1': 'Google Tag Manager',
        'skills.tools2': 'SEMrush / Ahrefs',
        'skills.tools3': 'Hotjar / Clarity',
        'skills.tools4': 'CRM Integration',

        // Certifications
        'certs.title1': 'Certifications &',
        'certs.title2': 'Credentials',
        'certs.subtitle': 'Official expertise validation from industry leaders',
        'certs.google': 'Google Ads Certified',
        'certs.googleType': 'Search Advertising Specialist',
        'certs.meta': 'Meta Blueprint Certified',
        'certs.metaType': 'Advertising Professional',
        'certs.analytics': 'Google Analytics Certified',
        'certs.analyticsType': 'GA4 & Data Analytics',
        'certs.hubspot': 'HubSpot Academy',
        'certs.hubspotType': 'Inbound Marketing',
        'certs.ach1': 'Brands Worked With',
        'certs.ach2': 'Ad Spend Managed',
        'certs.ach3': 'Years Experience',
        'certs.ach4': 'LinkedIn Network',

        // Case Studies
        'cases.title1': 'Case',
        'cases.title2': 'Studies',
        'cases.subtitle': 'Results-driven campaigns that deliver real business impact',
        'cases.filterAll': 'All',
        'cases.filterEcom': 'E-commerce',
        'cases.filterSaas': 'SaaS',
        'cases.filterB2b': 'B2B',
        'cases.case1Title': 'E-commerce Fashion Brand',
        'cases.tagEcom': 'E-commerce',
        'cases.case1Desc': 'Scaled a DTC fashion brand from $50K to $250K monthly revenue through optimized Meta and Google Shopping campaigns.',
        'cases.revenueGrowth': 'Revenue Growth',
        'cases.case2Title': 'SaaS Project Management Tool',
        'cases.case2Desc': 'Reduced customer acquisition cost by 58% while increasing trial sign-ups by 230% through targeted Google Search campaigns.',
        'cases.trialSignups': 'Trial Sign-ups',
        'cases.case3Title': 'B2B Marketing Agency',
        'cases.tagB2bServices': 'B2B Services',
        'cases.case3Desc': 'Generated 180+ qualified leads in 6 months with a 34% close rate using LinkedIn and retargeting strategies.',
        'cases.qualifiedLeads': 'Qualified Leads',
        'cases.closeRate': 'Close Rate',
        'cases.costLead': 'Cost/Lead',
        'cases.case4Title': 'Mobile Accessories Store',
        'cases.case4Desc': 'Achieved 12x ROAS on TikTok Ads by leveraging viral UGC content and precise audience targeting for Gen Z demographics.',
        'cases.case5Title': 'Analytics Platform',
        'cases.case5Desc': 'Implemented full-funnel campaign strategy that increased MRR by 185% while maintaining a 3:1 LTV:CAC ratio.',
        'cases.mrrGrowth': 'MRR Growth',
        'cases.convRate': 'Conversion Rate',
        'cases.case6Title': 'HR Tech Solution',
        'cases.tagB2bSaas': 'B2B SaaS',
        'cases.case6Desc': 'Drove 320% increase in demo requests through strategic LinkedIn ABM campaigns targeting HR directors at Fortune 1000 companies.',
        'cases.demoRequests': 'Demo Requests',

        // Proof Gallery
        'proof.title1': 'Real Campaign',
        'proof.title2': 'Dashboards',
        'proof.subtitle': 'Actual results from campaigns I\'ve managed',

        // Testimonials
        'testimonials.title1': 'What Clients',
        'testimonials.title2': 'Say',
        'testimonials.subtitle': 'Real feedback from brands we\'ve helped scale',
        'testimonials.role1': 'E-Commerce Director',
        'testimonials.role2': 'Founder & CEO',
        'testimonials.role3': 'Marketing Manager',
        'testimonials.role4': 'VP of Marketing',
        'testimonials.text1': '"Mustafa took our Google Ads from mediocre to exceptional. Within 3 months, we saw a 5x return on ad spend. His strategic approach and constant optimization made all the difference."',
        'testimonials.text2': '"Best decision for our growth. Mustafa\'s data-driven approach and LinkedIn expertise helped us generate 230% more trial sign-ups. Highly recommended for B2B companies!"',
        'testimonials.text3': '"Working with Mustafa was a game-changer. His TikTok campaign expertise is unmatched. We achieved 12x ROAS and attracted our best customer demographic. Worth every penny!"',
        'testimonials.text4': '"Mustafa\'s ABM strategy delivered 320% increase in demo requests. Professional, strategic, and results-oriented. He\'s been instrumental in our revenue growth this year."',

        // Calculator
        'calc.title1': 'Calculate Your',
        'calc.title2': 'ROI',
        'calc.subtitle': 'See how we can improve your ad performance',
        'calc.adSpend': 'Monthly Ad Spend',
        'calc.convRate': 'Current Conversion Rate (%)',
        'calc.orderValue': 'Average Order Value',
        'calc.optimization': 'Optimization Level',
        'calc.conservative': 'Conservative',
        'calc.aggressive': 'Aggressive',
        'calc.resultsTitle': 'Your Potential Results',
        'calc.newRevenue': 'New Monthly Revenue',
        'calc.newConversion': 'New Conversion Rate',
        'calc.roas': 'Return on Ad Spend',
        'calc.profitIncrease': 'Monthly Profit Increase',
        'calc.profitNote': 'Not including additional optimization',
        'calc.cta': 'Get Your Custom Strategy',
        'calc.disclaimer': '*Results based on our average client improvements',

        // Contact
        'contact.title1': 'Let\'s Work',
        'contact.title2': 'Together',
        'contact.subtitle': 'Ready to scale your business with performance marketing?',
        'contact.email': 'Email',
        'contact.linkedin': 'LinkedIn',
        'contact.phone': 'Phone',
        'contact.namePlaceholder': 'Your Name',
        'contact.emailPlaceholder': 'Your Email',
        'contact.companyPlaceholder': 'Company Name',
        'contact.messagePlaceholder': 'Tell me about your project...',
        'contact.sendBtn': 'Send Message',

        // Footer
        'footer.copyright': '© 2025 Mustafa Khaled. All rights reserved.'
    },
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.about': 'عني',
        'nav.skills': 'المهارات',
        'nav.caseStudies': 'دراسات حالة',
        'nav.contact': 'تواصل معي',

        // Hero
        'hero.title1': 'تسويق الأداء',
        'hero.title2': 'الذي يحقق النتائج',
        'hero.subtitle': '+3 سنوات من تطوير العلامات التجارية من خلال الإعلانات المدفوعة المبنية على البيانات | مقيم في القاهرة',
        'hero.stat1': '% متوسط العائد على الإنفاق',
        'hero.stat2': '% خفض التكلفة',
        'hero.stat3': '+ حملة تم إدارتها',
        'hero.cta1': 'شاهد دراسات الحالة',
        'hero.cta2': 'تواصل معي',
        'hero.scroll': 'مرر للأسفل',

        // About
        'about.title1': 'عن',
        'about.title2': 'نفسي',
        'about.heading': 'تحويل الإنفاق الإعلاني إلى إيرادات',
        'about.p1': 'أنا مصطفى خالد، متخصص في تسويق الأداء مقيم في القاهرة مع 3 سنوات من الخبرة العملية في إنشاء وتحسين الحملات الإعلانية المدفوعة التي تحقق عائد استثمار قابل للقياس. نهجي المبني على البيانات يجمع بين التفكير الاستراتيجي والتنفيذ التكتيكي لتنمية العلامات التجارية بشكل مربح.',
        'about.p2': 'لقد أدرت حملات عبر منصات متعددة بما في ذلك Google Ads و Meta (Facebook & Instagram) و TikTok و LinkedIn، لمساعدة الشركات على تحقيق أهداف النمو مع الحفاظ على هياكل تكلفة فعالة.',
        'about.tag1': 'البحث المدفوع',
        'about.tag2': 'إعلانات وسائل التواصل',
        'about.tag3': 'تحسين التحويلات',
        'about.tag4': 'التحليلات والإسناد',
        'about.tag5': 'إدارة الميزانية',

        // Skills
        'skills.title1': 'المهارات',
        'skills.title2': 'والمنصات',
        'skills.subtitle': 'خبرة عبر منصات الإعلانات الرئيسية وأدوات التحليلات',
        'skills.google': 'إعلانات جوجل',
        'skills.google1': 'حملات البحث',
        'skills.google2': 'العرض والفيديو',
        'skills.google3': 'إعلانات التسوق',
        'skills.google4': 'Performance Max',
        'skills.meta': 'إعلانات ميتا',
        'skills.meta1': 'إعلانات فيسبوك',
        'skills.meta2': 'حملات انستجرام',
        'skills.meta3': 'استهداف الجمهور',
        'skills.meta4': 'اختبار الإبداعات',
        'skills.tiktok': 'إعلانات تيك توك',
        'skills.tiktok1': 'إعلانات In-Feed',
        'skills.tiktok2': 'إعلانات Spark',
        'skills.tiktok3': 'تحليل الاتجاهات',
        'skills.tiktok4': 'حملات UGC',
        'skills.linkedin': 'إعلانات لينكدإن',
        'skills.linkedin1': 'حملات B2B',
        'skills.linkedin2': 'توليد العملاء المحتملين',
        'skills.linkedin3': 'التسويق القائم على الحسابات',
        'skills.linkedin4': 'المحتوى المدعوم',
        'skills.analytics': 'التحليلات',
        'skills.analytics1': 'Google Analytics 4',
        'skills.analytics2': 'Data Studio/Looker',
        'skills.analytics3': 'تتبع التحويلات',
        'skills.analytics4': 'نماذج الإسناد',
        'skills.tools': 'الأدوات والتقنيات',
        'skills.tools1': 'Google Tag Manager',
        'skills.tools2': 'SEMrush / Ahrefs',
        'skills.tools3': 'Hotjar / Clarity',
        'skills.tools4': 'تكامل CRM',

        // Certifications
        'certs.title1': 'الشهادات',
        'certs.title2': 'والاعتمادات',
        'certs.subtitle': 'التحقق الرسمي من الخبرة من قادة الصناعة',
        'certs.google': 'معتمد من Google Ads',
        'certs.googleType': 'متخصص في إعلانات البحث',
        'certs.meta': 'معتمد من Meta Blueprint',
        'certs.metaType': 'محترف إعلانات',
        'certs.analytics': 'معتمد من Google Analytics',
        'certs.analyticsType': 'GA4 وتحليل البيانات',
        'certs.hubspot': 'أكاديمية HubSpot',
        'certs.hubspotType': 'التسويق الداخلي',
        'certs.ach1': 'علامة تجارية عملت معها',
        'certs.ach2': 'إنفاق إعلاني تم إدارته',
        'certs.ach3': 'سنوات خبرة',
        'certs.ach4': 'شبكة LinkedIn',

        // Case Studies
        'cases.title1': 'دراسات',
        'cases.title2': 'حالة',
        'cases.subtitle': 'حملات موجهة بالنتائج تحقق تأثير حقيقي للأعمال',
        'cases.filterAll': 'الكل',
        'cases.filterEcom': 'التجارة الإلكترونية',
        'cases.filterSaas': 'SaaS',
        'cases.filterB2b': 'B2B',
        'cases.case1Title': 'علامة أزياء للتجارة الإلكترونية',
        'cases.tagEcom': 'تجارة إلكترونية',
        'cases.case1Desc': 'نمو علامة أزياء DTC من 50 ألف دولار إلى 250 ألف دولار إيرادات شهرية من خلال حملات Meta و Google Shopping المحسّنة.',
        'cases.revenueGrowth': 'نمو الإيرادات',
        'cases.case2Title': 'أداة إدارة مشاريع SaaS',
        'cases.case2Desc': 'خفض تكلفة اكتساب العملاء بنسبة 58% مع زيادة التسجيلات التجريبية بنسبة 230% من خلال حملات Google Search المستهدفة.',
        'cases.trialSignups': 'التسجيلات التجريبية',
        'cases.case3Title': 'وكالة تسويق B2B',
        'cases.tagB2bServices': 'خدمات B2B',
        'cases.case3Desc': 'توليد أكثر من 180 عميل محتمل مؤهل في 6 أشهر بمعدل إغلاق 34% باستخدام LinkedIn واستراتيجيات إعادة الاستهداف.',
        'cases.qualifiedLeads': 'عملاء محتملون مؤهلون',
        'cases.closeRate': 'معدل الإغلاق',
        'cases.costLead': 'تكلفة/عميل محتمل',
        'cases.case4Title': 'متجر إكسسوارات الهواتف',
        'cases.case4Desc': 'تحقيق ROAS بمقدار 12x على إعلانات TikTok من خلال الاستفادة من محتوى UGC الفيروسي واستهداف دقيق لفئة جيل Z.',
        'cases.case5Title': 'منصة تحليلات',
        'cases.case5Desc': 'تنفيذ استراتيجية حملة كاملة المسار زادت MRR بنسبة 185% مع الحفاظ على نسبة LTV:CAC 3:1.',
        'cases.mrrGrowth': 'نمو MRR',
        'cases.convRate': 'معدل التحويل',
        'cases.case6Title': 'حل HR Tech',
        'cases.tagB2bSaas': 'B2B SaaS',
        'cases.case6Desc': 'زيادة طلبات العروض التوضيحية بنسبة 320% من خلال حملات LinkedIn ABM الاستراتيجية التي تستهدف مديري الموارد البشرية في شركات Fortune 1000.',
        'cases.demoRequests': 'طلبات العروض التوضيحية',

        // Proof Gallery
        'proof.title1': 'لوحات تحكم',
        'proof.title2': 'الحملات الحقيقية',
        'proof.subtitle': 'نتائج فعلية من حملات أدرتها',

        // Testimonials
        'testimonials.title1': 'ماذا يقول',
        'testimonials.title2': 'العملاء',
        'testimonials.subtitle': 'تعليقات حقيقية من علامات تجارية ساعدناها على النمو',
        'testimonials.role1': 'مدير التجارة الإلكترونية',
        'testimonials.role2': 'المؤسس والرئيس التنفيذي',
        'testimonials.role3': 'مدير التسويق',
        'testimonials.role4': 'نائب رئيس التسويق',
        'testimonials.text1': '"مصطفى أخذ إعلانات Google الخاصة بنا من متوسطة إلى استثنائية. خلال 3 أشهر، رأينا عائد 5x على الإنفاق الإعلاني. نهجه الاستراتيجي والتحسين المستمر أحدثا فرقاً كبيراً."',
        'testimonials.text2': '"أفضل قرار لنمونا. نهج مصطفى المبني على البيانات وخبرته في LinkedIn ساعدنا في توليد 230% المزيد من التسجيلات التجريبية. أوصي به بشدة لشركات B2B!"',
        'testimonials.text3': '"العمل مع مصطفى كان تحولياً. خبرته في حملات TikTok لا مثيل لها. حققنا ROAS بمقدار 12x وجذبنا أفضل فئة عملاء. يستحق كل قرش!"',
        'testimonials.text4': '"استراتيجية ABM لمصطفى حققت زيادة 320% في طلبات العروض التوضيحية. محترف واستراتيجي وموجه بالنتائج. كان له دور أساسي في نمو إيراداتنا هذا العام."',

        // Calculator
        'calc.title1': 'احسب',
        'calc.title2': 'عائد الاستثمار',
        'calc.subtitle': 'شاهد كيف يمكننا تحسين أداء إعلاناتك',
        'calc.adSpend': 'الإنفاق الإعلاني الشهري',
        'calc.convRate': 'معدل التحويل الحالي (%)',
        'calc.orderValue': 'متوسط قيمة الطلب',
        'calc.optimization': 'مستوى التحسين',
        'calc.conservative': 'محافظ',
        'calc.aggressive': 'قوي',
        'calc.resultsTitle': 'نتائجك المحتملة',
        'calc.newRevenue': 'الإيرادات الشهرية الجديدة',
        'calc.newConversion': 'معدل التحويل الجديد',
        'calc.roas': 'العائد على الإنفاق الإعلاني',
        'calc.profitIncrease': 'زيادة الربح الشهري',
        'calc.profitNote': 'لا يشمل التحسين الإضافي',
        'calc.cta': 'احصل على استراتيجيتك المخصصة',
        'calc.disclaimer': '*النتائج مبنية على متوسط تحسينات عملائنا',

        // Contact
        'contact.title1': 'لنعمل',
        'contact.title2': 'معاً',
        'contact.subtitle': 'هل أنت مستعد لتنمية عملك مع تسويق الأداء؟',
        'contact.email': 'البريد الإلكتروني',
        'contact.linkedin': 'لينكدإن',
        'contact.phone': 'الهاتف',
        'contact.namePlaceholder': 'اسمك',
        'contact.emailPlaceholder': 'بريدك الإلكتروني',
        'contact.companyPlaceholder': 'اسم الشركة',
        'contact.messagePlaceholder': 'أخبرني عن مشروعك...',
        'contact.sendBtn': 'إرسال الرسالة',

        // Footer
        'footer.copyright': '© 2025 مصطفى خالد. جميع الحقوق محفوظة.'
    }
};

// ========== LANGUAGE SWITCHER ==========
let currentLang = localStorage.getItem('lang') || 'en';

const initLanguage = () => {
    const langToggle = document.getElementById('langToggle');
    if (!langToggle) return;

    // Set initial language
    setLanguage(currentLang);

    // Toggle click handler
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(currentLang);
        localStorage.setItem('lang', currentLang);
    });
};

const setLanguage = (lang) => {
    const html = document.documentElement;

    // Set direction
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);

    // Update toggle button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const langText = langToggle.querySelector('.lang-text');
        if (langText) {
            langText.textContent = lang === 'ar' ? 'English' : 'عربي';
        }
    }

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        if (lang === 'ar') {
            metaDesc.setAttribute('content', 'متخصص في تسويق الأداء مع أكثر من 3 سنوات من الخبرة في الإعلانات المدفوعة وتحسين الحملات واستراتيجيات العائد على الاستثمار.');
        } else {
            metaDesc.setAttribute('content', 'Performance Marketing Specialist with 3+ years of experience in paid advertising, campaign optimization, and ROI-driven strategies.');
        }
    }

    // Update page title
    document.title = lang === 'ar'
        ? 'مصطفى خالد | بورتفوليو تسويق الأداء'
        : 'Mustafa Khaled | Performance Marketing Portfolio';
};

// Initialize language on DOM load
document.addEventListener('DOMContentLoaded', initLanguage);

// ========== CUSTOM CURSOR ==========
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const cursorGlow = document.querySelector('.cursor-glow');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

// Only enable cursor on desktop
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update glow position immediately
        if (cursorGlow) {
            cursorGlow.style.left = mouseX + 'px';
            cursorGlow.style.top = mouseY + 'px';
        }
    });

    // Smooth cursor animation
    const animateCursor = () => {
        // Cursor follows mouse with slight delay
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;

        // Follower is slower
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        if (cursor) {
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
        }

        if (cursorFollower) {
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
        }

        requestAnimationFrame(animateCursor);
    };

    animateCursor();

    // Cursor hover states
    const interactiveElements = document.querySelectorAll('a, button, .btn, .filter-btn, .case-study-card, .skill-category, .tag, .platform-badge, .contact-item, input, textarea');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });
}

// ========== SCROLL PROGRESS ==========
const scrollProgress = document.querySelector('.scroll-progress');

const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    if (scrollProgress) {
        scrollProgress.style.transform = `scaleX(${scrollPercent})`;
    }
};

window.addEventListener('scroll', updateScrollProgress);

// ========== NAVBAR ==========
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

const updateActiveNav = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', updateActiveNav);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== PARTICLES ==========
const createParticles = () => {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        const opacity = Math.random() * 0.5 + 0.2;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
            opacity: ${opacity};
        `;

        particlesContainer.appendChild(particle);
    }
};

// ========== COUNTER ANIMATION ==========
const easeOutQuart = (x) => 1 - Math.pow(1 - x, 4);

const animateCounter = (element, target, duration = 2000) => {
    const start = performance.now();
    const startValue = 0;

    const update = (currentTime) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);

        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    };

    requestAnimationFrame(update);
};

// Observe stats for counter animation
const observeStats = () => {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach((stat, index) => {
                    setTimeout(() => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        animateCounter(stat, target, 2500);
                    }, index * 200);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }
};

// ========== SCROLL REVEAL ANIMATIONS ==========
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
};

// ========== FILTER FUNCTIONALITY ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const caseStudyCards = document.querySelectorAll('.case-study-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        caseStudyCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');

            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'flex';
                card.style.animation = 'none';
                card.offsetHeight; // Trigger reflow
                card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ========== TILT EFFECT ==========
const addTiltEffect = (element) => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    });
};

// Apply tilt to cards
const initTiltEffect = () => {
    if (window.innerWidth > 768) {
        document.querySelectorAll('.skill-category, .case-study-card').forEach(addTiltEffect);
    }
};

// ========== MAGNETIC BUTTONS ==========
const initMagneticButtons = () => {
    if (window.innerWidth <= 768) return;

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
};

// ========== PARALLAX EFFECT ==========
const initParallax = () => {
    const heroContent = document.querySelector('.hero-content');
    const orbs = document.querySelectorAll('.hero-gradient-orb');
    const shapes = document.querySelectorAll('.shape');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Hero content parallax
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroContent.style.opacity = 1 - (scrolled / 700);
        }

        // Orbs parallax
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.15;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });

        // Shapes parallax
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            const rotate = scrolled * 0.02;
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${rotate}deg)`;
        });
    });
};

// ========== MOUSE GLOW ON CARDS ==========
const initCardGlow = () => {
    const cards = document.querySelectorAll('.skill-category, .case-study-card, .contact-form');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
};

// ========== TYPING EFFECT ==========
const initTypingEffect = () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    subtitle.style.opacity = '1';

    let i = 0;
    const typeChar = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 30);
        }
    };

    // Start after hero animations
    setTimeout(typeChar, 1000);
};

// ========== STAGGER TAGS ==========
const initStaggerAnimation = () => {
    const tagsContainer = document.querySelector('.expertise-tags');

    if (tagsContainer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tags = entry.target.querySelectorAll('.tag');
                    tags.forEach((tag, index) => {
                        tag.style.opacity = '0';
                        tag.style.transform = 'translateY(20px)';

                        setTimeout(() => {
                            tag.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                            tag.style.opacity = '1';
                            tag.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(tagsContainer);
    }
};

// ========== CONTACT FORM ==========
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const button = contactForm.querySelector('button');
        const originalText = button.innerHTML;

        // Animate button
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        button.disabled = true;

        // Let Netlify handle the form submission
        // It will redirect after success, but we can still show feedback
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        }, 500);
    });

    // Input focus animations
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// ========== RIPPLE EFFECT ==========
const createRipple = (event, element) => {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;

    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
};

// Add ripple to buttons
document.querySelectorAll('.btn, .filter-btn').forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', (e) => createRipple(e, btn));
});

// ========== SMOOTH SCROLL ==========
const initSmoothScroll = () => {
    // Already handled with CSS scroll-behavior: smooth
    // Additional JS smoothing for older browsers
};

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ========== INITIALIZE EVERYTHING ==========
const initAnimations = () => {
    createParticles();
    observeStats();
    revealElements();
    initTiltEffect();
    initMagneticButtons();
    initParallax();
    initCardGlow();
    initStaggerAnimation();
    initRoiCalculator();
    setupCalculatorNavigation();
    initProofLightbox();
    updateActiveNav();
};

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Elements that should be interactive even before full load
        initSmoothScroll();
    });
} else {
    initSmoothScroll();
}

// Dynamic styles for ripple animation
const addDynamicStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
};

addDynamicStyles();

// ========== ROI CALCULATOR ==========
const initRoiCalculator = () => {
    const roiForm = document.getElementById('roiForm');
    if (!roiForm) return;

    const adSpendInput = document.getElementById('adSpend');
    const conversionRateInput = document.getElementById('conversionRate');
    const orderValueInput = document.getElementById('orderValue');
    const optimizationInput = document.getElementById('optimization');

    const updateCalculations = () => {
        const adSpend = parseFloat(adSpendInput.value) || 0;
        const conversionRate = parseFloat(conversionRateInput.value) || 0;
        const orderValue = parseFloat(orderValueInput.value) || 0;
        const optimization = parseFloat(optimizationInput.value) || 50;

        // Calculate current metrics
        const currentRevenue = (adSpend / 100) * conversionRate * orderValue;
        const optimizationMultiplier = 1 + (optimization / 100);

        // Calculate improved metrics
        const newConversionRate = (conversionRate * optimizationMultiplier).toFixed(2);
        const newRevenue = (adSpend / 100) * newConversionRate * orderValue;
        const revenueIncrease = newRevenue - currentRevenue;
        const revenueImprovement = ((revenueIncrease / currentRevenue) * 100).toFixed(0);

        // ROAS calculation
        const currentRoas = currentRevenue > 0 ? (currentRevenue / adSpend).toFixed(1) : 0;
        const newRoas = newRevenue > 0 ? (newRevenue / adSpend).toFixed(1) : 0;
        const roasImprovement = currentRoas > 0 ? (((newRoas - currentRoas) / currentRoas) * 100).toFixed(0) : 0;

        // Profit increase
        const profitIncrease = (revenueIncrease - (adSpend * (optimization / 100) * 0.2)).toFixed(0);

        // Update DOM
        document.getElementById('newRevenue').textContent = '$' + newRevenue.toLocaleString('en-US', { maximumFractionDigits: 0 });
        document.getElementById('revenueImprovement').textContent = '+' + revenueImprovement + '% increase';

        document.getElementById('newConversion').textContent = newConversionRate + '%';
        document.getElementById('conversionImprovement').textContent = '+' + (newConversionRate - conversionRate).toFixed(2) + '% increase';

        document.getElementById('newRoas').textContent = newRoas + 'x';
        document.getElementById('roasImprovement').textContent = '+' + roasImprovement + '% improvement';

        document.getElementById('profitIncrease').textContent = '$' + profitIncrease.toLocaleString('en-US');

        // Animate result values
        animateResultValues();
    };

    const animateResultValues = () => {
        const resultValues = document.querySelectorAll('.result-value');
        resultValues.forEach(value => {
            value.style.transform = 'scale(1.05)';
            setTimeout(() => {
                value.style.transform = 'scale(1)';
            }, 100);
        });
    };

    // Update slider display
    optimizationInput.addEventListener('input', () => {
        document.querySelector('.optimization-value').textContent = optimizationInput.value + '%';
        updateCalculations();
    });

    // Update on any input change
    adSpendInput.addEventListener('input', updateCalculations);
    conversionRateInput.addEventListener('input', updateCalculations);
    orderValueInput.addEventListener('input', updateCalculations);

    // Initial calculation
    updateCalculations();
};

// ========== NAVIGATE TO CALCULATOR ==========
const setupCalculatorNavigation = () => {
    const calculatorLinks = document.querySelectorAll('a[href="#calculator"]');
    calculatorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const calculator = document.getElementById('calculator');
            if (calculator) {
                const offsetTop = calculator.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                // Focus first input
                setTimeout(() => {
                    document.getElementById('adSpend')?.focus();
                }, 500);
            }
        });
    });
};

// ========== PROOF IMAGE LIGHTBOX ==========
const initProofLightbox = () => {
    const proofCards = document.querySelectorAll('.proof-card');

    proofCards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('.proof-image');
            if (!img) return;

            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;

            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';

            // Animate in
            setTimeout(() => lightbox.classList.add('active'), 10);

            // Close handlers
            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });

            function closeLightbox() {
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightbox.remove();
                    document.body.style.overflow = '';
                }, 300);
            }

            // ESC key to close
            const escHandler = (e) => {
                if (e.key === 'Escape') {
                    closeLightbox();
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
        });
    });
};

// Throttle scroll events
let ticking = false;
const onScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollProgress();
            updateActiveNav();
            ticking = false;
        });
        ticking = true;
    }
};

window.addEventListener('scroll', onScroll, { passive: true });

// ========== RESIZE HANDLER ==========
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Reinitialize effects on resize
        if (window.innerWidth > 768) {
            initTiltEffect();
            initMagneticButtons();
        }
    }, 250);
});

// ========== VISIBILITY CHANGE ==========
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.classList.add('paused');
    } else {
        document.body.classList.remove('paused');
    }
});

console.log('Portfolio loaded successfully!');
