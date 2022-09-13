export interface Pronunciation {
  phrase: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  pronunciations: Pronunciation[]
}
