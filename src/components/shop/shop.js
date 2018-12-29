import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';

class Shop extends Component {

    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }

        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories();

        this.props.fetchShopProducts();
    }

    shouldComponentUpdate(nextProps) {
        if (this.props != nextProps) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id));
        }
        return true
    }

    onSubmit = (fields) => {
        this.props.filterProductsWithQuery(fields)
    }

    render() {
        return (
            <div className='shop'>
                <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar' />
                <ShopCart />
                <div className='shop__products'>
                    {
                        this.props.filteredProducts.map(product => {
                            return (
                                <ShopProduct {...product} key={product._id} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop;
    return {
        categories,
        filteredProducts
    }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;