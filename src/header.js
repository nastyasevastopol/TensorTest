import React from 'react';
export class Header extends React.Component {
        //   <img className="information__logo" src="img/logo.jpg" alt="Логотип"/>
    render() {
        return  <div className  ="information">
                        
                        <div className="information__title title" title={this.props.title}>{this.props.title}</div>
                        <div className="information__subtitle" title={this.props.description}>{this.props.description}</div>
                </div>
        }
}