function printHeader() {
    console.log('---- Page Header');
}

function printContent() {
    console.log('---- Page Content');
}

function printFooter() {
    console.log('---- Page Footer');
}

function printBody() {
    printHeader();
    printContent();
    printFooter();
}

printBody();