import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { ReactComponent as ArrowBackSvg } from "assets/images/arrow-back.svg"

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 140px;
  width: 100%;
  background: linear-gradient(180deg, #33846B 0%, #006546 100%);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 16px;
`

const Box = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`

interface HeadNavbarProps {
  title: string
  showBack?: boolean
}

const HeadNavbar: React.FC<HeadNavbarProps> = (props) => {
  const { title, showBack } = props
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <Wrapper>
      <Box>
        {showBack && (<ArrowBackSvg onClick={goBack}/>)}
      </Box>
      <Box>
        {title && (
          <Title>{title}</Title>
        )}
      </Box>
      <Box>
        
      </Box>
    </Wrapper>
  )
}

export default HeadNavbar
