'use client';
import { QuizAnswerCard, useDrawer } from '@/components';
import { Envs } from '@/constants';
import { IconChevronRightSVG } from '@/icons/ChevronRightSVG';
import { InterfaceRepository } from '@/interfaces';
import { useCallback, useEffect, useState } from 'react';
import DrawerNotifyCorrectAnswer from './DrawerNotifyCorrectAnswer';
import { useRouter } from 'next/navigation';

type Props = {
  params: { id: string };
};

export default function QuizDetailSection({ params }: Props) {
  const [quiz, setQuiz] = useState<InterfaceRepository.IQuiz | null>();

  const [chosen, setChosen] = useState<string[]>([]);
  const [correct, setCorrect] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const correctOptions = (quiz?.options || []).filter((e) => e.correct);
  const numberOfCorrectOptions = correctOptions.length;
  const isMultiOptions = numberOfCorrectOptions >= 2;

  const allCorrect =
    chosen.length > 0 &&
    chosen.length === numberOfCorrectOptions &&
    chosen.every((chose) =>
      correctOptions.some((option) => option._id === chose)
    );

  const router = useRouter();
  const drawer = useDrawer();

  const id = params.id;

  const proceedNext = useCallback(async () => {
    try {
      const result = await getNextQuizData(id);
      if (!result.success) throw new Error();
      handleReset();
      drawer.close('correctQuizChosen');
      if (result.data === '0') return router.push(`/quiz/success`);
      return router.push(`/quiz/${result.data}`);
    } catch (error) {}
  }, [id]);

  const handleReset = useCallback(() => {
    setError(false);
    setChosen([]);
  }, []);

  const handleChooseOption = useCallback(
    (option: InterfaceRepository.IQuizOption) => {
      if (error || correct) return;
      if (chosen.includes(id)) return;
      setChosen((_prev) => [..._prev, option._id]);

      if (!option.correct) setError(true);
      // if (option.correct && allCorrect) setCorrect(true);
    },
    [error, correct]
  );

  useEffect(() => {
    (async () => {
      try {
        const quizData = await getQuizData(id);
        if (!quizData.success) throw new Error();
        setQuiz(quizData.data.quiz);
      } catch (error) {
        console.log(error);
        setQuiz(null);
      }
    })();
  }, []);

  useEffect(() => {
    if (allCorrect) {
      setCorrect(true);
      drawer.open('correctQuizChosen');
    }
  }, [allCorrect]);

  if (quiz === undefined) return <p className="py-4">Loading quiz...</p>;
  if (quiz === null) return <p className="py-4">No quiz found with id: {id}</p>;

  return (
    <main className="flex flex-col py-4">
      <p className="text-primary mb-2 font-bold text-base">Q{quiz?._id}</p>
      <h3 className="text-dark mb-2 font-bold text-base">
        {quiz?.question}
        {error ? (
          <span
            onClick={handleReset}
            className="block tablet:inline-block mt-4 tablet:mt-0 tablet:ml-4 cursor-pointer text-primary font-bold text-base"
          >
            Try again
          </span>
        ) : (
          ''
        )}
        {correct ? (
          <span
            onClick={proceedNext}
            className="block tablet:inline-block mt-4 tablet:mt-0 tablet:ml-4 cursor-pointer text-primary font-bold text-base"
          >
            Continue
          </span>
        ) : (
          ''
        )}
      </h3>

      {isMultiOptions ? (
        <p className="text-dark mb-2 underline font-medium text-base">
          Please choose {numberOfCorrectOptions} answers
        </p>
      ) : null}

      <div className="mt-10">
        {quiz?.options?.map((option, key) => (
          <QuizAnswerCard
            key={key}
            {...option}
            onClick={() => handleChooseOption(option)}
            active={chosen.includes(option._id)}
          />
        ))}
      </div>

      <div className="border-t border-t-third mt-6 mb-4"></div>

      <input
        type="checkbox"
        id="show_hint"
        className="collapse-toggle"
        hidden
      />
      <label
        htmlFor={`show_hint`}
        className="text-dark mb-4 font-bold text-base inline-flex gap-2 items-center cursor-pointer"
      >
        <span>Hint</span>
        <span className="rotate-90 inline-block w-6 h-6 next-image-wrapper">
          <IconChevronRightSVG />
        </span>
      </label>
      <h3 className="text-dark font-medium text-sm hidden">{quiz?.hint}</h3>

      <DrawerNotifyCorrectAnswer handleContinue={proceedNext} />
    </main>
  );
}

async function getNextQuizData(
  id: string
): Promise<InterfaceRepository.IApiResponse<string>> {
  const res = await fetch(`${Envs.BASE_URL}/api/quiz/${id}/next`, {
    cache: 'no-cache',
  });
  return res.json();
}

async function getQuizData(id: string): Promise<
  InterfaceRepository.IApiResponse<{
    quiz: InterfaceRepository.IQuiz | null;
    final: boolean;
  }>
> {
  const res = await fetch(`${Envs.BASE_URL}/api/quiz/${id}`, {
    cache: 'no-cache',
  });
  return res.json();
}
