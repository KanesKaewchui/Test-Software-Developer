import React, { useState } from 'react';
import { Form, Input, Button } from "antd";

const AddInformation = () => {
    const [formData,setFormData] = useState({
        license: '',
        brand: '' , 
        model: '' ,
        note: '' ,
        etc: '' ,
    });

    const InputChange = (i) => {
        const { name, value } = i.target;
        setFormData({ ...formData, [name]: value });
    };

    const FormSubmit = () => {
        console.log(formData)
        setFormData({
            license: '',
            brand: '' , 
            model: '' ,
            note: '' ,
            etc: '' ,
        })
    }

  return (
    <div style={{display: 'flex', justifyContent:'center',marginTop:50,}}>
        <Form layout="vertical"  onFinish={FormSubmit} style={{width: '400px'}}>
            <Form.Item label="ทะเบียนรถยนต์" name="license" colon={false} required={false}>
                <Input name="license" value={formData.license} onChange={InputChange} />
            </Form.Item>
            <Form.Item label="ยี่ห้อรถ" name="brand" colon={false} required={false}>
                    <Input name="brand" value={formData.brand} onChange={InputChange} />
                </Form.Item>
                <Form.Item label="รุ่นรถ" name="model" colon={false} required={false}>
                    <Input name="model" value={formData.model} onChange={InputChange} />
                </Form.Item>
                <Form.Item label="หมายเหตุ" name="note">
                    <Input.TextArea name="note" value={formData.note} onChange={InputChange} />
                </Form.Item>
                <Form.Item label="etc..." name="etc">
                    <Input name="etc" value={formData.etc} onChange={InputChange} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">บันทึก</Button>
                </Form.Item>
        </Form>
    </div>
  );
}

export default AddInformation;

