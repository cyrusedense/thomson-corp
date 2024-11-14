"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

function LocaleSwitcher() {
  const router = useRouter();
  const localActive = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const locales = {
    "en-my": { label: "MY", flag: "🇲🇾" },
    "en-sg": { label: "SG", flag: "🇸🇬" },
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const onLocaleChange = (locale) => {
    setMenuOpen(false); // Close menu after selection
    router.replace(`/${locale}`);
  };

  const activeLocale = locales[localActive];
  const otherLocales = Object.keys(locales).filter(
    (code) => code !== localActive,
  );

  return (
    <div className="flex items-center gap-5 text-white">
      <p> You are currently browsing:</p>
      <div className="relative inline-block text-white">
        <div
          onClick={toggleMenu}
          className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-gray-700"
        >
          <span className="text-lg">{activeLocale.flag}</span>
          <span>{activeLocale.label}</span>
        </div>
        {menuOpen && (
          <div className="absolute top-full mt-2 rounded bg-gray-800 shadow-lg">
            {otherLocales.map((code) => (
              <div
                key={code}
                onClick={() => onLocaleChange(code)}
                className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-700"
              >
                <span className="text-lg">{locales[code].flag}</span>
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
