import { Lesson } from "types/lesson"
import client from "./client"

const fetchLessons = async (): Promise<Lesson[]> => {
  try {
    const result = await client.get<Lesson[]>("/lessons.json")
    return result.data
  } catch {
    return []
  }
}

const fetchLesson = async (lessonId: string): Promise<Lesson | undefined> => {
  const result = await client.get<Lesson[]>("/lessons.json")
  return result.data.find((i) => i.id === lessonId)
}

export {
  fetchLessons,
  fetchLesson
}
