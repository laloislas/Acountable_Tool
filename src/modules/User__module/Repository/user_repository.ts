import AdapterDB from "./../../Shared__module/BD__module/Adapter/bd__adapter";
export default class userRepository {
  private adapter: AdapterDB;

  constructor() {
    this.adapter = new AdapterDB();
  }

  public async userRepository(page: number = 0, size: number = 10) {
    let url = `SELECT idUser,name,username FROM user LIMIT ${page}, ${size}`;
    const response = await this.adapter.runConsult(url);
    return response;
  }

  public async userRepositoryDelete(id: number) {
    let url = `DELETE FROM user WHERE idUser = ${id}`;
    return await this.adapter.runConsult(url);
  }

  public async userRepositoryById(id: number) {
    let url = `SELECT idUser,name,username FROM user WHERE idUser  = ${id}`;
    const response = await this.adapter.runConsult(url);
    console.log(response);
    return response;
  }

  public async userRepositoryCreate(data: any) {
    var now = new Date();
    var then = now.toJSON();
    let url = `INSERT INTO user (idUser,name, username, password) VALUES (NULL, '${data.name}', '${data.username}', '${data.password}')`;
    return await this.adapter.runConsult(url);
  }

  public async userRepositoryUpdate(data: any) {
    let url = `UPDATE user SET nombreusere = '${data.nombreusere}', sucursal = '${data.sucursal}', rfc = '${data.rfc}', telefono = '${data.telefono}', calle = '${data.calle}', numeroInterior = '${data.numeroInterior}', numeroExterior = '${data.numeroExterior}', colonia = '${data.colonia}', delegacion = '${data.delegacion}', ciudad = '${data.ciudad}', estado = '${data.estado}', cp = '${data.cp}', direccionEntrega = '${data.direccionEntrega}', horario = '${data.horario}', contacto = '${data.contacto}', emailContacto = '${data.emailContacto}', observacion = '${data.observaciones}', idUsuario = '${data.idUsuario}' WHERE idusere = ${data.idusere}`;
    return await this.adapter.runConsult(url);
  }

  public async userRepositoryCount() {
    const url = "SELECT COUNT(*) AS NumberOfuser FROM user";
    return await this.adapter.runConsult(url);
  }

  public async auth(data:any) {
    const url = `SELECT idUser,name,username FROM user WHERE username = '${data.username}' AND password = '${data.password}'`;
    return await this.adapter.runConsult(url);
  }
}
