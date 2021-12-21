import React from 'react';
import TabularList from '../TabularList/TabularList';
import BarComponent from '../BarCaomponent/BarComponent';
import { calculation } from '../../utilities';
import './User.css';

const User = ({ user }) => {
  const { name, contribution, match, age } = user;
  const userContributionDetails = calculation(
    Number(age),
    Number(contribution.slice(1).replaceAll(',', '')),
    Number(match)
  );

  return (
    <div className="pa3">
      <h4 className="f4">
        Hi {name}, below is your balance earned through your contribution of {contribution} and your company's match of {match}%!
      </h4>
      <div className="center table">
        <TabularList list={userContributionDetails} />
      </div>
      <div className="center bar">
        <BarComponent list={userContributionDetails}/>
      </div>
    </div>
  )
}

export default User;