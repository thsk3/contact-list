export default function ContactList({ contactList, setContactList }) {
    return (
        <div className="saved-contact-list-wrap">
            <form>
                <input placeholder="검색어를 입력 후 엔터를 누르세요"></input>
                <button>검색</button>
            </form>
            <ul className="saved-contact-list">
                {contactList.map((item, i) => {
                    return (
                        <li key={i}>
                            <p>
                                <span>{item.name}</span>
                                <span>{item.number}</span>
                                <span>{item.group}</span>
                            </p>
                            <p>
                                <span>세부사항</span>
                                <span>삭제</span>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
