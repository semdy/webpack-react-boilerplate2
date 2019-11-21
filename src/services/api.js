import request from '@/utils/request'

export async function queryRecycleOrders(params) {
  return request.post('/tools/recover/order/list', params)
}
