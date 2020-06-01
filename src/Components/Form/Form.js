import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Form.css'

const placeholderImg = '/no-img.jpeg';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: -1,
                img: '',
                name: '',
                price: 0
            }
        }
    }

    componentDidMount() {
        const { mode } = this.props;
        if (mode === 'edit') {
            const { id } = this.props.match.params;
            axios.get("/api/product/"+id).then((res) => {
                const product = res.data
                this.setState({
                    product
                })
            })
        }
    }

    cancel() {
        this.props.history.push('/')
    }

    addProduct() {
        const {product} = this.state;
        const {history} = this.props;
        axios.post('/api/product', product).then(res => {
            history.push('/');
        });
    }

    updateProduct() {
        const {product} = this.state;
        const {history} = this.props;
        axios.put('/api/product/' + product.id, product).then(res => {
            history.push('/');
        });
    }

    updatePrice(event) {
        const {product} = this.state;
        product.price = parseInt(event.target.value)
        this.setState({
            product
        });
    }

    updateImg(event) {
        const {product} = this.state;
        product.img = event.target.value
        this.setState({
            product
        });
    }

    updateName(event) {
        const {product} = this.state;
        product.name = event.target.value
        this.setState({
            product
        });
    }

    render() {
        const {mode} = this.props;
        const {product} = this.state;

        let srcImg
        if (product.img.length === 0) {
            srcImg = placeholderImg
        } else {
            srcImg = product.img
        }

        let saveButtonLabel
        let saveCallback

        if (mode === 'add') {
            saveButtonLabel = 'Add to Inventory'
            saveCallback = this.addProduct.bind(this);
        } else {
            saveButtonLabel = 'Save Changes'
            saveCallback = this.updateProduct.bind(this);
        }

        return (
            <div className="Form">
                <div className="Form-img-box">
                    <img className="Form-img" src={srcImg} alt="product"/>
                </div>
                <div className="Form-input-row">
                    <div>Image URL:</div>
                    <input className="Form-input" value={product.img} onChange={this.updateImg.bind(this)}/>
                </div>
                <div className="Form-input-row">
                    <div>Product Name:</div>
                    <input className="Form-input" value={product.name} onChange={this.updateName.bind(this)}/>
                </div>
                <div className="Form-input-row">
                    <div>Price:</div>
                    <input className="Form-input" value={product.price} onChange={this.updatePrice.bind(this)}/>
                </div>
                <div className="Form-buttons">
                    <button className="Form-button" onClick={this.cancel.bind(this)}>Cancel</button>
                    <button className="Form-button" onClick={saveCallback}>{saveButtonLabel}</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Form);