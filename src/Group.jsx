import { useRef } from "react";

export default function Group({ groups, setGroups, setShowGroup }) {
    let inputRef = useRef(null);
    let groupName = "";
    return (
        <div className="modal-wrap">
            <div className="modal-detail">
                <button
                    onClick={() => {
                        setShowGroup(false);
                    }}>
                    닫기
                </button>
                <h2>그룹 관리</h2>
                <ul className="group-list">
                    {groups.map((item, i) => {
                        return (
                            <li key={i}>
                                <span>{item}</span>
                                <span
                                    onClick={() => {
                                        let copy = [...groups];
                                        copy.splice(i, 1);
                                        setGroups(copy);
                                        localStorage.setItem("groups", JSON.stringify(copy));
                                    }}>
                                    x
                                </span>
                            </li>
                        );
                    })}
                </ul>
                <div className="group-add-btn">
                    <input ref={inputRef} placeholder="새로운 그룹 이름" onChange={(e) => (groupName = e.target.value.trim())}></input>
                    <button
                        onClick={() => {
                            if (groupName.length > 0) {
                                let copy = [...groups];
                                copy.push(groupName);
                                setGroups(copy);
                                groupName = "";
                                inputRef.current.value = "";
                                localStorage.setItem("groups", JSON.stringify(copy));
                            }
                        }}>
                        추가
                    </button>
                </div>
            </div>
        </div>
    );
}
