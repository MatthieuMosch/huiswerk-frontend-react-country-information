// convert an amount to millions or thousands if the amount is large enough

function convertAmount(amount) {
    switch (true) {
        case Math.round((amount / Math.pow(10, 3))) === 0 : //for small countries Vatican City
            return amount.toString();
        case Math.round((amount / Math.pow(10, 6))) === 0: //for not-so-big countries like Aruba
            return Math.round(amount / Math.pow(10, 3)).toString() + " thousand";
        default:
            return Math.round(amount / Math.pow(10, 6)).toString() + " million";
    }
}

export default convertAmount;