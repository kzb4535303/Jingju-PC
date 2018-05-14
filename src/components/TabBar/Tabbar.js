import React  from 'react';
import './Tabbar.scss'
import { withRouter } from "react-router-dom";

class Tabbar extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(url) {
        return (
            () =>{
                this.props.history.push(url)
            }
        )

    }
    render() {
        const Tabs = [{ title: '新居',link: '/NewHome' }, { title: '二手居', link: '/ownerSold' }, { title: '轻活', link: '/EasyLive' }]
        const TabsList = Tabs.map((item, index) => {
            return(
                <div onClick={this.handleClick(item.link)} key={index}>
                    {item.title}
                </div>
            )
        })
        return (
            <div className="tab-container">
                {/* tabbar */}
                <div className="flex-row">
                    { TabsList }
                </div>
            </div>
        )
    }
}
export default withRouter(Tabbar)
