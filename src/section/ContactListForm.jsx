import { useRef, useState } from "react";

export default function ContactListForm({ contactList, setContactList, groups, setShowGroup }) {
    /** [name, number, memo] */
    let inputRef = useRef([]);
    let dataForm = {
        name: "",
        number: "",
        group: "",
        memo: "",
    };

    let regName = /^[가-힣]{2,}/;
    let regNumber = /^010-[0-9]{3,4}-[0-9]{4}/;
    /** check [name, number]  */
    let [check, setCheck] = useState([true, true]);

    /** 사용자 입력 검사 함수 */
    const checkData = () => {
        let copy = [regName.test(dataForm.name), regNumber.test(dataForm.number)];
        setCheck(copy);
        return copy[0] && copy[1] ? true : false;
    };

    /** 사용자 입력 저장 함수 */
    const saveData = () => {
        let result = checkData();
        if (result) {
            let copy = [...contactList];
            copy.push(dataForm);
            setContactList(copy);
            localStorage.setItem("contactList", JSON.stringify(copy));
        }
        // input value 초기화
        inputRef.current.map((c) => {
            return (c.value = "");
        });
    };

    return (
        <ul className="contact-form-wrap">
            <li className="contact-form-essential">
                <div>
                    <label htmlFor="name">이름</label>
                    <input
                        ref={(el) => (inputRef.current[0] = el)}
                        type="text"
                        id="name"
                        placeholder="이름"
                        onChange={(e) => {
                            dataForm.name = e.target.value.trim();
                        }}></input>
                </div>
                {check[0] ? <></> : <p>이름은 한글로 2글자 이상 입력해주세요</p>}
            </li>
            <li className="contact-form-essential">
                <div>
                    <label htmlFor="number">전화 번호</label>
                    <input
                        ref={(el) => (inputRef.current[1] = el)}
                        type="text"
                        id="number"
                        placeholder="전화 번호"
                        onChange={(e) => {
                            dataForm.number = e.target.value.trim();
                        }}></input>
                </div>
                {check[1] ? <></> : <p>010-0000-0000형식으로 입력해주세요</p>}
            </li>
            <li>
                <label htmlFor="group">그룹</label>
                <div className="select-group">
                    <select
                        id="group"
                        onChange={(e) => {
                            dataForm.group = e.target.value;
                        }}>
                        {groups.map((group, i) => (
                            <option key={i}>{group}</option>
                        ))}
                    </select>
                    <button onClick={() => setShowGroup(true)}>조직추가</button>
                </div>
            </li>
            <li>
                <label htmlFor="record">간단한 기록</label>
                <input
                    ref={(el) => (inputRef.current[2] = el)}
                    type="text"
                    id="record"
                    placeholder="간단한 기록"
                    onChange={(e) => {
                        dataForm.memo = e.target.value;
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
