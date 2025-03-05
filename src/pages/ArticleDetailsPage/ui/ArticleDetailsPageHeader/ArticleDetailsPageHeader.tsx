import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/router/config';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { getArticleDetailsData } from 'entities/Article';
import { HorizontalStack } from 'shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

function ArticleDetailsPageHeader(props: ArticleDetailsPageHeaderProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles}/${article?.id}/edit`);
  }, [navigate, article?.id]);

  return (
    <HorizontalStack className={classNames('', {}, [className])} fullWidth justify="between">
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>{t('return to list')}</Button>
      {canEdit && <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>{t('edit articles')}</Button>}
    </HorizontalStack>
  );
}

export default ArticleDetailsPageHeader;
