import { pool } from '$lib/server/db';
import type { DepartamentoNavegacionRow } from '$lib/types/Componentes/Navegacion';

export const NavegacionDAO = {

    async getDepartamentosConAreas(): Promise<DepartamentoNavegacionRow[]> {
        const query = `select * from siaapi_navegacion`;
        const [areas] = await pool.query<DepartamentoNavegacionRow[]>(query)
        return areas
    },


}