import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
/* hasBorder={false} uma propiedade (prop) criada para manipular o estilo da propiedade src=imagem */



export function Comment (){
    return(
        <>
            <div className={styles.comment}>
                <Avatar hasBorder = {false} src="https://github.com/01HUMBA.png"/>

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Humerto Matos</strong>
                                <time title="11 de maio publicado às 11:13" dateTime="2023-09-15">Cerca de 1 hora atrás</time>
                            </div>
                           
                            <button title="Deletar comentário" >
                                <Trash size={20}/> 
                            </button>
                        </header>
                        <p>Muito bom Jacky, parabéns!! 👏👏</p>
                    </div>

                    <footer>
                        <button>
                            <ThumbsUp/>
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
        )
}