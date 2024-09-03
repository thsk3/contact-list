import ContactList from "./ContactList";
import ContactListForm from "./ContactListForm";
import Group from "./Group";
import Detail from "./Detail";

import "./index.css";
import { useState } from "react";

function App() {
    let list = JSON.parse(localStorage.getItem("contactList")) || [];
    let group = JSON.parse(localStorage.getItem("group")) || ["가족", "친구", "직장"];
    let [contactList, setContactList] = useState([...list]);
    let [groups, setGroups] = useState([...group]);
    let [showGroup, setShowGroup] = useState(false);
    let [showDetail, setShowDetail] = useState(false);
    /** 보여줄 모달 인덱스 */
    let [index, setIndex] = useState(0);
    return (
        <div className="app">
            <header className="header">
                <h1>연락처 리스트</h1>
            </header>
            <main className="main">
                <ContactListForm contactList={contactList} setContactList={setContactList} groups={groups} setShowGroup={setShowGroup}></ContactListForm>
                <ContactList contactList={contactList} setContactList={setContactList} setIndex={setIndex} setShowDetail={setShowDetail}></ContactList>
                {showGroup ? <Group groups={groups} setGroups={setGroups} setShowGroup={setShowGroup}></Group> : <></>}
                {showDetail ? <Detail contactList={contactList} index={index} setshowDetail={setShowDetail}></Detail> : <></>}
            </main>
            <footer className="footer"></footer>
        </div>
    );
}

export default App;
