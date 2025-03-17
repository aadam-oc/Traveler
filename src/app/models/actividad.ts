export interface Actividad {
    id_actividad: number;
    id_tipo_actividad: number;
    nombre_tipo_actividad: string;
    id_destino: number;
    nombre_pais_destino: string;
    nombre_ciudad_destino: string;
    descripcion: string;
    disponibilidad: number;
    precio: number;
}
