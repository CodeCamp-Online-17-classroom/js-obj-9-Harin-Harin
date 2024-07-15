let ectjob = {};
while(true){
let key = prompt("กรุณาใส่ key หรือพิมพ์ stop");
if (key.toLowerCase() === 'stop') {
  break;
}
let value = prompt(`กรุณาใส่ value ของ ${key}`);
ectjob[key] = value;
}
console.log('Object:',ectjob);
for (let key in ectjob) {
  alert(`Key: ${key}, Value: ${ectjob[key]}`);
}
