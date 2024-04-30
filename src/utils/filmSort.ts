

class filmSort {

    async byRating(data:any[], type:string):Promise<any[]> {
        let dataCopy = [...data];
        if(!type || type === "") return data;
        if(!Array.isArray(data)) return data;

        var i, j, temp;
        var swapped;
        const arrLen = data.length;

        for (i = 0; i < arrLen - 1; i++) 
        {
            swapped = false;
            for (j = 0; j < arrLen - i - 1; j++) 
            {
                if (type.toLocaleLowerCase() === "asc" 
                ? dataCopy[j].rating.kp > dataCopy[j + 1].rating.kp 
                : dataCopy[j].rating.kp  < dataCopy[j + 1].rating.kp 
                ) 
                {
                    temp = dataCopy[j];
                    dataCopy[j] = dataCopy[j + 1];
                    dataCopy[j + 1] = temp;
                    swapped = true;
                }
            }

            if (swapped == false)
            break;
        }
        return dataCopy;
    }
    async byName(data:any[], type:string) {

    }
}

export default new filmSort();