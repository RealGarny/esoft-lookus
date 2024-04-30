
export const changeTag = async(localElement:string, elementId:string|number, state:any, setState:undefined|((...args:any)=>void) = undefined):Promise<(string|number)[]> => {
    let tempState = state;
    let temp = [];

    let localArray:[] = await JSON.parse(localStorage.getItem(localElement)!);
    if(localArray === null) {
        localArray = [];
    }

    if(setState !== undefined) {
        setState(tempState);
    }

    if(tempState) {
        temp = [...localArray, elementId];
        localStorage.setItem(localElement, JSON.stringify(temp))
    } else {
        temp = localArray.filter(p => p !== elementId)
        localStorage.setItem(localElement, JSON.stringify(temp))
    }
    return temp;
}