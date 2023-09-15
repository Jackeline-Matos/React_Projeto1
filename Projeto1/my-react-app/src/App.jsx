import {Post} from "./components/Post"
import { Header } from "./components/Header" 
import { Sidebar } from "./components/Sidebar"

/* Estilos */
import "./global.css" 
import styles from "./app.module.css"
function App() {

  return (
    <>
      <Header/>
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post 
              author="Jackeline Matos"
              content="sdkljkdfjlkjdfljlkdsjflkjsdlkfjlskdjflkjsf" 
            />
            <Post 
              author="Elis Matos"
              content="sdkljkdfjlkjdfljlkdsjflkjsdlkfjlskdjflkjsf"
            />
          </main>
        </div>
    </>
  )
}

export default App
// Export defaut X Named Export 
//Export Component voce pode dar o nome que quiser quando for importar o componente 
//Named Export o nome do componte da funcao precisa ser exatamente o da funcao que foi exportada  	
