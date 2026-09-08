import type { LayoutServerLoad } from './$types';
import type { DepartamentoNavegacionRow } from '$lib/types/Componentes/Navegacion';
import { NavegacionDAO } from '$lib/server/consultas/Componentes/NavegacionDAO';

export const load: LayoutServerLoad = async () => {
    let departamentos: DepartamentoNavegacionRow[] = []
    try {
        departamentos = await NavegacionDAO.getDepartamentosConAreas();
        return {
            departamentos
        };
    } catch (error) {
        console.error('Error al cargar datos de departamentos en layout.server.ts:', error);
        return {
            departamentos
        };
    }
};
