import InitialLayout from "components/InitialLayout"
import HeadNavbar from "components/HeadNavbar"
import MainNavbar from "components/MainNavbar"

const Preference: React.FC = () => {
  return (
    <InitialLayout>
      <HeadNavbar
        title="Preference"
      />
      <MainNavbar/>
    </InitialLayout>
  )
}

export default Preference
