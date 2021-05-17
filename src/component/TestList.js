import {Table, Input, Button, Space, Avatar, Card, Tag, Progress, Row, Col, Modal, Form, InputNumber} from 'antd';
import Highlighter from 'react-highlight-words';
import {ProfileOutlined, SearchOutlined, UserOutlined, PlusOutlined, UploadOutlined} from '@ant-design/icons';
import React from "react";
import PN from "persian-number";
import moment from 'moment'
import momentj from "moment-jalaali";
import ActionsInTable from "./ActionsInTable";


class TestList extends React.Component {
    cleanDate = (msec) => {
        return PN.convertEnToPe(momentj(moment(msec).format("HH:mm:ss YYYY-MM-DD"),).format('HH:mm:ss jYYYY-jM-jD'))
    }
    state = {
        address: '',
        logo: '',
        online: 0,
        filteredInfo: '',
        sortedInfo: '',
        searchText: '',
        searchedColumn: '',
        isCreateModalVisible: false,
        data: []
    };

    
    createModal = (values) => {
        this.setState({
            ...this.state, isCreateModalVisible: false, data: [...this.state.data, {
                id: this.state.data.length + 1,
                key: this.state.data.length + 1,
                logo: <Avatar size="large" src={values.logo}/>,
                address: values.address,
                created_at: this.cleanDate(new Date().getTime()),
                timestamp: new Date().getTime(),
                actions: <ActionsInTable/>,
                online: <Progress percent={values.online} status='active'/>,
                tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
            }],
            address: '',
            logo: '',
            online: 0
        })
    }
    showCreateModal = () => {
        this.setState({...this.state, isCreateModalVisible: true})
    };

    handleCreateOk = () => {
        this.setState({...this.state, isCreateModalVisible: false})
    };

    handleCreateCancel = () => {
        this.setState({...this.state, isCreateModalVisible: false})
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90, paddingBottom: '10px', paddingTop: '0px', paddingRight: '3px'}}
                    >
                        <p style={{display: "inline"}}>
                            جست و جو
                        </p>
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                        ریست
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({closeDropdown: false});
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        فیلتر
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{fontSize: '18px', color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({searchText: ''});
    };
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    render() {
        let {sortedInfo} = this.state;
        sortedInfo = sortedInfo || {};

        const columns = [
            {
                title: 'لوگو',
                dataIndex: 'logo',
                key: 'logo',
                width: '80px',
                ellipsis: true,
            },
            {
                title: 'آدرس',
                dataIndex: 'address',
                key: 'address',
                width: '160px',
                ...this.getColumnSearchProps('address'),
            },
            {
                title: 'تگ ها',
                dataIndex: 'tag',
                width: '100px',
                key: 'tag',
                ellipsis: true,
            },
            {
                title: 'آنلاین',
                dataIndex: 'online',
                key: 'online',
                width: '170px',
            },
            {
                title: 'تاریخ ایجاد',
                dataIndex: 'created_at',
                key: 'created_at',
                width: '150px',
                sorter: (a, b) => b.timestamp - a.timestamp,
                sortOrder: sortedInfo.columnKey === 'created_at' && sortedInfo.order
            },
            {
                title: 'عملیات',
                dataIndex: 'actions',
                key: 'actions',
                width: '250px',
            },

        ];
        return (
            <Card style={{borderRadius: '10px', overflow: 'auto'}}>
                <div className='table-header'>
                    <Row justify='space-between'>
                        <Col>
                            <span><ProfileOutlined style={{fontSize: '16px'}}/></span>
                            <span style={{marginRight: '8px', fontSize: '16px'}}><strong>اشتراک</strong></span>
                        </Col>
                        <Col>
                            <Button shape="round" icon={<PlusOutlined/>} style={{
                                marginRight: '8px',
                                color: 'white',
                                backgroundColor: '#389e0d'
                            }} onClick={this.showCreateModal}>ایجاد</Button>
                            <Modal destroyOnClose={true} title="ساخت آیتم جدید" visible={this.state.isCreateModalVisible}
                                   onCancel={this.handleCreateCancel} footer={null}>
                                <Form initialValues={{online: 0}} onFinish={this.createModal}>
                                    <Form.Item name="logo" label="url لوگو">
                                        <Input placeholder="آدرس اینترنتی لوگو"
                                               />
                                    </Form.Item>
                                    <Form.Item name="address" label="آدرس" rules={[
                                        {
                                            required: true,
                                            message: 'لطفا آدرس را وارد کنید',
                                        },
                                    ]}>
                                        <Input placeholder="آدرس"/>
                                    </Form.Item>
                                    <Form.Item name="online" label="تعداد آنلاین" rules={[{
                                        required: true,
                                        message: 'لطفا مقدار عددی آنلاین را وارد کنید'
                                    }]}>
                                        <InputNumber />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button style={{marginLeft: '8px'}}
                                                onClick={this.handleCreateCancel}>انصراف</Button>
                                        <Button type="primary" htmlType="submit">ثبت</Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                            <Button shape="round" icon={<UploadOutlined style={{fontSize: '16px'}}/>}
                                    style={{marginRight: '8px', color: 'white', backgroundColor: '#1890ff'}}>وارد
                                کردن</Button>
                        </Col>
                    </Row>
                </div>
                <Table columns={columns} dataSource={this.state.data} bordered onChange={this.handleChange}/>
            </Card>
        )
    }
}

export default TestList