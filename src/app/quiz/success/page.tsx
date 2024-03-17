import { Metadata } from 'next';
import QuizSuccessSection from './QuizSuccessSection';

type Props = {};

export const metadata: Metadata = {
  title: 'Success',
};

export default function QuizSuccess(props: Props) {
  return <QuizSuccessSection />;
}
