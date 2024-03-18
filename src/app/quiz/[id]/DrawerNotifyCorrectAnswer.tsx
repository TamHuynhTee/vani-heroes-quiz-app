'use client';
import { DrawerCustom, PrimaryButton } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import Image from 'next/image';

type DrawerNotifyCorrectAnswerProps = {
  handleContinue: () => void;
};

const DrawerNotifyCorrectAnswer = ({
  handleContinue,
}: DrawerNotifyCorrectAnswerProps) => {
  return (
    <DrawerCustom
      drawerKey="correctQuizChosen"
      // title="Do you want to end quiz?"
      hideCloseButton
    >
      <div className="">
        <div className="flex justify-center mb-4">
          <Image
            src={'/success-icon-23194.png'}
            alt="success option"
            width={72}
            height={72}
          />
        </div>
        <p className="font-medium text-dark text-center">
          You can use Vani Barcode to earn or redeem membership points.
        </p>
        <div className="mt-4 flex justify-center items-center gap-2">
          <PrimaryButton
            className="w-full tablet:w-1/2"
            onClick={handleContinue}
          >
            Continue
          </PrimaryButton>
        </div>
      </div>
    </DrawerCustom>
  );
};

export default DrawerNotifyCorrectAnswer;
