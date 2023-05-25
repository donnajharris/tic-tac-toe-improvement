import checkAllTurnsPlayed from '../../../src/services/check-all-turns-played';
import { Player } from '../../../src/types/player';
import { Square } from '../../../src/types/square';

describe('/service/check-all-turns-played', () => {

  it('should indicate all turns have been played - stalemate', () => {

    // arrange
    const players: Player[] = [
      'x', 'o', 'x',
      'x', 'o', 'x',
      'o', 'x', 'o'
    ];
    const expected = true;

    // act & assert
    runTest(players, expected);

  });

  it('should indicate all turns have been played - win', () => {

    // arrange
    const players: Player[] = [
      'x', 'o', 'x',
      'x', 'o', 'o',
      'x', 'x', 'o'
    ];
    const expected = true;

    // act & assert
    runTest(players, expected);

  });

  it('should indicate there are remaining turns - no turns played', () => {

    // arrange
    const players: Player[] = [
      undefined, undefined, undefined,
      undefined, undefined, undefined,
      undefined, undefined, undefined
    ];
    const expected = false;

    // act & assert
    runTest(players, expected);
  });

  it('should indicate there are remaining turns - game in progress', () => {

    // arrange
    const players: Player[] = [
      'x', 'o', 'x',
      'x', 'o', 'o',
      undefined, 'x', 'o'
    ];
    const expected = false;

    // act & assert
    runTest(players, expected);
  });

  function runTest(players: Player[], expected: boolean) {

    // arrange
    const squares = makeSquares(players);

    // act
    const actual = checkAllTurnsPlayed(squares);

    // assert
    expect(actual).toEqual(expected);

  }

  function makeSquares(players: Player[]): Square[] {
    const squares = [];
    for (let id = 0; id < players.length; id++) {
      squares.push({ id, value: players[id], win: false });
    }
    return squares;
  }

});

/* remove this comment later */
