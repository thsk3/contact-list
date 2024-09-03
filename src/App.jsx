import "./reset.css";
import "./index.css";
function App() {
    return (
        <div className="contact-list-wrap">
            <header className="header">
                <h1>연락처 리스트</h1>
            </header>
            <main className="main">
                <ul className="contact-form-wrap">
                    <li>
                        <label>이름</label>
                        <input type="text" placeholder="이름"></input>
                    </li>
                    <li>
                        <label>전화 번호</label>
                        <input type="text" placeholder="이름"></input>
                    </li>
                    <li>
                        <label>그룹</label>
                        <div>
                            <select></select>
                            <button>조직추가</button>
                        </div>
                    </li>
                    <li>
                        <label>간단한 기록</label>
                        <input type="text" placeholder="간단한 기록"></input>
                    </li>
                    <button>저장</button>
                </ul>
                <div className="saved-contact-list-wrap">
                    <form>
                        <input placeholder="검색어를 입력 후 엔터를 누르세요"></input>
                        <button>검색</button>
                    </form>
                    <ul className="saved-contact-list">
                        <li>
                            <p>
                                <span>박은규</span>
                                <span>010-1111-1111</span>
                                <span>가족</span>
                            </p>
                            <p>
                                <span>세부사항</span>
                                <span>삭제</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>박은규</span>
                                <span>010-1111-1111</span>
                                <span>가족</span>
                            </p>
                            <p>
                                <span>세부사항</span>
                                <span>삭제</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>박은규</span>
                                <span>010-1111-1111</span>
                                <span>가족</span>
                            </p>
                            <p>
                                <span>세부사항</span>
                                <span>삭제</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>박은규</span>
                                <span>010-1111-1111</span>
                                <span>가족</span>
                            </p>
                            <p>
                                <span>세부사항</span>
                                <span>삭제</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="footer"></footer>
        </div>
    );
}

export default App;
