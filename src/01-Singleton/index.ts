class ImpresoraTickets {
  private static instancia: ImpresoraTickets
  private nombre: string

  private constructor () {
    this.nombre = 'HP' + Date.now().toString() // HP123123123
  }

  static obtenerInstancia () {
    if (!this.instancia) {
      this.instancia = new ImpresoraTickets()
    }
    return this.instancia
  }

  imprimir (numeroTicket: string) {
    console.log('\n\nBuscando tickets ...')
    console.log(`Imprimiendo ticket ${numeroTicket}\n`)

    console.log('##############################################')
    console.log('##  Vuelo con destino a Cordoba  ## BUE-CDA ##')
    console.log('##                               ## 18:00HS ##')
    console.log(`##  N~Impresora: ${this.nombre} ##         ##`)
    console.log('##############################################')
  }
}

const impresora = ImpresoraTickets.obtenerInstancia()

impresora.imprimir('1234AB')

const impresora2 = ImpresoraTickets.obtenerInstancia()

impresora2.imprimir('9876ZX')
