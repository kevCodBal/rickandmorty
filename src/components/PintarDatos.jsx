import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import Loading from "./Loading"
import Personaje from "./Personaje"

const PintarDatos = ({nombrePersonaje}) => {


    const [personje, setPersonajes]= useState([])
    const [loading, setLoading] = useState(false)

    useEffect (()=>{
        
        consumirApi(nombrePersonaje)
        localStorage.setItem('nombreApi', JSON.stringify(nombrePersonaje))
    }, [nombrePersonaje])

    const consumirApi = async(nombre)=> {

        setLoading(true)
        try{
            const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)

            if ( !res.ok) {
                return Swal.fire({
                    title: "Error",
                    text: 'Personje no Encontrado',
                    icon: 'error',
        
                });
            }

            const datos = await res.json()
            console.log(datos.results)
            setPersonajes(datos.results)

        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    
    if(loading){
        return <Loading/>
    }

    return (
        <div className="row mt-2">
            {
                personje.map(item => ( <Personaje key={item.id} personje={item}     />))
            }
        </div>
    )
}

export default PintarDatos
