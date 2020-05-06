export interface Quiz{
    quizId: number;
    quizName: string;
    quizDesc: string;
    quizQuestions: number[];
}

export interface QuizQuestions{
    questionId: number;
    text: string;
    answers: string[];
    correct: string;
}