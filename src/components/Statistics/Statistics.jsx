import PropTypes from 'prop-types';
import {
  StatisticsContainer,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      <Title>{title}</Title>
      <StatList>
        {stats.map(item => (
          <StatItem key={item.id}>
            <Label>{item.label} </Label>
            <Percentage>{item.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
