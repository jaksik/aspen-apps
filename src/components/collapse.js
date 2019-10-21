import React, { useState } from 'react';
import { Link } from "gatsby"
import { Collapse } from 'reactstrap';
import "./collapse.css"

const Example = (props) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div className="accordian-cell">
      <span onClick={toggle} className="collapse-toggle" style={{ marginBottom: '1rem', color: `blue` }}>{props.service}</span>
      <Collapse isOpen={collapse}>
        <p>{props.description}<span style={{ display: (props.show ? `display` : `none`) }}><Link to="/services/website-design"> Learn More</Link></span></p>
      </Collapse>
    </div>
  );
}

export default Example;