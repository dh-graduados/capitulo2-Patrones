interface BaseDatosConector {
    guardar(): void
}

class MySQLConector implements BaseDatosConector {
  guardar () {
    console.log('Guardando datos en la base de datos de MySQL')
  }
}

class ORM implements BaseDatosConector {
  private conector: BaseDatosConector
  constructor (conector: BaseDatosConector) {
    this.conector = conector
  }

  guardar (): void {
    // Sistema Auth
    // Sistema Pools
    this.conector.guardar()
    console.log('Generando logs en un csv.log ....')
  }
}

console.log('############# MODULO #######################')

const mysqlConn = new MySQLConector()

const orm = new ORM(mysqlConn)

orm.guardar()
