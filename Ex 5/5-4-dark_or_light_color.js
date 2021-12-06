function str(stringColor){
    switch(stringColor.toLowerCase()){
        case 'orange':
        case 'pink':
        case 'yellow': console.log('light color')
        break;
        case 'blue': 
        case 'purple': 
        case 'brown': console.log('dark color')
        break;
        default: console.log('Unknown Color')
    }
}