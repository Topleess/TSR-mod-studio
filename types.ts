export enum Screen {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LIST = 'LIST',
  DETAIL = 'DETAIL',
  EDIT = 'EDIT',
  ADD = 'ADD',
  POLICY = 'POLICY',
  TERMS = 'TERMS',
  PROFILE = 'PROFILE',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD'
}

export type Category = 'Расходники' | 'Оборудование' | 'Архив';

export interface Item {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  category: Category;
  status: 'ok' | 'warning' | 'danger';
  iconType: 'drop' | 'wheelchair' | 'default';
  lifespanPercentage?: number; // Added for health bar in list
}

export interface ItemDetail extends Item {
  lifespanStart: string;
  lifespanEnd: string;
  lifespanPercentage: number;
  classifierCode: string;
  truCode: string;
  notes: string;
}