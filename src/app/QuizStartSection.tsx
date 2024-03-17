'use client';
import { PrimaryButton } from '@/components';
import { useRouter } from 'next/navigation';

const QuizStartSection = () => {
  const router = useRouter();

  const startQuiz = () => {
    router.push('/quiz');
  };

  return (
    <div className="py-20 flex justify-center">
      <PrimaryButton onClick={startQuiz}>Start Quiz</PrimaryButton>
    </div>
  );
};

export default QuizStartSection;
