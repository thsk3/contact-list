/** 추가해야 할 것
 * 1. 글자가 공간을 넘어갈 때 처리하기
 * 2. 모달에 흰배경 보이는거 고치기
 */
export default function Detail({ contactList, index, setshowDetail }) {
    let info = contactList[index];
    return (
        <div className="modal-wrap">
            <div className="modal-detail">
                <button onClick={() => setshowDetail(false)}>닫기</button>
                <h2>연락처 상세 정보</h2>
                <p>
                    <span>이름</span>
                    <span>{info.name}</span>
                </p>
                <p>
                    <span>전화번호</span>
                    <span>{info.number}</span>
                </p>
                <p>
                    <span>그룹</span>
                    <span>{info.group}</span>
                </p>
                <p>
                    <span>메모</span>
                    <span>{info.record}</span>
                </p>
            </div>
        </div>
    );
}
