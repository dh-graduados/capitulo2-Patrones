interface Ticket {
    cobrar: () => string
}

abstract class Factory {
    abstract metodoCreador(): Ticket

    ejecutar (): string {
      const ticket = this.metodoCreador()
      return ticket.cobrar()
    }
}

class TicketInternacional implements Ticket {
  cobrar () {
    return 'El ticket tiene un costo de $100'
  }
}

class FactoryTicketInternacional extends Factory {
  metodoCreador (): Ticket {
    const ticket = new TicketInternacional()

    return ticket
  }
}

console.log('############# MODULO #######################')

const ticket = new FactoryTicketInternacional()

const respuesta = ticket.ejecutar()

console.log(respuesta)
