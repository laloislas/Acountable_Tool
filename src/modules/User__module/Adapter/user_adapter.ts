import userRepository from "./../Repository/user_repository";
import dotenv from "dotenv";
import Response from "../../../Interface/Response__interface";
export default class UserAdapter {
  response: Response;
  UserRepository: userRepository;
  constructor() {
    dotenv.config();
    this.response = {
      code: "",
      mesagge: "",
    };
    this.UserRepository = new userRepository();
  }

  public async getUser(page: number = 0, size: number = 10) {
    try {
      const response = await this.UserRepository.userRepository(page, size);
      const count = await this.UserRepository.userRepositoryCount();
      if (response) {
        this.response.code = "OPERATION_SUCCESS";
        this.response.mesagge = {
          content: response,
          number_register: count[0].NumberOfuser,
        };
      } else {
        this.response.code = "OPERATION_FAILED";
        this.response.mesagge = "No se pudo obtener la lista de usuarios";
      }
      return this.response;
    } catch (error) {
      this.response.code = "OPERATION_FAILED";
      this.response.mesagge = "No se pudo obtener la lista de usuarios";
      return this.response;
    }
  }

  public async getUserById(id: number) {
    try {
      const response = await this.UserRepository.userRepositoryById(id);
      if (response && response.length > 0) {
        this.response.code = "OPERATION_SUCCESS";
        this.response.mesagge = response[0];
      } else {
        this.response.code = "OPERATION_FAILED";
        this.response.mesagge = "Usuario no encontrado";
      }
      return this.response;
    } catch (error) {
      this.response.code = "OPERATION_FAILED";
      this.response.mesagge = "Error al buscar este usuario";
      return this.response;
    }
  }

  public async auth(username: string, password: string) {
    try {
      const response = await this.UserRepository.auth({username,password});
      if (response && response.length > 0) {
        this.response.code = "OPERATION_SUCCESS";
        this.response.mesagge = response[0];
      } else {
        this.response.code = "OPERATION_FAILED";
        this.response.mesagge = "Usuario no encontrado";
      }
      return this.response;
    } catch (error) {
      this.response.code = "OPERATION_FAILED";
      this.response.mesagge = "Error al buscar este usuario";
      return this.response;
    }
  }
}
