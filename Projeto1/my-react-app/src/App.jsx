import {Post} from "./Post"
import "./style.css" 
import { Header } from "./components/Header" 
function App() {

  return (
    <>
      <Header/>
      <Post 
        author="Jackeline Matos"
        content="sdkljkdfjlkjdfljlkdsjflkjsdlkfjlskdjflkjsf"  />
      <Post 
         author="Elis Matos"
         content="sdkljkdfjlkjdfljlkdsjflkjsdlkfjlskdjflkjsf"
      />
    </>
  )
}

export default App
// Export defaut X Named Export 
//Export Component voce pode dar o nome que quiser quando for importar o componente 
//Named Export o nome do componte da funcao precisa ser exatamente o da funcao que foi exportada  	
