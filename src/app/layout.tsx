// import type { PropsWithChildren } from 'react';
// import type { Metadata } from 'next';
// import { getLocale } from 'next-intl/server';

// import { Root } from '@/components/Root/Root';
// import { I18nProvider } from '@/core/i18n/provider';

// import '@telegram-apps/telegram-ui/dist/styles.css';
// import 'normalize.css/normalize.css';
// import './_assets/globals.css';

// export const metadata: Metadata = {
//   title: 'Your Application Title Goes Here',
//   description: 'Your application description goes here',
// };

// export default async function RootLayout({ children }: PropsWithChildren) {
//   const locale = await getLocale();

//   return (
//     <html lang={locale}>
//     <body>
//       <I18nProvider>
//         <Root>
//           {children}
//         </Root>
//       </I18nProvider>
//     </body>
//     </html>
//   );
// }
import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

import { Root } from '@/components/Root/Root';
import { I18nProvider } from '@/core/i18n/provider';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  const messages = await import(`@/locales/${locale}.json`).then((module) => module.default);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <I18nProvider>
            <Root>
              {children}
            </Root>
          </I18nProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
