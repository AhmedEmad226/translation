import { useTranslations } from "next-intl";

export default function Home() {
  // Translation
  const t = useTranslations();

  return (
    <>
      {/* Headline */}
      <h1 className="text-4xl text-green-500 text-center mt-10">
        {t("products")}
      </h1>
    </>
  );
}
