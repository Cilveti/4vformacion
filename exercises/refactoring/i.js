// Add object to inventory and get the inventory
function updInv(i, inv) {
    if (Array.isArray(i)) {
      for (var j = 0; j < i.length; j++) {
        inv.push(i[j]);
      }
      return true;
    } else {
      if (i != undefined) {
        if (i.name != undefined && i.price != undefined) {
          inv.push(i);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  
  function invToStr(inv) {
    var str = "";
    for (var i = 0; i < inv.length; i++) {
      str += inv[i].name + " - " + inv[i].price + " €\n";
    }
    return str;
  }
  
  // requisitos del programa
  // 1. Debo poder agregar un item al inventario
  // 2. Solo los items validos deben ser agregados al inventario
  // 3. Debo poder agregar un array de items al inventario
  // 4. Debo poder obtener una representacion en string del inventario
  
  // nuevo requisito
  // - si el item tiene un precio negativo, no debe ser agregado al inventario
  
  // Ejemplo de uso
  var item1 = {
    name: "Laptop",
    price: 1000,
  };
  
  var item2 = {
    name: "Mouse",
    price: 25,
  };
  
  var arrayDeitems = [
    {
      name: "Monitor",
      price: 200,
    },
    {
      name: "Keyboard",
      price: 50,
    },
  ];
  
  const inventory = [];
  
  // Agregar items individuales
  console.log(updInv(item1, inventory)); // true
  console.log(updInv(item2, inventory)); // true
  
  // Agregar array de items
  console.log(updInv(arrayDeitems, inventory)); // true
  
  console.log(invToStr(inventory));