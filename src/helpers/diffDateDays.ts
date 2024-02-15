// Function to calculate the difference in days between two dates

export function diffDateDays({ initialDate, endDate }: { initialDate: string, endDate: string }): number {

    console.log({ initialDate, endDate })

    const objInitialDate = new Date(`${initialDate}T00:00:00Z`)

    console.log(objInitialDate)
    const objEndDate = new Date(`${endDate}T00:00:00Z`)
    console.log(objEndDate)


    const differenceInMilliseconds = objEndDate.getTime() - objInitialDate.getTime();

    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return differenceInDays;
}

