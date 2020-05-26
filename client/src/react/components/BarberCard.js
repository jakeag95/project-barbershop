import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { EditOutlined, EllipsisOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import faker from 'faker'
import avatar from '../../images/barberLogo4.jpg';
import Icon from '@material-ui/core/Icon';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AutoComplete } from 'antd';



const BarberCard = props => {
  const { employee } = props;

  const imgStyle = {
    maxWidth: 'auto',
    maxHeight: 'auto'
  }

  const cardStyle = {
    // maxWidth: '10rem',
    // maxHeight: 'auto'
      width: '20%',
      margin: '1rem'
  }

  const linkStyle = { display: 'flex' }

  return (
    // <Card
    //   hoverable
    //   style={{ width: '30%', margin: '1rem' }}
    //   cover={
    //     <img
    //       alt="example"
    //       src={faker.image.avatar()}
    //     />
    //   }
    //   actions={[
    //     <CalendarOutlined>Schedule</CalendarOutlined>,
    //     <Link to={`/${employee._id}`}><EllipsisOutlined key="ellipsis">Profile</EllipsisOutlined></Link>
    //   ]}
    // >
    //   <Meta
    //     title={employee.name}
    //     description={employee.bio}
    //   />
    // </Card>


    <Card raised style={cardStyle}>
    <CardActionArea>
      <CardMedia
        style={imgStyle}
        component="img"
        src={faker.image.avatar()}
        title="Avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {employee.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {employee.bio}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="medium" color="primary">
      <Link to={`/${employee._id}`} style={linkStyle}>
        <Icon>account_box</Icon>
        Profile
      </Link>
      </Button>
    </CardActions>
    </Card>
  );
}

export default BarberCard