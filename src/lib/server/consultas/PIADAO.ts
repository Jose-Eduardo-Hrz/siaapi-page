import { pool } from '$lib/server/db';
import type { ResultSetHeader } from 'mysql2';
import type { PIARow } from '$lib/types/db'

export const PIADAO = {

    async getTodos(): Promise<PIARow[]> {
        const query = `
            SELECT id , pia_ant as id_anterior , nombre FROM siaap_pia
            ORDER BY nombre ASC;
        `;
        const [pias] = await pool.query<PIARow[]>(query)
        return pias
    },

    async getPorBusqueda( valor : string ):Promise<PIARow[]> {
        const query = `
            SELECT * from vista_pias WHERE nombre LIKE ?;
        `;
        const [pias] = await pool.query<PIARow[]>(query,[`%${valor}%`])
        return pias
    }

}