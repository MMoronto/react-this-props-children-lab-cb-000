import React from 'react';

class ThemedDecorations extends React.Component {
  
  render() {
    const invCust = React.Children.map(this.props.children, child => React.cloneElement(child, {
        className: this.props.theme,
      }));
    
    return (
      <div>
        {invCust}
      </div>
    );
  }
}

export default ThemedDecorations;

