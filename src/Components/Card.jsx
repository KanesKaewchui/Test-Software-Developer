import React from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';

const { Meta } = Card;

const Carddata = () => {
    return (
        <Card style={{width:300}}
            cover={
                <img 
                    alt="example" 
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" 
                />}
            actions={[
                <Button type='primary'>แก้ไข</Button>,
                <Button type='primary' danger>ลบ</Button>,
            ]}
        >
            <Meta 
                title="Card title" 
                description="this is des"
            />
        </Card>
    );
};

export default Carddata;