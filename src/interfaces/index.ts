export namespace InterfaceRepository {
  export interface IQuiz {
    _id: string;
    question: string;
    options: IQuizOption[];
    hint?: string;
  }
  export interface IQuizOption {
    _id: string;
    label: string;
    correct: boolean;
  }

  export interface IApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
  }
}
