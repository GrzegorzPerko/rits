import CoreService from "./core";
export default class UsersServices extends CoreService {
  async fetchUsers() {
    return await this.client.get('/users');
  }
}