// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import axios, { AxiosResponse } from 'axios';
import { BaseItem, Item } from './item.interface';

const getItemsUrl = () => {
  return `http://${process.env.HOST_DBS}:${process.env.PORT_DBS}/items`;
};
/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => {
  const result: AxiosResponse = await axios.get(getItemsUrl());
  const items = result.data;
  return items;
};

export const find = async (id: number): Promise<Item | undefined> => {
  try {
    console.error('find', `${getItemsUrl()}/${id}`);
    const result: AxiosResponse = await axios.get(`${getItemsUrl()}/${id}`);
    const item: Item = result.data;
    return item;
  } catch (error: any) {
    console.error(`Item not found in database, item id: ${id}`);
  }
  return undefined;
};

export const create = async (newItem: BaseItem): Promise<Item | undefined> => {
  const id = new Date().valueOf();
  const newItemWithId = {
    id,
    ...newItem,
  };
  await axios.post(getItemsUrl(), newItemWithId);
  return newItemWithId;
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | undefined> => {
  const item = await find(id);

  if (!item) {
    return undefined;
  }
  const updatedItem = {
    ...item,
    ...itemUpdate,
  };
  await axios.put(`${getItemsUrl()}/${id}`, updatedItem);

  return updatedItem;
};

export const remove = async (id: number): Promise<undefined | void> => {
  const item = await find(id);
  if (!item) {
    return undefined;
  }
  await axios.delete(`${getItemsUrl()}/${id}`);
};
