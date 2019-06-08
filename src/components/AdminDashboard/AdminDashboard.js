import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Icon } from 'antd';

import './css/dashboard.css';
import CrafterDashboard from './CrafterDashboard';
import EventDashboard from './EventDashboard';
import UserDashboard from './UserDashboard';
import DashboardOverview from './DashboardOverview';
import LandingPageDashboard from './LandingPageDashboard';

const { Header, Sider, Content } = Layout;

class AdminDashboard extends React.Component {
    state = {
        collapsed: false,
        selected: 'dashboard',
        defaultComponent: '1'
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    selectComponent(key) {
        switch (key.key) {
            case "dashboard":
                this.setState({
                    selected: 'dashboard'
                });
                break;
            case "users":
                this.setState({
                    selected: 'users'
                });
                break;
            case "crafters":
                this.setState({
                    selected: 'crafters'
                });
                break;
            case "events":
                this.setState({
                    selected: 'events'
                });
                break;
            case "landing":
                this.setState({
                    selected: 'landing'
                });
                break;
            default:
                return;
        }
    }

    render() {

        const { selected } = this.state;

        console.log("Props: ", this.props);
        return (
            <Layout className="layout-style">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo"></div>
                    {/* <img className="logo" src={IswLogo} alt="Interswitch" /> */}
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} onClick={(key) => this.selectComponent(key)}>
                        <Menu.Item key="dashboard">
                            <Icon type="dashboard" />
                            <span>Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key="users">
                            <Icon type="user" />
                            <span>Users</span>
                        </Menu.Item>
                        <Menu.Item key="crafters">
                            <Icon type="contacts" />
                            <span>Crafters</span>
                        </Menu.Item>
                        <Menu.Item key="events">
                            <Icon type="calendar" />
                            <span>Events</span>
                        </Menu.Item>
                        <Menu.Item key="landing">
                            <Icon type="home" />
                            <span>Landing Page</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        {selected === "dashboard" &&
                            <DashboardOverview />
                        }
                        {selected === "users" &&
                            <UserDashboard />
                        }
                        {selected === "crafters" &&
                            <CrafterDashboard />
                        }
                        {selected === "events" &&
                            <EventDashboard />
                        }
                        {selected === "landing" &&
                            <LandingPageDashboard />
                        }
                    </Content>
                </Layout>
            </Layout>
        );
    }
}



export default AdminDashboard;