import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
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
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
    width: 100,
    fixed: 'left',
    render: (value: string) => <img src="https://picsum.photos/200/300" width={100} height={100} />
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
    width: 120,
    fixed: 'left',
    render: (text) => <a>John</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
    width: 100,
    fixed: 'left',
    render: (text) => <a>Brown</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text: string) => <a>phanngochoangduong@gmail.com</a>,
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100,
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

export const UsersManagement = () => {
  const navigate = useNavigate();
  const createUser = () => navigate('/users/add');

  return (
  <div>
    <Space wrap>
      <Button type='primary' className='mt-3 mb-3 bg-green-7' onClick={createUser}>Add User</Button>
      <Button type='primary' className='mt-3 mb-3 bg-yellow-6'>Update User</Button>
      <Button type='primary' className='mt-3 mb-3 bg-red-7'>Delete User</Button>
    </Space>
    <Table scroll={{ x: 700 }} rowSelection={{ type: 'checkbox' }} columns={columns} dataSource={data} />
  </div>
  )
};