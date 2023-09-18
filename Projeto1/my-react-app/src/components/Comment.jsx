import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
/* hasBorder={false} uma propiedade (prop) criada para manipular o estilo da propiedade src=imagem */

export function Comment (){
    return(
        <>
            <div className={styles.comment}>
                <Avatar hasBorder = {false} src="https://github.com//jackeline-matos.png"/>

                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Jackeline Matos</strong>
                                <time title="11 de maio publicado às 11:13" dateTime="2023-09-15">Cerca de 1 hora atrás</time>
                            </div>
                            {/* Todo botao onde o contéudo é somente ícone
                                para eveitos de acessibilidade é importante colocar um título
                                assim o usuário PCD podera saber do que se trata */}
                            <button title="Deletar comentário" >
                                <Trash size={20}/> 
                            </button>
                        </header>
                        <p>Muito bom Devon, parabéns!! 👏👏</p>
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