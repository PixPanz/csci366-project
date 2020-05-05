export interface Quiz{
    quizId: number;
    quizName: string;
    quizDesc: string;
    quizQuestions: string[];
}

export interface QuizQuestions{
    questionId: number;
    text: string;
    answers: string[];
    correct: string;
}