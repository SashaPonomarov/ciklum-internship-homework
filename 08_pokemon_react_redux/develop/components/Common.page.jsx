import React, { Component, PropTypes } from 'react';

class CommonPage extends Component {
    render() {
        const { handleCommonAction } = this.props;

        return (
            <div
              onClick={handleCommonAction}
            >
                <h1>Common</h1>
            </div>
        );
    }
}

CommonPage.propTypes = {
    handleCommonAction: PropTypes.func,
};

export default CommonPage;
