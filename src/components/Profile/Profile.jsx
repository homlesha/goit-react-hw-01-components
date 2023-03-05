import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Image,
  Name,
  Tag,
  Location,
  Stats,
  StatsElement,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsElement>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsElement>
        <StatsElement>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsElement>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
