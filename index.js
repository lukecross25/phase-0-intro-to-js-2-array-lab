const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(string) {
cats.push(string);
return cats;
}
destructivelyAppendCat('Ralph')

    function destructivelyPrependCat(string) {
cats.unshift(string);
return cats;
}
destructivelyPrependCat('Bob') 
    function destructivelyRemoveLastCat() {
    cats.pop()
        return cats
}
    function destructivelyRemoveFirstCat() {
        cats.shift()
        return cats
    }
    function appendCat(string) {
        appendCat = cats.slice();
        appendCat.push(string);
        return appendCat
    }
    appendCat("Broom")
    function prependCat(string) {
        prependCat = cats.slice();
        prependCat.unshift(string);
        return prependCat
    }
    function removeLastCat() {
        removeLastCat = cats.slice(0, -1);
        return removeLastCat
    }

    function removeFirstCat() {
       removeFirstCat = cats.slice(1);
       return removeFirstCat
    }
