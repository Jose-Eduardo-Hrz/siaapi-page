import { pool } from '$lib/server/db';
import type { PaginaAreaRow } from '$lib/types/Paginas/Areas';

export const AreasDAO = {

    async getAreasConPIAsConProyectos(id_area: number, id_departamento: number): Promise<PaginaAreaRow> {
        const query = `select * from siaapi_pagina_areas where id=? and id_departamento=?`;
        const [areas] = await pool.query<PaginaAreaRow[]>(query, [id_area, id_departamento])
        return areas[0]
    },

}