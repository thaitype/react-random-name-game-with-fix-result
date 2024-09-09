import { Paper, Text } from '@mantine/core'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { GameConfig } from './components/GameConfig'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="center-wrapper">
      <div className="p-2">
        {/* <div style={{
          backgroundColor: 'lightgray',
        }}> */}
        {/* <Link to="/" className="[&.active]:font-bold" style={{
            padding: '2rem',
          }}>
            Home
          </Link>{' '} */}
        {/* <Link to="/play" search={{
            foo: 'bar',
          }} className="[&.active]:font-bold" style={{
            padding: '2rem',
          }}>
            Play
          </Link> */}
        {/* </div> */}

        {/* <div style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <textarea className='textarea' placeholder="Type your text here..."></textarea>
          <Link to="/play" search={{
            foo: 'bar',
          }} className="blue-button">
            Play
          </Link>
        </div> */}
        <GameConfig />
      </div>
    </div>
  )
}
