// import { Metadata } from 'next';
import QuizDetailSection from './QuizDetailSection';

type Props = {
  params: { id: string };
};

export default function QuizDetail(props: Props) {
  return <QuizDetailSection {...props} />;
}
