export interface TestTmkItem {
  id: number
  question: string
  answers: IAnswer[]
  disabled: boolean | undefined
}

export interface IAnswer {
  answer: string
  right: boolean | undefined
  color: string | undefined

}
