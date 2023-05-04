import { useState } from 'react';
import { Button, Col, message, Form, Modal, Popconfirm, Row, Table, Upload } from 'antd';
import { Field, Formik } from 'formik';
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload';
import { PlusOutlined } from '@ant-design/icons';
import { userCreateSchema } from './validation/user-create.schema';
import { FormikInput } from '@/components/FormikInput';
import { EditableCell, EditableRow } from '@/components/custom/EditTable';
import ScrollBar from 'react-perfect-scrollbar';


const initialValues = {
  name: null,
  description: '',
  details: null,
  price: null,
  compareAtPrice: null
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  name: string;
  age: string;
  address: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

export const NewUser = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();


  const handleCancelPreview = () => setPreviewOpen(false);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  return (
    <>
      <h1 className='text-center'>Create An User</h1>
      <Formik
          initialValues={initialValues}
          validationSchema={userCreateSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log({ values });
          }}
        >
          {({ handleSubmit }) => (
            <Form
              name="form-add-new-user"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={{ span: 12, offset: 6 }}>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader text-center"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={{ span: 12, offset: 6 }}>
                  <FormikInput name="firstName" type='text' placeholder="First Name" />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={{ span: 12, offset: 6 }}>
                  <FormikInput name="lastName" type='text' placeholder="Last Name" />
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={{ span: 12, offset: 6 }}>
                  <FormikInput name="email" type='email' placeholder="Email" />
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