import { getPaciente } from "./PacientesService";

export async function getPagos(){
    try {
        const response = await fetch('/pagos');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Pagos', error: error}
    }
}
export async function createPagos(pago){
    try{
        const response = await fetch(`/pagos`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pago)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while creating Pagos', error: error}
    }
}

export async function getDeudor(id_paciente){
    try {
        const response = await getPaciente(id_paciente)
        const data = response.data
        return `${data.nombre} ${data.apellido}`
    }
    catch (error ){
        return {message: 'Error while fetching Paciente Name', error: error}
    }
}