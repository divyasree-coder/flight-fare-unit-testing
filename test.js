function calculateFare(seatType, basePrice, tax) {
    let extra = 0;

    if (seatType === "Economy") extra = 0;
    else if (seatType === "Business") extra = 1000;
    else if (seatType === "FirstClass") extra = 2000;

    return basePrice + extra + (basePrice * tax);
}

function test(name, expected, actual) {
    if (expected === actual) {
        console.log(`✅ PASS: ${name}`);
    } else {
        console.log(`❌ FAIL: ${name} | Expected: ${expected}, Got: ${actual}`);
    }
}

test(
    "Economy seat fare",
    5900,
    calculateFare("Economy", 5000, 0.18)
);

test(
    "Business seat fare",
    6900,
    calculateFare("Business", 5000, 0.18)
);

test(
    "FirstClass seat fare",
    7900,
    calculateFare("FirstClass", 5000, 0.18)
);
