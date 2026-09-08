import type { RowDataPacket } from 'mysql2';

export interface ProyectoSimpleRow extends RowDataPacket {
    id: number;
    nombre: string;
    clave: string;
    acuerdo: string;
    eatado: "Activo" | "Inactivo";
}

export interface PIAConProyectosRow extends RowDataPacket {
    id: number;
    nombre: string;
    acuerdo: string;
    proyectos: ProyectoSimpleRow[];
}

export interface AreaConPiaRow extends RowDataPacket {
    id: number;
    nombre: string;
    acuerdo: string;
    pias: PIAConProyectosRow[];
    responsable: string;
}

export interface DocenteRow extends RowDataPacket {
    id: number;
    departamento?: DepartamentoRow;
    numero_economico: string;
    nombre: string;
}

export interface ProyectoRow extends RowDataPacket {
    id: number;
    // pia1?: PIARow;
    // pia2: PIARow;
    responsable?: DocenteRow;
    nombre: string;
    clave: string;
    acuerdo: string;
    fecha_inicio?: Date;
    fecha_fin?: Date;
    fecha_prorroga?: Date;
    objetivos?: string;
}

export interface PIARow extends RowDataPacket {
    id: number;
    anterior?: PIARow;
    area?: AreaRow;
    nombre: string;
    acuerdo?: string;
    proyectos?: ProyectoRow[];
}

export interface AreaRow extends RowDataPacket {
    id: number;
    departamento?: DepartamentoRow;
    responsable?: DocenteRow;
    nombre: string;
    objeto?: string;
    objetivo_general?: string;
    objetivos_especificos?: string;
    acuerdo?: string;
    pias?: PIARow[];
}

export interface DepartamentoRow extends RowDataPacket {
    id: number;
    nombre: string;
    areas: AreaRow[];
}


