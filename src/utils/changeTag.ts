
export const changeTag = async(localElement:string, elementId:string|number, setState:(...args:any)=>void, state:any):Promise<(string|number)[]> => {
    const stateSave = !state;
    let temp = [];

    let localArray:[] = await JSON.parse(localStorage.getItem(localElement)!);
    if(localArray === null) {
        localArray = [];
    }
    setState(stateSave)

    if(stateSave) {
        temp = [...localArray, elementId];
        localStorage.setItem(localElement, JSON.stringify(temp))
    } else {
        temp = localArray.filter(p => p !== elementId)
        localStorage.setItem(localElement, JSON.stringify(temp))
    }
    return temp;
}