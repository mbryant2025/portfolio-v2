import React from 'react';
import '../styles/columns.css';

// Arbitrary number of columns, in mobile, they are stacked
// In desktop, they are side by side

interface OptionalColumnsProps {
    children: React.ReactNode;
    forceColumns?: boolean;
    forceRows?: boolean;
    reverse?: boolean;
    noMarginBottom?: boolean;
}

const OptionalColumns: React.FC<OptionalColumnsProps> = ({ children, forceColumns, forceRows, reverse, noMarginBottom }) => {
    return (
        <div className={`columns ${forceColumns ? 'force-columns' : ''} ${reverse ? 'reverse' : ''} ${forceRows ? 'force-row' : ''} ${noMarginBottom ? 'no-margin-bottom' : ''}`}>
            {children}
        </div>
    );
};

export default OptionalColumns;