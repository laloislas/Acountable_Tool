import ClientRepository from "./../Repository/client__repository";
import dotenv from "dotenv";
import Response from "../../../Interface/Response__interface";
export default class ClientAdapter {
  response: Response;
  ClientRepository: ClientRepository;
  constructor() {
    dotenv.config();
    this.response = {
      code: "",
      mesagge: "",
    };
    this.ClientRepository = new ClientRepository();
  }

  public async getClient(page: number = 0, size: number = 10) {
    try {
      const response = await this.ClientRepository.clientRepository(page, size);
      const count = await this.ClientRepository.clientRepositoryCount();
      if (response) {
        this.response.code = "OPERATION_SUCCESS";
        this.response.mesagge = {
          content : response,
          number_register: count[0].NumberOfClient
        };
      } else {
        this.response.code = "OPERATION_FAILED";
        this.response.mesagge = "No se pudo obtener la lista de clientes";
      }
      return this.response;
    } catch (error) {
      this.response.code = "OPERATION_FAILED";
      this.response.mesagge = "No se pudo obtener la lista de clientes";
      return this.response;
    }
  }

  public async getClientById(id:number) {
    try {
      const response = await this.ClientRepository.clientRepositoryById(id);
      if (response && response.length > 0) {
        this.response.code = "OPERATION_SUCCESS";
        this.response.mesagge = response[0];
      } else {
        this.response.code = "OPERATION_FAILED";
        this.response.mesagge = "Cliente no encontrado";
      }
      return this.response;
    } catch (error) {
      this.response.code = "OPERATION_FAILED";
      this.response.mesagge = "Error al buscar este cliente";
      return this.response;
    }
  }
}
