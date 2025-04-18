import {
  MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export const useModal = (props: UseModalProps) => {
  const {
    onClose,
    isOpen,
    animationDelay,
  } = props;

  const [isClosing, setClosing] = useState<boolean>(false);
  const [isMounted, setMounted] = useState<boolean>(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const close = useCallback(() => {
    if (onClose) {
      setClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setClosing(false);
      }, animationDelay);
    }
  }, [onClose, animationDelay]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);

  return {
    isClosing,
    isMounted,
    close,
  };
};
