import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import Cart from '../Cart'
import { IoIosSearch } from 'react-icons/io'
import { Container } from './styles'

const Header: React.FC = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  function handleSearch(e: FormEvent) {
    e.preventDefault()

    router.push(`/search?q=${encodeURIComponent(search)}`)
  }

  return (
    <Container>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">
            Buscar
            <IoIosSearch size={30} />
          </button>
        </form>
      </div>
      <Cart></Cart>
    </Container>
  )
}

export default Header
