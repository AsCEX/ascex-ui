const formatMoney = (
    amount: number | string,
    currency: string = 'PHP',
    locale: string = 'en-PH'
): string => {
    if( isNaN(Number(amount))){
        return "";
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(Number(amount));
}

export {
    formatMoney
}