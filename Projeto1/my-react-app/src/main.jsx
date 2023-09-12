import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Dom Document Object Module 
//ReactDom cria um elemento raiz e por meio do metodo getElementById("root"),
//ele conecta ReactDom ao dom da HTML que está no documento index.html =  <div id="root"></div> 
ReactDOM.createRoot(document.getElementById('root')).render(
//componetes do react =  <React.StrictMode>
 <React.StrictMode>
    <App />
  </React.StrictMode>,
)
