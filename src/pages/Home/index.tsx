import InitialLayout from "components/InitialLayout"
import HeadNavbar from "components/HeadNavbar"
import MainNavbar from "components/MainNavbar"
import LessonList from "components/LessonList"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { lessonsState } from "store/state"
import { useEffect } from "react"
import { fetchLessons } from "functions/lesson"

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

const Home: React.FC = () => {
  const [lessons, setLessons] = useRecoilState(lessonsState)

  useEffect(() => {
    (async () => {
      const result = await fetchLessons()
      setLessons(result)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <InitialLayout>
      <HeadNavbar
        title="Lessons"
      />
      <Content>
        <LessonList
          lessons={lessons}
        />
      </Content>
      <MainNavbar/>
    </InitialLayout>
  )
}

export default Home
