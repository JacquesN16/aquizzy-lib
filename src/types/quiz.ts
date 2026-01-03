import {DifficultyLevel, QuizStatus} from "../enums";

export interface Quiz {
  _id: string
  title: string
  category: 'vocabulary_1000' | 'phrasal_verbs'
  language: 'en' | 'fr'
  questionCount: number
  timer: number | null
  questions: Question[]
  createdAt: string
  status: QuizStatus
  difficulty?: DifficultyLevel
}

export interface Question {
  id: string
  text: string
  answers: Answer[]
  correctAnswerIndex: number
  category: string
  language: 'en' | 'fr'
}

export interface Answer {
  text: string
  isCorrect: boolean
}

export interface QuizConfig {
  category: 'vocabulary_1000' | 'phrasal_verbs'
  language: 'en' | 'fr'
  questionCount: 5 | 10 | 15 | 20 | 50
  timer: null | 20 | 30 | 60
}
