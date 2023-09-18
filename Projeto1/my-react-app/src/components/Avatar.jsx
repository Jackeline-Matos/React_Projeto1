import styles from "./Avatar.module.css"


/* 
Exemplo 1 = 
* Neste exemlo é necessário colocar na targ do component Post (hasBorder=true ou hasBorder)
export function Avatar (props){
    return (
        <img
        className={props.hasBorder ? styles.avatarwithBorder : styles.avatar}
        src={props.src}
     />
    )
}

/* 
Exemplo 2 = 
* Neste exemplo se por padrao eu quiser que todo Avatar que nao receber a prop hasBorder como false seja 
seja automaticamente true:

export function Avatar (props){
    const hasBorder = props.hasBorder != false;
    return (
        <img
        className={hasBorder ? styles.avatarwithBorder : styles.avatar}
        src={props.src}
     />
    )
}



*/

//Exemplo 3 - Desestruturacao

export function Avatar ({hasBorder = true, src}){
    return (
        <img
        className={hasBorder ? styles.avatarwithBorder : styles.avatar}
        src={src}
     />
    )
}