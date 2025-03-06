import { Fragment, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import { Skeleton } from 'shared/ui/Skeleton';
import {
  Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text';
import { HorizontalStack, VerticalStack } from 'shared/ui/Stack';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/getArticleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/types';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const renderBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          block={block}
          className={styles.block}
          key={block.id}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          block={block}
          className={styles.block}
          key={block.id}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          block={block}
          className={styles.block}
          key={block.id}
        />
      );
    default: return null;
  }
};

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

function ArticleDetails(props: ArticleDetailsProps) {
  const {
    className,
    id,
  } = props;

  const isLoading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  let content;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    content = (
      <Fragment>
        <Skeleton width={200} height={200} border="50%" className={styles.avatar} />
        <Skeleton width={300} height={59} className={styles.title} />
        <Skeleton width={500} height={100} className={styles.skeleton} />
        <Skeleton width={500} height={100} className={styles.skeleton} />
      </Fragment>
    );
  } else if (error) {
    content = (
      <Text
        title="ERROR"
        align={TextAlign.CENTER}
        theme={TextTheme.ERROR}
      />
    );
  } else {
    content = (
      <Fragment>
        <HorizontalStack justify="center" fullWidth>
          <Avatar size={200} src={article?.img} className={styles.avatar} />
        </HorizontalStack>
        <VerticalStack gap="4" fullWidth>
          <Text
            title={article?.title}
            text={article?.subtitle}
            className={styles.title}
            size={TextSize.L}
          />
          <HorizontalStack gap="8">
            <Icon Svg={EyeIcon} className={styles.icon} />
            <Text text={String(article?.views)} />
          </HorizontalStack>
          <HorizontalStack gap="8">
            <Icon Svg={CalendarIcon} className={styles.icon} />
            <Text text={article?.createdAt} />
          </HorizontalStack>
        </VerticalStack>
        {
          article?.blocks.map(renderBlock)
        }
      </Fragment>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterOnMount>
      <VerticalStack className={classNames(styles.ArticleDetails, {}, [className])} gap="16">
        {content}
      </VerticalStack>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetails);
