const strChange = (actual:number, labels:string[]):number|null => {
    if(typeof(actual) !== "number") return null;

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