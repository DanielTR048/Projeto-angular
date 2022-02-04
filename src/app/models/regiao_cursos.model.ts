export class regiao {

    quantfacul: number = 1;
    faculdade_privada: string = "";
    faculdade_privada2: string = "";
    faculdade_privada3: string = "";
    faculdade_publica: string = "";

    constructor(quantfacul:number,faculdade_privada:string,faculdade_privada2:string,faculdade_privada3:string,faculdade_publica:string){
        this.quantfacul = quantfacul;
        this.faculdade_privada = faculdade_privada;
        this.faculdade_privada2 = faculdade_privada2;
        this.faculdade_privada3 = faculdade_privada3;
        this.faculdade_publica = faculdade_publica;
    }
}

export class cursos {

    quantcursos: number = 1;
    faculdade_privada: string = "";
    faculdade_privada2: string = "";
    faculdade_privada3: string = "";
    faculdade_publica: string = "";

    constructor(quantcursos:number,faculdade_privada:string,faculdade_privada2:string,faculdade_privada3:string,faculdade_publica:string){
        this.quantcursos = quantcursos;
        this.faculdade_privada = faculdade_privada;
        this.faculdade_privada2 = faculdade_privada2;
        this.faculdade_privada3 = faculdade_privada3;
        this.faculdade_publica = faculdade_publica;
    }
}
