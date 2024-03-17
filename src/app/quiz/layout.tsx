import LayoutHeader from './LayoutHeader';

type Props = {
  children: React.ReactNode;
  params: {};
};

export default async function QuizLayout({
  children,
  params,
}: Readonly<Props>) {
  return (
    <div className="bg-secondary min-h-screen flex flex-col">
      <LayoutHeader />
      {children}
    </div>
  );
}
