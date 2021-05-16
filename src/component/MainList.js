import React from "react";

import {Avatar, Card, Table, Tag, Input, Button, Space } from "antd"
import {ProfileOutlined, UserOutlined,SearchOutlined} from "@ant-design/icons"
import Highlighter from 'react-highlight-words';

const data = [
    {
        key: '1',
        logo: <Avatar size="large"
                      src='https://karboom.io/storage/employers/logo_thumb/Ob9MbyafIafUYtQYa0ypHAwIzURnH1zZ9er7k3PH.png'/>,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tag: <Tag style={{fontSize: '12px'}} color="error"><strong>بدون ضبط</strong></Tag>,
    },
    {
        key: '2',
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park',
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>    },
    {
        key: '3',
        logo: <Avatar size="large"
                      src='https://media-exp1.licdn.com/dms/image/C4D0BAQEOo13_hCFylA/company-logo_200_200/0/1548337352822?e=2159024400&v=beta&t=7AholjoKLToFr1xxjkLamtU0gaaDjXUg3uraQKATrJk'/>,
        name: 'Joe Black',
        age: 32,
        address: 'London No. 3 Lake Park',
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
    {
        key: '4',
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        name: 'Jim Red',
        age: 32,
        address: 'London No. 4 Lake Park',
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
    {
        key: '5',
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        name: 'Jim Red',
        age: 32,
        address: 'London No. 5 Lake Park',
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
    {
        key: '6',
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        name: 'Jim Red',
        age: 32,
        address: 'London No. 6 Lake Park',
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>

    },
    {
        key: '7',
        logo: <Avatar size="large" icon={<UserOutlined/>}/>,
        name: 'Jim Red',
        age: 32,
        address: 'London No. 1 Lake Park',
        tag: <Tag style={{fontSize: '12px'}} color="processing"><strong>ضبط فوری</strong></Tag>
    },
];

class MainList extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
        searchedColumn: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
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
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
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
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
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
        this.setState({ searchText: '' });
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
                width: 80,
                ellipsis: true,
            },
            {
                title: 'آدرس',
                dataIndex: 'address',
                key: 'address',
                width: 350,
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
                ellipsis: true,
                ...this.getColumnSearchProps('address'),
            },
            {
                title: 'تگ ها',
                dataIndex: 'tag',
                width: 120,
                key: 'tag',
                ellipsis: true,
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [
                    {text: 'Joe', value: 'Joe'},
                    {text: 'Jim', value: 'Jim'},
                ],
                filteredValue: filteredInfo.name || null,
                onFilter: (value, record) => record.name.includes(value),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
                ellipsis: true,
            },

            // {
            //     title: 'Address',
            //     dataIndex: 'address',
            //     key: 'address',
            //     filters: [
            //         {text: 'London', value: 'London'},
            //         {text: 'New York', value: 'New York'},
            //     ],
            //     filteredValue: filteredInfo.address || null,
            //     onFilter: (value, record) => record.address.includes(value),
            //     sorter: (a, b) => a.address.length - b.address.length,
            //     sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
            //     ellipsis: true,
            // },
        ];
        return (
            <Card style={{borderRadius: '10px',overflow: 'scroll'}}>
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

export default MainList
