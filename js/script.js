function add_people() {
    var list = people;
    var people_length = list.length;
    var text = "<ul>";
    for (var i = 0; i < people_length; i++) {
        text += "<li> <span class = 'headers'>User ID: </span>" + people[i]._id + "<br>";
        text += "<span class = 'headers'>Name: </span>" + people[i].name + "<br>";
        text += "<span class = 'headers'>Age: </span>" + people[i].age; + "<br>";
        text += "<br><img src=" + people[i].picture + "></img><br>";
        text += "</li>";
    }
    text += "</ul>";
    /*
    for (i = 0; i < people_length; i++) {
        text += <"li>" + people[i]._id + "<br>" +
                people[i].age + "<br>" +
                people[i].name + "<br>" +
                "<img src=" + people[i].picture + "></img> <br></li>"

    }
    */

    document.getElementById("people_list").innerHTML= text;
    }

window.onload = add_people;
