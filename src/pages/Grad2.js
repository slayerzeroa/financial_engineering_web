import styles from "./Grad2.module.css";
import {NavLink, Link} from "react-router-dom";

const Grad2 = () => {
  return (
    <div className={styles.div}>
      <div className={styles.bodyWrapper}>
        <div className={styles.body}>
          <div className={styles.compInput}>
            <b className={styles.title}>진로 검색</b>
            <div className={styles.compDropdownC1}>
              <div className={styles.title1}>전공</div>
              <div className={styles.compDropdownDefault}>
                <div className={styles.contents}>
                  <div className={styles.text}>Null</div>
                  <img
                    className={styles.lcDropdownIcon}
                    alt=""
                    src="/lcdropdown2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.compDropdownC1}>
              <div className={styles.title1}>직무</div>
              <div className={styles.compDropdownDefault}>
                <div className={styles.contents}>
                  <div className={styles.text}>Null</div>
                  <img
                    className={styles.lcDropdownIcon}
                    alt=""
                    src="/lcdropdown2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.compInputDefualt}>
              <div className={styles.title3}>기업</div>
              <div className={styles.input}>
                <div className={styles.text2}>입력</div>
              </div>
            </div>
            <div className={styles.areaBtn}>
              <div className={styles.compBtnDefualt}>
                <div className={styles.node}>
                  <img className={styles.icIcon} alt="" src="/ic4.svg" />
                  <b className={styles.text3}>검색하기</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.compParent}>
            <div className={styles.comp}>
              <div className={styles.value}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-279.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-279.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-279.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-279.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-279.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-279.svg"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-279.svg"
                  />
                </div>
                <div className={styles.hParent}>
                  <div className={styles.h}>1H</div>
                  <div className={styles.h}>24H</div>
                  <div className={styles.h}>1W</div>
                  <div className={styles.m}>1M</div>
                  <div className={styles.h}>1Y</div>
                  <div className={styles.h}>ALL</div>
                </div>
                <div className={styles.jun8Parent}>
                  <div className={styles.h}>JUN 8</div>
                  <div className={styles.h}>JUN 15</div>
                  <div className={styles.h}>{`JUN 22 `}</div>
                  <div className={styles.h}>JUN 29</div>
                  <div className={styles.h}>{`JUL 6 `}</div>
                  <div className={styles.h}>JUL 13</div>
                </div>
                <div className={styles.valueChild} />
                <img className={styles.valueItem} alt="" src="/group-45.svg" />
                <div className={styles.rp11900204}>Rp 11,900,204</div>
                <div className={styles.currentValue}>Current Value</div>
              </div>
            </div>
            <div className={styles.comp1}>
              <b className={styles.text4}>
                통계 분석값을 Text로 넣을 수 있는 공간
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
      <NavLink to="/main" style={{ textDecoration: "none" }}>
        <div className={styles.logo}>
          <img className={styles.icIcon1} alt="" src="/ic.svg" />
          <div className={styles.linkAjou}>Link Ajou</div>
        </div>
      </NavLink>
        <div className={styles.nav}>
        <Link to="/grad1" style={{ textDecoration: "none", color: "var(--text-10)" }}>
          <div className={styles.menu}>
            <img className={styles.iconcard} alt="" src="/iconelement3.svg" />
            <div className={styles.div1}>나의 정보</div>
          </div>
        </Link>
        <Link to="/grad2" style={{ textDecoration: "none", color: "var(--text-10)" }}>
          <div className={styles.menu1}>
            <img className={styles.iconcard} alt="" src="/iconcard1.svg" />
            <div className={styles.div1}>동문 데이터 분석</div>
          </div>
        </Link>
        <Link to="/qa" style={{ textDecoration: "none", color: "var(--text-10)" }}>
          <div className={styles.menu2}>
            <div className={styles.menu}>
              <img
                className={styles.iconcard}
                alt=""
                src="/icontransactionminus1.svg"
              />
              <b className={styles.qa}>{`Q&A`}</b>
            </div>
          </div>
        </Link>
        <Link to="/grad3" style={{ textDecoration: "none", color: "var(--text-10)" }}>
          <div className={styles.menu}>
            <img className={styles.iconcard} alt="" src="/iconactivity.svg" />
            <div className={styles.div1}>토큰 환전</div>
          </div>
        </Link>
        </div>
        <div className={styles.iconParent}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.avatar} />
          <div className={styles.adminA}>Admin A</div>
          <img className={styles.iconcard} alt="" src="/iconarrowdown.svg" />
        </div>
      </div>
    </div>
  );
};

export default Grad2;
