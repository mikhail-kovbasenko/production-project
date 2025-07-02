import { memo, useState } from 'react';

import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames';

import styles from './StarRating.module.scss';
import { Icon } from '../../Icon';

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

function StarRating(props: StarRatingProps) {
  const {
    className,
    onSelect,
    size = 30,
    selectedStars = 0,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(styles.StarRating, {}, [className])}>
      {
        stars.map((starNumber) => (
          <Icon
            Svg={StarIcon}
            key={starNumber}
            className={classNames(
              styles.starIcon,
              {
                [styles.selected]: isSelected,
              },
              [currentStarsCount >= starNumber ? styles.hovered : styles.normal],
            )}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
            onClick={onClick(starNumber)}
            data-testid={`StarRating.${starNumber}`}
            data-selected={currentStarsCount >= starNumber}
          />
        ))
      }
    </div>
  );
}

export default memo(StarRating);
