
	var model = {

		thisStudent:null,

		students: [

		{
			daysMissed:0,
		    name: "Slappy the Frog "
		},

		{
			daysMissed:0,
		    name: "Lily the Lizard "
		},

		{
			daysMissed:0,
		    name: "Paulrus the Walrus "
		},

		{
			daysMissed:0,
		    name: "Gregory the Goat"
		},

		{
			daysMissed:0,
		    name: "Adam the Anaconda "
		}
	  ]
	};


var octopus = {
    init: function() {
        tableView.init();
    },

    getStudents: function() {
        return model.students;
    },

    getdaysMissed: function() {
         return model.daysMissed;
    },

    incrementDaysMissed: function( ) {

                   },
     };


var tableView = {

	init: function() {

      this.render();

    },

  render: function() {

 var myTableDiv = document.getElementById("mytable")

  	 var tbl = document.createElement("table");
               tbl.style.width = '100%';
               tbl.border = '1';


   	 var students = octopus.getStudents();
     var attendance = octopus.getdaysMissed();
             // adds list of students
    	 for (i=0; i< students.length; i++) {
    	 	  var thisStudent = students[i];
    	  	  var tr = document.createElement("tr"); //tr is a row
    	  	  var rowid= "row" + i;
    	  	  tr.setAttribute('id', rowid);
    	  	  tbl.appendChild(tr);



    	  	  var studentName = document.createElement("td"); //td is a cell
    	  	  studentName.appendChild(document.createTextNode(students[i].name));//adds the student name cell
              tr.appendChild(studentName); //appends a new row for each student

              //adds checkboxes
              for (j=0; j < 12; j++) {
              	var td = document.createElement("td");
              	var box = document.createElement("input");
              	box.type = "checkbox";
              	box.name = "name";
              	box.value = "value"


              	var label = document.createElement('label')
              	td.appendChild(box); //appends input to cell
              	tr.appendChild(td);   // appends cell to row



              	box.addEventListener('click', (function() {      //add event listener to each checkbox
                        return function() {

                        };
                    })());//
                }

              }


    myTableDiv.appendChild(tbl);

  },

};

octopus.init();