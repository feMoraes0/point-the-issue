import React from 'react';
import CircleButton from './CircleButton';
import Menu from '../../assets/icons/menu.svg';
import {kWhite} from '../utilities/style-constants';

const Header = ({menuAction}) => {
  return (
    <>
      <CircleButton
        location="top-left"
        bgColour="transparent"
        onPress={() => menuAction()}>
        <Menu color={kWhite} />
      </CircleButton>
    </>
  );
};

export default Header;
