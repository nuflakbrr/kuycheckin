import { User } from './user';
import { Customer } from './customer';
import { TypeRoom } from './typeroom';

export interface Booking {
  id_pemesanan: number;
  id_pelanggan: number;
  id_user: number;
  id_tipe_kamar: number;
  nomor_pemesanan: string;
  tgl_pemesanan: string;
  tgl_check_in: string;
  tgl_check_out: string;
  nama_tamu: string;
  jumlah_kamar: number;
  status_pemesanan: string;
  user: User[];
  pelanggan: Customer[];
  tipe_kamar: TypeRoom[];
}
