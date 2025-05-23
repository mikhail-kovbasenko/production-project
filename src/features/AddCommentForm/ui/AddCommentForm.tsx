import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import styles from './AddCommentForm.module.scss';
import { HorizontalStack } from '../../../shared/ui/Stack';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

function AddCommentForm(props: AddCommentFormProps) {
  const {
    className,
    onSendComment,
  } = props;

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const handleTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    handleTextChange('');
    onSendComment(text || '');
  }, [text, onSendComment, handleTextChange]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HorizontalStack className={classNames(styles.AddCommentForm, {}, [className])} justify="between" fullWidth>
        <Input
          placeholder={t('Enter text')}
          value={text}
          onChange={handleTextChange}
          className={styles.input}
        />
        <Button onClick={onSendHandler}>{t('Send')}</Button>
      </HorizontalStack>
    </DynamicModuleLoader>
  );
}

export default AddCommentForm;
