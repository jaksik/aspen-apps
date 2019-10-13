import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import "./collapse.css"

const Example = (props) => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div className="service-cell">
      <span onClick={toggle} className="collapse-toggle" style={{ marginBottom: '1rem', color: `blue` }}>{props.service.service}</span>
      <Collapse isOpen={collapse}>
        <p>{props.service.description}</p>
      </Collapse>
    </div>
  );
}

export default Example;