const TRANSCRIBED_TRANSACTIONS = [
    {
        type: "txn",
        customerName: "Garner Aaron",
        orderId: "l000",
        date: "2025-01-20",
        product: "1000 - Product",
        price: 312,
    },
    {
        type: "txn",
        customerName: "Doyle Burke",
        orderId: "l001",
        date: "2024-12-28",
        product: "1001 - Product",
        price: 912,
    },
    {
        type: "txn",
        customerName: "Knox Richard",
        orderId: "l002",
        date: "2023-11-08",
        product: "1002 - Product",
        price: 475,
    },
    {
        type: "txn",
        customerName: "Gonzales Emmanuel",
        orderId: "l003",
        date: "2024-03-30",
        product: "1003 - Product",
        price: 471,
    },
    {
        type: "txn",
        customerName: "York Chanda",
        orderId: "l004",
        date: "2025-08-12",
        product: "1004 - Product",
        price: 576,
    },
    {
        type: "txn",
        customerName: "Brooks Lilah",
        orderId: "l005",
        date: "2023-12-11",
        product: "1005 - Product",
        price: 554,
    },
    {
        type: "txn",
        customerName: "Sellers Craig",
        orderId: "l006",
        date: "2025-06-20",
        product: "1006 - Product",
        price: 614,
    },
    {
        type: "txn",
        customerName: "Rodgers Chantale",
        orderId: "l007",
        date: "2024-10-13",
        product: "1007 - Product",
        price: 816,
    },
    {
        type: "txn",
        customerName: "Todd Isadora",
        orderId: "l008",
        date: "2025-01-23",
        product: "1008 - Product",
        price: 158,
    },
    {
        type: "txn",
        customerName: "Reeves Roary",
        orderId: "l009",
        date: "2024-10-13",
        product: "1009 - Product",
        price: 864,
    },
    {
        type: "txn",
        customerName: "Barton Harriet",
        orderId: "l010",
        date: "2024-04-13",
        product: "1010 - Product",
        price: 801,
    },
    {
        type: "txn",
        customerName: "Daugherty Chelsea",
        orderId: "l011",
        date: "2025-05-25",
        product: "1011 - Product",
        price: 296,
    },
    {
        type: "txn",
        customerName: "Mcdaniel Sage",
        orderId: "l012",
        date: "2024-08-04",
        product: "1012 - Product",
        price: 794,
    },
    {
        type: "txn",
        customerName: "Chapman Michael",
        orderId: "l013",
        date: "2024-08-15",
        product: "1013 - Product",
        price: 816,
    },
    {
        type: "txn",
        customerName: "Ball Sonia",
        orderId: "l014",
        date: "2025-02-23",
        product: "1014 - Product",
        price: 127,
    },
    {
        type: "txn",
        customerName: "Pennington Jonas",
        orderId: "l015",
        date: "2025-06-24",
        product: "1015 - Product",
        price: 191,
    },
    {
        type: "txn",
        customerName: "Carrillo Kevin",
        orderId: "l016",
        date: "2024-04-23",
        product: "1016 - Product",
        price: 529,
    },
    {
        type: "txn",
        customerName: "Parrish Deanna",
        orderId: "l017",
        date: "2025-02-16",
        product: "1017 - Product",
        price: 182,
    },
    {
        type: "txn",
        customerName: "Atkins Jolie",
        orderId: "l018",
        date: "2025-05-14",
        product: "1018 - Product",
        price: 453,
    },
    {
        type: "txn",
        customerName: "Powell Griffin",
        orderId: "l019",
        date: "2024-06-17",
        product: "1019 - Product",
        price: 852,
    },
    {
        type: "txn",
        customerName: "Bentley Ruth",
        orderId: "l020",
        date: "2025-12-29",
        product: "1020 - Product",
        price: 509,
    },
    {
        type: "txn",
        customerName: "Newman Damian",
        orderId: "l021",
        date: "2024-07-16",
        product: "1021 - Product",
        price: 106,
    },
    {
        type: "txn",
        customerName: "Mueller Idona",
        orderId: "l022",
        date: "2024-05-30",
        product: "1022 - Product",
        price: 708,
    },
    {
        type: "txn",
        customerName: "Ramirez Inga",
        orderId: "l023",
        date: "2024-03-16",
        product: "1023 - Product",
        price: 337,
    },
    {
        type: "txn",
        customerName: "Whitfield Francesca",
        orderId: "l024",
        date: "2023-10-11",
        product: "1024 - Product",
        price: 885,
    },
    {
        type: "txn",
        customerName: "Levy Zephania",
        orderId: "l025",
        date: "2023-09-18",
        product: "1025 - Product",
        price: 403,
    },
    {
        type: "txn",
        customerName: "Saunders Cadman",
        orderId: "l026",
        date: "2024-02-24",
        product: "1026 - Product",
        price: 711,
    },
    {
        type: "txn",
        customerName: "Gibson Nomlanga",
        orderId: "l027",
        date: "2024-09-28",
        product: "1027 - Product",
        price: 99,
    },
    {
        type: "txn",
        customerName: "Terry Warren",
        orderId: "l028",
        date: "2025-02-01",
        product: "1028 - Product",
        price: 632,
    },
    {
        type: "txn",
        customerName: "Hammond Kirby",
        orderId: "l029",
        date: "2024-12-27",
        product: "1029 - Product",
        price: 87,
    },
    {
        type: "txn",
        customerName: "Holder David",
        orderId: "l030",
        date: "2025-01-06",
        product: "1030 - Product",
        price: 887,
    },
    {
        type: "txn",
        customerName: "Johns Galena",
        orderId: "l031",
        date: "2025-08-17",
        product: "1031 - Product",
        price: 86,
    },
    {
        type: "txn",
        customerName: "Summers Lesley",
        orderId: "l032",
        date: "2023-09-21",
        product: "1032 - Product",
        price: 888,
    },
    {
        type: "txn",
        customerName: "Kelley Maile",
        orderId: "l033",
        date: "2024-01-21",
        product: "1033 - Product",
        price: 899,
    },
    {
        type: "txn",
        customerName: "Glass Cheyenne",
        orderId: "l034",
        date: "2024-05-12",
        product: "1034 - Product",
        price: 135,
    },
    {
        type: "txn",
        customerName: "Fischer Guy",
        orderId: "l035",
        date: "2024-10-29",
        product: "1035 - Product",
        price: 958,
    },
    {
        type: "txn",
        customerName: "Joyner Tarik",
        orderId: "l036",
        date: "2023-12-04",
        product: "1036 - Product",
        price: 868,
    },
    {
        type: "txn",
        customerName: "Weiss Nissim",
        orderId: "l037",
        date: "2024-02-22",
        product: "1037 - Product",
        price: 41,
    },
    {
        type: "txn",
        customerName: "Gross Basia",
        orderId: "l038",
        date: "2025-04-28",
        product: "1038 - Product",
        price: 505,
    },
    {
        type: "txn",
        customerName: "Knight Jameson",
        orderId: "l039",
        date: "2025-02-20",
        product: "1039 - Product",
        price: 388,
    },
]

export default TRANSCRIBED_TRANSACTIONS
