import { get } from './helpers'

const getSeller = get('api/seller')
const getGoods = get('api/goods')
const getRatings = get('api/ratings')

const getAgents = get('/api/v1/agent')

export {
  getSeller,
  getGoods,
  getRatings
}
