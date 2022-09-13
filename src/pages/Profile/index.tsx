import InitialLayout from "components/InitialLayout"
import HeadNavbar from "components/HeadNavbar"
import MainNavbar from "components/MainNavbar"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { accountState } from "store/state"

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

const Box = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 12px rgb(96 96 96 / 8%);
  padding: 16px;
`

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  span {
    font-size: 18px;
    font-weight: 700;
  }
`

const Profile: React.FC = () => {
  const [ account ] = useRecoilState(accountState)
  return (
    <InitialLayout>
      <HeadNavbar
        title="Profile"
      />
      <Content>
        <Box>
          <Info>
            <img src={account.avatar} alt="Avatar"/>
            <span>{account.name}</span>
          </Info>
        </Box>
        <Box>
          Completed lessons
        </Box>
        <Box>
          Learning lessons
        </Box>
      </Content>
      <MainNavbar/>
    </InitialLayout>
  )
}

export default Profile
