import styles from "./QA.module.css";
import { NavLink, Link } from "react-router-dom";
import Axios from "axios";
import React, { Component } from "react";
// import { Button } from "react-bootstrap";
const submitTest = () => {
    Axios.get("http://localhost:8000/", {}).then(() => {
        alert("등록 완료!");
    });
};

// eslint-disable-next-line
const Board = ({ id, title, registerId, registerDate }) => {
    return (
        <tr>
            <td>
                <input type="checkbox"></input>
            </td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    );
};

// /**
//  * BoardList class
//  */
// class BoardList extends Component {
//     state = {
//         boardList,
//     };

//     getList = () => {
//         Axios.get("http://localhost:8000/list", {})
//             .then((res) => {
//                 const { data } = res;
//                 this.setState({
//                     boardList,
//                 });
//             })
//             .catch((e) => {
//                 console.error(e);
//             });
//     };

//     /**
//      */
//     componentDidMount() {
//         this.getList();
//     }

//     /**
//      * @return {Component} Component
//      */
//     render() {
//         // eslint-disable-next-line
//         const { boardList } = this.state;

//         return (
//             <div>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>선택</th>
//                             <th>번호</th>
//                             <th>제목</th>
//                             <th>작성자</th>
//                             <th>작성일</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             // eslint-disable-next-line
//                             boardList.map((v) => {
//                                 return (
//                                     <Board
//                                         id={v.BOARD_ID}
//                                         title={v.BOARD_TITLE}
//                                         registerId={v.REGISTER_ID}
//                                         registerDate={v.REGISTER_DATE}
//                                     />
//                                 );
//                             })}
//                     </tbody>
//                 </Table>
//                 <Button variant="info">글쓰기</Button>
//                 <Button variant="secondary">수정하기</Button>
//                 <Button variant="danger">삭제하기</Button>
//             </div>
//         );
//     }
// }

// export default BoardList;

class QA extends Component {
    state = {
        boardList: [],
    };

    getList = () => {
        Axios.get("http://localhost:8000/list", {})
            .then((res) => {
                const { data } = res;
                this.setState({
                    boardList: data,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    componentDidMount() {
        this.getList();
    }
    render() {
        const { boardList } = this.state;

        return (
            <div className={styles.qa}>
                <div className={styles.qaInner}>
                    <div className={styles.iconParent}>
                        <img className={styles.icon} alt="" src="/icon.svg" />
                        <div className={styles.avatar} />
                        <div className={styles.adminA}>Admin A</div>
                        <img className={styles.iconarrowDown} alt="" src="/iconarrowdown.svg" />
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <NavLink to="/main" style={{ textDecoration: "none" }}>
                        <div className={styles.logo}>
                            <img className={styles.icIcon} alt="" src="/ic.svg" />
                            <div className={styles.linkAjou}>Link Ajou</div>
                        </div>
                    </NavLink>
                    <div className={styles.nav}>
                        <Link to="/grad1" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                            <div className={styles.menu}>
                                <img className={styles.iconarrowDown} alt="" src="/iconelement3.svg" />
                                <div className={styles.div}>나의 정보</div>
                            </div>
                        </Link>
                        <Link to="/grad2" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                            <div className={styles.menu}>
                                <img className={styles.iconarrowDown} alt="" src="/iconcard.svg" />
                                <div className={styles.div}>동문 데이터 분석</div>
                            </div>
                        </Link>
                        <Link to="/qa" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                            <div className={styles.menu2}>
                                <div className={styles.menu}>
                                    <img className={styles.iconarrowDown} alt="" src="/icontransactionminus.svg" />
                                    <b className={styles.qa1}>{`Q&A`}</b>
                                </div>
                            </div>
                        </Link>
                        <Link to="/grad3" style={{ textDecoration: "none", color: "var(--text-10)" }}>
                            <div className={styles.menu}>
                                <img className={styles.iconarrowDown} alt="" src="/iconactivity.svg" />
                                <div className={styles.div}>토큰 환전</div>
                            </div>
                        </Link>
                    </div>
                    <div className={styles.iconGroup}>
                        <img className={styles.icon} alt="" src="/icon.svg" />
                        <div className={styles.avatar} />
                        <div className={styles.adminA}>Admin A</div>
                        <img className={styles.iconarrowDown} alt="" src="/iconarrowdown.svg" />
                    </div>
                </div>
                <div className={styles.bodyWrapper}>
                    <div className={styles.body}>
                        <div className={styles.groupWrapper}>
                            <div className={styles.group}>
                                <div className={styles.titleWrapper}>
                                    <div className={styles.title}>게시판</div>
                                </div>
                                <div className={styles.group1}>
                                    <div className={styles.div3}>
                                        <b className={styles.b}>번호</b>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <b className={styles.b}>분류</b>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <b className={styles.b}>제목</b>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <b className={styles.b}>파일</b>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <b className={styles.b}>작성일</b>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <b className={styles.b}>작성자</b>
                                    </div>
                                    <div />
                                </div>
                                {boardList.map((v) => {
                                    return (
                                        // eslint-disable-next-line
                                        <Board
                                            id={v.BOARD_ID}
                                            title={v.BOARD_TITLE}
                                            registerId={v.REGISTER_ID}
                                            registerDate={v.REGISTER_DATE}
                                        />
                                    );
                                })}
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                                <div className={styles.group2}>
                                    <div className={styles.div3}>
                                        <div className={styles.b}>1</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Type</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Title</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>file.txt</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>2021/05.08</div>
                                    </div>
                                    <div className={styles.divide} />
                                    <div className={styles.div3}>
                                        <div className={styles.b}>Steven Yeon</div>
                                    </div>
                                    <div />
                                </div>
                            </div>
                        </div>
                        <div className={styles.areaBtn}>
                            <div className={styles.compBtnDefualt}>
                                <div className={styles.node}>
                                    <b className={styles.text} onClick={submitTest}>
                                        글 쓰기
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QA;
