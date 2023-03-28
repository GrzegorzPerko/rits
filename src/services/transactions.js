import CoreService from "./core";
export default class TransactionsServices extends CoreService {
  async fetchTranslations() {
    return await this.client.get('/transactions');
  }
}