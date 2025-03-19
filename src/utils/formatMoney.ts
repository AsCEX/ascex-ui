const formatMoney = (
    amount: number | string,
    currency: string | undefined = undefined,
    locale: string = 'en-PH'
): string => {
    if( isNaN(Number(amount))){
        return "";
    }

    const options: Intl.NumberFormatOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: currency ? 'currency' : undefined,
        currency: currency ? 'PHP' : undefined,
    }

    return new Intl.NumberFormat(locale, options).format(Number(amount));
}

export {
    formatMoney
}