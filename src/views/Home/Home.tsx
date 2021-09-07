import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t } = useTranslation();
  return <h1>{t('welcome')}</h1>;
};
export default Home;
