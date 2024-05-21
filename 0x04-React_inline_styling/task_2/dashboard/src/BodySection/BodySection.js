import React from 'react'


class BodySection extends React.Component{
    render(){
        const {children,title} = this.props
        return(
        <div className="bodySection">
            <h2>{title}</h2>
            {children}
        </div>
        )
    }
}


export default BodySection
