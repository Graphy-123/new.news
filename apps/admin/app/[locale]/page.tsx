type Props = {
  params: {
    locale: 'ar' | 'en';
  };
};

const copy = {
  ar: {
    title: 'لوحة التحكم',
    subtitle: 'مرحبًا بك في لوحة الإدارة الاحترافية',
    sections: ['المقالات', 'المستخدمون', 'التحليلات', 'الإعدادات'],
  },
  en: {
    title: 'Admin Dashboard',
    subtitle: 'Welcome to the professional admin panel',
    sections: ['Articles', 'Users', 'Analytics', 'Settings'],
  },
};

export default function LocalizedAdminHome({ params }: Props) {
  const locale = params.locale === 'ar' ? 'ar' : 'en';
  const t = copy[locale];
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir} style={{ padding: 24 }}>
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <ul>
        {t.sections.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
