import ContactList from "./ContactList";
import ContactListForm from "./ContactListForm";
import "./index.css";
import { useState } from "react";
function App() {
    let list = JSON.parse(localStorage.getItem("contactList")) || [];
    let group = JSON.parse(localStorage.getItem("group")) || ["가족", "친구", "직장"];
    let [contactList, setContactList] = useState([...list]);
    let [groups, setGroups] = useState([...group]);

    return (
        <div className="contact-list-wrap">
            <header className="header">
                <h1>연락처 리스트</h1>
            </header>
            <main className="main">
                <ContactListForm contactList={contactList} setContactList={setContactList} groups={groups} setGroups={setGroups}></ContactListForm>
                <ContactList contactList={contactList} setContactList={setContactList}></ContactList>
            </main>
            <footer className="footer"></footer>
        </div>
    );
}

export default App;
