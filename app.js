let ectjob = {};
let key = prompt("กรุณาใส่ key หรือพิมพ์ stop");
while(key.toLowerCase() !== 'stop'){
let value = prompt(`กรุณาใส่ value ของ ${key}`);
ectjob[key] = value;
key = prompt("กรุณาใส่ key หรือพิมพ์ stop");
}
console.log('Object:',ectjob);

for (let key in ectjob) {
  alert(`Key: ${key}, Value: ${ectjob[key]}`);
}
