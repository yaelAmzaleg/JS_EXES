//Section 1: Variable Swap Without Temp
let a = "some string";
let b = "other string";
function replace(a,b)
{
    [a,b]=[b,a]
    console.log(a);
    console.log(b)
}
replace(a,b)
//Section 2: 2D Grid Count
const arr=[['x','X','Y','C','a']
,['x','X','Y','C','a']
,['x','X','Y','C','a']
,['x','X','Y','C','a']
,['x','X','Y','C','a']]
function GetCount(arr)
{
    let count=0
    for(const i in arr)
    {
        for(const j in arr[i])
        {
            if(arr[i][j]==='X')
                count++;
        }
    }
    console.log(count)
}
GetCount(arr);
//Section 3: Nested Object Read
let family = 
{ parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
function GetChild(family)
{
   console.log(family.children[2].name)
   let allnames=family.children.map(child=>child.name).join(", ")
   console.log(allnames);
}
GetChild(family)
//Section 4: Manual Reverse
let arr4=[5,4,3,2,1]
for(i=0;i<arr4.length / 2;i++)
{
let temp=arr4[i]
arr4[i]=arr4[arr.length- i -1]
arr4[arr4.length -i-1]=temp
}
console.log(arr4);
//Section 5: Type Collector
