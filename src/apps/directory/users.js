export default [
  {
    id: 1,
    name: 'Joel Smith',
    email: 'joel@kickup.lol',
    canLogin: true,
    school: 'MacArthur High School',
    role: 'English',
    grade: '12',
    groups: ['Teachers', 'English', 'MacArthur High School'],
    permissions: ['Manage Reports', 'Manage Events', 'Manage Users', 'Manage Shared Links', 'View History Pages'],
    restrictions: []
  },
  {
    id: 2,
    name: 'Bella Smith',
    email: 'bella@kickup.lol',
    canLogin: true,
    school: 'Nimitz High School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'Nimitz High School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
  {
    id: 3,
    name: 'Ziggy Smith',
    email: 'ziggy@kickup.lol',
    canLogin: false,
    school: 'Crocket Middle School',
    role: 'English',
    grade: '6',
    groups: [],
    permissions: [],
    restrictions: []
  },
  {
    id: 4,
    name: 'John Smith',
    email: 'john@kickup.lol',
    canLogin: true,
    school: 'Crocket Middle School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'Crocket Middle School'],
    permissions: ['Manage Reports'],
    restrictions: [{type: 'Role', value: 'English'}]

  },
  {
    id: 5,
    name: 'Bill Smith',
    email: 'bill@kickup.lol',
    canLogin: true,
    school: 'Nimitz High School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'Nimitz High School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
  {
    id: 6,
    name: 'Steve Smith',
    email: 'steve@kickup.lol',
    canLogin: true,
    school: 'Nimitz High School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'Nimitz High School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
  {
    id: 7,
    name: 'Emmit Smith',
    email: 'emmit@kickup.lol',
    canLogin: true,
    school: 'Crocket Middle School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'Crocket Middle School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
  {
    id: 12,
    name: 'Judy Smith',
    email: 'judy@kickup.lol',
    canLogin: true,
    school: 'MacArthur High School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'MacArthur High School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
  {
    id: 8,
    name: 'June Smith',
    email: 'june@kickup.lol',
    canLogin: true,
    school: 'Crocket Middle School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'Crocket Middle School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
  {
    id: 9,
    name: 'Mae Smith',
    email: 'mae@kickup.lol',
    canLogin: true,
    school: 'Nimitz High School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'Nimitz High School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
  {
    id: 10,
    name: 'Michone Smith',
    email: 'michone@kickup.lol',
    canLogin: true,
    school: 'Crocket Middle School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'Crocket Middle School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
  {
    id: 11,
    name: 'Debbie Smith',
    email: 'debbie@kickup.lol',
    canLogin: true,
    school: 'MacArthur High School',
    role: 'English',
    grade: '10',
    groups: ['Teachers', 'English', 'MacArthur High School'],
    permissions: ['Manage Reports'],
    restrictions: []

  },
]

  export const groups = [
    {
      id: 0,
      name: 'Teachers'
    },
    {
      id: 2,
      name: 'English'
    },
    {
      id: 3,
      name: 'MacArthur High School'
    },
    {
      id: 4,
      name: 'Nimitz High School'
    },
    {
      id: 5,
      name: 'Crocket Middle School'
    }
  ]

export const nonPeople = [
  {
    id: 4,
    name: 'Cool Event 1',
    attributes: [
      {
        type: 'quarter',
        value: 'Fall 2017'
      },
      {
        type: 'required',
        value: 'Is Required'
      }
    ]
  },
  {
    id: 5,
    name: 'Reading Rainbow Curriculum',
    attributes: [
      {
        type: 'publisher',
        value: 'Pearson'
      },
      {
        type: 'cost',
        value: 'High'
      }
    ]
  }
]