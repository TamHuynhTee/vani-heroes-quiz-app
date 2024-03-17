import { NextResponse } from 'next/server';
import quiz from '@/__mock/data.json';

export async function GET(
  req: Request,
  { params }: { params: { id: string | number } }
) {
  try {
    const result = quiz.find((e) => e._id === params.id);
    const resultIndex = quiz.findIndex((e) => e._id === params.id);
    if (!result) {
      return NextResponse.json({
        message: 'Quiz not found',
        success: false,
        data: null,
      });
    }
    return NextResponse.json({
      message: 'Success',
      success: true,
      data: { quiz: result, final: resultIndex === quiz.length - 1 },
    });
  } catch (err) {
    return NextResponse.json({
      message: 'Internal server error',
      success: false,
      data: null,
    });
  }
}
