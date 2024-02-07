import React from 'react';
import User from './User';
import UserClass from './UserClass';


class About extends React.Component {
constructor(props) {
    super(props);
}

componentDidMount() {
    console.log("Component Mounted");
}





    render() {
        return ( 
            <div>
        <h1> About </h1>
        <h2> This is my first react project </h2>
        <User name={"ExWhyZedd (function)"}/>
        <UserClass name={"ExWhyZedd (classs)"}location={"Delhi Class"}/>
        </div>
        )}
}


export default About;