import {Post} from "./components/Post"
import { Header } from "./components/Header" 
import { Sidebar } from "./components/Sidebar"

/* Estilos */
import "./global.css" 
import styles from "./app.module.css"


//author: { avatar_url: "", name: "", role: ""}
//published: Date
//content: String 
   

const posts = [
  {
    id:1,
    author: {
      avatarUrl: "https://github.com/jackeline-matos.png",
      name: "Jackeline Matos",
      role: "Frontend Development"
    },

    content:[
      { type:"paragraph",
        content: "Fala galeraa 👋 "
      },  
      { type:"paragraph",
        content:  "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      { type:"link",
        content:   " jacky.design/doctorcare "
      } , 

    ], 
    publishedAt: new Date("2023-10-08 20:00:00"),
  },

  {
    id:2,
    author: {
      avatarUrl: "https://github.com/01HUMBA.png",
      name: "Humerto Matos",
      role: "UX Designer"
    },
    content:[
      { type:"paragraph",
        content: "Fala galeraa 👋 "
      },  
      { type:"paragraph",
        content:  "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      { type:"link",
        content:   " jacky.design/doctorcare "
      } , 

    ], 
    publishedAt: new Date("2023-10-08 21:00:00"),
  },
];

//Iteracao ---- repetir uma infomacao 
//Criar uma estrutura de repeticao


export function App(props) {

  return (
    <>
      <Header/>
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {/* ForEach nao pode ser utilizado nesta iteracao pois ele 
            nao tem retorno. Neste caso usamos um metodo que retorna algo
            neste caso MAP*/}
            {posts.map(post => {
              return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
              )

            })}
          </main>
        </div>
    </>
  )
}

export default App
// Export defaut X Named Export 
//Export Component voce pode dar o nome que quiser quando for importar o componente 
//Named Export o nome do componte da funcao precisa ser exatamente o da funcao que foi exportada  	
