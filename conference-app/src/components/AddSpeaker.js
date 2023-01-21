
function AddSpeaker({ eventYear, insertRecord }) {
    return (
        <a href="#" className="addSes" >

            <i onClick={(e) => {
                e.preventDefault();
                const firstLast = window.prompt("Enter first and last name...", "");
                const firstLastArray = firstLast.split();
                insertRecord({
                    id: "9999",
                    first: firstLastArray[0],
                    last: firstLastArray[1],
                    bio: "Bio Not Available",
                    sessions: [
                        {
                            id: "8888",
                            title: `New Session For ${firstLastArray[0]}`,
                            room: {
                                name: "Mail Ball Room"
                            },
                            eventYear
                        }
                    ]
                });
            }}>
                +
            </i>

        </a>
    );
}

export default AddSpeaker;