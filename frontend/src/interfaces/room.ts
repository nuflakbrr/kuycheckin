import { TypeRoom } from './typeroom';

export interface Room {
  id_kamar: number;
  id_tipe_kamar: number;
  nomor_kamar: string;
  tipe_kamar: TypeRoom[];
}
