import { Container } from '@/components';
import type { Metadata } from 'next';
import ProgressBar from './ProgressBar';
import { InterfaceRepository } from '@/interfaces';
import { Envs } from '@/constants';

type Props = {
  children: React.ReactNode;
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  return {
    title: `Quiz ${id}`,
    description: 'Quiz of Vani Coins',
  };
}

export default async function QuizLayout({
  children,
  params,
}: Readonly<Props>) {
  const { props } = await getServerSideProps(params.id);
  return (
    <div className="">
      <ProgressBar
        percent={
          ((props.quizProgress?.progress || 0) /
            (props.quizProgress?.total || 1)) *
          100
        }
      />
      <Container>{children}</Container>
    </div>
  );
}

const getServerSideProps = async (id: string) => {
  try {
    const promiseData = await Promise.all([getQuizProgressData(id)]);

    if (promiseData.some((res) => !res.success)) throw new Error();

    const [quizProgressData] = promiseData;

    return {
      props: {
        quizProgress: quizProgressData?.data,
        error: false,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: true,
      },
    };
  }
};

async function getQuizProgressData(id: string): Promise<
  InterfaceRepository.IApiResponse<{
    progress: number;
    total: number;
  }>
> {
  const res = await fetch(`${Envs.BASE_URL}/api/quiz/progress/${id}`);
  return res.json();
}
