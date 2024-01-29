




export type FormatsDate = 'yyyy-mm-dd'

export const formatDateNow = ({ date, format }: { date: Date, format: FormatsDate }) => {



    if (format === `yyyy-mm-dd`) {

        const numDate = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const monthValid = ((month >= 1) && (month <= 9)) ? `0${month}` : `month`

        return `${year}-${monthValid}-${numDate}`
    }

    else {
        return ``
    }


}
