//para regastar propriedades de outros componentes utilizamos props
//props({author} {content})
export function Post(props){

    console.log(props)
    return <>
    
        <p>Post</p>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </>
}

