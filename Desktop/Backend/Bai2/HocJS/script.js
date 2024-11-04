var button = document.querySelector("Button");
        button.onclick = function() {
            alert("hhi");
        }

var a = 10;
console.log(a);

const monHoc = [
    {
        ten: "Toan",
        diem: 9.5
    },
    {
        ten: "Van",
        diem: 8
    }

];

const so = [1,2,3,4,5,6,7,8];

const somoi = so.map((item)=>{
    if(item%2==1) return 1;
    else return 0;
});


const soLe = somoi.forEach((item, index)=>{
    if(item) 
})