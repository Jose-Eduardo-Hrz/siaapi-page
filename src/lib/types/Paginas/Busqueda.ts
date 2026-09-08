import type { RowDataPacket } from 'mysql2';

export interface BusquedaProyectoRow extends RowDataPacket {
    id: number;
    nombre: string;
    clave: string;
    acuerdo: string;
    estado: "Activo" | "Inactivo";
    responsable: string;
    pia: string;
}

export interface BusquedaPIAsRow extends RowDataPacket {
    id: number;
    nombre: string;
    area: string;
    departamento: string;
}