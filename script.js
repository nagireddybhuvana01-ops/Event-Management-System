let events = [];

function addEvent(){

    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    let location = document.getElementById("eventLocation").value;
    let image = document.getElementById("eventImage").value;

    if(name === "" || date === "" || location === ""){
        alert("Please fill all fields");
        return;
    }

    let event = {
        name,
        date,
        location,
        image
    };

    events.push(event);

    displayEvents();

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventLocation").value = "";
    document.getElementById("eventImage").value = "";
}

function displayEvents(){

    let eventList = document.getElementById("eventList");

    eventList.innerHTML = "";

    events.forEach((event,index)=>{

        eventList.innerHTML += `
        <div class="card">

            <img src="${event.image || 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800'}">

            <div class="card-content">
                <h3>${event.name}</h3>
                <p>📅 ${event.date}</p>
                <p>📍 ${event.location}</p>
                <p>🎉 Congratulations! Registration Open</p>

                <button onclick="deleteEvent(${index})">
                    Delete Event
                </button>
            </div>

        </div>
        `;
    });
}

function deleteEvent(index){
    events.splice(index,1);
    displayEvents();
}