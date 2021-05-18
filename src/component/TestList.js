import {
    message,
    Table,
    Input,
    Button,
    Space,
    Avatar,
    Card,
    Tag,
    Progress,
    Row,
    Col,
    Modal,
    Form,
    InputNumber,
    Upload
} from 'antd';
import Highlighter from 'react-highlight-words';
import {
    ProfileOutlined,
    SearchOutlined,
    UserOutlined,
    PlusOutlined,
    UploadOutlined,
    CloudUploadOutlined
} from '@ant-design/icons';
import React from "react";
import PN from "persian-number";
import moment from 'moment'
import momentj from "moment-jalaali";
import ActionsInTable from "./ActionsInTable";

const {convertCSVToArray} = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');


class TestList extends React.Component {
    cleanDate = (msec) => {
        return PN.convertEnToPe(momentj(moment(msec).format("HH:mm:ss YYYY-MM-DD"),).format('HH:mm:ss jYYYY-jM-jD'))
    }
    state = {
        tempFileForUpdate: {},
        file: null,
        address: '',
        logo: '',
        online: 0,
        filteredInfo: '',
        sortedInfo: '',
        searchText: '',
        searchedColumn: '',
        isCreateModalVisible: false,
        isUploadModalVisible: false,
        isUpdateModalVisible: false,
        data: [],
    };


    createModal = (values) => {
        this.setState({
            ...this.state, isCreateModalVisible: false,
            data: [...this.state.data, {
                tempData: {...values},
                id: this.state.data.length + 1,
                key: this.state.data.length + 1,
                logo: <Avatar size="large" src={values.logo}/>,
                address: values.address,
                created_at: this.cleanDate(new Date().getTime()),
                timestamp: new Date().getTime(),
                actions: <ActionsInTable id={this.state.data.length + 1} timestamp={new Date().getTime()}
                                         showUpdateModal={this.showUpdateModal}/>,
                online: <div>
                    <span>{values.online}</span>
                    <Progress percent={values.online} status='active'/>
                </div>
                ,
                tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
            }],
        })
    }
    showUpdateModal = (id, timestamp) => {
        let item = this.state.data.filter((item, index) => {
            if (item.id === id) {
                return item;
            }
        })

        this.setState({
            ...this.state,
            tempFileForUpdate: {...item[0].tempData, id, timestamp},
            isUpdateModalVisible: true
        })
    }
    updateModal = (values) => {
        let {id, timestamp} = this.state.tempFileForUpdate
        this.setState({
            ...this.state, isUpdateModalVisible: false,
            data: [...this.state.data.filter(item => {
                if (item.id !== id) {
                    return item
                }
            }), {
                tempData: {...values},
                id: id,
                key: id,
                logo: <Avatar size="large" src={values.logo}/>,
                address: values.address,
                created_at: this.cleanDate(timestamp),
                timestamp: timestamp,
                actions: <ActionsInTable id={id} timestamp={timestamp} showUpdateModal={this.showUpdateModal}/>,
                online: <div>
                    <span>{values.online}</span>
                    <Progress percent={values.online} status='active'/>
                </div>
                ,
                tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
            }],
        })
    }


    showCreateModal = () => {
        this.setState({...this.state, isCreateModalVisible: true})
    };
    showUploadModal = () => {
        this.setState({...this.state, isUploadModalVisible: true})
    };

    handleCreateOk = () => {
        this.setState({...this.state, isCreateModalVisible: false})
    };

    handleCreateCancel = () => {
        this.setState({...this.state, isCreateModalVisible: false})
    };
    handleUploadCancel = () => {
        this.setState({...this.state, isUploadModalVisible: false})
    };
    handleUpdateCancel = () => {
        this.setState({...this.state, isUpdateModalVisible: false})
    }

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
    createByCSV = () => {
        const arrayofArrays = convertCSVToArray(this.state.file, {
            separator: ',', // use the separator you use in your csv (e.g. '\t', ',', ';' ...)
        });
        // console.log(arrayofArrays)
        // console.log(arrayofArrays[0])
        if (arrayofArrays[0].includes("logo")
            && arrayofArrays[0].includes("address")
            && arrayofArrays[0].includes("logo")) {
            for (let i = 1; i < arrayofArrays.length; i++) {
                this.createModal(arrayofArrays[i])
            }
        } else {
            message.error(`اطلاعات فایل csv شما با الگو مطابقت ندارد`);
        }

        this.setState({...this.state, isUploadModalVisible: false})
    }
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

                            <Modal destroyOnClose={true} title="ساخت آیتم جدید"
                                   visible={this.state.isCreateModalVisible}
                                   onCancel={this.handleCreateCancel} footer={null}>
                                <Form initialValues={{online: 0}} onFinish={this.createModal}>
                                    <label><strong>url برای لوگو:</strong></label>
                                    <Form.Item name="logo">
                                        <Input style={{marginTop: "5px"}} placeholder="آدرس اینترنتی لوگو (اختیاری)"/>
                                    </Form.Item>
                                    <label><strong>آدرس:</strong></label>
                                    <Form.Item name="address"
                                               rules={[{required: true, message: 'لطفا آدرس را وارد کنید'},
                                               ]}>
                                        <Input style={{marginTop: "5px"}} placeholder="آدرس"/>
                                    </Form.Item>
                                    <label><strong>تعداد آنلاین: (پیش فرض صفر)</strong></label>
                                    <Form.Item name="online" rules={[{
                                        required: true,
                                        message: 'لطفا مقدار عددی آنلاین را وارد کنید'
                                    }]}>
                                        <InputNumber style={{marginTop: "5px"}}/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button style={{marginLeft: '8px'}}
                                                onClick={this.handleCreateCancel}>انصراف</Button>
                                        <Button type="primary" htmlType="submit">ثبت</Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                            <Button onClick={this.showUploadModal} shape="round"
                                    icon={<UploadOutlined style={{fontSize: '16px'}}/>}
                                    style={{marginRight: '8px', color: 'white', backgroundColor: '#1890ff'}}>وارد
                                کردن</Button>
                            <Modal destroyOnClose={true} title="ایجاد آیتم با آپلود اطلاعات"
                                   visible={this.state.isUploadModalVisible}
                                   onCancel={this.handleUploadCancel} footer={[null]}>
                                <Upload
                                    accept='.csv,.txt'
                                    action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                                    beforeUpload={file => {
                                        const reader = new FileReader();
                                        reader.readAsText(file);
                                        reader.onloadend = e => {
                                            this.setState({...this.state, file: e.target.result})
                                            this.createByCSV();
                                        }
                                        return false;
                                    }}
                                >
                                    <Button>
                                        <CloudUploadOutlined type="upload" style={{fontSize: '16px'}}/>فایل csv خود را
                                        اینجا آپلود کنید
                                    </Button>
                                </Upload>
                            </Modal>


                            <Modal destroyOnClose={true} title="بروزرسانی آیتم"
                                   visible={this.state.isUpdateModalVisible}
                                   onCancel={this.handleUpdateCancel} footer={null}>
                                <Form initialValues={{
                                    logo: this.state.tempFileForUpdate.logo,
                                    address: this.state.tempFileForUpdate.address,
                                    online: this.state.tempFileForUpdate.online,
                                }} onFinish={this.updateModal}>
                                    <label><strong>url برای لوگو:</strong></label>
                                    <Form.Item name="logo">
                                        <Input style={{marginTop: "5px"}} placeholder="آدرس اینترنتی لوگو (اختیاری)"/>
                                    </Form.Item>
                                    <label><strong>آدرس:</strong></label>
                                    <Form.Item name="address"
                                               rules={[{required: true, message: 'لطفا آدرس را وارد کنید'},
                                               ]}>
                                        <Input style={{marginTop: "5px"}} placeholder="آدرس"/>
                                    </Form.Item>
                                    <label><strong>تعداد آنلاین: (پیش فرض صفر)</strong></label>
                                    <Form.Item name="online" rules={[{
                                        required: true,
                                        message: 'لطفا مقدار عددی آنلاین را وارد کنید'
                                    }]}>
                                        <InputNumber style={{marginTop: "5px"}}/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button style={{marginLeft: '8px'}}
                                                onClick={this.handleUpdateCancel}>انصراف</Button>
                                        <Button type="primary" htmlType="submit">ویرایش</Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </Col>
                    </Row>
                </div>
                <Table columns={columns} dataSource={this.state.data} bordered onChange={this.handleChange}/>
            </Card>
        )
    }
}

export default TestList