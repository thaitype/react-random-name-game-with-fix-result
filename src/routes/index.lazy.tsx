import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
        <div style={{
        backgroundColor: 'lightgray',
      }}>
        <Link to="/" className="[&.active]:font-bold" style={{
          padding: '2rem',
        }}>
          Home
        </Link>{' '}
        <Link to="/play" search={{
          foo: 'bar',
        }} className="[&.active]:font-bold" style={{
          padding: '2rem',
        }}>
          Play
        </Link>
      </div>
    </div>
  )
}
