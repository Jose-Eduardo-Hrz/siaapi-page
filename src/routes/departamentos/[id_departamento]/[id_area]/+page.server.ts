import type { PageServerLoad } from "./$types";
import { AreasDAO } from '$lib/server/consultas/Paginas/AreasDAO';
import { redirect } from "@sveltejs/kit";
import { asset } from "$app/paths";

export const load: PageServerLoad = async ({ params }) => {
    // 1. Obtenemos el id del departamento
    const id_departamento = Number(params.id_departamento);
    const id_area = Number(params.id_area);

    try {

        const area = await AreasDAO.getAreasConPIAsConProyectos(id_area, id_departamento);

        if(!area) throw new Error(`No se encontró el área con id ${id_area} y departamento ${id_departamento}`);

        return { area };
    } catch (error) {
        console.log(error);
        return redirect(307, asset('/'));
    }

};