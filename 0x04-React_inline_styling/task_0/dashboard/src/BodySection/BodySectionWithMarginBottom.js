import React from 'react'
import BodySection from './BodySection'
import './BodySectionWithMarginBottom.css'
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends React.Component{
    render() {
        return(
            <div className="bodySectionWithMargin" >
                < BodySection {...this.props} />
            </div>
        )
    }
}

export default BodySectionWithMarginBottom

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string
}

BodySectionWithMarginBottom.defaultProps = {
    title : ''

}