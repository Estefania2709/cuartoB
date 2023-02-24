function contador(palabras){
    let contar = 0;
    let palabrasNum = false;
    for (let i = 0; i < palabras.length; i++) {
      if(palabras[i] =="" && !palabrasNum){
        palabrasNum=true;
        contar++;
      }
        else if(palabras[i === "" && palabrasNum]){
          palabrasNum = false;
        }
    }
    return contador;
  }

console.log(contador("El día está soleado y parece que hará mucho calor"));