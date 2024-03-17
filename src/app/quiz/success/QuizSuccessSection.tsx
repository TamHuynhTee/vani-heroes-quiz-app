'use client';
import { Container, SecondaryButton } from '@/components';
import { useRouter } from 'next/navigation';

type Props = {};

export default function QuizSuccessSection(props: Props) {
  const router = useRouter();

  const backHome = () => {
    router.push('/');
  };

  return (
    <div className="bg-primary flex-1 py-14">
      <Container>
        <h3 className="text-2xl text-white text-center">
          You solved all the quizzes correctly!
        </h3>
        <p className="mt-4 text-base text-white text-center">
          1,000 Vani Coins Coupon has arrived
        </p>

        <div className="mt-10 mb-2 flex justify-center">
          <SecondaryButton onClick={backHome} className="w-full tablet:w-1/2">
            Check Coupon
          </SecondaryButton>
        </div>
        <p className="mt-4 text-xs text-white text-center">
          Please check inbox and use a coupon to earn Vani Coin.
        </p>
      </Container>
    </div>
  );
}
