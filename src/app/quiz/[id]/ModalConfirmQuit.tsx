'use client';
import { DefaultButton, PrimaryButton } from '@/components';
import { ModalCustom, useModal } from '@/components';
import { useRouter } from 'next/navigation';
// import Image from 'next/image';

type ModalConfirmQuitProps = {};

const ModalConfirmQuit = ({}: ModalConfirmQuitProps) => {
  const router = useRouter();
  const modal = useModal();

  const cancel = () => {
    modal.close('confirmCancelQuiz');
  };

  const close = () => {
    router.push('/');
  };

  return (
    <ModalCustom
      modalKey="confirmCancelQuiz"
      title="Do you want to end quiz?"
      hideCloseButton
    >
      <div className="">
        <p className="font-normal text-dark">
          Once you end this quiz,
          <br /> you will have to start from the first question again.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <DefaultButton className="w-full tablet:w-1/3" onClick={cancel}>
            Cancel
          </DefaultButton>
          <PrimaryButton className="w-full tablet:w-2/3" onClick={close}>
            End Quiz
          </PrimaryButton>
        </div>
      </div>
    </ModalCustom>
  );
};

export default ModalConfirmQuit;
