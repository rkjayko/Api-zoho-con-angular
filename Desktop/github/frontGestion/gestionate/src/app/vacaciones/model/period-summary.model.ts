export class PeriodSummary {

    constructor
        (
            public idPeriodo: number,
            public fechaInicio: Date,
            public fechaFin: Date,
            public diasPagados: number,
            public diasDisponibles: number
        ) { }
}