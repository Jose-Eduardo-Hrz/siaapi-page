export interface Area {
	id: string;
	nombre: string;
	href?: string;
}

export interface Departamento {
	id: string;
	nombre: string;
	areas: Area[];
}

export const DEPARTAMENTOS_DATA: Departamento[] = [
	{
		id: "cb",
		nombre: "Ciencias Básicas",
		areas: [
			{
				id: "cb-1",
				nombre: "Física de Procesos Irreversibles",
				href: "/departamentos/ciencias-basicas/fisica-procesos"
			},
			{
				id: "cb-2",
				nombre: "Química Aplicada",
				href: "/departamentos/ciencias-basicas/quimica-aplicada"
			},
			{
				id: "cb-3",
				nombre: "Sistemas Cuánticos",
				href: "/departamentos/ciencias-basicas/sistemas-cuanticos"
			}
		]
	},
	{
		id: "elec",
		nombre: "Electrónica",
		areas: [
			{
				id: "elec-1",
				nombre: "Redes y Telecomunicaciones",
				href: "/departamentos/electronica/redes-telecom"
			},
			{
				id: "elec-2",
				nombre: "Sistemas Digitales",
				href: "/departamentos/electronica/sistemas-digitales"
			},
			{
				id: "elec-3",
				nombre: "Bioelectrónica",
				href: "/departamentos/electronica/bioelectronica"
			}
		]
	},
	{
		id: "energ",
		nombre: "Energía",
		areas: [
			{
				id: "energ-1",
				nombre: "Termofluidos",
				href: "/departamentos/energia/termofluidos"
			},
			{
				id: "energ-2",
				nombre: "Ingeniería Eléctrica",
				href: "/departamentos/energia/ingenieria-electrica"
			}
		]
	},
	{
		id: "mat",
		nombre: "Materiales",
		areas: [
			{
				id: "mat-1",
				nombre: "Materiales Avanzados",
				href: "/departamentos/materiales/materiales-avanzados"
			},
			{
				id: "mat-2",
				nombre: "Metalurgia Física",
				href: "/departamentos/materiales/metalurgia-fisica"
			}
		]
	},
	{
		id: "sist",
		nombre: "Sistemas",
		areas: [
			{
				id: "sist-1",
				nombre: "Inteligencia Artificial",
				href: "/departamentos/sistemas/inteligencia-artificial"
			},
			{
				id: "sist-2",
				nombre: "Ingeniería de Software",
				href: "/departamentos/sistemas/ingenieria-software"
			},
			{
				id: "sist-3",
				nombre: "Redes y Seguridad",
				href: "/departamentos/sistemas/redes-seguridad"
			}
		]
	}
];
