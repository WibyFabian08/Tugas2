function checkYear(year: number): any {
    let date: number = 15
    let result: Array<string> = []
    const months: Array<string> = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    let stringDate: Array<string> = []
    let dataDate: Array<Date> = []

    months.forEach((data: string) => {
        stringDate.push(`${date} ${data} ${year}`)
    })

    stringDate.forEach((data: string) => {
        let newDate: Date = new Date(data)
        dataDate.push(newDate)

    })

    dataDate.forEach((data: any) => {
        let bufferDate: number = 15
        let tahun = data.getFullYear();
        let bulan = data.toLocaleString("id-ID", { month: "long" });
        let hari = data.toLocaleDateString("id-ID", { weekday: "long" });

        switch (hari) {
            case "Jumat":
                bufferDate += 3
                hari = "Senin"
                break;
            case "Sabtu":
                bufferDate += 2
                hari = "Senin"
                break
            case "Minggu":
                bufferDate += 1
                hari = "Senin"
                break
            default:
                break;
        }

        result.push(`Jadwal Renang adalah tanggal ${bufferDate} : ${hari}-${bulan}-${tahun}`)

    })

    return result
}

console.log(checkYear(2022))




