import "./FormSearch.css";

export default function FormSearch() {
    function onClickBtn() {
        var arr = document.getElementsByTagName("input");
        const title = arr[0].value;
        // document
        //     .querySelectorAll('input[type = "checkbox"]:checked')
        //     .forEach(cb => categories.push(cb.value));
        localStorage.setItem("title", title);
    }

    return (
        <div>
            <form className="FormSearch">
                <div>
                    <div className="a">
                        <h2> Title</h2>
                        <div className="b">
                            <div className="input">
                                <input type="text" name="" />
                            </div>
                            <div className="searchBut">
                                <button type="Search" onClick={onClickBtn}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tickSearch">
                    <h3>
                        Lifestyle:
                        <input
                            type="checkbox"
                            id="option-a"
                            value="Lifestyle"
                        />
                    </h3>
                    <h3>
                        Self help:
                        <input type="checkbox" id="option-b" value="Selfhelp" />
                    </h3>
                    <h3>
                        Novel:
                        <input type="checkbox" id="option-c" value="Novel" />
                    </h3>
                    <h3>
                        Sport:
                        <input type="checkbox" id="option-d" value="Sport" />
                    </h3>
                    <h3>
                        Sport:
                        <input type="checkbox" id="option-e" value="Sport" />
                    </h3>
                    <h3>
                        Sport:
                        <input type="checkbox" id="option-f" value="Sport" />
                    </h3>
                    <h3>
                        Sport:
                        <input type="checkbox" id="option-g" value="Sport" />
                    </h3>
                </div>
            </form>
        </div>
    );
}
