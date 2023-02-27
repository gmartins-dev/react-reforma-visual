import { nav } from '../database/data'

const Nav = () => {
  return (
    <nav>
      <ul className='flex gap-x-10'>
        {nav.map((item, index) => {
          const { href, name } = item
          return (
            <li key={index}>
              <a className='hover:text-redCustom transition' href={href}>
                {name}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
