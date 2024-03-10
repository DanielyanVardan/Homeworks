//ex 1
function reverseNumber(num, reversed =0){
	
	if(num===0){
		return reversed;
	}
	const lastDigit=num%10;
	reversed = reversed*10+lastDigit;
	return reverseNumber(Math.floor(num/10), reversed);
}
console.log(reverseNumber(2));
//ex 2
function occurance(arr, num, i, occur){
	if(arr.length===0){
		return -1;
	}
	if(arr[i]===num){
		occur++;
	}
	if(occur===2){
		return i
	}
	return occurance(arr, num, i+1, occur);
}
let arr =[1,1,5,6,8,9,5];
console.log(occurance(arr, 1, 0, 0));
//ex 3
function numOfSubstrings(str,substr, count=0){
    if(str.length<substr.length){
        return count;
    }
    if(str.substring(0,substr.length)===substr){
    return numOfSubstrings(str.substring(substr.length),substr,count + 1);
}
else{
    return numOfSubstrings(str.substring(1), substr, count);
}
}
console.log(numOfSubstrings("Are var far shared", "ar"));
//ex4
function piString(str){
    str.toLowerCase();
    if(str.length===0){
        return "";
    }else if(str.length===1){
        return str;
    }else if(str.substring(0,2)==="pi"){
        return "3.14" + piString(str.substring(2));
    }else{
       return str[0]+piString(str.substring(1));
    }
}
console.log(piString("pipilipupi"));
//ex 6
function digitSum(num, res=0){
    if(num===0 && res<10){
        return res;
    }else if(res>=10){
        return digitSum(res);
    }
    res += num%10;
    return digitSum(Math.floor(num/10),res)
}
console.log(digitSum(88));

//ex5

function flattenArray(arr){
    let flattenedArray = [];
    arr.forEach(element => {
        if(Array.isArray(element)){
            flattenedArray = flattenedArray.concat(flattenArray(element));
        }else{
            flattenedArray.push(element)
        }
    });
    return flattenedArray;
}

const nestedArray = [14, [1, [[[3, []]], 1], 0]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);








