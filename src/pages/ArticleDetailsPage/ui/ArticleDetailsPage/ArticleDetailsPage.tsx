import { classNames } from 'shared/lib/classNames/classNames';
//import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames('', {}, [className])}>
      {t('ARTICLE DETAILS PAGE')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
