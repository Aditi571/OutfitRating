// ProgressBar.js
import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ percentage }) => {
  // Ensure the percentage is between 0 and 100
  const clampedPercentage = Math.max(0, Math.min(percentage, 100));

  return (
    <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
      <div
        style={{
          width: `${clampedPercentage}%`,
          backgroundColor: '#4caf50',
          height: '30px',
          textAlign: 'center',
          lineHeight: '30px',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '5px',
        }}
      >
        {clampedPercentage}%
      </div>
    </div>
  );
};

// Define default props and prop types
ProgressBar.defaultProps = {
  percentage: 74,
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

export default ProgressBar;
