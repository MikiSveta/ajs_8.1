import Team from '../js/team';
import { zombie, daemon, undead } from '../js/character';

test('add player', () => {
  const result = new Team();
  result.add(daemon);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([{ name: 'Daemon' }]);
});

test('error player', () => {
  function resultExpectError() {
    const result = new Team();
    result.add(daemon);
    result.add(daemon);
    return result.toArray();
  }
  expect(resultExpectError).toThrow(new Error('Персонаж уже в команде'));
});

test('add players', () => {
  const result = new Team();
  result.addAll(daemon, zombie, undead);
  const resultArray = result.toArray();
  expect(resultArray).toEqual([{ name: 'Daemon' }, { name: 'Zombie' }, { name: 'Undead' }]);
});
