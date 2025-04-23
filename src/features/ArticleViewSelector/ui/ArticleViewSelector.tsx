import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list.svg';
import TileIcon from '@/shared/assets/icons/tile.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TileIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

function ArticleViewSelector(props: ArticleViewSelectorProps) {
  const {
    className,
    view,
    onViewClick,
  } = props;

  const handleClick = (newView: ArticleView) => () => {
    onViewClick(newView);
  };

  return (
    <div className={classNames('', {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={handleClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [styles.selected]: viewType.view === view })}
          />
        </Button>
      ))}
    </div>
  );
}

export default memo(ArticleViewSelector);
