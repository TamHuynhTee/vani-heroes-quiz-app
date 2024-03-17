import { ReactNode } from 'react';
import { ModalKeyType, useModal } from '..';
import cn from 'clsx';

type Props = {
  modalKey: ModalKeyType;
  children: ReactNode;
  hideCloseButton?: boolean;
  title?: string;
};

export const ModalCustom = (props: Props) => {
  const { modalKey, children, title, hideCloseButton = false } = props;
  const { close } = useModal();

  const closeModal = () => {
    close(modalKey);
  };

  return (
    <div className={'modal'} id={`modal-${modalKey}`}>
      {/* Overlay */}
      <div
        className={cn(
          'modal-overlay',
          'fixed top-0 left-0 right-0 bottom-0 bg-overlay z-[1000] opacity-0 invisible transition'
        )}
        onClick={closeModal}
      ></div>
      {/* Wrapper */}
      <div
        className={cn(
          'modal-wrapper',
          'hidden fixed bg-white border rounded-lg p-6 tablet:p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-full tablet:w-[400px] tablet:max-w-[500px] desktop:w-[600px] desktop:max-w-[700px] z-[1001] shadow-modal-shadow'
        )}
      >
        {/* Close */}
        {hideCloseButton ? null : (
          <span
            className={cn(
              'flex justify-center items-center cursor-pointer absolute -top-[25px] -right-[25px] w-[50px] h-[50px] rounded-full border border-white bg-black text-white text-2xl hover:scale-110'
            )}
            onClick={closeModal}
          >
            x
          </span>
        )}
        {/* Header */}
        <div className={''}>
          <h3 className="text-2xl text-dark font-medium mb-5">{title}</h3>
        </div>
        {/* Body */}
        <div className={cn('mt-5')}>{children}</div>
      </div>
    </div>
  );
};
