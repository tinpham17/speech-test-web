import React from "react"
import ReactDOM from "react-dom/client"
import Home from "pages/Home"
import Lesson from "pages/Lesson"
import Profile from "pages/Profile"
import Preference from "pages/Preference"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import RoutePath from "constants/RoutePath"
import { RecoilRoot } from "recoil"
import "styles/global.css"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home/>}/>
          <Route path={RoutePath.PROFILE} element={<Profile/>}/>
          <Route path={RoutePath.PREFERENCE} element={<Preference/>}/>
          <Route path={`${RoutePath.LESSON}/:lessonId`} element={<Lesson/>}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
