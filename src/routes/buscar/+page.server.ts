import type { PageServerLoad } from './$types';
import { BusquedaDAO } from '$lib/server/consultas/Paginas/BusquedaDAO';
import type { BusquedaPIAsRow ,  BusquedaProyectoRow } from '$lib/types/Paginas/Busqueda';

export const load: PageServerLoad = async ({ url }) => {
	const query = url.searchParams.get('q') || '';

	let pias : BusquedaPIAsRow[] = [];
	let proyectos : BusquedaProyectoRow[] = [];
	let totalResultados = 0;

	try{
		pias = await BusquedaDAO.getPIAs(query);
		proyectos = await BusquedaDAO.getProyectos(query);
		totalResultados = pias.length + proyectos.length;
		return {
			pias, totalResultados, query , proyectos
		}

	}catch(error){
		console.error('Error al realizar la búsqueda:', error);
		return {
			pias, totalResultados, query , proyectos
		}
	}



};
