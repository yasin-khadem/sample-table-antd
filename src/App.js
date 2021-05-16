import React from 'react'
import {Col, Row} from 'antd'
import {Layout, Menu} from 'antd';
import './App.css'


import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined,

} from '@ant-design/icons';
import MainList from './component/MainList';
import TestList from "./component/TestList";

const {Header, Sider, Content} = Layout;

class App extends React.Component {

    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background"
                            style={{padding: 0, backgroundColor: '#391085'}}>
                        <Row justify="space-between">
                            <Col>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    style: {
                                        marginRight: '36px', color: 'white',
                                        fontSize: '18px', backgroundColor: '#fa8c16',
                                        padding: '8px', borderRadius: '50%'
                                    },
                                    onClick: this.toggle,
                                })}
                                <HomeOutlined style={{color: 'white', marginRight: '24px', fontSize: '18px'}}/>
                                <span style={{
                                    color: 'white',
                                    marginRight: '16px',
                                    overflow: 'hidden'
                                }}>
                  صفحه اصلی
                </span>
                            </Col>
                            <Col>
                                <UserOutlined style={{color: 'white', marginLeft: '4px'}}/>
                                <span style={{
                                    color: 'white',
                                    marginRight: '4px',
                                    marginLeft: '14px'
                                }}>
                  User 
                </span>
                            </Col>
                        </Row>

                    </Header>
                    <div className='background-content'>

                        <Content
                            className="site-layout-background content-height"
                            theme='dark'
                            style={{
                                padding: 24,
                            }}
                        >
                            {/*<MainList/>*/}
                            <TestList/>
                        </Content>
                    </div>
                </Layout>
            </Layout>
        );
    }

}

export default App;








