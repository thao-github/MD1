
class People {
    name;
    age;
    gender;
    address;
    people = [];

    constructor(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age
    }

    setAge(age) {
        this.age = age
    }

    getGender() {
        return this.gender
    }

    setGender(gender) {
        this.gender = gender
    }

    getAddress() {
        return this.address
    }

    setAddress() {
        this.address = address
    }

    display(name, age, gender, address) {
        let list = document.getElementById("display")
        let data = "<table><tr><th><h4> Person </h4></th><th colspan='5' style='text-align:right'>" + people.length + "people" + "</th></tr>"
        for (let i = 0; i < people.length; i++) {
            data += "<tr>"
            data += "<td>" + this.name + "</td>"
            data += "<td>" + this.age + "</td>"
            data += "<td>" + this.gender + "</td>"
            data += "<td>" + this.address + "</td>"
            data += "<td>" + "<button onclick='edit(" + i + ")'>Edit</button>" + "</td>"
            data += "<td>" + "<button onclick='deleteP (" + i + ")'>Delete</button>" + "</td>"
            data += "</tr>"
        }
        data += "</table>"
        list.innerHLTM = data
    }

    add() {
        let name = document.getElementById("name").value
        let age = document.getElementById("age").value
        let gender = document.getElementById("gender").value;
        let address = document.getElementById("address").value;
        let person = new People(name, age, gender, address)
        if (name === "" || age === "" || gender === "" || address === "") {
            alert("Please input")
        } else {
            people.push(person)
            document.getElementById("name").value = ""
            document.getElementById("age").value = ""
            document.getElementById("gender").value = ""
            document.getElementById("address").value = ""
        }
        display()
    }

    edit() {
        let newPerson = document.getElementById("edit").value
        if (newPerson === "") {
            alert("Please input")
        } else {
            [index] = newPerson
            document.getElementById("edit").value = ""
        }
        display()
    }

    deleteP(index) {
        people.splice(index, 1)
        display()
    }
}