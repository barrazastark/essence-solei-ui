import React from "react";

import cx from "classnames";

import "./PageWrapper.scss";

export const blockName = "page-wrapper";

const PageWrapper = ({ className, children }) => (
  <div className={cx(blockName, className)}>{children}</div>
);

export default PageWrapper;
