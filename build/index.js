var obj1 = {
    title: "Masai",
    status: true,
    id: 3
};
var obj2 = {
    name: "Masai"
};
var obj3 = {
    name: "Masai",
    last_name: "School"
};
var printPerson = function (_a, _b) {
    var name = _a.name;
    var last_name = _b.last_name;
    console.log("".concat(name, " ").concat(last_name));
};
printPerson(obj2, obj3);
var PhoneBook = function (_a) {
    var email = _a.email, firstname = _a.firstname;
    console.log("".concat(firstname, " ").concat(email));
};
var arrPersons = [{
        prefix: "string",
        phones: [3, 4, 5, 6, 7],
        address: ["string"],
        email: "string",
        firstname: "string",
        lastname: "string",
        middlename: "string"
    }, {
        prefix: "string",
        phones: [3, 45, 89, 7],
        address: ["string"],
        email: "string",
        firstname: "string",
        lastname: "string",
        middlename: "string"
    }];
//# sourceMappingURL=index.js.map