import { useState } from 'react';
import { Button, Col, Divider, Form, Modal, Popconfirm, Row, Table, Upload } from 'antd';
import { Field, Formik } from 'formik';
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import { PlusOutlined } from '@ant-design/icons';
import { productCreateSchema } from './validation/product-create.schema';
import { FormikInput } from '@/components/FormikInput';
import { ProductStatus } from './enums/status.enum';
import { EditableCell, EditableRow } from '@/components/custom/EditTable';


const initialValues = {
  name: null,
  description: '',
  details: null,
  price: null,
  compareAtPrice: null
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  name: string;
  age: string;
  address: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

export const NewProduct = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [count, setCount] = useState(2);

  // upload media
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  // variants
  const [dataSource, setDataSource] = useState<DataType[]>([
    {
      key: '0',
      name: 'Edward King 0',
      age: '32',
      address: 'London, Park Lane no. 0',
    },
    {
      key: '1',
      name: 'Edward King 1',
      age: '32',
      address: 'London, Park Lane no. 1',
    },
  ]);

  const handleCancelPreview = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  
  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
      editable: true,
      fixed: 'left',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width: 70,
      fixed: 'left',
    },
    {
      title: 'Available',
      dataIndex: 'available',
      width: 70,
    },
    {
      title: 'On Hand',
      dataIndex: 'onHand',
      width: 50,
    },
    {
      title: 'Barcode',
      dataIndex: 'barcode',
      width: 50,
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      width: 50,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      width: 50,
      fixed: 'right',
      render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData: DataType = {
      key: count,
      name: `Edward King ${count}`,
      age: '32',
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <>
      <h1>Create A Product</h1>
      <Formik
          initialValues={initialValues}
          validationSchema={productCreateSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log({ values });
          }}
        >
          {({ handleSubmit }) => (
            <Form
              name="form-add-new-product"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                  <FormikInput name="name" type='text' placeholder="Product Name" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={{ span: 9, offset: 1 }}>
                  <FormikInput name="status" type='select' placeholder="Status" options={Object.keys(ProductStatus).map(k => ({ label: k, value: k }))} />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                  <FormikInput name="description" type='text' placeholder="Description" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={{ span: 9, offset: 1 }}>
                  <FormikInput 
                    name="collections" 
                    type='select' 
                    mode='multiple'
                    size='middle'
                    placeholder="Collections" 
                    options={Object.keys(ProductStatus).map(k => ({ label: k, value: k }))}
                  />
                </Col>
              </Row>
              
              <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                  <FormikInput name="details" type='richtext-editor' theme='snow' placeholder="Details" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={{ span: 9, offset: 1 }}>
                  <FormikInput name="themeTemplate" type='select' placeholder="Theme Template" options={Object.keys(ProductStatus).map(k => ({ label: k, value: k }))} />
                </Col>
              </Row>
              
              <Row>
                <Col xs={24} sm={24} md={{ span: 11 }} lg={{ span: 6 }}>
                  <FormikInput type='number' name="price" suffix='VND' placeholder="Price" min={0} />
                </Col>
                <Col xs={24} sm={24} md={{ span: 11, offset: 2 }} lg={{ span: 6, offset: 2 }}>
                  <FormikInput type='number' name="compareAtPrice" suffix='VND' placeholder="Compare-at price" min={0} />
                </Col>
              </Row>
              
              <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={{ span: 14 }}>
                  <Divider orientation='left' type='horizontal'>Variants</Divider>
                  <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a row
                  </Button>
                  <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns as ColumnTypes}
                    scroll={{ x: 700 }}
                  />
                </Col>
              </Row>

              <Form.Item wrapperCol={{ offset: 12, span: 24 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancelPreview}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  )
}