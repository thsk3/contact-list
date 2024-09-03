import { useState } from "react";
import Detail from "./Detail";

export default function ContactList({ contactList, setContactList }) {
    let [showDetail, setShowDetail] = useState(true);
    return (
        <div className="contact-list-wrap">
            <form>
                <input placeholder="검색어를 입력 후 엔터를 누르세요"></input>
                <button>검색</button>
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
                                <span onClick={() => setShowDetail(true)}>세부사항</span>
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
                            {showDetail ? <Detail info={item} setshowDetail={setShowDetail}></Detail> : <></>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
