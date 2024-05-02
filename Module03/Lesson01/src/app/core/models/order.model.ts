export interface Order {
  id: number;
  customerId: string;
  employeeId: number;
  orderDate: string;
  requiredDate: string;
  shipVia: number;
  freight: number;
  shipName: string;
  shipAddress: string;
  shipCity: string;
  shipPostalCode: string;
  shipCountry: string;
}

export interface OrderResponse {
  order: Order;
}
export interface GetOrdersResponse {
  results: OrderResponse[];
}
