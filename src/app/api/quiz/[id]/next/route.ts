import { NextResponse } from 'next/server';
import quiz from '@/__mock/data.json';

export async function GET(
  req: Request,
  { params }: { params: { id: string | number } }
) {
  try {
    const resultIndex = quiz.findIndex((e) => e._id === params.id);
    // 0 is last
    if (resultIndex === quiz.length - 1) {
      return NextResponse.json({
        message: 'Quiz id the last',
        success: true,
        data: '0',
      });
    }

    if (resultIndex <= -1) {
      return NextResponse.json({
        message: 'Quiz id not found',
        success: false,
        data: null,
      });
    }
    return NextResponse.json({
      message: 'Success',
      success: true,
      data: quiz[resultIndex + 1]._id,
    });
  } catch (err) {
    return NextResponse.json({
      message: 'Internal server error',
      success: false,
      data: null,
    });
  }
}
