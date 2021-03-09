let day = [
    null,
    ["01:00AM-05:00AM","4:00AM-6:00AM"],
    ["01:00AM-07:00AM"],
    null,
    ["01:00AM-05:00AM","4:00AM-6:00AM"],
    ["01:00AM-05:00AM","4:00AM-6:00AM"],
    ["01:00AM-05:00AM","4:00AM-6:00AM"],
]
let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let fullObj = new Object()
for(let i =0;i<7;i++){
    let item = new Object()
    item.index = week[i]
    item.con = 
}
// clear empty item
let noEmpty = day.filter(item => item)
console.log(noEmpty);
