export class EmployeeInfo {

    constructor
        (
            public idEmpleado: number,
            public documentoIdentificacion: string,
            public primerNombre: string,
            public segundoNombre: string,
            public primerApellido: string,
            public segundoApellido: string,
            public nombreCompleto: string,
            public fechaInicioContrato: Date,
            public diasDisponibles: number
        ) { }
}