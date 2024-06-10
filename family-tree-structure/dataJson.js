export const data = [
    {
        name: 'Samir',
        relation: 'Yo',
        position: 'center',
        order: 1,

        siblings: [
            {
                name: 'Jose',
                relation: 'Tio',
                position: 'afterbegin',
                img: 5,
                order: 2,

                siblings: [],
                parents: []
            },
            {
                name: 'Mercedes',
                relation: 'Tia',
                position: 'beforeend',
                img: 6,
                order: 3,

                siblings: [],
                parents: []
            }
            ,
            {
                name: 'Marcos',
                relation: 'Tia',
                position: 'beforeend',
                img: 6,
                order: 4,

                siblings: [],
                parents: [
                    {
                        name: 'Marco',
                        relation: 'Father',
                        position: 'beforeend',
                        img: 9,
                        order: 8,
        
                        siblings: [],
                        parents: []
                    },
                    {
                        name: 'Eusebia',
                        relation: 'Mother',
                        position: 'beforeend',
                        img: 8,
                        order: 9,
        
                        siblings: [],
                        parents: []
                    }
                ]
            }
            ,
            {
                name: 'Rosario',
                relation: 'Tia',
                position: 'beforeend',
                img: 6,
                order: 5,

                siblings: [],
                parents: []
            }
        ],

        parents: [
            {
                name: 'Santos',
                relation: 'Father',
                position: 'beforeend',
                img: 7,
                order: 6,

                siblings: [],
                parents: []
            },
            {
                name: 'Nancy',
                relation: 'Mother',
                position: 'beforeend',
                img: 8,
                order: 7,

                siblings: [],
                parents: [
                    {
                        name: 'Marco',
                        relation: 'Father',
                        position: 'beforeend',
                        img: 9,
                        order: 8,
        
                        siblings: [],
                        parents: []
                    },
                    {
                        name: 'Eusebia',
                        relation: 'Mother',
                        position: 'beforeend',
                        img: 8,
                        order: 9,
        
                        siblings: [],
                        parents: []
                    }
                ]
            }
        ]
    }
]
