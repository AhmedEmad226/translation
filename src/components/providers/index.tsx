import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from "next-intl";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Translation
  const messages = useMessages();
  const locale = useLocale();
  const now = useNow();
  const timeZone = useTimeZone();

  return (
    <>
      <NextIntlClientProvider
        messages={messages}
        now={now}
        locale={locale}
        timeZone={timeZone}
      >
        {children}
      </NextIntlClientProvider>
    </>
  );
}
