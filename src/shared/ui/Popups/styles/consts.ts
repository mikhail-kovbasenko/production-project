import styles from './popup.module.scss';
import { DropdownDirection } from '../../../types/ui';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.optionBottomLeft,
  'bottom right': styles.optionBottomRight,
  'top right': styles.optionTopRight,
  'top left': styles.optionTopLeft,
};
