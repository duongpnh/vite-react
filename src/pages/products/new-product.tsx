import { useState } from 'react';
import { Button, Col, Form, Modal, Row, Upload } from 'antd';
import { Formik } from 'formik';
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload';
import { PlusOutlined } from '@ant-design/icons';
import { productCreateSchema } from './validation/product-create.schema';
import { FormikInput } from '@/components/FormikInput';
import { ProductStatus } from './enums/status.enum';


const initialValues = {};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const NewProduct = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

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
              name="form-sign-in"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                  <FormikInput name="name" placeholder="Product Name" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={{ span: 9, offset: 1 }}>
                  <FormikInput name="status" type='select' placeholder="Status" options={Object.keys(ProductStatus).map(k => ({ label: k, value: k }))} />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                  <FormikInput name="description" placeholder="Description" />
                </Col>
                <Col xs={24} sm={24} md={24} lg={{ span: 9, offset: 1 }}>
                  <FormikInput name="collections" type='select' mode='multiple' placeholder="Collections" options={Object.keys(ProductStatus).map(k => ({ label: k, value: k }))} />
                </Col>
              </Row>
              
              <Row>
                <Col xs={24} sm={24} md={24} lg={14}>
                  <FormikInput name="details" type='richtext-editor' theme='snow' placeholder="Details" />
                </Col>
              </Row>
              
              <Row>
                <Col xs={24} sm={24} md={6} lg={6}>
                  <FormikInput name="price" suffix='VND' placeholder="Price" />
                </Col>
                <Col xs={24} sm={24} md={6} lg={6}>
                  <FormikInput name="compareAtPrice" suffix='VND' placeholder="Compare-at price" />
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