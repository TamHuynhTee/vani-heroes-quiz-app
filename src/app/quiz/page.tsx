import { Envs } from '@/constants';
import { InterfaceRepository } from '@/interfaces';
import { redirect } from 'next/navigation';

export default async function QuizPage() {
  const { props } = await getServerSideProps();

  const firstQuiz = props.quizzes?.[0];
  redirect(`/quiz/${firstQuiz?._id}`);
}

const getServerSideProps = async () => {
  try {
    const promiseData = await Promise.all([getQuizzesData()]);

    if (promiseData.some((res) => !res.success)) throw new Error();

    const [quizzesData] = promiseData;

    return {
      props: {
        quizzes: quizzesData?.data,
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

async function getQuizzesData(): Promise<
  InterfaceRepository.IApiResponse<InterfaceRepository.IQuiz[]>
> {
  const res = await fetch(`${Envs.BASE_URL}/api/quiz`, {
    cache: 'no-cache',
  });
  return res.json();
}
