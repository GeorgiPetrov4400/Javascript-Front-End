function townsParser(input) {
    for (const line of input) {
        let [town, latitude, longitude] = line.split(' | ');
        let townObject = {town, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2)};
        console.log(townObject);
    }
}

townsParser(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )