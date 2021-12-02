import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directorySelectors';

import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directoryMenu'>
      {sections.map(({ id, ...otherMenuProps }) => (
        <MenuItem key={id} {...otherMenuProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
