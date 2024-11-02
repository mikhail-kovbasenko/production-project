import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/Modal';
import styles from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
}

export default LoginModal;
