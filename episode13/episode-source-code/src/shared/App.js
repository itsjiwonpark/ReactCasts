import React from "react"
import { Switch, Route } from "react-router-dom"
import routes from './routes'

const App = () => {
  return (
    <Switch>
      {routes.map((route, i)=>(<Route key={i} {...route} />))}
    </Switch>
  )
}

export default App

// switch는 해당 경로에 매치하는 첫 번째 컴포넌트만 렌더시켜줌 