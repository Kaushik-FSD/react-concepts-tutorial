import React from "react";

function ComponentPropsExample() {
  return (
    <div>
      {/* Job here is a Component - All component should be named with Uppercase letters */}
      <Job
        title="Software Engineer"
        company="Tech Corp"
        location="San Francisco"
      />
      <Job title="Data Scientist" company="Data Inc." location="New York" />
      <Job title="Product Manager" company="Innovate Ltd." location="Austin" />
    </div>
  );
}

//Creating another component to demonstrate props and how seperate components can communicate
const Job = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.company}</h1>
      <h1>{props.location}</h1>
    </div>
  );
};

export default ComponentPropsExample;
