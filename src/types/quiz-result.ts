export interface QuizResult {
  quizId: string
  totalQuestions: number
  correctAnswers: number
  userAnswers: UserAnswer[]
  score: number
}

export interface UserAnswer {
  questionId: string
  selectedAnswerIndex: number
  isCorrect: boolean
  timeSpent?: number
}
