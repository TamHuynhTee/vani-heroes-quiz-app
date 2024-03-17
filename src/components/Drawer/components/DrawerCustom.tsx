import { ReactNode } from 'react';
import { DrawerKeyType, useDrawer } from '..';
import cn from 'clsx';
import { Container } from '@/components';

type Props = {
  drawerKey: DrawerKeyType;
  children: ReactNode;
  hideCloseButton?: boolean;
  title?: string;
};

export const DrawerCustom = (props: Props) => {
  const { drawerKey, children, title, hideCloseButton = false } = props;
  const { close } = useDrawer();

  const closeDrawer = () => {
    close(drawerKey);
  };

  return (
    <div className={'drawer'} id={`drawer-${drawerKey}`}>
      {/* Overlay */}
      <div
        className={cn(
          'drawer-overlay',
          'fixed top-0 left-0 right-0 bottom-0 bg-overlay z-[1000] opacity-0 invisible transition'
        )}
        onClick={closeDrawer}
      ></div>
      {/* Wrapper */}
      <div
        className={cn(
          'drawer-wrapper',
          'fixed bg-white rounded-tl-lg rounded-tr-lg py-6 tablet:py-8 -bottom-full left-0 w-full z-[1001] shadow-modal-shadow'
        )}
      >
        {/* Close */}
        {hideCloseButton ? null : (
          <span
            className={cn(
              'flex justify-center items-center cursor-pointer absolute -top-[25px] -right-[25px] w-[50px] h-[50px] rounded-full border border-white bg-black text-white text-2xl hover:scale-110'
            )}
            onClick={closeDrawer}
          >
            x
          </span>
        )}
        {/* Header */}
        <div className={''}>
          <h3 className="text-2xl text-dark font-medium">{title}</h3>
        </div>
        {/* Body */}
        <div className={cn('')}>
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
};
