import { UserAnswer } from './quiz-result'
import { Quiz } from './quiz'

export interface QuizResponse {
  _id: string
  quizId: string | PopulatedQuiz
  userId: string | PopulatedUser
  userAnswers: UserAnswer[]
  score: number
  totalQuestions: number
  correctAnswers: number
  attemptNumber: number
  completedAt: Date
  createdAt: string
  updatedAt: string
}

export interface PopulatedUser {
  _id?: string
  username: string
  email: string
}

export interface PopulatedQuiz {
  _id: string
  title: string
  category?: string
  language?: string
  questions?: Quiz['questions']
}

export interface CreateQuizResponseDto {
  quizId: string
  userAnswers: UserAnswer[]
  score: number
  totalQuestions: number
  correctAnswers: number
}
