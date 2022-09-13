import { ReactComponent as CloseSvg } from "assets/images/close.svg"
import styled from "styled-components"
import VoiceAnimation from "components/VoiceAnimation"
import useSpeechRecognition from "functions/useSpeechRecognition"

const Wrapper = styled.div`
  background: #000;
  border-radius: 12px;
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  height: 200px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Phrase = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  text-align: center;
  padding: 24px 0;
`

const Text = styled.div`
  color: #fafafa;
  text-align: center;
  font-style: italic;
`

const Action = styled.button<{active: boolean}>`
  position: absolute;
  bottom: 16px;
  margin: auto;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? "#52467b" : "red"}
`

const Close = styled.div`
  position: absolute;
  right: 24px;
`

interface SpeechIslandProps {
  phrase: string
  onClose: () => void
}

const SpeechIsland: React.FC<SpeechIslandProps> = (props) => {
  const { phrase, onClose } = props

  const { recognizing, start, stop, interimResult } = useSpeechRecognition()

  const handleClickAction = () => {
    if (recognizing) {
      stop()
    } else {
      start()
    }
  }

  return (
    <Wrapper>
      {!recognizing && <Phrase>{phrase}</Phrase>}
      {recognizing && <VoiceAnimation/>}
      {recognizing && <Text>{interimResult}</Text>}
      {!recognizing && <Text>{interimResult}</Text>}
      <Action onClick={handleClickAction} active={recognizing}/>
      <Close onClick={onClose}>
        <CloseSvg/>
      </Close>
    </Wrapper>
  )
}

export default SpeechIsland
