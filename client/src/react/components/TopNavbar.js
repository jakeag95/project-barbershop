import React from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

class TopNavbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to={'/'}>Home</Link>
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="Services">
          <Menu.ItemGroup title="Men Services">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Women Services">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="login">
        <Link to={'/login'}>Login</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopNavbar;