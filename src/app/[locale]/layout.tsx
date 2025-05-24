import { hasLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Providers from "@/components/providers";
import { Inter, Roboto_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700"],
});

const roboto = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  weight: ["400", "700"],
});

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  console.log(locale);
  const t = useTranslations();
  console.log(t("hello"));

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={cn(inter.variable, roboto.variable)}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
