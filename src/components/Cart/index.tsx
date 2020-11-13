import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

import { Container } from './styles'

const Cart: React.FC = () => {
  return (
    <Container>
      <div>
        <FiShoppingCart size={30} color="#FFF" />
        <span>10 Itens</span>
      </div>
    </Container>
  )
}

export default Cart
