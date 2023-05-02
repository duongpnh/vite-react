import { array, number, object, string } from 'yup';

export const productCreateSchema = object().shape({
  name: string().required('Required'),
  description: string(),
  details: string(),
  thumbnail: string(),
  media: array().of(string()), // videos, images
  status: string(),
  category: string(),
  type: string(),
  price: number(),
  compareAtPrice: number(), // sale off pricing
  collections: array().of(string()), // groups
  themeTemplate: string(),
  variants: array().of(object().shape({
      name: string().required('Required'),
      price: number().required('Required'),
      available: number(), // 
      onHand: number(),
      barcode: string(),
      sku: string(), // Stock Keeping Unit
  })),
});
