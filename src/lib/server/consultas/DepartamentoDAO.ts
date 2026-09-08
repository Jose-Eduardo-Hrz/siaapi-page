import { pool } from '$lib/server/db';
import type { DepartamentoRow } from '$lib/types/db'

export const DepartamentoDAO = {

    async getTodos(): Promise<DepartamentoRow[]> {
        const query = `select * from vista_departamentos`;
        const [areas] = await pool.query<DepartamentoRow[]>(query)
        return areas
    },

    async getTodosConAreas(): Promise<DepartamentoRow[]> {
        const query = `SELECT * FROM vista_departamentos_areas;`;
        const [departamentos] = await pool.query<DepartamentoRow[]>(query)
        return departamentos
    },

    async getTodosConAreasConPiaYProyectos(): Promise<DepartamentoRow[]> {
        const query = `SELECT * FROM vista_dep_area_pa_proy;`;
        const [departamentos] = await pool.query<DepartamentoRow[]>(query)
        return departamentos
    },

}