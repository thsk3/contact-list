import { useState } from "react";

/** 추가해야 할 것
 * 1. 수정 기능 추가
 * 2. 리스트 검색 기능 추가
 * 3. 전체 리스트 보여주는 기능 추가
 * 4. 중복된 번호일 때 생성 안되도록 하기
 */
export default function ContactList({ contactList, setContactList, setIndex, setShowDetail }) {
    let keyWord = "";
    let [isSearchList, setIsSearchList] = useState(false);
    let [searchList, setSearchList] = useState([]);
    const searchContact = () => {
        let resultList = contactList.reduce((a, c) => (c.name.includes(keyWord) ? [...a, c] : a), []);
        setIsSearchList(true);
        setSearchList(resultList);
    };
    const showDetail = (i) => {
        setIndex(i);
        setShowDetail(true);
    };
    const deleteContact = (i) => {
        let copy = [...contactList];
        copy.splice(i, 1);
        setContactList(copy);
        localStorage.setItem("contactList", JSON.stringify(copy));
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
            <ul className="contact-list">
                {isSearchList
                    ? searchList.map((item, i) => {
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
                      })
                    : contactList.map((item, i) => {
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
                      })}
            </ul>
        </div>
    );
}
