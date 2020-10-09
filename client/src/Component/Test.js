import React, {Component}  from 'react';

class Test extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.userId}</h2>
                <h2>{this.props.userName}</h2>
                <h2>{this.props.userBirthday}</h2>
                <h2>{this.props.userPassword}</h2>
            </div>
        )
    }
}
export default Test;