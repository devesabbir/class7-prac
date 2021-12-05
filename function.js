const clubData = [
  {
    Name: "Sabbir",
    Age: 23,
    Gender: "Male",
  },
  {
    Name: "Puja",
    Age: 23,
    Gender: "Female",
  },
  {
    Name: "Zonayed",
    Age: 40,
    Gender: "Male",
  },
  {
    Name: "Lemon",
    Age: 16,
    Gender: "Male",
  },
  {
    Name: "Somrat",
    Age: 25,
    Gender: "Male",
  },
  {
    Name: "Sefali",
    Age: 18,
    Gender: "Female",
  },{
      Name: "Rupali",
      Age: 44,
      Gender: "Female",
    },{
      Name: "Tahir",
      Age: 68,
      Gender: "Male",
    },
];


function Main() {
  this.age = (club) => {
    club.map((data) => {
      if (data.Age < 18 && data.Gender.toLowerCase() == "male") {
        console.log(`
                  Name : ${data.Name}
                  Age : ${data.Age}
                  Gender : ${data.Gender}

                  Message:Vaia tumi  ekhno choto boyos hole tokhn eso ...
           `);
      } else if (data.Age < 18 && data.Gender.toLowerCase() == "female") {
        console.log(`
                  Name : ${data.Name}
                  Age : ${data.Age}
                  Gender : ${data.Gender}

                  Message:Apu tumi  ekhno choto boyos hole tokhn eso ...
           `);
      } else if (
        data.Age >= 18 &&
        data.Age <= 40 &&
        data.Gender.toLowerCase() == "male"
      ) {
        console.log(`
                  Name : ${data.Name}
                  Age : ${data.Age}
                  Gender : ${data.Gender}

                  Message:Mr ${data.Name} Apnake Welcome ...
           `);
      } else if (
        data.Age >= 18 &&
        data.Age <= 40 &&
        data.Gender.toLowerCase() == "female"
      ) {
        console.log(`
                  Name : ${data.Name}
                  Age : ${data.Age}
                  Gender : ${data.Gender}

                  Message:Madam ${data.Name} Apnake Welcome ...
           `);
      } else if (data.Age > 40 && data.Gender.toLowerCase() == "male") {
        console.log(`
            Name : ${data.Name}
            Age : ${data.Age}
            Gender : ${data.Gender}

            Message:Mr ${data.Name} Apni basay chole jan rest koren ...
     `);
      }else if(data.Age > 40 && data.Gender.toLowerCase() == "female") {
            console.log(`
            Name : ${data.Name}
            Age : ${data.Age}
            Gender : ${data.Gender}

            Message:Madam ${data.Name} Apni basay chole jan rest koren ...
     `);

      }
    });
  };
}
