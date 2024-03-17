'use client';

type Props = {
  percent: number;
};

const ProgressBar = ({ percent = 0 }: Props) => {
  return (
    <div className="w-full h-1 bg-fourth">
      <div className="bg-primary h-full" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
