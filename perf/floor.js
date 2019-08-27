const suite = new Benchmark.Suite;

const input = 5.9;

suite.add('double Bitwise not', function() {
  ~~input;
})
.add('Math.floor', function() {
  Math.floor(input)
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
