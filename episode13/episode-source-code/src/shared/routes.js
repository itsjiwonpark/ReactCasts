import Home from "./home/Home"
import News from "./news/News"

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/news",
    component: News
  }
]

export default routes