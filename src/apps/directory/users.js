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
    permissions: ['View Reports', 'Edit Reports'],
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
    permissions: ['View Reports', 'Edit Events'],
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
  }]

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