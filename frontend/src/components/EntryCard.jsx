import "../styles/EntryCard.css";

const EntryCard = ({ entry }) => {
    return (
        <div className="entry-card">
            <div className="entry-card-header">
                <span className="entry-date">{entry.date}</span>
                <span className="entry-mood">{entry.mood}</span>
            </div>
            <div className="entry-card-body">
                <p>{entry.content}</p>
            </div>
        </div>
    );
};

export default EntryCard;
