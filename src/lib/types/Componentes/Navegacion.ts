import type { RowDataPacket } from 'mysql2';

export interface AreaNavegacionRow extends RowDataPacket {
    id: number;
    nombre: string;
    href: string;
}

export interface DepartamentoNavegacionRow extends RowDataPacket {
    id: number;
    nombre: string;
    areas: AreaNavegacionRow[];
}