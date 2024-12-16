const message = [
    {
        "_id": "673f0a764438a0879b30fdc2",
        "participants": [
            {
                "_id": "673c80c48abf865c2aad4ea9",
                "name": "krish",
                "profilePic": "https://media.istockphoto.com/id/1498161814/photo/little-girl-drawing-with-markers-at-the-nursery.jpg?s=612x612&w=0&k=20&c=0YnnZBAPiO74BxQPx3hMa6f2ipQpolqSHofMikjU0kQ="
            },
            {
                "_id": "673c9458eecf0e30fe8cd1fb",
                "name": "anna",
                "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefW2T8BGhHrcrEOgGMOMpKgBKMahj9ClYDQ&s"
            }
        ],
        "message": [
            {
                "_id": "673f0a764438a0879b30fdc3",
                "senderId": "673c80c48abf865c2aad4ea9",
                "receiverId": "673c9458eecf0e30fe8cd1fb",
                "content": "hi anna",
                "createdAt": "2024-11-21T10:24:54.155Z"
            }
        ],
        "createdAt": "2024-11-21T10:24:54.154Z",
        "updatedAt": "2024-11-21T10:24:54.154Z",
        "__v": 0
    }
]


message.map((mes) => (
    <div key={mes._id}>
        {mes.participants.map((p) => (
            <div>
                <img src={p.profilePic} alt="profile-pic" />
                <div>{p.name}</div>
            </div>
        ))}
        {mes.message.map((m) => (
            <div>
                <div>{m.content}</div>
                {new Date(m.createdAt).toLocaleString()}
            </div>
        ))

        }
    </div>
))

