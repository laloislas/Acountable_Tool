import UserAdapter from "../Adapter/user_adapter";
import Response from "./../../../Interface/Response__interface";
export default class UserPresentation {
  response: Response;
  UserAdapter: UserAdapter;

  constructor() {
    this.response = {
      code: "",
      mesagge: "",
    };
    this.UserAdapter = new UserAdapter();
  }

  public async getUser(page: number = 0, size: number = 10) {
    const response: Response = await this.UserAdapter.getUser(page, size);
    return response;
  }

  public async getUserById(id: number) {
    const response: Response = await this.UserAdapter.getUserById(id);
    return response;
  }

  public async updateUser(page: number = 0, size: number = 10) {
    const response: Response = await this.UserAdapter.getUser(page, size);
    return response;
  }

  public async deleteClient(id: number) {
    const response: Response = await this.UserAdapter.getUserById(id);
    return response;
  }

  public async auth(data: any) {
    const response: Response = await this.UserAdapter.auth(
      data.username,
      data.password
    );
    return response;
  }
}
