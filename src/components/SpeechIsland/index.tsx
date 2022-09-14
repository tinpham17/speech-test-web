import styled from "styled-components"
import VoiceAnimation from "components/VoiceAnimation"
import useSpeechRecognition from "functions/useSpeechRecognition"
import { ReactComponent as CloseSvg } from "assets/images/close.svg"
import { ReactComponent as VoiceSvg } from "assets/images/voice.svg"

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
  justify-content: space-between;
`

const Phrase = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  text-align: center;
  max-width: 200px;
  line-height: 1.4;
`

const Text = styled.div`
  color: #fafafa;
  text-align: center;
  font-style: italic;
  color: hsl(340deg 100% 60%);
  padding: 16px 0;
`

const Action = styled.button`
  height: 54px;
  width: 54px;
  border-radius: 50%;
  border: none;
  background: #52467b;
  display: flex;
  align-items: center;
  justify-content: center;
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

  const { recognizing, start, abort, interimResult, finalResult } = useSpeechRecognition()

  const handleStart = () => {
    start()
  }

  const handleStop = () => {
    abort()
  }

  return (
    <Wrapper>
      {!recognizing && <Phrase>{phrase}</Phrase>}
      {recognizing && <Text>{interimResult}</Text>}
      {!recognizing && <Text>{finalResult}</Text>}
      {recognizing && <VoiceAnimation onClick={handleStop}/>}
      {!recognizing && (
        <Action onClick={handleStart}>
          <VoiceSvg/>
        </Action>
      )}
      <Close onClick={onClose}>
        <CloseSvg/>
      </Close>
    </Wrapper>
  )
}

export default SpeechIsland
