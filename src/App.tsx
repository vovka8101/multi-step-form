import { AppStyled, GlobalStyles } from "./styles"
import Subscription from "./components/Subscription/Subscription"


function App() {
  // const [state, setState] = useState([])

  return (
    <AppStyled>
      <GlobalStyles />
      <Subscription />
    </AppStyled>
  )
}

export default App
