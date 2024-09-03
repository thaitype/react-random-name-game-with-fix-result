import { createLazyFileRoute } from '@tanstack/react-router'
import GamePanel from './components/GamePanel'

export const Route = createLazyFileRoute('/play')({
  component: Play,
})

function Play() {
  return <GamePanel />
}