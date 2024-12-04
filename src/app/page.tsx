// 'use client';

// import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
// import { useTranslations } from 'next-intl';

// import { Link } from '@/components/Link/Link';
// import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
// import { Page } from '@/components/Page';
// import TransferComponent from '@/components/Transfer/Transfer';



// export default function Home() {
//   const t = useTranslations('i18n');

//   return (
//     <Page back={false}>
//       <List>
//         <Section
//           header="Features"
//           footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
//         >
//           <Link href="/ton-connect">
//             <Cell
//               before={
//                 <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z" fill="#0098EA"/>
// <path d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z" fill="white"/>
// </svg>
//               }
//               subtitle="Connect your TON wallet"
//             >
//               TON Connect
//             </Cell>
//           </Link>
//         </Section>
//         <Section
//           header="Application Launch Data"
//           footer="These pages help developer to learn more about current launch information"
//         >
//           <Link href="/init-data">
//             <Cell subtitle="User data, chat information, technical data">
//               Init Data
//             </Cell>
//           </Link>
//           <Link href="/launch-params">
//             <Cell subtitle="Platform identifier, Mini Apps version, etc.">
//               Launch Parameters
//             </Cell>
//           </Link>
//           <Link href="/theme-params">
//             <Cell subtitle="Telegram application palette information">
//               Theme Parameters
//             </Cell>
//           </Link>
//         </Section>
//         <Section header={t('header')} footer={t('footer')}>
//           <LocaleSwitcher/>
//         </Section>
//       </List>
    
//     </Page>
//   );
// }
'use client';

import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Link } from '@/components/Link/Link';
import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import { Page } from '@/components/Page';
import TransferComponent from '@/components/Transfer/Transfer';

export default function Home() {
  const t = useTranslations('i18n');

  return (
    <Page back={false}>
      <List>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link href="/ton-connect">
            <Cell
              before={
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                    fill="#0098EA"
                  />
                  <path
                    d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z"
                    fill="white"
                  />
                </svg>
              }
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link href="/init-data">
            <Cell subtitle="User data, chat information, technical data">
              Init Data
            </Cell>
          </Link>
          <Link href="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">
              Launch Parameters
            </Cell>
          </Link>
          <Link href="/theme-params">
            <Cell subtitle="Telegram application palette information">
              Theme Parameters
            </Cell>
          </Link>
        </Section>
        <Section header={t('header')} footer={t('footer')}>
          <LocaleSwitcher />
        </Section>
        
        <Section header="Transfer TON" footer="You can transfer TON here securely">
          <TransferComponent />
        </Section>
      </List>
    </Page>
  );
}
