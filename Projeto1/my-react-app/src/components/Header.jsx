/* No caso do module.css é necessário dar um nome para importaca
    para que seja a estilizacao dos elementos do componente.
     */

import styles from "./Header.module.css"
import igniteLogo from "../assets/ignite-logo.svg"

export function Header (){
    return(
        <header className={styles.header}> 
        <img src={igniteLogo}/>
        </header>
    )
}