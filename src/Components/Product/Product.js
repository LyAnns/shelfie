import React,{ Component } from "react";
import { Link, withRouter } from 'react-router-dom';

import './Product.css'
import axios from "axios";

class Product extends Component {

    deleteProduct() {
        const { product, history } = this.props;
        axios.delete('/api/product/' + product.id).then(res => {
            history.go(0);
        });
    }

    render() {
        
        const { product } = this.props;
        const editUrl = "/edit/"+product.id;
        return (
            <div className="Product">
                <div className="Product-img-box">
                    <img className="Product-img" src={product.img} alt="product"/>
                </div>
                <div className="Product-details">
                    <div className="Product-details-fields">
                        <div>{product.name}</div>
                        <div>${product.price}</div>
                    </div>
                    <div className="Product-buttons">
                        <button className="Product-button" onClick={this.deleteProduct.bind(this)}>Delete</button>
                        <Link className="Product-button" to={editUrl}>Edit</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Product);