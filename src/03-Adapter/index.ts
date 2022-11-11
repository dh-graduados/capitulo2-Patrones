interface ImpresoraFiscal {
    imprimir (): string
}

class Scanner {
  ejecutar (): string {
    return '.SASB a onitsed noc 4874 tekciT'
  }
}

class Adaptador implements ImpresoraFiscal {
  private scanner: Scanner

  constructor (scanner: Scanner) {
    this.scanner = scanner
  }

  imprimir (): string {
    const resultado = this.scanner.ejecutar().split('').reverse().join('')
    return resultado
  }
}

console.log('############# MODULO #######################')

const scanner = new Scanner()
const adaptador = new Adaptador(scanner)

console.log('Desde el scanner')
console.log(scanner.ejecutar())

console.log('\nPara la impresora fiscal')
console.log(adaptador.imprimir())
