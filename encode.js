// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compil
function encode(dataToEncode)
{
const dataTypeOfData = typeof dataToEncode;
switch(dataTypeOfData){
case 'number':
    return encodeInt(dataToEncode);
    break;
case 'string':
    return encodeString(dataToEncode );
   break;
case 'object':
    return encodeList(dataToEncode);
    break;
}}
function encodeInt(dataToEncode)
{
return 'i'+dataToEncode+'e';
}
function encodeString(dataToEncode){
    return dataToEncode.length + ":" + dataToEncode;
}
function encodeList(dataToEncode)
{
    return 'l'+encodeEle(dataToEncode)+'e';
}
function encodeEle(dataToEncode){
    let i;
    let output= '';
    for(i = 0; i<dataToEncode.length;i++)
    {
        output = output + encode(dataToEncode[i]);
    
}
return output;
}

console.log(encode(123));
console.log(encode(-56));
console.log(encode('hello'));
console.log(encode('specialchars@$&#'));
console.log(encode([]));
console.log(encode(['apple',1]));
console.log(encode(['apple',123,['banana',-56]]));
console.log(encode([0,"",["test"]]));
console.log(encode(["",0,[]]));
