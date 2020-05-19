import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import faker from 'faker'

const { Meta } = Card;



const BarberCard = props => {
  const { employee } = props;

  return (
    <Card
      hoverable
      style={{ width: '30%', margin: '1rem' }}
      cover={
        <img
          alt="example"
          src={faker.image.avatar()}
        />
      }
      actions={[
        <CalendarOutlined>Schedule</CalendarOutlined>,
        <Link to={`/${employee._id}`}><EllipsisOutlined key="ellipsis">Profile</EllipsisOutlined></Link>
      ]}
    >
      <Meta
        title={employee.name}
        description={employee.bio}
      />
    </Card>

    // <div>
    //   <Link to={`/${employee._id}`}>
    //     <div>
    //       <div>
    //         <img
    //           src={faker.image.avatar()}
    //         />
    //       </div>
    //       <div>
    //         <h1>
    //           <span>
    //             {employee.name}
    //           </span>
    //         </h1>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  );
}

export default BarberCard