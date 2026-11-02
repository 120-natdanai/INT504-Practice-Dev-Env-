// สร้างวันที่จากข้อความ string
const date = Temporal.PlainDate.from('2026-11-02');

console.log(date.toString()); //ต้องมี toString ถึงจะเห็นต่า
console.log(date.year);       
console.log(date.month);      
console.log(date.day);        
console.log(date.dayOfWeek);  // วันที่เท่าไหร่ของสัปดาห์ (1 = จันทร์, 7 = อาทิตย์)

const date2 = Temporal.Now.zonedDateTimeISO('asia/bangkok') //timezone
const date4 = Temporal.Now.zonedDateTimeISO()
console.log(date2.toString())
console.log(date2.year)
console.log(date4.toString())
console.log(date4.toPlainDate().toString())

const date3 = Temporal.Now.instant() //UTC
console.log(date3.toString())
console.log(date3.year) //undefined ต้องใส่ timezone ก่อน

const userTimeZone = Temporal.Now.timeZoneId()
console.log(userTimeZone)
const local = date3.toZonedDateTimeISO(userTimeZone) //แปลง UTC to local timezone
// const local2 = date3.toZonedDateTimeISO() ไม่ต้องสร้างข้างบนก็ได้
console.log(local.toString())
console.log(local.year) //ใช้ได้แล้ว


const today = Temporal.Now.instant()
console.log(today.toString())
// const tomorrow = today.add({ hours: 24 }) //UTC ใช้ได้เฉพาะหน่วย hr, min, sec, ... 
const tomorrow = today.toZonedDateTimeISO('asia/bangkok').add({days: 1}) //toZonedDateTimeISO() ห้ามว่างในวงเล็บ
console.log(tomorrow.toString())