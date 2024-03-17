'use client';
import { Container } from '@/components';
import { useModal } from '@/components';
import { IconChevronRightSVG } from '@/icons/ChevronRightSVG';
import ModalConfirmQuit from './[id]/ModalConfirmQuit';
import { usePathname, useRouter } from 'next/navigation';

type Props = {};

const LayoutHeader = ({}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const modal = useModal();

  const backHome = () => {
    if (pathname === '/quiz/success') return router.push('/');
    modal.open('confirmCancelQuiz');
  };

  return (
    <div>
      <Container className="py-2">
        <div
          onClick={backHome}
          className="rotate-180 w-8 h-8 next-image-wrapper cursor-pointer"
        >
          <IconChevronRightSVG />
        </div>
      </Container>

      <ModalConfirmQuit />
    </div>
  );
};

export default LayoutHeader;
