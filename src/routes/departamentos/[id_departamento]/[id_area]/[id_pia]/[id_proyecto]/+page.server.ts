import type { PageServerLoad } from "./$types";
import type { PaginaProyectoRow } from "$lib/types/Paginas/Proyecto";
import { ProyectoDAO } from '$lib/server/consultas/Paginas/ProyectosDAO';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    // 1. Obtenemos el id del departamento
    const id_departamento = Number(params.id_departamento);
    const id_area = Number(params.id_area);
    const id_pia = Number(params.id_pia);
    const id_proyecto = Number(params.id_proyecto);

    let proyecto: PaginaProyectoRow | null = null;

    try {

        proyecto = await ProyectoDAO.getAreasConPIAsConProyectos(id_departamento, id_area, id_proyecto, id_pia);

        if (!proyecto) {
            throw new Error('Proyecto no encontrado');
        }

        return {
            proyecto
        };
    } catch (error) {
        console.log(error);
        return redirect(307, '/departamentos');
    }

};