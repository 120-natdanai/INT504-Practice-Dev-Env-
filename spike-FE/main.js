const date1 = new Date()

const head = document.getElementById('head')
const p1 = document.getElementById('day1')
p1.addEventListener('click', ()=> {
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')
    li1.textContent = `now: ${new Date ()}`
    li2.textContent = `7 days later: ${new Date(Date.now() + (1000*60*60*24*7))}`
    ul.appendChild(li1)
    ul.appendChild(li2)
    head.appendChild(ul)
})

const b2 = document.getElementById('day2')
b2.addEventListener('click',()=> {
    const p = document.createElement('p')
    const date = new Date()
    p.textContent = `Month (0 = Jan): ${date.getMonth()}`
    head.appendChild(p)
})

const b3 = document.getElementById('day3')
b3.addEventListener('click', ()=> {
    const p = document.createElement('p')
    const formatter = new Intl.DateTimeFormat('th-TH', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    const date = new Date()
    console.log(date)
    console.log(formatter.format(date))
    p.textContent = `Th format: ${formatter.format(date)}`
    head.appendChild(p)
})
