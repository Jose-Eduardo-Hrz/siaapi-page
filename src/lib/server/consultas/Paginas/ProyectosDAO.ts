import { pool } from '$lib/server/db';
import type { PaginaProyectoRow } from '$lib/types/Paginas/Proyecto';

export const ProyectoDAO = {

    async getAreasConPIAsConProyectos(id_departamento: number, id_area: number, id_proyecto: number, id_pia: number): Promise<PaginaProyectoRow> {
        const query = `SELECT * FROM siaap_pagina_proyecto where id_departamento=? and id_area=? and id_pia=? and id=?;`;
        const [proyectos] = await pool.query<PaginaProyectoRow[]>(query, [id_departamento, id_area, id_pia, id_proyecto])
        return proyectos[0]
    },

}