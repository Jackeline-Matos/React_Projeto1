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
//As propriedades podem ser exportadas da seguinte forma
//export function Post(props){

//mas também podemos fazer a desestruturacao com abaixo
export function Post({author}){

 
    return <>
        <article className={styles.post}>
            <header>
                <div className={author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                {/* tag que se refere a data e tempo <time></time>e
                    permite receber o atributo dateTime=""
                 */}
                <time title="11 de maio publicado às 11:13" dateTime="2023-09-15">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>

              
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


