import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import styles from './LoginModal.module.scss';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

function LoginModal(props: LoginModalProps) {
  const {
    className,
    isOpen,
    onClose,
  } = props;

  return (
    <Modal
      className={classNames(styles.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}><LoginForm onSuccess={onClose} /></Suspense>
    </Modal>
  );
}

export default LoginModal;
