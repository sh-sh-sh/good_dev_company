import {useState} from "react";

export default function Block({content, index, checkedFunc}) {
    const [checked, setChecked] = useState(false);
    return (
        <div className="block"
             style={{
                    border: "1px solid black",
                    color: checked ? "white" : "black",
                    background: checked ? "linear-gradient(0deg, #642E47, #2F3C57)" : "none",
                    borderRadius: 10,
                    margin: 5,
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: 'center',
                    aspectRatio: "1 / 1",
                    flex: "1 calc(25% - 12px)",
                    fontSizeAdjust: "auto",
                    fontSize: "calc(1vw)",
                    fontWeight: "bold",
                    cursor: "pointer",
                    overflow: "hidden",
                    wordBreak: "keep-all",
                }}
                onClick={() => {
                    setChecked(!checked)
                    checkedFunc(index, !checked)
                }}
        >
            {content}
        </div>
    )
}
