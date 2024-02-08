function createClassRoom (numbersOfStudents = Number) {
    function studentSeat (seat = Number) {
        return function () {
            return seat;
        };
    };

    const students = [];
    
    for (count = 0;
        count < numbersOfStudents; count++) {
            students.push(studentSeat(count + 1));
    };

    return students;
}

const classRoom = createClassRoom(10);