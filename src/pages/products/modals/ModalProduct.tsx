import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface IProps {
  open: boolean;
  closeModal: () => void;
  submitModal: (args: any) => void;
}

export const ModalProduct = (props: IProps) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.submitModal({ say: 'hello' });
    }, 1000);
  };

  const handleCancel = () => {
    props.closeModal()
  };

  return (
    <Modal
        open={props.open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  )
}