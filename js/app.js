var app = new Vue({
    el: '#app',
    data: {
        resultado: 0,
        message: "Los numeros no pueden ser negativos",
        contador : 0


    },
    methods: {
        restar() {
            if (this.resultado > 0) {
                this.resultado--
                this.contador++
            }
            else{
                alert(this.message)
            }

        },
        sumar() {
            this.resultado = this.resultado + 1
            this.contador++
        }
    },
    computed: {
        potencia() {
            return this.resultado * this.resultado
        },
        cantclicks(){
            return this.contador
        }

    }
})