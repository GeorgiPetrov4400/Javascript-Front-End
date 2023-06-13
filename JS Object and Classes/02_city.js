function cityInfo(city) {
    let keys = Object.keys(city);
    for (const key of keys) {
        console.log(`${key} -> ${city[key]}`)
    }
}

cityInfo({
    name: "Sofia",
    area: 492,
    population: 123456,
    country: "Bulgaria",
    postCode: "1000"
})