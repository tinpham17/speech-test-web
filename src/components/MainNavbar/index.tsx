import { Link, useLocation } from "react-router-dom"
import RoutePath from "constants/RoutePath"
import { ReactComponent as ProfileSvg } from "assets/images/profile.svg"
import { ReactComponent as LearnSvg } from "assets/images/scan.svg"
import { ReactComponent as PreferenceSvg } from "assets/images/setting.svg"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const Items = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  height: 83px;
  list-style: none;
  box-shadow: 0px 0px 10px rgba(49, 49, 49, 0.15);
  background: #FFFFFF;
  border-radius: 14px 14px 0 0;
`

const Item = styled.li<{active: boolean}>`
  flex: 1;
  height: 75%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 100%;
    text-decoration: none;
    position: relative;
  }

  path {
    fill: ${props => props.active ? "#006546" : "#757575"};
  }

  span {
    font-weight: 700;
    font-size: 12px;
    color: ${[props => props.active ? "#006546" : "#757575"]};
    position: absolute;
    bottom: 0;
  }

  .primary {
    border: 8px solid #f7f6f3;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    position: absolute;
    top: -33px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .primary-inner {
    box-shadow: 0px 0px 10px rgb(49 49 49 / 15%);
    background: #FFFFFF;
    border-radius: 50%;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

interface MainNavbarProps {}

const MainNavbar: React.FC<MainNavbarProps> = (props) => {
  const location = useLocation()

  const items = [
    { label: "Profile", icon: <ProfileSvg/>, to: RoutePath.PROFILE },
    { label: "Learn", icon: <LearnSvg/>, to: RoutePath.HOME, primary: true },
    { label: "Preference", icon: <PreferenceSvg/>, to: RoutePath.PREFERENCE }
  ]

  return (
    <Wrapper>
      <Items>
        {items.map((item, index) => (
          <Item key={index} active={location.pathname === item.to}>
            <Link to={item.to}>
              {item.primary && (
                <div className="primary">
                  <div className="primary-inner">
                    {item.icon}
                  </div>
                </div>
              )}
              {!item.primary && item.icon}
              <span>{item.label}</span>
            </Link>
          </Item>
        ))}
      </Items>
    </Wrapper>
  )
}

export default MainNavbar
