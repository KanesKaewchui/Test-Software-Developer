import React from 'react';
import { Card, Button } from 'antd';

const Carddata = () => {
    const cardStyle = {
        width: 300,
        margin: '40px 30px 10px 30px',

    }
    return (
        <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
            <Card
                title="ทะเบียนรถยนต์ : กอ 2000"
                bordered={false}
                style={cardStyle}
                actions={[
                    <Button type="primary">ดูข้อมูลเพิ่มเติม</Button>,
                    <Button type="default">ดูข้อมูลเพิ่มเติม</Button>
                ]}
            >
                <p>ยี่ห้อรถ : Toyota</p>
                <p>รุ่นรถ : Yaris Cross</p>
                <p>หมายเหตุ : </p>
                <p>etc...</p>
            </Card>
            <Card
                title="ทะเบียนรถยนต์ : กอ 2100"
                bordered={false}
                style={cardStyle}
                actions={[
                    <Button type='primary'>ดูข้อมูลเพิ่มเติม</Button>,
                    <Button type='default'>ดูข้อมูลเพิ่มเติม</Button>
                ]}
            >
                <p>ยี่ห้อรถ : Honda</p>
                <p>รุ่นรถ : City</p>
                <p>หมายเหตุ : </p>
                <p>etc...</p>
            </Card>
            <Card
                title="ทะเบียนรถยนต์ : กอ 2200"
                bordered={false}
                style={cardStyle}
                actions={[
                    <Button type='primary'>ดูข้อมูลเพิ่มเติม</Button>,
                    <Button type='default'>ดูข้อมูลเพิ่มเติม</Button>
                ]}
            >
                <p>ยี่ห้อรถ : Masda</p>
                <p>รุ่นรถ : Mazda2</p>
                <p>หมายเหตุ : </p>
                <p>etc...</p>
            </Card>
            <Card
                title="ทะเบียนรถยนต์ : กอ 2300"
                bordered={false}
                style={cardStyle}
                actions={[
                    <Button type='primary'>ดูข้อมูลเพิ่มเติม</Button>,
                    <Button type='default'>ดูข้อมูลเพิ่มเติม</Button>
                ]}
            >
                <p>ยี่ห้อรถ : Ford</p>
                <p>รุ่นรถ : Raptor</p>
                <p>หมายเหตุ : </p>
                <p>etc...</p>
            </Card>
            <Card
                title="ทะเบียนรถยนต์ : กอ 2300"
                bordered={false}
                style={cardStyle}
                actions={[
                    <Button type='primary'>ดูข้อมูลเพิ่มเติม</Button>,
                    <Button type='default'>ดูข้อมูลเพิ่มเติม</Button>
                ]}
            >
                <p>ยี่ห้อรถ : Ford</p>
                <p>รุ่นรถ : Raptor</p>
                <p>หมายเหตุ : </p>
                <p>etc...</p>
            </Card>
        </div>   
    );
};

export default Carddata;