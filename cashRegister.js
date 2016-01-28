// Staff member object for holding discount values
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

// Example staff members
var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Donald", 20);

var cashRegister = {
    total: 0,
	// Save the total cost and the previous transaction in case of a mistake
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
	// Adds items * quantity to total
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
	// Call this to void the last addition to total
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Call to apply staff discount after total cost is calculated
    applyStaffDiscount: function(employee) {
        this.total -= this.total * (employee.discountPercent / 100);
    }
};

// Example transactions
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',4);

// Void the last transaction of 4 magazines, instead buy 3
cashRegister.voidLastTransaction();
cashRegister.scan('magazine', 3);

// Apply staff discount by passing any staff object to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));