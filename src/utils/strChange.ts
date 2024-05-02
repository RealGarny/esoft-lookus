const strChange = (actual:number, labels:string[]):number => {
    if(typeof(actual) !== "number") {
      console.error("strChange: provided parameter is not of type number");
      return 0;
    };

    let index:number = actual;

    if(actual < labels.length - 1) {
      index+=1;
    }
    else {
      index = 0;
    }
    return index;
}

export default strChange;