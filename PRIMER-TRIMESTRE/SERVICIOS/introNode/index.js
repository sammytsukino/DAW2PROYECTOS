import axios, {isCancel, AxiosError} from 'axios';

axios.get("https://pokeapi.co/api/v2/rayquaza").then((respuesta) => {console.log(respuesta.data)
})



