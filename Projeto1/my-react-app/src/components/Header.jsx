/* No caso do module.css é necessário dar um nome para importaca
    para que seja a estilizacao dos elementos do componente.
     */

import styles from "./Header.module.css"

console.log(styles);

export function Header (){
    return(
        <header className={styles.header}> 
        <strong>Ignite Feed</strong>
        </header>
    )
}