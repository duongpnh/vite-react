import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    width: 100,
    fixed: 'left',
    render: (value: string) => <img src="https://picsum.photos/200/300" width={100} height={100} />
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    fixed: 'left',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: 100,
    fixed: 'left',
    render: (text) => <a>$0.00</a>,
  },
  {
    title: 'Compare-at Price',
    dataIndex: 'compareAtPrice',
    key: 'compareAtPrice',
    render: (text) => <a>$0.00</a>,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export const ProductsManagement = () => {
  const navigate = useNavigate();
  const createProduct = () => navigate('/products/add');

  return (
  <div>
    <Space wrap>
      <Button type='primary' className='mt-3 mb-3 bg-green-7' onClick={createProduct}>Add Product</Button>
      <Button type='primary' className='mt-3 mb-3 bg-yellow-6'>Update Product</Button>
      <Button type='primary' className='mt-3 mb-3 bg-red-7'>Delete Product</Button>
    </Space>
    <Table scroll={{ x: 700 }} rowSelection={{ type: 'checkbox' }} columns={columns} dataSource={data} />
  </div>
  )
};