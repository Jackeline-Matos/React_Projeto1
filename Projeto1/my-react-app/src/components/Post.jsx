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

//Conceito de de Estado       

import { format, formatDistanceToNow } from "date-fns"
import { } from "date-fns/locale/pt-BR";
        
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"       
import { ptBR } from "date-fns/locale";


//Conceito de de Estado
//Neste caso o array determina a quantidade de comentários que deverá aparecer
const comments = [
    1,
    2,
    3,
]



//As propriedades podem ser exportadas da seguinte forma
//export function Post(props){
//mas também podemos fazer a desestruturacao com abaixo
export function Post({author, publishedAt, content}){

 /* 

    Opcao de data utiliyada pelo JS ; Intl.DateTimeFormat
 
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: "2-digit",
    month: "long",
    houer: "2-digit",
    minute: "2-digit",
 }).format(publishedAt) */

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale:ptBR,
    } );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true,
    })
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
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === "paragraph"){
                        return <p>{line.content}</p>;
                    }else if (line.type === "link"){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
                 
              
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
               {comments.map(comment => {
                return <Comment />
               })}

            </div>
        </article>
    </>
}


