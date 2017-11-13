var katzDeli = []
var otherDeli = ["Steven", "Blake", "Avi"]
var line = ["Bill", 'Jane', 'Ann']

function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(otherDeli) {
  let i = 0
  while (i < otherDeli.length) {
    i++
  }
  if (otherDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else
      return (`Currently serving ${otherDeli.shift()}.`)
}

function currentLine(line) {
  let i = 0
  while (i < line.length) {
    line.push(` `+[i+1]+`. `  + line[i])
    i++
  }
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else
    return (`The line is currently:` + line)
}
