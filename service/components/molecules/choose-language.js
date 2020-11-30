import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
const listLang = [
  {
    info: 'de',
    label: 'German',
  },
  {
    info: 'en',
    label: 'English',
  },
  {
    info: 'ma',
    label: 'Mandarin',
  },
  {
    info: 'pt',
    label: 'Portuguese',
  },
  {
    info: 'rus',
    label: 'Russian',
  },
  {
    info: 'ko',
    label: 'Korean',
  },
  {
    info: 'es',
    label: 'Spanish',
  },
  {
    info: 'ja',
    label: 'Japanese',
  },
];
export default function ChooseLanguage() {
  const { t, lang } = useTranslation();
  return (
    <div className="container-languages">
      <div>
        <div>{lang}</div>
        <ul>
          {listLang.map((e, i) => {
            const { info, label } = e;
            return (
              lang !== info && (
                <Link href="/" locale={info} key={i}>
                  <li>{label}</li>
                </Link>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
}
