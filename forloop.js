let myResume={
    "basics": {
      "name": "vignesh b",
      "email": "vigneshb@gamil.com",
      "phone": 9578780111,
      "degree":"B.TECH",
      "location": {
        "address": "188,meenavarcolony",
        "postalCode": 614802,
        "city": "Thanjavur",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "linkdin":"https://www.linkedin.com/in/vignesh-b-a18553200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          "github":"https://github.com/Vignesh12111"
        }
      ]
    },
    "Internship": [
      {
        "company": "UCFER",
        "Topic": "mobile applicatin development",
        "startDate": "2021-11-04",
        "endDate": "2022-04-15",
      },
    ],
    "education": [
      {
        "institution": "SNS COLLEGE OF TECHNOLOGY",
        "department": "information technology",
        "studyType": "fulltime",
        "batch start year": 2020,
        "batch end year": 2024,
        "gpa": 8.62,
      }
    ],
    "skills": [
      {
        "name": "python,javascript",
        "level": "beginer",
        "project": [
          "skin cancer dedectioin",
          "smart irigation",
          "low power consumption solar tracker"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,English",
      }
    ],
    "interests": [
      {
        "sports": "kabadi",
      }
    ]
  };
  console.log(myResume)
  for(var i = 0; i < myResume.length; i++) {
    var obj =myResume[i];

    console.log(obj.basics);
    console.log(obj.profiles);
    console.log(obj.Internship);
    console.log(obj.education);
    console.log(obj.skills);
    console.log(obj.languages);
    console.log(obj.interests);

    
  }