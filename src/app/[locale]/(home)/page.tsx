import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default function Home() {
  // Translation
  const t = useTranslations();

  return (
    <>
      {/* Headline */}
      <h1 className="text-4xl text-slate-800 text-center mt-10">
        {t("hello")}
      </h1>
    </>
  );
}
