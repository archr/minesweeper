const userNames = [
  'kahiko',
  'gainz',
  'love Casey',
  'unknown',
  'Jane',
  'SHIRUKEN',
  'Jesus is King',
  'unknown',
  'Bella'
]
const levels = [
  ['Expert', 50, 70],
  ['Intermediate', 11, 30],
  ['Beginner', 1, 10]
]
const initialState = {
  today: [],
  week: [],
  month: [],
  allTime: []
}

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

levels.forEach(arr => {
  const [level, min, max] = arr
  const names = [...userNames]

  Object.keys(initialState).forEach(filter => {
    for (let i = 0; i < 10; i++) {
      initialState[filter].push({
        name: names[getRandomInt(0, names.length - 1)],
        score: getRandomInt(min, max),
        level: level
      })
    }
  })
})

export function leaderboardReducer (state = initialState) {
  return state
}
