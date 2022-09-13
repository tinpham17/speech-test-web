import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes sound {
    0% {
       opacity: .35;
        height: 3px; 
    }
    100% {
        opacity: 1;       
        height: 70px;        
    }
  }

  .bar {
    background: #52467b;
    bottom: 1px;
    height: 3px;
    width: 10px;
    margin: 0px 4px;
    border-radius: 5px;
    animation: sound 0ms -600ms linear infinite alternate;
  }

  .bar:nth-child(1)  { left: 1px; animation-duration: 474ms; }
  .bar:nth-child(2)  { left: 15px; animation-duration: 433ms; }
  .bar:nth-child(3)  { left: 29px; animation-duration: 407ms; }
  .bar:nth-child(4)  { left: 43px; animation-duration: 458ms; }
  .bar:nth-child(5)  { left: 57px; animation-duration: 400ms; }
  .bar:nth-child(6)  { left: 71px; animation-duration: 427ms; }
  .bar:nth-child(7)  { left: 85px; animation-duration: 441ms; }
  .bar:nth-child(8)  { left: 99px; animation-duration: 419ms; }
  .bar:nth-child(9)  { left: 113px; animation-duration: 487ms; }
  .bar:nth-child(10) { left: 127px; animation-duration: 442ms; }
`

const VoiceAnimation = () => {
  return (
    <Wrapper>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </Wrapper>
  )
}

export default VoiceAnimation
