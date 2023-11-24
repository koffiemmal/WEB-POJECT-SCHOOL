import style from "../Admin/Admin.module.css"
import axios from "../../../api/axios"
import { useEffect, useState } from "react"

const Admin=()=>{
let [containerfiliere,setContainerFiliere]=useState("")
let [id_filiere,setId_filiere]=useState("")
    let [nomfiliere,setNomfiliere]=useState("")
    let [descfiliere,setDescfiliere]=useState("")
   let [i ,setI]=useState(0)

useEffect(()=>{
    axios.get("/user/liste").then(res=>{
setContainerFiliere(res.data)


})
},[i]
)



    return(

        <div className={style.container}>
           <h1>
            BIENVENUE ADMINISTATEUR
           </h1>

           <h2>GESTION DES FILLIERE</h2>
         <div className={style.filiere}>
            
<form onSubmit={(e)=>{
    e.preventDefault();
    console.log(containerfiliere.length)
    let newFiliere = {nom_filiere:nomfiliere,description_filiere:descfiliere}
    setI(i+1); // Incrémente i en utilisant setI
    console.log(i)
    axios.post("/user/insertFiliere",newFiliere)
    .then((res)=>{

        console.log("la filiere a etre entrer avec succes")
    })
    .catch((error)=>{
        console.log("error")
    })
 /*    axios.post("/user/insertFiliere",newFiliere)
    .then((res)=>{
    })
    .catch((error)=>{
        console.log("l'insertion a echouer")
    }) */
    console.log(newFiliere)
}}>
    <table>
        <tbody>
            <tr>
                <td>
                    <label htmlFor="nom">filiere Nom :</label><br />
                    <input type="text" id="nom" onInput={(e)=>{
                        setNomfiliere(e.target.value)
                    }} />
                </td>
                
            </tr>
            <tr>
                <td>
                    <label htmlFor="desc">filiere Description :</label><br />
                    <input type="text" name="desc" id="desc" onInput={(e)=>{
                        setDescfiliere(e.target.value)
                    }}/>
                </td>
            </tr>
            <tr>
                <td>
                    <button type="submit">Ajouter</button>
                </td>
            </tr>
        </tbody>
    </table>
</form>
<div className={style.listeFiliere}>
    {containerfiliere && containerfiliere.map((filiere,index)=>{
        return(
<div key={index}>
    <h3>Filiere :{filiere.nom_filiere}</h3>
    <p> <i>Description</i> :{filiere.description_filiere}</p>

    <button onClick={()=>{

        let id ={id_filiere:filiere.id_filiere}
        console.log(id)
        setI(i+1)
        axios.post("/user/delete",id)
        .then((res)=>{
            console.log("suppression realiser avec succes")
        })
        .catch((req)=>{
            console.log("supression non realiser")
        })}   }>Supprimer</button>
</div>

        )
    })}
</div>
         </div>
           <h2 >GESTION DES MATIERES</h2>
           <div className={style.matiere}>
case
           </div>
           <h2>GESTION DES ACTIVITES</h2>
           <div className={style.activite}>
case
           </div>

        </div>
    )
}
export default Admin;