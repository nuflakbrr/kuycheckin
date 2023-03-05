import { diffDays } from './diffDays';
import { formatCurrency } from './formatCurrency';

export const totalPrice = (
  chck_in: string,
  chck_out: string,
  totalRoom: number,
  price: number
) => {
  const total = diffDays(chck_in, chck_out) * totalRoom * price;

  return formatCurrency(total);
};
