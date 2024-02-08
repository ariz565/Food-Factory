//class based component is a class that extends from React.Component and has a render method
import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);
//create state
        this.state = {
            userInfo:{
                name:"Dummy Name",
                location:"Default Location"
            },
            // count: 0
            // count2: 2,
        };
        console.log(this.props.name + "child constructor");
    }

async componentDidMount(){
//     console.log(this.props.name+"child Component Mounted");
    const data = await fetch("https://api.github.com/users/userName")
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo: json,
    });
    console.log(this.props.name+"child Component Mounted");
}

componentDidUpdate(prevProps, prevState) {

    if (this.state.count != prevState.count){
        this.setstate = this.state.count + 1
    }


        // console.log(" componentDidUpdate")
}


componentWillUnmount(){
    // console.log("Component Unmounted");
}
  
  
  
    render() {
    const {name, location, avatar_url} = this.state.userInfo;
    // const {count} = this.state;


    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: @ExWhyZedd</h3>
        <UserClass/>
      </div>
    );
  }
}


export default UserClass;


/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
