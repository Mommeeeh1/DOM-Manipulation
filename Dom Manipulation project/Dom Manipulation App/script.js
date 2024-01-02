let students = [

    {name:"Karl",city:"Stockholm",age:21,totalMarks:300},
{name:"Nils",city:"Malmö",age:27,totalMarks:289},
{name:"Sven",city:"Göteborg",age:19,totalMarks:350},
{name:"Ulf",city:"Malmö",age:22,totalMarks:278},
{name:"Nina",city:"Visby",age:28,totalMarks:345},
{name:"Johan",city:"Uppsala",age:25,totalMarks:345},
{name:"David",city:"Malmö",age:22,totalMarks:200},
{name:"Stefan",city:"Stockholm",age:21,totalMarks:300},
{name:"Anders",city:"Göteborg",age:27,totalMarks:289},
{name:"Oscar",city:"Visby",age:19,totalMarks:350},
{name:"Henrik",city:"Malmö",age:22,totalMarks:278},
{name:"Eva",city:"Visby",age:28,totalMarks:345},
{name:"Gustav",city:"Uppsala",age:25,totalMarks:345},
{name:"Isak",city:"Stockholm",age:22,totalMarks:200},
{name:"Carl",city:"Göteborg",age:27,totalMarks:289},
{name:"Viktor",city:"Visby",age:19,totalMarks:350},
{name:"Hugo",city:"Malmö",age:22,totalMarks:278},
{name:"Linnéa",city:"Visby",age:28,totalMarks:345},
{name:"Emelie",city:"Visby",age:28,totalMarks:345},
{name:"Sara",city:"Malmö",age:21,totalMarks:300},
{name:"Olle",city:"Stockholm",age:27,totalMarks:289},
{name:"Ellinor",city:"Visby",age:28,totalMarks:345},
{name:"Simon",city:"Malmö",age:21,totalMarks:300},
{name:"Adam",city:"Stockholm",age:27,totalMarks:289},

    

]

let filterStudents = students;

let noOfPages = Math.ceil(students.length/8);
let currentPage=1;

// logic for generating 
for(let i=1;i<=noOfPages;i++)
{
    let btn=document.createElement("button");
    btn.innerText=i;

    btn.addEventListener("click",function(){
        currentPage=i;
        paginate(currentPage);
    })

    document.getElementById("nums").appendChild(btn);
}


document.getElementById("next")
.addEventListener("click",function(){

    if(currentPage<noOfPages)
    {
        currentPage++;
        paginate(currentPage);
    }
   

})

document.getElementById("prev")
.addEventListener("click",function(){

    if(currentPage>1)
    {
        currentPage--;
        paginate(currentPage);
    }
   

})


document.getElementById("search")
.addEventListener("keyup",function(){

    let val = document.getElementById("search").value ;

    filterStudents = students.filter(function(student){
        return student.name.includes(val);
    })

    currentPage=1;
    paginate(1);
   

})



// initial call 
paginate(1);


function paginate(pageNumber)
{

    let startIndex = (pageNumber-1)*8;
    let endIndex = startIndex+8;
    let paginatedData = filterStudents.slice(startIndex,endIndex);

    document.getElementById("info").innerText=currentPage+" of "+noOfPages;

    document.getElementById("tbody").innerHTML="";

    for(let i=0;i<paginatedData.length;i++)
    {
        let row =  document.createElement("tr");

        let noTd = document.createElement("td");
        noTd.innerText=startIndex+i+1;

        let nameTd=document.createElement("td");
        nameTd.innerText=paginatedData[i].name;

        let ageTd=document.createElement("td");
        ageTd.innerText=paginatedData[i].age;

        let cityTd=document.createElement("td");
        cityTd.innerText=paginatedData[i].city;

        let tmTd=document.createElement("td");
        tmTd.innerText=paginatedData[i].totalMarks;

        // row.appendChild(noTd);
        // row.appendChild(nameTd);
        // row.appendChild(ageTd);
        // row.appendChild(cityTd);
        // row.appendChild(tmTd);

        row.append(noTd,nameTd,ageTd,cityTd,tmTd);
        

        document.getElementById("tbody").appendChild(row);
    }

}


let num1 = 12
let num2 = 13

let res = num1+num2 

console.log(res)