interface Juego {
    name: string
    iniciar(): void
  }

class SalaJuegos {
  private juego: Juego

  setJuego (juego: Juego) {
    this.juego = juego
  }

  iniciarPartida () {
    console.log('[Plataforma] Iniciando partida ....')

    if (!this.juego) {
      return console.log('[Plataforma] El juego no esta seteado! 😟')
    }

    this.juego.iniciar()
  }
}

class Ajedrez implements Juego {
  name: string = 'Ajedrez 2023'

  iniciar () {
    console.log('[Juego] Iniciando el ' + this.name)
  }
}

class Truco implements Juego {
  name: string = 'Truco Argento 2.0'

  iniciar () {
    console.log('[Juego] Iniciando el ' + this.name)
  }
}

console.log('############# MODULO #######################')

const plataforma = new SalaJuegos()
plataforma.iniciarPartida()

const ajedrez = new Ajedrez()

const truco = new Truco()

plataforma.setJuego(ajedrez)

plataforma.iniciarPartida()

plataforma.setJuego(truco)

plataforma.iniciarPartida()
