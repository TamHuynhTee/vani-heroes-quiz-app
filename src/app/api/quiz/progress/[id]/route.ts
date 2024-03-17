import { NextResponse } from 'next/server';
import quiz from '@/__mock/data.json';

export async function GET(
  req: Request,
  { params }: { params: { id: string | number } }
) {
  try {
    const result = quiz.findIndex((e) => e._id === params.id);
    if (result <= -1) {
      return NextResponse.json({
        message: 'Quiz not found',
        success: false,
        data: null,
      });
    }
    return NextResponse.json({
      message: 'Success',
      success: true,
      data: {
        progress: result + 1,
        total: quiz.length,
      },
    });
  } catch (err) {
    return NextResponse.json({
      message: 'Internal server error',
      success: false,
      data: null,
    });
  }
}
