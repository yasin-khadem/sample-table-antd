import {Button, Row} from "antd";
import {DeleteOutlined, EditOutlined, EyeOutlined} from "@ant-design/icons";
import React from "react";

const ActionsInTable = () => {
    return (
        <>
            <Row>
                <Button style={{backgroundColor: '#10239e'}} shape="circle"
                        icon={<EyeOutlined style={{color: 'white'}}/>}/>
                <Button style={{backgroundColor: '#fa8c16', marginRight: '5px'}} shape="circle"
                        icon={<EditOutlined style={{color: 'white'}}/>}/>
                <Button danger style={{marginRight: '5px'}} shape="circle" icon={<DeleteOutlined/>}/>
                <Button shape="round" style={{marginRight: '8px'}}>اتاق ها</Button>
                <Button shape="round" style={{marginRight: '8px', color: 'blue', borderColor: 'blue'}}>جلسات</Button>
            </Row>
        </>
    )
}
export default ActionsInTable