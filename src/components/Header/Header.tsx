import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import styles from './Header.scss';

const Header: FC = () => {
  const { i18n } = useTranslation();
  const history = useHistory();

  function handleRouteChange(path: string): void {
    history.push(path);
  }

  return (
    <div className={styles.headerContainer}>
      <Router>
        <nav>
          <ul>
            <li>
              <button type="button" onClick={() => handleRouteChange('/')}>
                Home
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleRouteChange('/profil')}>
                Profil
              </button>
            </li>
          </ul>
        </nav>
        <div className={styles.languageToggle}>
          <button type="button" onClick={() => i18n.changeLanguage('de')}>
            german
          </button>
          <button type="button" onClick={() => i18n.changeLanguage('en')}>
            english
          </button>
        </div>
      </Router>
    </div>
  );
};
export default Header;
