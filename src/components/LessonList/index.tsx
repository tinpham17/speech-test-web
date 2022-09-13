import RoutePath from "constants/RoutePath"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Lesson } from "types/lesson"

const Wrapper = styled.div``

const Box = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 12px rgb(96 96 96 / 8%);
  margin-bottom: 24px;
  padding: 16px;
`
const Title = styled.h2`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 18px;
  padding-bottom: 8px;
`

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
`

interface LessonListProps {
  lessons: Lesson[]
}

const LessonList: React.FC<LessonListProps> = (props) => {
  const { lessons } = props
  return (
    <Wrapper>
      {lessons.map((lesson) => (
        <Link to={`${RoutePath.LESSON}/${lesson.id}`} key={lesson.id}>
          <Box>
            <Title>{lesson.title}</Title>
            <Description>{lesson.description}</Description>
          </Box>
        </Link>
      ))}
    </Wrapper>
  )
}

export default LessonList
