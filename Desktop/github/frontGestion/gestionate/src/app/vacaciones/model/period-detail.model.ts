export class PeriodDetail {

    constructor
        (
            public idSolicitud: number,
            public fechaInicio: Date,
            public fechaFin: Date,
            public tipoVacaciones: string,
            public diasExcentos: number,
            public diasPagados: number,
            public estado: string
        ) { }
}