import type { RowDataPacket } from 'mysql2';

export interface ProyectoRow extends RowDataPacket {
    id: number;
    nombre: string;
    clave: string;
    acuerdo: string;
    fecha_ini: Date;
    fecha_fin: Date;
    fecha_prorroga: Date;
    pia1_id: number;
    pia2_id: number;
    estado: "Activo" | "Inactivo";
    responsable: string;
    href: string;
}

export interface PIA extends RowDataPacket {
    id: number;
    nombre: string;
    acuerdo: string;
    proyectos: ProyectoRow[];
}

export interface PaginaAreaRow extends RowDataPacket {
    id: number;
    id_departamento: number;
    nombre: string;
    objeto: string;
    objetivo_general: string;
    objetivos_especificos: string;
    acuerdo: string;
    responsable: string;
    pias: PIA[];
}