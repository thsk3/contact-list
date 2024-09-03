export default function ContactListForm({ contactList, setContactList, groups, setGroups }) {
    let data = {
        name: "",
        number: "",
        group: "",
        record: "",
    };
    // let [input, setInput] = useState({ ...data });
    console.log(contactList);
    let check = true;
    const saveData = () => {
        if (checkData) {
            let copy = [...contactList];
            copy.push(data);
            setContactList(copy);
            localStorage.setItem("contactList", JSON.stringify(copy));
        } else {
            ("");
        }
    };
    const checkData = () => {
        return true;
    };
    return (
        <ul className="contact-form-wrap">
            <li className="contact-form-essential">
                <div>
                    <label htmlFor="name">이름</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="이름"
                        onChange={(e) => {
                            data.name = e.target.value;
                        }}></input>
                </div>
                {check ? <></> : <p>djgj</p>}
            </li>
            <li className="contact-form-essential">
                <div>
                    <label htmlFor="number">전화 번호</label>
                    <input
                        type="text"
                        id="number"
                        placeholder="이름"
                        onChange={(e) => {
                            data.number = e.target.value;
                        }}></input>
                </div>
                {check ? <></> : <p>djgj</p>}
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
                    saveData();
                }}>
                저장
            </button>
        </ul>
    );
}
