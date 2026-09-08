import { pool } from '$lib/server/db';
import type { BusquedaPIAsRow , BusquedaProyectoRow} from '$lib/types/Paginas/Busqueda';

export const BusquedaDAO = {

    async getPIAs(query: string): Promise<BusquedaPIAsRow[]> {
        const searchQuery = `%${query}%`;
        const [pias] = await pool.query<BusquedaPIAsRow[]>(`SELECT * FROM siaapi_busqueda_pia WHERE nombre LIKE ?`, [searchQuery]);
        return pias;
    },

    async getProyectos(query: string): Promise<BusquedaProyectoRow[]> {
        const searchQuery = `%${query}%`;
        const [proyectos] = await pool.query<BusquedaProyectoRow[]>(`
            SELECT id, nombre, clave, acuerdo, estado, responsable, pia
            FROM siaapi_busqueda_proyecto
            WHERE nombre LIKE ? 
            OR clave LIKE ?;`, [searchQuery, searchQuery]);
        return proyectos;
    },

}