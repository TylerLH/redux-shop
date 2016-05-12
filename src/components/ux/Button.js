import React, { PropTypes } from 'react'
import classnames from 'classnames'

class Button extends React.Component {
  static propTypes = {
    btnStyle: PropTypes.string,
    btnSize: PropTypes.string
  }
  render () {
    const { to, href, btnStyle, btnSize, children } = this.props;
    const classObj = {};
    if (btnStyle) classObj[`btn-${btnSize}`] = true;
    if (btnStyle) classObj[`btn-${btnStyle}`] = true;
    const btnClasses = classnames(classObj);
    return (
      <a href={href} className={btnClasses}>{children}</a>
    )
  }
}

export default Button;
