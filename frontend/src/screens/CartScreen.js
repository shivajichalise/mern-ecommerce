import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDespatch, useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Cart } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  // console.log(qty)

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    } else {
    }
  }, [dispatch, productId, qty])

  return <div>Cart</div>
}

export default CartScreen
