import { useRef, useState } from "react";
/** 추가해야 할 것
 * 1. 그룹이름 중복 검사
 * 2. 그룹이름이 이미 사용중일 때에는 삭제 불가능하도록 수정
 */
export default function Group({ groups, setGroups, setShowGroup }) {
    let inputRef = useRef(null);
    let groupName = "";
    let [deleteMessage, showDeleteMessage] = useState(false);
    const deleteGroup = (i) => {
        if (groups.length === 1) {
            showDeleteMessage(true);
            setTimeout(() => {
                showDeleteMessage(false);
            }, 2000);
        } else {
            let copy = [...groups];
            copy.splice(i, 1);
            setGroups(copy);
            localStorage.setItem("groups", JSON.stringify(copy));
        }
    };
    const saveGroup = () => {
        if (groupName.length > 0) {
            let copy = [...groups];
            copy.push(groupName);
            setGroups(copy);
            localStorage.setItem("groups", JSON.stringify(copy));
            // input value 초기화
            groupName = "";
            inputRef.current.value = "";
        }
    };

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
                                        deleteGroup(i);
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
                            saveGroup();
                        }}>
                        추가
                    </button>
                </div>
                {deleteMessage ? <p className="delete-message">그룹은 최소 1개 이상이어야 합니다.</p> : <></>}
            </div>
        </div>
    );
}
