import React, {Component} from "react";
import Product from "../Product/Product"
import './Dashboard.css'
import axios from "axios";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        axios.get("/api/inventory").then((res) => {
            const inventory = res.data
            this.setState({
                inventory
            })
        })
    }

    render() {
        const {inventory} = this.state;
        return (
            <div className="Dashboard">
                {inventory.map(product => <Product key={product.id} product={product}/>)}
            </div>
        );
    }
}

export default Dashboard;