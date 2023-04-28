import Block from "./component/Block";
import {useState} from "react";

function App() {
    const [checked, setChecked] = useState(blockContents.map(() => false));
    const [bingo, setBingo] = useState({
        row: 0,
        col: 0,
        cross: 0,
    });
    const bingoCount = bingo.row + bingo.col + bingo.cross;
    function checkedFunc (index, check) {
        const newChecked = [...checked];
        newChecked[index] = check;
        setChecked(newChecked);
        checkBingo(newChecked, setBingo);
    }
  return (
    <div style={styles.container}>
        <h1>좋은 개발 회사 빙고</h1>
        <span style={styles.subText}>지극히 개인적인 의견입니다</span>
        {(bingoCount) ? (
            <span style={(bingoCount === 10) ? styles.bingoTextBig : styles.bingoText}>{bingoCount} BINGO!!!</span>
        ) : <></>}
        {(bingoCount === 10) ? (
            <span style={styles.bingoTextBig}>축하합니다!</span>
        ) : <></>}
      <div style={styles.bingo}>
          {blockContents.map((content, index) => (
              <Block content={content} index={index} checkedFunc={checkedFunc} />
          ))}
      </div>
    </div>
  );
}
function checkBingo(checked, setBingo) {
    let maxRow = 4;
    let rowSum = 0;
    let colSum = 0;
    let crossSum = 0;
    for (let i = 0; i < maxRow; i++) {
        let row = 0;
        let col = 0;
        for (let j = 0; j < maxRow; j++) {
            if (checked[i * maxRow + j]) {
                row++;
            }
            if (checked[j * maxRow + i]) {
                col++;
            }
        }
        if (row === maxRow) {
            rowSum++;
        }
        if (col === maxRow) {
            colSum++;
        }
    }
    if (checked[0] && checked[5] && checked[10] && checked[15]) {
        crossSum++;
    }
    if (checked[3] && checked[6] && checked[9] && checked[12]) {
        crossSum++;
    }
    setBingo({
        row: rowSum,
        col: colSum,
        cross: crossSum,
    })
}

const styles = {
    container: {
        background: 'linear-gradient(90deg, #ffdaf1, #d4e2ff)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
    },
    bingo : {
        display: 'flex',
        flexWrap: 'wrap',
        height: '80vw',
        maxHeight: '80vh',
        border: "1px solid black",
        borderRadius: 10,
        padding: 10,
        aspectRatio: "1 / 1",
    },
    subText: {
        marginBottom: 10
    },
    bingoText: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    bingoTextBig: {
        fontWeight: 'bold',
        fontSize: 'calc(10vw)',
        color: 'red',
        marginBottom: 10
    }
}

const blockContents = [
    '코드 리뷰를 한다',
    '개발 컨퍼런스/세미나를 연다',
    '근무일에 개발 행사에 보내준다',
    '개발 강의/도서를 사준다',
    '개발 스터디가 있다',
    '브랜치 관리를 한다',
    '버전 관리를 한다',
    '프론트와 백 개발자가 나뉘어 있다',
    '허먼밀러 의자다',
    '기획자, 디자이너가 따로 있다',
    '같은 분야의 시니어 개발자가 있다',
    '커피머신/에너지드링크가 있다',
    '개발자가 고객과 직접 소통하지 않는다',
    '배포/테스트 자동화가 되어있다',
    '같은 팀에 같은 분야의 개발자가 3명 이상이다',
    'api 문서화가 되어있다',
]

export default App;
