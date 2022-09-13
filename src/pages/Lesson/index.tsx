import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HeadNavbar from "components/HeadNavbar"
import InitialLayout from "components/InitialLayout"
import styled from "styled-components"
import LessonDetail from "components/LessonDetail"
import { Lesson } from "types/lesson"
import { fetchLesson } from "functions/lesson"

const Content = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 100px;
  bottom: 125px;
  overflow: auto;
  padding-bottom: 32px;
  width: 100%;
  box-sizing: border-box;
`

const LessonPage: React.FC = () => {
  const params = useParams()
  const [ lesson, setLesson ] = useState<Lesson>()

  useEffect(() => {
    (async () => {
      const lessonId = params.lessonId as string
      const result = await fetchLesson(lessonId)
      setLesson(result)
    })()
  }, [params.lessonId])

  return (
    <InitialLayout>
      <HeadNavbar
        title={lesson?.title ?? ""}
        showBack
      />
      <Content>
        {lesson && <LessonDetail lesson={lesson}/>}
      </Content>
    </InitialLayout>
  )
}

export default LessonPage
