import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App: FC<HelloWorldProps> = (props: HelloWorldProps) => {
  const { userName, lang } = props;
  const { t } = useTranslation();
  return (
    <h1>
      Hi {userName} from React! {t('welcome')} to {lang}!
    </h1>
  );
};
