import axios from 'axios';

class Api {
  constructor() {
    this.client = axios.create({ baseURL: process.env.REACT_APP_API_URI });
  }

  getShipments(params = {}) {
    return this.client.get('/shipments', { params });
  }

  getShipmentById(shipmentId) {
    return this.client.get(`/shipments/${shipmentId}`);
  }

  updateShipment(shipmentId, payload = {}) {
    return this.client.put(`/shipments/${shipmentId}`, payload);
  }
}

export default new Api();
