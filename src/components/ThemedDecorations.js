export default class Invitation extends React.Component {
  
  render() {
    const invDefault = <h1>'You\'ve been invited!'</h1>;
    const invCust = React.Children.map(this.props.children, child => {
      rturn React.cloneElement(child, {
        invite: child.props.message === invDefault
      });
    });
    
    return (
      <div className="invitation">
        {invCust}
      </div>
    );
      
  }
}

