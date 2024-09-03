export default function ContactList({ contactList, setContactList, setIndex, setShowDetail }) {
    let keyWord = "";
    return (
        <div className="contact-list-wrap">
            <form>
                <input
                    placeholder="검색어를 입력 후 엔터를 누르세요"
                    onChange={(e) => {
                        keyWord = e.target.value;
                    }}
                    onKeyDown={(e) => {
                        e.preventDefault();
                        if (e.key === "Enter") {
                            console.log(keyWord);
                        }
                    }}></input>
                <button>전체리스트 보기</button>
            </form>
            <ul className="contact-list">
                {contactList.map((item, i) => {
                    return (
                        <li key={i}>
                            <p>
                                <span>{item.name}</span>
                                <span>{item.number}</span>
                                <span>{item.group}</span>
                            </p>
                            <p className="contact-list-btn">
                                <span
                                    onClick={() => {
                                        setIndex(i);
                                        setShowDetail(true);
                                    }}>
                                    세부사항
                                </span>
                                <span
                                    onClick={() => {
                                        let copy = [...contactList];
                                        copy.splice(i, 1);
                                        setContactList(copy);
                                        localStorage.setItem("contactList", JSON.stringify(copy));
                                    }}>
                                    삭제
                                </span>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
