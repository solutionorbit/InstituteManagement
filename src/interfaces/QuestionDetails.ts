import { QuestionOptionDetails } from '../interfaces/QuestionOptionDetails'

export interface QuestionDetails {
  questionIndex:number,
  questionID: string,
  testID: string,
  questionStatement: string,
  options: Array<QuestionOptionDetails>,
  answer?: Array<QuestionOptionDetails>,
  setAsRead: boolean,
  setAsAnswered: boolean,
  marks: number
}
