import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background: #F7F6F3;
  height: 100vh;
  overflow: auto;
`

interface InitialLayoutProps {
  children: ReactNode
}

const InitialLayout: React.FC<InitialLayoutProps> = (props) => {
  const { children } = props
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default InitialLayout
