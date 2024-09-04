import ContactList from "./section/ContactList";
import ContactListForm from "./section/ContactListForm";
import Group from "./components/Group";
import Detail from "./components/Detail";

import "./index.css";
import { useState } from "react";

function App() {
    // 연락처 목록
    let list = JSON.parse(localStorage.getItem("contactList")) || [];
    let [contactList, setContactList] = useState([...list]);
    let [showDetail, setShowDetail] = useState(false);
    let [index, setIndex] = useState(0);
    // 그룹 목록
    let group = JSON.parse(localStorage.getItem("groups")) || ["가족", "친구", "직장"];
    let [groups, setGroups] = useState([...group]);
    let [showGroup, setShowGroup] = useState(false);
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
        </div>
    );
}

export default App;
