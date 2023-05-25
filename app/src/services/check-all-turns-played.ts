import { Square } from '../types/square';

export default function checkAllTurnsPlayed(squares: Square[]): boolean {
  const unplayed = squares.filter(s => s.value === undefined);
  return unplayed.length === 0;
}
