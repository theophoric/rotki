import { GetterTree } from 'vuex';
import { RotkehlchenState } from '@/store/types';
import { toUnit, Unit } from '@/utils/calculation';
import { HistoryState } from './types';

export const getters: GetterTree<HistoryState, RotkehlchenState> = {
  assetMovements: ({ assetMovements }) => {
    return assetMovements.data;
  },
  assetMovementsTotal: ({ assetMovements }) => {
    return assetMovements.found;
  },
  assetMovementsLimit: ({ assetMovements }) => {
    return assetMovements.limit;
  },
  trades: ({ trades }) => {
    return trades.data;
  },
  tradesTotal: ({ trades }) => {
    return trades.found;
  },
  tradesLimit: ({ trades }) => {
    return trades.limit;
  },
  transactions: ({ transactions }) => {
    return transactions.data.map(value => ({
      ...value,
      gasFee: toUnit(value.gasPrice.multipliedBy(value.gasUsed), Unit.ETH),
      key: `${value.txHash}${value.nonce}${value.fromAddress}`
    }));
  },
  transactionsTotal: ({ transactions }) => {
    return transactions.found;
  },
  transactionsLimit: ({ transactions }) => {
    return transactions.limit;
  }
};
