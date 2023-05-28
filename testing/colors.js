const colorsList = ['red', 'yellow', 'green', 'pink']

export function addColor(colors){
    for(let i=0;i<colorsList.length-1;i++)
        colors.push(colorsList[Math.random() * colorsList.length])
}
export function removeColor(colors){
    colors.pop()
}