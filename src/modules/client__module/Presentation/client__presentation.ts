import ClientAdapter from "../Adapter/client__adapter";
import Response from "./../../../Interface/Response__interface";
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
    console.log(response);
    return response;
  }
}
