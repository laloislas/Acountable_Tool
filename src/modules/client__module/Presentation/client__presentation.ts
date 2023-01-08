import ClientAdapter from "../Adapter/client__adapter";
import Response from "./../../../Interface/Response__interface";
import Client__Interface from "./../Model/client__model";
export default class Client {
  response: Response;
  ClientAdapter: ClientAdapter;

  constructor() {
    this.response = {
      code: "",
      mesagge: "",
    };
    this.ClientAdapter = new ClientAdapter();
  }

  public async getClient(page: number = 0, size: number = 10) {
    const response: Response = await this.ClientAdapter.getClient(page, size);
    return response;
  }

  public async getClientById(id: number) {
    const response: Response = await this.ClientAdapter.getClientById(id);
    return response;
  }

  public async updateClient(page: number = 0, size: number = 10) {
    const response: Response = await this.ClientAdapter.getClient(page, size);
    return response;
  }

  public async createClient(client: Client__Interface): Promise<any> {
    //const response: Response = await this.ClientAdapter.getClientById(id);
    //return response;
  }

  public async deleteClient(id: number) {
    const response: Response = await this.ClientAdapter.getClientById(id);
    return response;
  }
}
