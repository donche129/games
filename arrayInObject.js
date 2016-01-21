var friends = {}

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "555-5555",
    address: ['One Microsoft Way', 'Redmond','WA','98052']
};

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "555-4444",
    address: ['Two Microsoft Way', 'Redmond','WA','98052']
};

var list = function (friends) {
    for (var key in friends) {
        console.log(key)   
    }   
}

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
}

list(friends);

search("Bill");

console.log("Done!");