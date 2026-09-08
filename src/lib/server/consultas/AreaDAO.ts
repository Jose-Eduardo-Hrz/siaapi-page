import { pool } from '$lib/server/db';
import type { ResultSetHeader } from 'mysql2';
import type { AreaRow , AreaConPiaRow } from '$lib/types/db'

export const AreaDAO = {

    async getTodos(): Promise<AreaRow[]> {
        const query = `
            SELECT id , anterior as id_anterior , nombre FROM siaap_area
            ORDER BY nombre ASC;
        `;
        const [areas] = await pool.query<AreaRow[]>(query)
        return areas
    },

    async getPorIdYDepartamento(id_area: number, id_departamento: number): Promise<AreaConPiaRow | null> {
        const query = `
            SELECT 
                id, nombre , acuerdo , pias , responsable
            FROM vista_areas_con_pias
            where id=? and id_departamento=?;
        `;
        const [areas] = await pool.query<AreaConPiaRow[]>(query, [id_area, id_departamento])
        return areas[0] || null
    }

}