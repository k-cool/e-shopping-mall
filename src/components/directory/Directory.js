import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import sectionData from './ditectory.data';

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      section: [],
    };
  }

  componentDidMount() {
    this.setState({ section: sectionData });
  }

  render() {
    const { section } = this.state;

    return (
      <div className='directoryMenu'>
        {section.map(({ id, ...otherMenuProps }) => (
          <MenuItem key={id} {...otherMenuProps} />
        ))}
      </div>
    );
  }
}
