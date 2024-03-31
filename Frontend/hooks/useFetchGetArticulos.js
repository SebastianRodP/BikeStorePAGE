import {useState, useEffect} from 'react';

export function useFetchGetArticulos(url){
const [data, setData] = useState(null);
const[loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [controller, setController] = useState(null);

        useEffect(() =>{
            const abortController = new AbortController();
            setController(abortController)  
            setLoading(true);

            fetch(url, {signal:abortController.signal})  //Agregamos el manejador de señales para detener la petición en caso de que
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                if (error.name === "AbortError") {
                    console.log('Solicitud de datos cancelada');
                } else {
                  setError("Ha ocurrido un error xd");
                }
            
                    setError(error))
                }}
            }
            .finally( ()=>setLoading(false))
            
        return (()=>abortController.abort());   //cleanup when component unmounts
        }, []);

        const handleCancelRequest = () =>{
            if (controller) {
                controller.abort();
                setError("SetError mijo xd")
            }
        }

            return {data, loading, error, handleCancelRequest};
        }