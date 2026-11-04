const cfg = window.INT504 ?? {}
const url = cfg.schedulesUrl ?? ""
const tbody = document.getElementById('tbody-schedule')

const modal = document.getElementById('modal')
//TC-PBI1-9, TC-PBI1-10 ต้องใช้ระดับ document แทนระดดับ dialog cancel, close
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        event.preventDefault()
    }
})

function formatDay(day) {
    //TC-PBI1-7 backend ส่งมาเป็น MONDAY แล้วเราต้องทำเป็น Monday 
    const lower = day.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
} 


function render(schedules) {
    tbody.replaceChildren()

    if (schedules.length === 0) {
        const emptyMessage = document.getElementById('empty-message')
        emptyMessage.style.display = 'block'
        return
    }

    schedules.forEach((schedule)=> {
        const {
            course: {code, title, type, yearLevel}, 
            section, 
            startWeek, 
            endWeek, 
            dayOfWeek, 
            startTime, 
            endTime, 
            studentGroup, 
            remarks
        } = schedule

        const tr = document.createElement('tr')
        tr.dataset.testid = "schedule-row"

        const fields = [
            ['code', code],
            ['title', title],
            ['type', type],
            ['section', section],
            ['group', studentGroup ?? ""],
            ['day', formatDay(dayOfWeek)], //แปลงวัน
            ['time', `${startTime}-${endTime}`],
            ['weeks', `${startWeek}-${endWeek}`],
            ['remarks', remarks ?? ""]
        ]

        fields.forEach(([testid, text])=> {
            const td = document.createElement('td')
            td.textContent = text
            td.dataset.testid = testid //TC-PBI1-7 ไม่งั้นเช็กไม่ผ่าน ขึ้น missing data
            tr.appendChild(td)
        })

        tbody.appendChild(tr)
    })
}

async function load() {
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error(`the server answered ${res.status}`)
        render(await res.json())
    } catch (error) {
        modal.showModal()
    }
}

load()