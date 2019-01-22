class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) {
  }
}

let octopus = new Octopus("octotco")
console.log(octopus.name)