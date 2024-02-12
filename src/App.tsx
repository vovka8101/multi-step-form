import { AppStyled, GlobalStyles } from "./styles"
import Subscription from "./components/Subscription/Subscription"


function App() {
  return (
    <AppStyled>
      <GlobalStyles />
      <Subscription />
    </AppStyled>
  )
}

export default App
