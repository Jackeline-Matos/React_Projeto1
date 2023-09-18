/*        
 - para regastar propriedades de outros componentes utilizamos props
 - props({author} {content})

        export function Post(props){
            <>
            <p>Post</p>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
            </>
        }
*/
   
        
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"       

export function Post(){
 
    return <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/jackeline-matos.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Jackeline Matos</strong>
                        <span>Frontend Entwicklerin</span>
                    </div>
                </div>

                {/* tag que se refere a data e tempo <time></time>e
                    permite receber o atributo dateTime=""
                 */}
                <time title="11 de maio publicado às 11:13" dateTime="2023-09-15">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>

                <p>Fala galeraa 👋</p> 	
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p> 👉 <a href=""> jane.design/doctorcare</a></p>
                <p>
                 <a href="#">#novoprojeto </a> {" "} 
                 <a href="#"> #rocketseat </a> {" "}
                 <a href="#"> #nlw </a> {" "}
                 </p>

            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea 
                    placeholder="Deixe seu comentário"
                
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
                
            </form>
            <div className={styles.commentList}>
                <Comment/>
            </div>
        </article>
    </>
}


