const events = [
  {
    id: 1,
    name: 'Phase 2 Workshop',
    date: '2019-03-07T14:30:00',
    startTime: '2:30 PM',
    endTime: '4:00 PM',
    hours: 1.5,
    location: 'Alliance Leadership Middle Academy, 2941 W. 70th St. Los Angeles, CA 90043',
    leaders: 'Glenda Wilkins',
    description: "The instructor listed below is the Regional Coordinator for your area and not necessarily the instructor for the course. Year two professional learning is designed for teachers who have taught any CPM course for at one year. These teachers understand the mathematics they are teaching and are ready to concentrate on instruction. Because the emphasis of the learning is on instruction, it is imperative that Year two professional learning provides and opportunity to implement in their classroom strategies learned during the workshop. MATERIALS TO BRING: Participants should bring the following materials to the workshop - laptop or tablet to access CPM eBook or teacher edition textbook, 1 notebook (paper or digital), graph paper (5-10 sheets), lined paper (5-10 sheets), scratch paper, 1 Post-it (type) notepad, ball point pens and several sharpened pencils with erasers.",
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Phase 2 Workshop'
      },
      {
        type: 'State',
        name: 'California - Southern'
      }
    ],
    attendees: [
      {
        id: 1,
        name: 'Joel Smith',
        confirmed: false,
      },
      {
        id: 2,
        name: 'Reggie Kinzig-Palmer',
        confirmed: true,
      },
    ],
  },
  {
    id: 2,
    name: 'Algebra 2 Connections First Year Implementation (Royersford, PA)',
    date: '2019-03-12T13:30:00',
    startTime: '1:30 PM',
    endTime: '2:00 PM',
    hours: 0.5,
    location: 'RSpring Ford High School, 350 South Lewis Rd Royersford, PA US 19468',
    leaders: 'Tim Scripko',
    description: "Math problems will be modeled and course methods, pedagogy, and philosophy will be discussed as participants work toward a better understanding of what it means to be a teacher of CPM curriculum and what constitutes best practices in teaching mathematics. Participants will become familiar with the structure and resources of Algebra 2 Connections, including assessments, the CPM eBook and Internet resources.",
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Algebra 2 Connections (A2C)'
      },
      {
        type: 'State',
        name: 'Pennsylvania'
      }
    ],
    attendees: [
      {
        id: 1,
        name: 'Joel Smith',
        confirmed: true,
      },
      {
        id: 3,
        name: 'Bella Smith',
        confirmed: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Core Connections Algebra First Year Implementation (Anoka, MN)',
    date: '2019-03-12T15:30:00',
    startTime: '1:30 PM',
    endTime: '2:00 PM',
    hours: 0.5,
    location: 'Sandburg Education Center , 1902 2nd Ave Anoka, MN 55303 Room: 302',
    leaders: 'Lisa Comfort',
    description: "Math problems will be modeled and course methods, pedagogy, and philosophy will be discussed as participants work toward a better understanding of what it means to be a teacher of CPM curriculum and what constitutes best practices in teaching mathematics. Participants will become familiar with the structure and resources of the CCSS aligned Core Connections Algebra, including assessments, the CPM eBook and Internet.",
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Core Connections Algebra (CCA)'
      },
      {
        type: 'State',
        name: 'Minnesota'
      }
    ],
    attendees: [
      {
        id: 3,
        name: 'Bella Smith',
        confirmed: true,
      },
    ],
  },
  {
    id: 4,
    name: 'Calculus First Year Implementation (Oconomowoc, WI)',
    date: '2019-03-16T13:30:00',
    startTime: '1:30 PM',
    endTime: '2:00 PM',
    hours: 0.5,
    location: 'Oconomowoc High School, 641 E. Forest St. Oconomowoc, WI 53066',
    leaders: 'Bruce Brusoe',
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Calculus (CALC)'
      },
      {
        type: 'State',
        name: 'Wisonsin'
      }
    ],
    attendees: [
      {
        id: 1,
        name: 'Joel Smith',
        confirmed: false,
      },
      {
        id: 2,
        name: 'Reggie Kinzig-Palmer',
        confirmed: true,
      },
      {
        id: 4,
        name: 'Marcy Krupski',
        confirmed: true,
      },
    ],
  },
  {
    id: 5,
    name: 'Calculus First Year Implementation (Oconomowoc, WI)',
    date: '2019-03-16T13:30:00',
    startTime: '1:30 PM',
    endTime: '2:00 PM',
    hours: 0.5,
    location: 'Oconomowoc High School, 641 E. Forest St. Oconomowoc, WI 53066',
    leaders: 'Bruce Brusoe',
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Calculus (CALC)'
      },
      {
        type: 'State',
        name: 'New York'
      }
    ],
    attendees: [
      {
        id: 1,
        name: 'Joel Smith',
        confirmed: false,
      },
      {
        id: 2,
        name: 'Reggie Kinzig-Palmer',
        confirmed: true,
      },
      {
        id: 4,
        name: 'Marcy Krupski',
        confirmed: true,
      },
    ],
  },
  {
    id: 6,
    name: 'Calculus First Year Implementation (Oconomowoc, WI)',
    date: '2019-03-16T13:30:00',
    startTime: '1:30 PM',
    endTime: '2:00 PM',
    hours: 0.5,
    location: 'Oconomowoc High School, 641 E. Forest St. Oconomowoc, WI 53066',
    leaders: 'Bruce Brusoe',
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Calculus (CALC)'
      },
      {
        type: 'State',
        name: 'New Mexico'
      }
    ],
    attendees: [
      {
        id: 1,
        name: 'Joel Smith',
        confirmed: false,
      },
      {
        id: 2,
        name: 'Reggie Kinzig-Palmer',
        confirmed: true,
      },
      {
        id: 4,
        name: 'Marcy Krupski',
        confirmed: true,
      },
    ],
  },
  {
    id: 7,
    name: 'Calculus First Year Implementation (Oconomowoc, WI)',
    date: '2019-03-16T13:30:00',
    startTime: '1:30 PM',
    endTime: '2:00 PM',
    hours: 0.5,
    location: 'Oconomowoc High School, 641 E. Forest St. Oconomowoc, WI 53066',
    leaders: 'Bruce Brusoe',
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Calculus (CALC)'
      },
      {
        type: 'State',
        name: 'North Carolina'
      }
    ],
    attendees: [
      {
        id: 1,
        name: 'Joel Smith',
        confirmed: false,
      },
      {
        id: 2,
        name: 'Reggie Kinzig-Palmer',
        confirmed: true,
      },
      {
        id: 4,
        name: 'Marcy Krupski',
        confirmed: true,
      },
    ],
  },
  {
    id: 8,
    name: 'Calculus First Year Implementation (Oconomowoc, WI)',
    date: '2019-03-16T13:30:00',
    startTime: '1:30 PM',
    endTime: '2:00 PM',
    hours: 0.5,
    location: 'Oconomowoc High School, 641 E. Forest St. Oconomowoc, WI 53066',
    leaders: 'Bruce Brusoe',
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Calculus (CALC)'
      },
      {
        type: 'State',
        name: 'California - Northern'
      }
    ],
    attendees: [
      {
        id: 1,
        name: 'Joel Smith',
        confirmed: false,
      },
      {
        id: 2,
        name: 'Reggie Kinzig-Palmer',
        confirmed: true,
      },
      {
        id: 4,
        name: 'Marcy Krupski',
        confirmed: true,
      },
    ],
  },
  {
    id: 9,
    name: 'Calculus First Year Implementation (Oconomowoc, WI)',
    date: '2019-03-16T13:30:00',
    startTime: '1:30 PM',
    endTime: '2:00 PM',
    hours: 0.5,
    location: 'Oconomowoc High School, 641 E. Forest St. Oconomowoc, WI 53066',
    leaders: 'Bruce Brusoe',
    isCollection: true,
    subEvents: 8,
    meta: [
      {
        type: 'Workshop Type',
        name: 'CPM First Year Implementation Workshops',
      },
      {
        type: 'Course Name',
        name: 'Calculus (CALC)'
      },
      {
        type: 'State',
        name: 'Connecticut'
      }
    ],
    attendees: [
      {
        id: 1,
        name: 'Joel Smith',
        confirmed: false,
      },
      {
        id: 2,
        name: 'Reggie Kinzig-Palmer',
        confirmed: true,
      },
      {
        id: 4,
        name: 'Marcy Krupski',
        confirmed: true,
      },
    ],
  }
];

export default events;
