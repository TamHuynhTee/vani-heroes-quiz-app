import { Container } from '@/components';
import QuizStartSection from './QuizStartSection';

const QuizTitle = () => {
  return (
    <div className="py-20">
      <h1 className="text-xl text-white text-center tablet:text-2xl">
        Take the Quiz of Vani Coins to instantly get 1,000 Coins
      </h1>
    </div>
  );
};

export default function Home() {
  return (
    <main className="h-screen flex flex-col">
      {/* Title */}
      <div className="bg-primary">
        <Container className="">
          <QuizTitle />
        </Container>
      </div>

      {/* Button */}
      <div className="bg-white flex-1">
        <Container className="h-full flex flex-col justify-center">
          <QuizStartSection />
        </Container>
      </div>
    </main>
  );
}
