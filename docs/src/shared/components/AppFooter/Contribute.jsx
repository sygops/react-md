import React, { PureComponent } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import Button from 'react-md/lib/Buttons';

import { GITHUB_LINK } from 'constants';

export default class Contribute extends PureComponent {
  render() {
    return (
      <div className="contribute">
        <h4 className="md-title">Contributing</h4>
        <p className="md-body-2">
          This project is currently developed by a single person. Feel free
          to contribute!
        </p>
        <Button flat secondary label="Github" href={GITHUB_LINK}>
          <FontIcon iconClassName="fa fa-github" />
        </Button>
      </div>
    );
  }
}