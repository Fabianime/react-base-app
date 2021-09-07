export interface CsvStructure {
  key?: string;
  de: string;
  en: string;
}

export declare module 'src/assets/translation/translation.csv' {
  const value: CsvStructure[];
  export default value;
}
