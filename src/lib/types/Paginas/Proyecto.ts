import type { RowDataPacket } from 'mysql2';

export interface ParticipanteRow extends RowDataPacket {
    nombre: string;
}

export interface PaginaProyectoRow extends RowDataPacket {
    id: number;
    nombre: string;
    clave: string;
    acuerdo: string;
    fecha_ini: Date;
    fecha_fin: Date;
    fecha_prorroga: Date | null;
    objetivos: string;
    responsable: string;
    participantes: ParticipanteRow[];
    id_pia: number;
    nombre_pia: string;
    id_area: number;
    nombre_area: string;
    id_departamento: number;
    nombre_departamento: string;
}