import React, { PropTypes } from 'react'
import classnames from 'classnames';

class Icon extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x'])
  }
  render () {
    const { name, size } = this.props;
    let classObj = {
      [`icon-${name}`]: true
    };
    if (size) classObj[`icon-${size}`] = true;
    const iconClasses = classnames('icon', classObj)
    return (
      <i className={iconClasses} />
    )
  }
}

export default Icon;
