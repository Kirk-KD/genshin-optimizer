import { hammingDistance, levenshteinDistance, extractJSON } from './string'
describe('test  @genshin_optimizer/util/string', () => {
  it('test hammingDistance', () => {
    expect(hammingDistance('Pyro DMG Bonus', 'Cryo DMG Bonus')).toEqual(1)
    expect(hammingDistance('Pyro DMG Bonus', 'Dendro DMG Bonus')).toEqual(16)
  })

  it('test levenshteinDistance', () => {
    expect(levenshteinDistance('Pyro DMG Bonus', 'Cryo DMG Bonus')).toEqual(3)
    expect(levenshteinDistance('Pyro DMG Bonus', 'Dendro DMG Bonus')).toEqual(4)
    expect(levenshteinDistance('Dendro DMG Bonus', 'endro DMG Bonu')).toEqual(2)
  })

  it('test extractJSON', () => {
    expect(extractJSON('Text with emoji👍🏻 {"name": "Build Name", "nested": {"one": 1, "list": [1, 2, 3]}} more words')).toEqual({"name": "Build Name", "nested": {"one": 1, "list": [1, 2, 3]}})
    expect(extractJSON('{"only": "JSON"}')).toEqual({"only": "JSON"})
    expect(extractJSON('No JSON here')).toEqual(null)
    expect(extractJSON('')).toEqual(null)
    expect(extractJSON('Incomplete JSON {"hello":}')).toEqual(null)
  })
})
