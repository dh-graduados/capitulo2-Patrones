interface Observer {
    ejecutar(message: string): void;
  }

class CompraOnline {
  private observadores: Observer[] = []

  public agregar (observer: Observer): void {
    const existe = this.observadores.includes(observer)
    if (existe) {
      return console.log('El usuario ya esta suscripto.')
    }

    console.log('Nuevo usuario suscripto.')
    this.observadores.push(observer)
  }

  public eliminar (observer: Observer): void {
    const observerIndex = this.observadores.indexOf(observer)
    if (observerIndex === -1) {
      return console.log('El suscriptor no exite.')
    }

    this.observadores.splice(observerIndex, 1)
    console.log('El suscriptor fue removido')
  }

  public notificar (message: string): void {
    for (const observer of this.observadores) {
      observer.ejecutar(message)
    }
  }
}

class WhatsappSuscriptor implements Observer {
  public ejecutar (message: string): void {
    // Conexion a la API de Whatsapp
    console.log(`Enviando whatsapp: ${message}`)
  }
}

class MailSuscriptor implements Observer {
  public ejecutar (message: string): void {
    // Conexion a la API de GMAIL
    console.log(`Enviando mail: ${message}`)
  }
}

console.log('############# MODULO #######################')

const whatsapp = new WhatsappSuscriptor()
const mail = new MailSuscriptor()

const compraOnline = new CompraOnline()

compraOnline.agregar(whatsapp)
compraOnline.agregar(mail)
compraOnline.agregar(whatsapp)

compraOnline.notificar('Compra realizada con exito!!!!')
