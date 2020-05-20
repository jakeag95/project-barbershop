import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { EditOutlined, EllipsisOutlined, SettingOutlined, CalendarOutlined } from '@ant-design/icons';
import faker from 'faker'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const BarberCard = props => {
  const { employee } = props;
  let employeeImage = faker.image.avatar();

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

<Card>
<CardActionArea>
  <CardMedia
    src={employeeImage}
    title="Contemplative Reptile"
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
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
  <Link to={`/${employee._id}`}>Profile</Link>
  </Button>
</CardActions>
</Card>
  );
}

export default BarberCard