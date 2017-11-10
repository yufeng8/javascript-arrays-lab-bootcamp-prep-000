const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kittens) {
  console.log(kittens)
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(kittens) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(kittens) {
  return [...kittens, "Broom"]
}

function prependKitten(kittens) {
  return ["Arnold", ...kittens]
}

function removeLastKitten() {
  return kittens.slcie(0, kittens.length-1)
}

function removeFirstKitten() {
  return kittens. slice(1)
}
