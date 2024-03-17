import { NextResponse } from 'next/server';
import quiz from '@/__mock/data.json';

export async function GET() {
  try {
    const result = quiz;
    return NextResponse.json({
      message: 'Success',
      success: quiz,
      data: result,
    });
  } catch (err) {
    return NextResponse.json({
      message: 'Internal server error',
      success: false,
      data: null,
    });
  }
}
