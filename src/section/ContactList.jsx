import { useState } from "react";

/** 추가해야 할 것
 * 1. 수정 기능 추가
 * 2. 중복된 번호일 때 생성 안되도록 하기
 */
export default function ContactList({ contactList, setContactList, setIndex, setShowDetail }) {
    let keyWord = "";
    let [isSearchList, setIsSearchList] = useState(false);
    let [searchList, setSearchList] = useState([]);
    /** 연락처 검색 함수 */
    const searchContact = () => {
        let resultList = contactList.reduce((a, c) => (c.name.includes(keyWord) ? [...a, c] : a), []);
        setIsSearchList(true);
        setSearchList(resultList);
    };
    /** 세부 모달 보여주는 함수 */
    const showDetail = (i) => {
        setIndex(i);
        setShowDetail(true);
    };
    /** 연락처 삭제 함수 */
    const deleteContact = (i) => {
        let copy = [...contactList];
        copy.splice(i, 1);
        setContactList(copy);
        localStorage.setItem("contactList", JSON.stringify(copy));
    };
    const list = (item, i) => {
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
                            showDetail(i);
                        }}>
                        세부사항
                    </span>
                    <span
                        onClick={() => {
                            deleteContact(i);
                        }}>
                        삭제
                    </span>
                </p>
            </li>
        );
    };
    return (
        <div className="contact-list-wrap">
            <form>
                <input
                    placeholder="검색어를 입력 후 엔터를 누르세요"
                    onChange={(e) => {
                        keyWord = e.target.value;
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            searchContact();
                        }
                    }}></input>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsSearchList(false);
                    }}>
                    전체리스트 보기
                </button>
            </form>
            {contactList.length > 0 ? (
                <ul className="contact-list">
                    {isSearchList
                        ? searchList.map((item, i) => {
                              return list(item, i);
                          })
                        : contactList.map((item, i) => {
                              return list(item, i);
                          })}
                </ul>
            ) : (
                <div className="empty-list">
                    <p>아직 저장된 연락처가 없습니다.</p>
                    <p>연락처를 추가해 보세요!</p>
                </div>
            )}
        </div>
    );
}
