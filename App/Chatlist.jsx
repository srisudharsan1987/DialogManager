import React from 'react';

class Chatlist extends React.Component {
   render() {
      return (
        <div>
        	{this.props.message}
        </div>
      );
   }
}

export default Chatlist;