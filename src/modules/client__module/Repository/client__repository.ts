import AdapterDB from "./../../Shared__module/BD__module/Adapter/bd__adapter";
export default class ClientRepository {
  private adapter: AdapterDB;

  constructor() {
    this.adapter = new AdapterDB();
  }

  public async clientRepository(page: number = 0, size: number = 10) {
    let url = `SELECT * FROM client LIMIT ${page}, ${size}`;
    console.log('url: ' + url)
    const response = await this.adapter.runConsult(url);
    return response;
  }

  public async clientRepositoryDelete(id: number) {
    let url = `DELETE FROM client WHERE idClient = ${id}`;
    return await this.adapter.runConsult(url);
  }

  public async clientRepositoryById(id: number) {
    let url = `SELECT * FROM client WHERE idClient  = ${id}`;
    return await this.adapter.runConsult(url);
  }

  public async clientRepositoryCreate(data: any) {
    var now = new Date();
    var then = now.toJSON();
    let url = `INSERT INTO cliente (idCliente,nombreCliente, sucursal, rfc, telefono, calle, numeroInterior, numeroExterior, colonia, delegacion, ciudad, estado, cp, direccionEntrega, horario, contacto, emailContacto, observacion, fechaAlta, idUsuario) VALUES (NULL, '${data.nombreCliente}', '${data.sucursal}', '${data.rfc}', '${data.telefono}', '${data.calle}', '${data.numeroInterior}', '${data.numeroExterior}', '${data.colonia}', '${data.delegacion}','${data.ciudad}','${data.estado}','${data.cp}','${data.direccionEntrega}','${data.horario}','${data.contacto}','${data.emailContacto}','${data.observaciones}','${then}','${data.idUsuario}')`;
    return await this.adapter.runConsult(url);
  }

  public async clientRepositoryUpdate(data: any) {
    let url = `UPDATE cliente SET nombreCliente = '${data.nombreCliente}', sucursal = '${data.sucursal}', rfc = '${data.rfc}', telefono = '${data.telefono}', calle = '${data.calle}', numeroInterior = '${data.numeroInterior}', numeroExterior = '${data.numeroExterior}', colonia = '${data.colonia}', delegacion = '${data.delegacion}', ciudad = '${data.ciudad}', estado = '${data.estado}', cp = '${data.cp}', direccionEntrega = '${data.direccionEntrega}', horario = '${data.horario}', contacto = '${data.contacto}', emailContacto = '${data.emailContacto}', observacion = '${data.observaciones}', idUsuario = '${data.idUsuario}' WHERE idCliente = ${data.idCliente}`;
    return await this.adapter.runConsult(url);
  }
}
