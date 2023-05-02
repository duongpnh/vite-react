import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ModalProduct } from './modals/ModalProduct';
import { useCallback, useState } from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
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
        <a>Invite {record.name}</a>
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
  
  const [open, setOpen] = useState(false);

  const toggleModal = useCallback(() => setOpen(p => !p), []);

  const handleSubmit = (values: any) => {
    console.log({ values });
    toggleModal();
  }

  return (
  <div>
    <Space wrap>
      <Button type='primary' className='mt-3 mb-3 bg-green-7' onClick={toggleModal}>Add Product</Button>
      <Button type='primary' className='mt-3 mb-3 bg-yellow-7'>Update Product</Button>
      <Button type='primary' className='mt-3 mb-3 bg-red-7'>Add Product</Button>
    </Space>
    <Table columns={columns} dataSource={data} />
    <ModalProduct open={open} closeModal={toggleModal} submitModal={handleSubmit} />
  </div>
  )
};