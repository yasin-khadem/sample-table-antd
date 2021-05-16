import {Table, Input, Button, Space, Avatar, Card, Tag, Progress} from 'antd';
import Highlighter from 'react-highlight-words';
import {ProfileOutlined, SearchOutlined, UserOutlined} from '@ant-design/icons';
import React from "react";
import PN from "persian-number";

import ActionsInTable from "./ActionsInTable";

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        logo: <Avatar size="large"
                      src='https://karboom.io/storage/employers/logo_thumb/Ob9MbyafIafUYtQYa0ypHAwIzURnH1zZ9er7k3PH.png'/>,
        created_at: PN.convertEnToPe('07:52:52 1400/02/01'),
        timestamp: 1620357772,
        address: 'class-1/4',
        online: <Progress percent={0} status='active'/>,
        actions: <ActionsInTable/>,
        tag: <Tag style={{fontSize: '12px'}} color="error"><strong>بدون ضبط</strong></Tag>,
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        address: 'dr-university',
        created_at: PN.convertEnToPe('08:12:50  1399/11/30'),
        timestamp: 1613018570,
        actions: <ActionsInTable/>,
        online: <Progress percent={20} status='active'/>,
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        logo: <Avatar size="large"
                      src='https://media-exp1.licdn.com/dms/image/C4D0BAQEOo13_hCFylA/company-logo_200_200/0/1548337352822?e=2159024400&v=beta&t=7AholjoKLToFr1xxjkLamtU0gaaDjXUg3uraQKATrJk'/>,
        address: 'hh-hakim',
        created_at: PN.convertEnToPe('07:52:52  1400/8/30'),
        timestamp: 1636604572,
        actions: <ActionsInTable/>,
        online: <Progress percent={10} status='active'/>,
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        address: 'farazaban',
        created_at: PN.convertEnToPe('01:52:33  1399/8/30'),
        timestamp: 1604701353,
        actions: <ActionsInTable/>,
        online: <Progress percent={5} status='active'/>,
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
    {
        key: '5',
        name: 'Jim Red',
        age: 32,
        logo: <Avatar size="large"
                      src='https://ketabmarkaz.com/c/18-category_default/%D8%A7%D9%86%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D9%85%D8%A8%D8%AA%DA%A9%D8%B1%D8%A7%D9%86.jpg'/>,
        address: 'kish-college',
        created_at: PN.convertEnToPe('11:52:52  1398/5/31'),
        timestamp: 1565335372,
        actions: <ActionsInTable/>,
        online: <Progress percent={33} status='active'/>,
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
    {
        key: '6',
        name: 'Jim Red',
        age: 32,
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        address: '1/2-azmoon',
        created_at:PN.convertEnToPe('09:00:52  1398/11/30'),
        timestamp: 1581053452,
        actions: <ActionsInTable/>,
        online: <Progress percent={0} status='active'/>,
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
    {
        key: '7',
        name: 'Jim Red',
        age: 32,
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        address: 'test-azmoon',
        created_at: PN.convertEnToPe('02:51:12  1400/1/31'),
        timestamp: 1617229272,
        actions: <ActionsInTable/>,
        online: <Progress percent={50} status='active'/>,
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
];

class TestList extends React.Component {
    state = {
        filteredInfo: '',
        sortedInfo: '',
        searchText: '',
        searchedColumn: '',
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
                        icon={<SearchOutlined />}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                        Reset
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
                        Filter
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
        let {sortedInfo, filteredInfo} = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
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
            <Card style={{borderRadius: '10px', overflow: 'scroll'}}>
                <div className='table-header'>

            <span>
                <ProfileOutlined style={{fontSize: '16px'}}/>
            </span>
                    <span style={{marginRight: '8px', fontSize: '16px'}}>
                <strong>
                اشتراک
                </strong>
            </span>
                </div>
                <Table columns={columns} dataSource={data} bordered onChange={this.handleChange}/>
            </Card>
        )
    }
}

export default TestList