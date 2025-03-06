"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

function LocaleSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname(); // Current path

  const searchParams = useSearchParams(); // Current query parameters

  const locales = {
    "en-my": { label: "MY", flag: "my" },
    "en-sg": { label: "SG", flag: "sg" },
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const onLocaleChange = (newLocale) => {
    setMenuOpen(false); // Close menu after selection

    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

    const currentParams = searchParams.toString();

    const updatedUrl = `/${newLocale}${pathWithoutLocale}${currentParams ? `?${currentParams}` : ""}`;
    router.replace(updatedUrl);
  };

  const activeLocale = locales[currentLocale];
  const otherLocales = Object.keys(locales).filter((code) => code !== currentLocale);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 rounded-full bg-tsdarkgreen px-3 py-1 text-white">
      <p> You are currently browsing in:</p>
      <div className="relative inline-block text-white">
        <div onClick={toggleMenu} className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-tsyellow">
          <Image className="h-3 w-4" width={40} height={30} src={`/images/flags/${activeLocale.flag}.svg`} alt={activeLocale.label} />
          <span>{activeLocale.label}</span>
        </div>
        {menuOpen && (
          <div className="absolute top-full mt-2 rounded bg-tsyellow shadow-lg">
            {otherLocales.map((code) => (
              <div key={code} onClick={() => onLocaleChange(code)} className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-700">
                <Image className="h-3 w-4" width={40} height={30} src={`/images/flags/${locales[code].flag}.svg`} alt={locales[code].label} />
                <span>{locales[code].label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LocaleSwitcher;
