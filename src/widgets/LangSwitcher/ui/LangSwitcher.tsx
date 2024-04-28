import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

  return (
    <Button
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.LangSwitcher, {}, [className])}
    >
      {t('Language')}
    </Button>
  );
};
