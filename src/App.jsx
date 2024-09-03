import "./index.css";
import { useState } from "react";
function App() {
    let list = JSON.parse(localStorage.getItem("contactList")) || [];
    let group = JSON.parse(localStorage.getItem("group")) || ["가족", "친구", "직장"];
    let [contactList, setContactList] = useState([...list]);
    let [groups, setGroups] = useState([...group]);
    let data = {
        name: "",
        number: "",
        group: "",
        record: "",
    };
    let [input, setInput] = useState({ ...data });
    console.log(contactList);
    const savePhone = () => {
        let copy = [...contactList];
        copy.push(data);
        setContactList(copy);
        localStorage.setItem("contactList", JSON.stringify(copy));
    };
    const checkPhone = () => {};
    return (
        <div className="contact-list-wrap">
            <header className="header">
                <h1>연락처 리스트</h1>
            </header>
            <main className="main">
                <ul className="contact-form-wrap">
                    <li>
                        <label htmlFor="name">이름</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="이름"
                            onChange={(e) => {
                                data.name = e.target.value;
                            }}></input>
                    </li>
                    <li>
                        <label htmlFor="number">전화 번호</label>
                        <input
                            type="text"
                            id="number"
                            placeholder="이름"
                            onChange={(e) => {
                                data.number = e.target.value;
                            }}></input>
                    </li>
                    <li>
                        <label htmlFor="group">그룹</label>
                        <div>
                            <select id="group">
                                {groups.map((group, i) => (
                                    <option key={i}>{group}</option>
                                ))}
                            </select>
                            <button>조직추가</button>
                        </div>
                    </li>
                    <li>
                        <label htmlFor="record">간단한 기록</label>
                        <input
                            type="text"
                            id="record"
                            placeholder="간단한 기록"
                            onChange={(e) => {
                                data.record = e.target.value;
                            }}></input>
                    </li>
                    <button
                        onClick={() => {
                            savePhone();
                        }}>
                        저장
                    </button>
                </ul>
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
            </main>
            <footer className="footer"></footer>
        </div>
    );
}

export default App;
