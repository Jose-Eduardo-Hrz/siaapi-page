import { pool } from '$lib/server/db';
import type { ProyectoRow } from '$lib/types/db'

export const ProyectoDAO = {

    async getTodos(): Promise<ProyectoRow[]> {
        const query = `
            SELECT * FROM vista_proyectos;
        `;
        const [proyectos] = await pool.query<ProyectoRow[]>(query)
        return proyectos
    },

    async getPorBusqueda( valor : string ):Promise<ProyectoRow[]> {
        const query = `
            SELECT * from vista_proyectos WHERE nombre LIKE ?;
        `;
        const [pias] = await pool.query<ProyectoRow[]>(query,[`%${valor}%`])
        return pias
    }

}