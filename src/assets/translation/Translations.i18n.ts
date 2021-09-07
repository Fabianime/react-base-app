import translationData, { CsvStructure } from './translation.csv';

interface TranslationObject {
  de: Record<string, string>;
  en: Record<string, string>;
}

const buildTranslationObject = (pre: TranslationObject, cur: CsvStructure): TranslationObject => {
  const de = { ...pre.de, [cur.key]: cur.de.replace('{{spacer}}', ' ') };
  const en = { ...pre.en, [cur.key]: cur.en.replace('{{spacer}}', ' ') };
  return { de, en };
};

export const { de, en } = (translationData as CsvStructure[]).reduce(buildTranslationObject, { de: {}, en: {} });
export default { de, en };
