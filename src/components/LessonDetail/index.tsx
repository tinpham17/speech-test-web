import SpeechIsland from "components/SpeechIsland"
import useSpeechSynthesis from "functions/useSpeechSynthesis"
import { useState } from "react"
import styled from "styled-components"
import { Lesson, Pronunciation } from "types/lesson"

const Wrapper = styled.div``

const Box = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 12px rgb(96 96 96 / 8%);
  margin-bottom: 24px;
  padding: 16px;
`

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 300;
`

interface LessonDetailProps {
  lesson: Lesson
}

const LessonDetail: React.FC<LessonDetailProps> = (props) => {
  const { lesson } = props
  const [ activePhrase, setActivePhrase ] = useState<string>()

  const { speak } = useSpeechSynthesis()

  const handleSelectPronunciation = (pronunciation: Pronunciation) => {
    setActivePhrase(pronunciation.phrase)
    speak(pronunciation.phrase)
  }

  const handleClosePronunciation = () => {
    setActivePhrase(undefined)
  }

  return (
    <Wrapper>
      <Box>
        <Description>{lesson.description}</Description>
      </Box>
      {lesson.pronunciations?.map((pronunciation, index) => (
        <Box key={index} onClick={() => handleSelectPronunciation(pronunciation)}>
          {pronunciation.phrase}
        </Box>
      ))}
      {activePhrase && <SpeechIsland phrase={activePhrase} onClose={handleClosePronunciation}/>}
    </Wrapper>
  )
}

export default LessonDetail
