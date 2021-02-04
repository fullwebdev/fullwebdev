// Constructeur avec définition des attributs
function Square(height, width) {
  this.height = height;
  this.width = width;
}

// Définition d'une méthode
Square.prototype.grow = function () {
  this.width += 1;
};
