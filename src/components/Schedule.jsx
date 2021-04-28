
const Schedule = ({ schedule }) => {
  return (
    <div className="schedule">
      {schedule && 
        schedule.map((s) => (
          <div
            style={{
              border: "1px solid black",
              marginBottom: "2vh",
              padding: "1rem",
            }}
          >
            <p> {s.title} </p>
            <p>
              Börjar: {s.starttimeutc} | Slutar: {s.endtimeutc}
            </p>
            <p> {s.description} </p>
          </div>
        ))}
    </div>
  );
};

export default Schedule;
