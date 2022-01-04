import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// selectors
import { selectDirectorySections } from "../../redux/directory/directory.selector";

// component
import MenuItem from "../menu-item/menu-item.component";

// style
import "./directory.style.scss";

const Directory = ({ sections }) => (
  <div className="directory">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
