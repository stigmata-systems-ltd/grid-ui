import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import TabContent from "./TabContent";
import PieChart from "./PieChart";
class Dashboard extends Component {
    
    render() {
        return (
            <ContentLoader>
                <TabContent />
                <PieChart />
            </ContentLoader>
        )
    }
}

export default Dashboard;