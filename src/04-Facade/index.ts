class VerificadorInternacional {
  verificar (ticket: string) {
    console.log('Verificando Ticket')
  }
}

class AvisoSistemaContable {
  ejecutar (ticket: string) {
    console.log('Aviso a contabilidad')
  }
}

class EnvioMails {
  enviarCliente (ticket: string) {
    console.log('Enviando mail al cliente')
  }
}

class ImprimirTickets {
  protected verificador: VerificadorInternacional
  protected avisoSistemaContable: AvisoSistemaContable
  protected envioMail: EnvioMails
  private ticket: string

  constructor (ticket: string) {
    this.ticket = ticket
    this.verificador = new VerificadorInternacional()
    this.avisoSistemaContable = new AvisoSistemaContable()
    this.envioMail = new EnvioMails()
  }

  public imprimir () {
    this.verificador.verificar(this.ticket)
    this.avisoSistemaContable.ejecutar(this.ticket)
    this.envioMail.enviarCliente(this.ticket)
    console.log('Imprimiendo Ticket.')
  }
}

console.log('############# MODULO #######################')

const imprenta = new ImprimirTickets('Ticket N123')

imprenta.imprimir()
